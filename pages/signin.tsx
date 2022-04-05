import { useState } from 'react'
import type { NextPage } from 'next'
// import { providers, signIn, getSession, csrfToken } from "next-auth/client";
import {  signIn } from "next-auth/react";
import Link from 'next/link'
// importing icons
import  LinkedInIconWithText from "../public/assets/logo_with_text.svg"
import {FcGoogle} from "react-icons/fc"

const signin:NextPage=  () => {
    const [showPassword,setShowPassword]=useState(false)
    const [formData,setFormData]=useState({email:"",password:""})
    const handleFormChange=(e:any)=>{
        setFormData((preValue)=>{
            return{
                ...preValue,
                [e.target.name]:e.target.value
            }
        })
    }
    const handleSubmit=(e:any)=>{
        e.preventDefault()
       signIn("credentials",{
           email:formData.email,
           password:formData.password,
           callbackUrl:`${window.location.origin}/dashboard`
       })
    }
    return (
    <>
        {/* linkedin logo */}
        <div className="p-6 px-16 bg-white dark:bg-primaryBgDark">
        <LinkedInIconWithText />
        </div>
        <div className="h-screen flex flex-col items-center bg-white dark:bg-primaryBgDark">
            <form className='p-4 pb-12 px-5 flex flex-col  max-w-sm  w-[90%] sm:w-full  text-gray-500 rounded-lg overflow-hidden bg-primaryBg dark:bg-dashboardBgDark'
            style={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
            }}
            onSubmit={(e)=>handleSubmit(e)}
            >
                <h3 className="text-2xl text-black pt-4 pb-1 dark:text-white" >SignIn</h3>
                <p className="text-sm pb-4 text-gray-600">Stay updated on your professional world</p>
                <input 
                    type="text" 
                    name="email" 
                    className="border border-gray-600 p-3 my-2 rounded-md outline-offset-2"
                    placeholder="Email or Phone"
                    onChange={(e)=>handleFormChange(e)}
                />
                <div 
                className="relative flex flex-col">
                    <input 
                    type={showPassword?"text":"password"} 
                    name="password" 
                    className="border border-gray-600 p-3 my-2 rounded-md outline-offset-2" 
                    onChange={(e)=>handleFormChange(e)}
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
                    className="my-2 py-3 w-full rounded-full bg-blue-700 text-white font-semibold"
                >
                    Continue
                </button>
                <button
                type="button"
                className="
                    my-2 py-3 w-full rounded-full 
                    flex justify-center items-center 
                    text-gray-600 font-semibold border-gray-600 
                    border hover:bg-primaryBg"
                
                > 
                    <FcGoogle style={{margin:"0 16px",fontSize:"24px"}}/>
                    Sign in with Google
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