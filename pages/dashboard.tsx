import { useState } from 'react'
import type { NextPage } from 'next'
// import Link from 'next/link'
// import custom components
import PostModal from '../components/Dashboard/PostModal'
import Header from '../components/Dashboard/Header'
import Sidebar from '../components/Dashboard/Sidebar'
import Feed from "../components/Dashboard/Feed"
import News from '../components/Dashboard/News'


const dashboard:NextPage = () => {
  const [postModal,setPostModal]=useState(false);
  return (
    <div className={`bg-dashboardBg relative ${postModal?"h-screen overflow-hidden":""}`}>
      <PostModal postModal={postModal} setPostModal={setPostModal} />
    <Header />
    {/* main section */}
    <div className="
    py-8 px-2 space-y-4 
    max-w-4xl  mx-auto flex flex-col items-center
    md:flex-row  md:items-start md:space-y-0 md:space-x-3
    md:max-w-6xl 
    bg-dashboardBg"  >
    <Sidebar/>
    <Feed setPostModal={setPostModal}/>
    <News/>
    </div>
    </div>
  )
}

export default dashboard

// py-8 px-2 space-x-2  
// w-full  
// flex flex-col    
// bg-dashboardBg