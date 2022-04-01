import type { NextPage } from 'next'
import { Dispatch } from 'react';
import {SetStateAction} from 'react'
// import icons
import {ImCross} from "react-icons/im"

type PostModalType={
    postModal:boolean;
    setPostModal:Dispatch<SetStateAction<boolean>>
}

const PostModal:NextPage<PostModalType> = ({postModal,setPostModal}:PostModalType) => {
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
                    src="https://media-exp1.licdn.com/dms/image/D5635AQGZJZtiOZj--Q/profile-framedphoto-shrink_100_100/0/1645788063067?e=1648868400&v=beta&t=tUAaNccGSUf63bpD889BNM8_1MvMHCmKzFBm2C3vFEo" 
                    alt=""
                    className="w-12 h-12 rounded-full"
                />
                <p className="px-4">Yashraj Jaiswal</p>
            </div>
            <form className="px-4 w-full flex flex-col items-center">
                <textarea 
                name="" id="" 
                cols={24} rows={5} 
                placeholder="What do you want to talk about ?"
                className='w-full p-2 focus:outline-none resize-none placeholder:text-gray-500'
                />
                <div className="m-2  w-full flex flex-col space-y-2  sm:flex-row">
                    <input 
                    type="text" name="" id="" placeholder="Add a photo (optional)" 
                    className="flex-1 p-2  placeholder:text-gray-500 focus:outline-none" />
                    <button type="submit" className="py-2 sm:px-5 sm:py-2  rounded-full text-md text-gray-500 font-semibold bg-gray-200  hover:bg-blue-600 hover:text-white">Post</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default PostModal