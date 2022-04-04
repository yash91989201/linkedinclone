import type { NextPage } from 'next'
import Link from 'next/link'
// importing icons
import {FaCompass} from "react-icons/fa"
import {BsFillPeopleFill} from  "react-icons/bs"
import {CgNotes } from "react-icons/cg"
import {BsBriefcaseFill} from "react-icons/bs"
import  LinkedInIconWithText from "../../public/assets/logo_with_text.svg"

const Header:NextPage = () => {
  return (
    //   Home page header 
    <div className="py-5 px-3 max-w-6xl mx-auto flex  items-center">
        {/* logo wrapper */}
        <div style={{flex:1}}>
          <LinkedInIconWithText  />
        </div>
        {/* icon-btn group wrapper */}
        <div className="mx-6 hidden  sm:flex text-gray-600 ">
          <p className="flex flex-col items-center mx-2"> <FaCompass className="text-lg" /> Discover </p>
          <p className="flex flex-col items-center mx-2"> <BsFillPeopleFill className="text-lg" /> People </p>
          <p className="flex flex-col items-center mx-2"> <CgNotes className="text-lg" /> Learning </p>
          <p className="flex flex-col items-center mx-2"> <BsBriefcaseFill className="text-lg" /> Learning </p>
        </div>
        {/* signup button */}
       <Link href="/api/auth/signin">
        <a className="
          px-5 py-2  border-blue-500 border rounded-full  text-blue-600 font-bold cursor-pointer
          hover:bg-blue-300/25
          ">Sign in</a>
       </Link>
    </div>
  )
}

export default Header