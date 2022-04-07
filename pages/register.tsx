import { FormEvent, FormEventHandler, useState } from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
// importing icons
import  LinkedInIconWithText from "../public/assets/logo_with_text.svg"
import {FcGoogle} from "react-icons/fc"



const register:NextPage = () => {
    const [showPassword,setShowPassword]=useState(false)
   const [formData,setFormData]=useState({email:"",userName:"",password:""})
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
        fetch("/api/auth/signup",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.status)
            window.location.replace(`${window.location.origin}/`)
        })
        .catch(err=>console.log(err))
    }

  return (
    <div className="h-screen flex flex-col items-center bg-white dark:bg-dashboardBgDark">
        {/* linkedin logo */}
        <div className="w-full bg-white dark:bg-dashboardBgDark">
       <div className="py-8 max-w-sm w-[90%] lg:max-w-full mx-auto  bg-white dark:bg-dashboardBgDark">
        <LinkedInIconWithText />
        </div>
        </div>
        {/* text  */}
        <p className="py-8 text-gray-600" style={{fontSize:"18px"}}>
            Join LinkedIn now &minus; it's free!
        </p>
        <form 
            className='px-3 flex flex-col max-w-md w-full  text-gray-500'
            onSubmit={(e)=>handleSubmit(e)}
            >
            <label 
                htmlFor="email">
                Email
            </label>
            <input
                type="text" 
                name="email" 
                className="border border-gray-600 p-2 my-2 rounded-md outline-offset-2"
                onChange={(e)=>handleFormChange(e)}
                value={formData.email}
            />
            <label 
                htmlFor="userName">
                    Your Name
            </label>
            <input 
                type="text" 
                name="userName" 
                className="border border-gray-600 p-2 my-2 rounded-md outline-offset-2" 
                onChange={(e)=>handleFormChange(e)}
                value={formData.userName} 
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
                className="border border-gray-600 p-2 my-2 rounded-md outline-offset-2"
                onChange={(e)=>handleFormChange(e)}
                value={formData.password}
                 />
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
            <button
            type='button'
                className="
                my-2 py-3 w-full rounded-full 
                flex justify-center items-center 
                 text-gray-600 font-semibold border-gray-600 
                 border hover:bg-primaryBg"
                >
                     <FcGoogle style={{margin:"0 16px",fontSize:"24px"}}/>
                       Sign in with Google
                </button>
        </form >
        {/* link to sign in */}
        <p className="py-16">
            Already on LinkedIn? 
            <Link href="/api/auth/signin"> 
            <a className="text-blue-600 font-semibold  hover:underline cursor-pointer">Sign In</a>
            </Link>
        </p>
    </div>
  )
}

export default register