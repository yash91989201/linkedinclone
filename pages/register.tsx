import { useState } from 'react'
import type { NextPage } from 'next'
// importing icons
import  LinkedInIconWithText from "../public/assets/logo_with_text.svg"
import Link from 'next/link'

const register:NextPage = () => {
    const [showPassword,setShowPassword]=useState(false)
  return (
    <div className="h-screen flex flex-col items-center">
        {/* linkedin logo */}
        <div className="py-6">
            <LinkedInIconWithText />
        </div>
        {/* text  */}
        <p className="py-8 text-gray-600" style={{fontSize:"18px"}}>
            Join LinkedIn now &minus; it's free!
        </p>
        <form className='px-3 flex flex-col max-w-md w-full  text-gray-500'>
            <label 
                htmlFor="emailOrNumber">
                Email or phone number
            </label>
            <input 
                type="text" 
                name="emailOrNumber" 
                className="border border-gray-600 p-2 my-2 rounded-md outline-offset-2"
            />
            <label 
                htmlFor="name">
                    Your Name
            </label>
            <input 
                type="text" 
                name="name" 
                className="border border-gray-600 p-2 my-2 rounded-md outline-offset-2"  
            />
            <div 
            className="relative flex flex-col">
                <label 
                    htmlFor="password">
                        Password (6 or more characters)
                </label>
                <input 
                type={showPassword?"text":"password"} 
                name="password" 
                className="border border-gray-600 p-2 my-2 rounded-md outline-offset-2" />
                    <span 
                    className="absolute px-2 bottom-[15px] right-0 z-10 cursor-pointer hover:underline"
                    onClick={()=>setShowPassword(!showPassword)}>
                        Show
                    </span>
           </div>
            <button 
                type="submit"
                className="my-6 py-3 w-full rounded-full    bg-blue-700 text-white font-semibold"
            >
                Continue
            </button>
        </form>
        {/* link to sign in */}
        <p className="py-16">
            Already on LinkedIn? 
            <Link href="/signin"> 
            <a className="text-blue-600 font-semibold  hover:underline cursor-pointer">Sign In</a>
            </Link>
        </p>
    </div>
  )
}

export default register