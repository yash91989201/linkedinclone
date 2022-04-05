import type { NextPage } from "next"
import { useSession } from "next-auth/react"
// importing icons
import {AiOutlinePlus} from "react-icons/ai"
import {BsFillBookmarkFill} from "react-icons/bs"


const Sidebar:NextPage = () => {
    const {data}=useSession()
  return (
    //   sidebar wrapper
   <div className="w-full md:w-56" style={{position:"sticky"}}>
   {/* profile card */}
    <div className="w-full bg-white  dark:bg-dashboardBgDark rounded-lg overflow-hidden">
        {/* banner image */}
        <div className="w-full h-14 bg-gray-400 ">
          <img className="w-full  h-full object-cover"  src="https://media-exp1.licdn.com/dms/image/C5616AQFlmKhPLrNkSg/profile-displaybackgroundimage-shrink_200_800/0/1648532052128?e=1654128000&v=beta&t=HVEHIRjnz3WiDzYwMMDVqlfuPB4qvsFCm4pO1r5guj0" alt="" /> 
        </div>
        <div>
            {/* user details */}
            <div className="py-4 flex flex-col items-center text-center">
                {/* user image */}
                <img src={`https://avatars.dicebear.com/api/adventurer-neutral/${data?.userName}.svg` }
                alt=""
                className="mb-4 -mt-10 w-14 h-14 rounded-full border-white border-2 "
                />  
                {/* user name */}
                <h2 className="" >{data?.userName as any}</h2>
                {/* user bio */}
                <h4 className="w-[90%] text-xs text-gray-500">Web Developer | Full Stack Developer | MERN Stack | RIMS Rourkela (BCA)</h4>
            </div>
            {/* profile statistics */}
            <div className="py-4 text-xs font-semibold  border-t">
                <p className="px-4 flex justify-between hover:bg-primaryBg py-1 cursor-pointer dark:hover:text-black" >Who viewed your profile <span className="mr-0 text-blue-600">72</span></p>
                <p className="px-4 flex justify-between hover:bg-primaryBg py-1 cursor-pointer dark:hover:text-black" >Views of your post <span className="mr-0 text-blue-600">160</span></p>
            </div>
            {/* linkedin premium */}
            <div className="p-4 text-xs border-t hover:bg-primaryBg cursor-pointer dark:hover:text-black">
                <p>Access exclusive tools an insights</p>
                <p>Try premium for free</p>
            </div>
            {/* my items */}
            <div className="p-4 text-xs border-t hover:bg-primaryBg cursor-pointer dark:hover:text-black">
                <p><BsFillBookmarkFill style={{display:"inline"}} />  My items</p>
            </div>
        </div>
    </div>
    <div className="my-4 w-full hidden md:block  bg-white  dark:bg-dashboardBgDark  rounded-lg">
    <p className="px-4 py-1 text-blue-600 font-semibold hover:bg-primaryBg cursor-pointer">Groups</p>
    <p className="px-4 py-1 flex justify-between items-center text-blue-600 font-semibold hover:bg-primaryBg cursor-pointer">Events <AiOutlinePlus className="text-gray-700"/> </p>
    <p className="px-4 py-1 text-blue-600 font-semibold hover:bg-primaryBg cursor-pointer">Followed Hashtags</p>
    <p className="p-5 text-gray-500 font-semibold text-center hover:bg-primaryBg cursor-pointer">Discover More</p>
    </div>
   </div>
  )
}

export default Sidebar