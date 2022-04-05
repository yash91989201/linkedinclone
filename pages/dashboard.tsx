import { useState } from 'react'
import { useSession } from 'next-auth/react'
import type { NextPage } from 'next'
// import custom components
import PostModal from '../components/Dashboard/PostModal'
import Header from '../components/Dashboard/Header'
import Sidebar from '../components/Dashboard/Sidebar'
import Feed from "../components/Dashboard/Feed"
import News from '../components/Dashboard/News'
import { useTheme } from 'next-themes'

const dashboard: NextPage = () => {
  const {theme,setTheme}=useTheme()
  const [postModal, setPostModal] = useState(false);
  const { status } = useSession()
  if (status === "authenticated")
    return (
      <div className={`min-h-screen  bg-dashboardBg dark:bg-primaryBgDark relative ${postModal ? "h-screen overflow-hidden" : ""}`}>
        <PostModal postModal={postModal} setPostModal={setPostModal} />
        <Header />
        {/* main section */}
        <div className="
            py-6 px-2 space-y-4 
            max-w-4xl  mx-auto flex flex-col items-center
            md:flex-row  md:items-start md:space-y-0 md:space-x-3
            md:max-w-6xl 
            bg-dashboardBg dark:bg-primaryBgDark"  >
          <Sidebar />
          <Feed setPostModal={setPostModal} />
          <News />
        </div>
      </div>
    )
  else if (typeof window !== "undefined" && status === "unauthenticated")
    window.location.replace(`${window.location.origin}/`)
  return null
}

export default dashboard