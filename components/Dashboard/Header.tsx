import type { NextPage } from 'next'
// import icons
import {FaHome} from "react-icons/fa"
import {IoMdPeople,IoMdSunny,IoIosMoon} from "react-icons/io"
import {BsFillBriefcaseFill} from "react-icons/bs"
import {MdMessage,MdNotifications} from "react-icons/md"
import {CgMenuGridR} from "react-icons/cg"  
import {GiMagnifyingGlass} from "react-icons/gi"

import LinkedInLogo from "../../public/assets/linkedin_icon.svg"

const Header:NextPage = () => {
  return (
   <div className="w-full bg-white">
    <style>{`
     .checkbox {
      opacity: 0;
      position: absolute;
    }
    
    .label {
      background-color: #4a5562;
      border-radius: 50px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      height: 15px;
      width: 30px;
      transform: scale(1.5);
    }
    
    .label .ball {
      background-color: #f3f2ef;
      border-radius: 50%;
      position: absolute;
      height: 15px;
      width: 15px;
      transform: translateX(0px);
      transition: transform 0.2s linear;
    }
    
    .checkbox:checked + .label .ball {
      transform: translateX(15px);
    }
    }
    `}</style>
    <div className="mx-auto max-w-6xl flex items-center justify-between">
      {/* linked in logo */}
      <div>
        <LinkedInLogo/>
      </div>
      {/* search bar */}
      <div className="relative hidden px-2 lg:flex  flex-1">
        <GiMagnifyingGlass style={{position:"absolute",left:"14px",top:"10px",fontSize:"18px"}}/>
        <input className="bg-searchBoxBg py-1.5 pl-10 w-1/2  rounded-sm focus:border-none"  type="text" name="" id="" placeholder='Search' />
      </div>
      {/* user action buttons */}
      <div className="space-x-3 md:space-x-6 p-2 flex items-center text-gray-600 text-lg">
        <p className="flex flex-col  items-center cursor-pointer"> <FaHome/>  <span className="hidden md:inline text-sm">Home</span> </p>
        <p className="flex flex-col  items-center cursor-pointer"> <IoMdPeople/> <span className="hidden md:inline text-sm">My Network</span>  </p>
        <p className="hidden md:flex md:flex-col  items-center cursor-pointer"> <BsFillBriefcaseFill/>  <span className="text-sm">My Jobs</span> </p>
        <p className="flex flex-col  items-center cursor-pointer"> <MdMessage/>   <span className="hidden md:inline text-sm">Messaging</span>  </p>
        <p className="flex flex-col  items-center cursor-pointer"> <MdNotifications/>  <span className="hidden md:inline text-sm">Notification</span> </p>
        <p className="hidden md:flex md:flex-col  items-center cursor-pointer"> 
        <img className="w-5 h-5 rounded-full bg-gray-400"  src="https://media-exp1.licdn.com/dms/image/D5635AQGZJZtiOZj--Q/profile-framedphoto-shrink_100_100/0/1645788063067?e=1648868400&v=beta&t=tUAaNccGSUf63bpD889BNM8_1MvMHCmKzFBm2C3vFEo" alt="" /> 
        <span className="text-sm">Me</span>  </p>
        <p className="hidden md:flex md:flex-col  items-center cursor-pointer"> <CgMenuGridR/>  <span className="hidden md:inline text-sm">Work</span> </p>
        <div className="relative pr-3 cursor-pointer">
          <input type="checkbox" className="checkbox" id="chk" />
          <label className="label" htmlFor="chk">
            <IoMdSunny style={{paddingLeft:"2px",fontSize:"12px",color:"#f1c40f"}} />
            <IoIosMoon style={{paddingRight:"2px",fontSize:"12px",color:"#f1c40f"}} />
            {/* <i className="fas fa-moon"></i>
            <i className="fas fa-sun"></i> */}
            <div className="ball"></div>
          </label>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Header