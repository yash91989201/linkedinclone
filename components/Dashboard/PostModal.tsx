import { FormEvent } from "react";
import {useState} from "react"
import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { Dispatch } from 'react';
import {SetStateAction} from 'react'
// import icons
import {ImCross} from "react-icons/im"

type PostModalType={
    postModal:boolean;
    setPostModal:Dispatch<SetStateAction<boolean>>
}



const PostModal:NextPage<PostModalType> = ({postModal,setPostModal}:PostModalType) => {
    const {data}=useSession();
    const [postData,setPostData]=useState({
        message:"",
        imageURL:""
    })
    const onFormChange=(e:any)=>{
        setPostData((prevValue)=>{
            return {
                ...prevValue,
                [e.target.name]:e.target.value
            }
        })
    }
    const onSubmitHandler=(e:FormEvent<HTMLFormElement>)=>{
       
        e.preventDefault()
        fetch("/api/posts/",{
            method:"POST",
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                userId:data?.id,
                userName:data?.userName,
                userEmail:data?.user?.email,
                message:postData.message,
                imageURL:postData.imageURL})
        })
        .then(res=>res.json())
        .then(postAction=>{
            if(postAction.status)
               { 
                setPostData({
                  
                    message:"",
                    imageURL:""
                })
                window.location.reload()
                }
        })
        .catch(err=>alert(err))
    }
    return (
    //   modal overlay
    <div 
        className={`absolute w-screen h-screen bg-black/70 z-10 ${postModal?"flex justify-center items-center":"hidden"}`}>
        <div className='mx-3 bg-white rounded-xl overflow-hidden' style={{width:"min(640px,100%)"}}>
            <p className='py-3 px-6   w-full flex justify-between items-center'>
                <span className="text-xl">Create a post</span>
                <span 
                    className='p-3 rounded-full cursor-pointer text-gray-500 hover:bg-gray-500/25'
                    onClick={()=>setPostModal(false)}
                >
                <ImCross />
                </span>
            </p>
            {/* user details */}
            <div className="py-4 px-5 flex justify-start items-center ">
                <img 
                   src={`https://avatars.dicebear.com/api/adventurer-neutral/${data?.userName}.svg`}
                    alt=""
                    className="w-12 h-12 rounded-full"
                />
                <p className="px-4">{data?.userName as any}</p>
            </div>
            <form 
                className="px-4 w-full flex flex-col items-center"
                onSubmit={(e)=>onSubmitHandler(e)}
            >
                <textarea 
                name="message" id="" 
                cols={24} rows={5} 
                placeholder="What do you want to talk about ?"
                className='w-full p-2 focus:outline-none resize-none placeholder:text-gray-500'
                value={postData.message}
                onChange={(e)=>onFormChange(e)}
                />
                <div className="m-2  w-full flex flex-col space-y-2  sm:flex-row">
                    <input 
                    type="text" name="imageURL" id="" placeholder="Add a photo (optional)" 
                    className="flex-1 p-2  placeholder:text-gray-500 focus:outline-none" 
                    value={postData.imageURL}
                    onChange={(e)=>onFormChange(e)}
                    />
                    <button type="submit" className="py-2 sm:px-5 sm:py-2  rounded-full text-md text-gray-500 font-semibold bg-gray-200  hover:bg-blue-600 hover:text-white">Post</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default PostModal