import { useState } from 'react'
import { useSession } from 'next-auth/react'
import type { NextPage } from 'next'
// import custom components
import PostModal from '../components/Dashboard/PostModal'
import Header from '../components/Dashboard/Header'
import Sidebar from '../components/Dashboard/Sidebar'
import Feed from "../components/Dashboard/Feed"
import News from '../components/Dashboard/News'
import LoadingAnimation from '../components/Shared/LoadingAnimation'

const dashboard:NextPage = () => {
  const [postModal,setPostModal]=useState(false);
  const {status}=useSession()
  if(status==="loading")
    return <LoadingAnimation/>
  if(status==="authenticated")
  return (
    <div className={`min-h-screen  bg-dashboardBg relative ${postModal?"h-screen overflow-hidden":""}`}>
      <PostModal postModal={postModal} setPostModal={setPostModal} />
    <Header />
    {/* main section */}
    <div className="
    py-6 px-2 space-y-4 
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
  window.location.replace(`${window.location.origin}/`)
  return null
}

export default dashboard

// py-8 px-2 space-x-2  
// w-full  
// flex flex-col    
// bg-dashboardBg