import { Dispatch } from 'react';
import {SetStateAction} from 'react'
import type { NextPage } from "next"
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

const Feed:NextPage<FeedProps> = ({setPostModal}:FeedProps) => {
  return (
    <main className="w-full mx-auto  lg:w-[560px] flex-1">
    {/* add new post */}
    <div className="w-full p-4 mb-4  pb-0 flex flex-col rounded-lg border-2 overflow-hidden bg-white">
      <div  className="w-full flex justify-between  md:justify-evenly text-gray-600" >
      {/* user image */}
      <img src="https://media-exp1.licdn.com/dms/image/D5635AQGZJZtiOZj--Q/profile-framedphoto-shrink_100_100/0/1645788063067?e=1648868400&v=beta&t=tUAaNccGSUf63bpD889BNM8_1MvMHCmKzFBm2C3vFEo" 
      alt="" 
      className="w-12 h-12 rounded-full"
      />
       <div className="w-[85%] py-3 px-4 rounded-full border-2 bg-white hover:bg-dashboardBg cursor-pointer" onClick={()=>setPostModal(true)} >Start a post</div>
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
    <div className="space-y-3 my-1  w-full" >
      <article className="w-full py-4 pb-0 flex flex-col justify-between overflow-hidden bg-white rounded-lg">
        {/* user details and user action */}
        <div  className="px-4 flex justify-between items-center"   >
            {/* user image */}
            <img 
              src="https://media-exp1.licdn.com/dms/image/D5635AQGZJZtiOZj--Q/profile-framedphoto-shrink_100_100/0/1645788063067?e=1648868400&v=beta&t=tUAaNccGSUf63bpD889BNM8_1MvMHCmKzFBm2C3vFEo" 
              alt="" 
              className="w-12 h-12 rounded-full"
            />
            {/* user details */}
            <div  className="flex-1 px-3 space-y-1  flex flex-col">
              {/* username */}
              <p className="text-md" >Yashraj Jaiswal</p>
              {/* user email */}
              <p className="text-sm text-gray-500" >yashraj@gmail.com</p>
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
          <p className="px-4 py-5">This is my first post in linked in clone</p>
          {/* user post image */}
          <img  className="w-full"   src="https://media-exp1.licdn.com/dms/image/C4D22AQEm0ugslhJyeA/feedshare-shrink_800/0/1648700835239?e=1651708800&v=beta&t=Y4XoY4zFm2XoaixIdAGbmLvHLdLnf26yFKwATE_YFa8" alt="" />
        </div>
        {/* user post action */}
        <hr className="mt-3 w-[95%] mx-auto border-gray-300 border"/>
        <div className="flex justify-evenly py-3"   >
          <Link href="/">
            <a className="flex flex-col items-center px-6 py-2 hover:bg-gray-200 rounded-md w-5/12"> <AiOutlineLike/> <span>Like</span> </a>
          </Link>
          <Link href="/">
            <a className="flex flex-col items-center px-6 py-2 hover:bg-gray-200 rounded-md  w-5/12"> <FaTrash/>  <span>Delete Post</span></a>
          </Link>
        </div>
      </article> 
    </div>
    </main>
  )
}

export default Feed