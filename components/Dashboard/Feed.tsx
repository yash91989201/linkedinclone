import { useEffect,useState } from 'react';
import { Dispatch } from 'react';
import {SetStateAction} from 'react'
import type { NextPage } from "next"
import { useSession } from 'next-auth/react';
import Link from "next/link"
// importing icons
import {MdPhotoSizeSelectActual} from "react-icons/md"
import {FaVideo} from "react-icons/fa"
import {BsCalendarEventFill,BsNewspaper} from "react-icons/bs"
import {AiOutlineLike} from "react-icons/ai"
import {FaTrash} from "react-icons/fa"
import {HiOutlineDotsHorizontal} from "react-icons/hi"

type FeedProps={
  setPostModal:Dispatch<SetStateAction<boolean>>
}

const likePostHandler=(id:string)=>{
  fetch(`/api/posts/${id}/likepost`)
  .then(res=>res.json())
  .then(action=>{
    if(action.status)window.location.reload()
  })
  .catch()
}

const deletePostHandler=(id:string)=>{
  fetch(`/api/posts/${id}/deletepost`)
  .then(res=>res.json())
  .then(action=>{
    if(action.status)window.location.reload()
  })
  .catch()
}

const Feed:NextPage<FeedProps> = ({setPostModal}:FeedProps) => {
  const {data}=useSession()
  const [postData,setPostData]=useState<any[]>([])
  const [error,setError]=useState()

  useEffect(()=>{
    fetch("/api/posts/",{
      method:"GET"
    })
    .then(res=>res.json())
    .then(data=>setPostData(data.data))
    .catch(err=>setError(err))
  },[])

  return (
    <main className="w-full mx-auto  lg:w-[560px] flex-1">
    {/* add new post */}
    <div className="w-full p-4 px-2 sm:py-4 mb-4  pb-0 flex flex-col rounded-lg border-2 dark:border-black overflow-hidden bg-white dark:bg-dashboardBgDark">
      <div  className="w-full flex justify-around md:justify-evenly text-gray-600" >
      {/* user image */}
      <img  src={`https://avatars.dicebear.com/api/adventurer-neutral/${data?.userName}.svg`}
      alt="" 
      className="w-12 h-12 rounded-full"
      />
       <div className="w-[75%] sm:w-[85%]  py-3 px-2 sm:px-4 rounded-full border-2 bg-white dark:bg-primaryBgDark hover:bg-primaryBg cursor-pointer" onClick={()=>setPostModal(true)} >Start a post</div>
      </div>
      {/* post content list */}
      <div className="pt-1 pb-1 flex flex-wrap justify-between md:justify-evenly ld:justify-between">
        <p className="p-2 rounded-sm space-x-2 flex justify-between items-center cursor-pointer hover:bg-primaryBg"> <MdPhotoSizeSelectActual style={{color:"#70b5f9"}}/>  <span>Photo</span></p>
        <p className="p-2 rounded-sm space-x-2 flex justify-between items-center cursor-pointer hover:bg-primaryBg"> <FaVideo style={{color:"#7fc15e"}}/> <span>Video</span></p>
        <p className="p-2 rounded-sm space-x-2 flex justify-between items-center cursor-pointer hover:bg-primaryBg"> <BsCalendarEventFill style={{color:"#e7a33e"}}/> <span>Event</span></p>
        <p className="p-2 rounded-sm space-x-2 flex justify-between items-center cursor-pointer hover:bg-primaryBg"> <BsNewspaper style={{color:"#fc9295"}}/> <span>Write Article</span></p>
      </div>
    </div>
    {/* horizontal divider */}
    <hr className="m-4 w-full mx-auto border-gray-300 border"/>
    {/* all posts */}
    <div className="space-y-3 my-1 w-full" >
      {
        postData.length ==0 ?
         <div className="w-full p-8 flex rounded-lg  bg-white dark:bg-dashboardBgDark overflow-hidden">
           <p>No Posts to view</p>
         </div>
         :
         postData?.map(post=>(
          <article key={post._id}
          className="w-full py-4 pb-0 flex flex-col justify-between overflow-hidden bg-white dark:bg-dashboardBgDark rounded-lg">
        {/* user details and user action */}
        <div  className="px-4 flex justify-between items-center">
            {/* user image */}
            <img 
              src={`https://avatars.dicebear.com/api/adventurer-neutral/${post.userName}.svg`}
              alt="" 
              className="w-12 h-12 rounded-full"
            />
            {/* user details */}
            <div  className="flex-1 px-3 space-y-1  flex flex-col">
              {/* username */}
              <p className="text-md" >{post.userName}</p>
              {/* user email */}
              <p className="text-sm text-gray-500" >{post.userEmail}</p>
              {/* post delay */}
              <p className="text-xs text-gray-500" >3 minutes ago</p>
            </div>
            <div>
              <HiOutlineDotsHorizontal className="text-gray-600 text-xl"/>
            </div>
        </div>
        {/* user post content */}
        <div className="">
          {/* user post text */}
          <p className="px-4 py-5">{post.message}</p>
          {/* user post image */}
          <img  className="w-full object-contain " src={post.imageURL} alt="" />
        </div>
        {/* user post action */}
        <hr className="mt-2 w-[95%] mx-auto border-gray-300 border"/>
        <p className="py-0.5 px-4 text-gray-600">{post.likes} likes</p>
        <div className="flex justify-evenly py-2"   >
          <Link href="/dashboard">
            <a 
            onClick={()=>likePostHandler(post._id)}  
            className="flex flex-col items-center px-6 py-2 hover:bg-gray-200 rounded-md w-1/2 sm:w-5/12"> <AiOutlineLike/> <span>Like</span> </a>
          </Link>
          <Link href="" >
            <a  
            onClick={()=>deletePostHandler(post._id)}
            className="flex flex-col items-center px-6 py-2 hover:bg-gray-200 rounded-md w-1/2  sm:w-5/12"> <FaTrash/>  <span>Delete Post</span></a>
          </Link>
        </div>
      </article> 
        ))
      }
    </div>
    </main>
  )
}

export default Feed
