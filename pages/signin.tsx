import { useState } from 'react'
import type { NextPage } from 'next'
// importing icons
import  LinkedInIconWithText from "../public/assets/logo_with_text.svg"
import Link from 'next/link'

const signin:NextPage = () => {
    const [showPassword,setShowPassword]=useState(false)
    return (
    <>
        {/* linkedin logo */}
        <div className="p-6 px-16">
        <LinkedInIconWithText />
        </div>
        <div className="h-screen flex flex-col items-center">
            <form className='p-4 pb-12 px-5 flex flex-col  max-w-sm  w-[90%] sm:w-full  text-gray-500 rounded-lg overflow-hidden'
            style={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
            }}
            >
                <h3 className="text-2xl text-black pt-4 pb-1" >SignIn</h3>
                <p className="text-sm pb-4 text-gray-600">Stay updated on your professional world</p>
            
                <input 
                    type="text" 
                    name="emailOrNumber" 
                    className="border border-gray-600 p-3 my-2 rounded-md outline-offset-2"
                    placeholder="Email or Phone"
                />
                <div 
                className="relative flex flex-col">
                    <input 
                    type={showPassword?"text":"password"} 
                    name="password" 
                    className="border border-gray-600 p-3 my-2 rounded-md outline-offset-2" 
                    placeholder="Password"
                    />
                        <span 
                        className="absolute px-2 bottom-[22px] right-0 z-10 cursor-pointer hover:underline"
                        onClick={()=>setShowPassword(!showPassword)}>
                            Show
                        </span>
            </div>
                        <p className="py-2 text-blue-600 font-semibold">Forgot Password?</p>
                <button 
                    type="submit"
                    className="my-6 mb-16 py-3 w-full rounded-full    bg-blue-700 text-white font-semibold"
                >
                    Continue
                </button>
            </form>
            {/* link to sign in */}
            <p className="py-16">
                New to LinkedIn? 
                <Link href="/register"> 
                <a className="text-blue-600 font-semibold  hover:underline cursor-pointer">Join now</a>
                </Link>
            </p>
        </div>
    </>
  )
}

export default signin