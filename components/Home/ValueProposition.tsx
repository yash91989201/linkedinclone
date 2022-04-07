import type { NextPage } from 'next'
import Link from 'next/link'
// importing icons
import {MdArrowForwardIos} from "react-icons/md"
import  LandingImage from "../../public/assets/landing_image.svg"


const ValueProposition:NextPage = () => {
  return (
    <div className="flex flex-col items-center   md:flex-row md:items-center md:justify-evenly" 
        style={{
            height:"calc(100vh - 88px)"
        }}
    >   
        {/* text content */}
        <div className="space-y-2 py-4 flex flex-col justify-center sm:px-8">
            {/* value proposition text  */}
            <h2 className="max-w-sm py-3 px-1 font-semibold sm:px-0 text-amber-700 dark:text-amber-400 " 
                style={{
                    fontSize:"clamp(24px,6vw,2.25rem)"
                }}
                >Welcome to your professional community</h2>
            {/* links */}
           <div className="space-y-2" style={{width:"min(400px,100%)"}} >
           {
                ["Search for a job","Find a person you know","Learn a new skill"].map((item,index)=>(
                    <Link key={`${index}${item}`}  href="/">
                        <a className=" px-2 py-4 rounded-md w-full flex justify-between  bg-primaryBg dark:bg-dashboardBgDark text-black dark:text-white">
                            <span>{item}</span> 
                            <MdArrowForwardIos/>    
                        </a>
                    </Link>
                ))
            }
           </div>
        </div>
        {/* image warpper */}
            <LandingImage className="mx-2" style={{width:"min(640px,100%)"}} />
    </div>
  )
}

export default ValueProposition