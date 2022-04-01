import type { NextPage } from "next"
// importing icons
import {AiOutlinePlus} from "react-icons/ai"
import {BsFillBookmarkFill} from "react-icons/bs"


const Sidebar:NextPage = () => {
  return (
    //   sidebar wrapper
   <div className="w-full md:w-56" style={{position:"sticky"}}>
   {/* profile card */}
    <div className="w-full bg-white rounded-lg overflow-hidden">
        {/* banner image */}
        <div className="w-full h-14 bg-gray-400 ">
          <img className="w-full  h-full object-cover"  src="https://media-exp1.licdn.com/dms/image/C5616AQFlmKhPLrNkSg/profile-displaybackgroundimage-shrink_200_800/0/1648532052128?e=1654128000&v=beta&t=HVEHIRjnz3WiDzYwMMDVqlfuPB4qvsFCm4pO1r5guj0" alt="" /> 
        </div>
        <div>
            {/* user details */}
            <div className="py-4 flex flex-col items-center text-center">
                {/* user image */}
                <img src="https://media-exp1.licdn.com/dms/image/D5635AQGZJZtiOZj--Q/profile-framedphoto-shrink_100_100/0/1645788063067?e=1648868400&v=beta&t=tUAaNccGSUf63bpD889BNM8_1MvMHCmKzFBm2C3vFEo" 
                alt=""
                className="mb-4 -mt-12 w-14 h-14 rounded-full border-white border-2 "
                />
                {/* user name */}
                <h2 className="" >Yashraj Jaiswal</h2>
                {/* user bio */}
                <h4 className="w-[90%] text-xs text-gray-500">Web Developer | Full Stack Developer | MERN Stack | RIMS Rourkela (BCA)</h4>
            </div>
            {/* profile statistics */}
            <div className="py-4 text-xs font-semibold  border-t">
                <p className="px-4 flex justify-between hover:bg-primaryBg py-1 cursor-pointer" >Who viewed your profile <span className="mr-0 text-blue-600">72</span></p>
                <p className="px-4 flex justify-between hover:bg-primaryBg py-1 cursor-pointer" >Views of your post <span className="mr-0 text-blue-600">160</span></p>
            </div>
            {/* linkedin premium */}
            <div className="p-4 text-xs border-t hover:bg-primaryBg cursor-pointer">
                <p>Access exclusive tools an insights</p>
                <p>Try premium for free</p>
            </div>
            {/* my items */}
            <div className="p-4 text-xs border-t hover:bg-primaryBg cursor-pointer">
                <p><BsFillBookmarkFill style={{display:"inline"}} />  My items</p>
            </div>
        </div>
    </div>
    <div className="my-4 w-full hidden md:block  bg-white rounded-lg">
    <p className="px-4 py-1 text-blue-600 font-semibold hover:bg-primaryBg cursor-pointer">Groups</p>
    <p className="px-4 py-1 flex justify-between items-center text-blue-600 font-semibold hover:bg-primaryBg cursor-pointer">Events <AiOutlinePlus className="text-gray-700"/> </p>
    <p className="px-4 py-1 text-blue-600 font-semibold hover:bg-primaryBg cursor-pointer">Followed Hashtags</p>
    <p className="p-5 text-gray-500 font-semibold text-center hover:bg-primaryBg cursor-pointer">Discover More</p>
    </div>
   </div>
  )
}

export default Sidebar