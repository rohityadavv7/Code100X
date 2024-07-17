import React, { useEffect, useState } from 'react'
import Button from './Designs/Button';
import InfoCard from './Designs/InfoCard';
import { RiMenu2Line } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { useRecoilState, useRecoilValue } from 'recoil';
import { themeAtom } from '../Recoil/Store/Atoms/ThemeAtom';
import { useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import { SignIn, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import { loggedInAtom } from '../Recoil/Store/Atoms/LoggedInUserAtom';



function Navbar() {
    const [theme,setTheme] = useRecoilState(themeAtom)
    const {isSignedIn} = useUser()

    const loggedIn = useRecoilValue(loggedInAtom);
    // console.log("Logger in user in navbar-> ", loggedIn.account_Type)
    
    
    useEffect(() => {
        setTheme(theme);
        localStorage.setItem("theme",theme);
        const themeSelector = theme;

        document.querySelector("html").setAttribute("data-theme",themeSelector);
    })

    function handleToggle(e){
        if(e.target.checked){
            setTheme("autumn")
        }
        else{
            setTheme("black")
        }
    }
    

  return (
    <div className={`${theme === "black" ? "border-b-2" : "border-b-2"}  navbar bg-base-100 w-11/12 mx-auto pb-4 mt-2 `}>
        {/* Drawer */}
        <div className="drawer w-[50%] z-50 ">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content z-50">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="btn  drawer-button rounded-lg"> <RiMenu2Line className='text-xl'/>Menu</label>
            </div> 
            <div className="drawer-side z-50">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay z-50"></label>
                <ul className="menu z-50 p-6 flex flex-col space-y-2 rounded-md font-normal text-xl w-80 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <li>
                    <Link to={"/"}>
                        Home
                    </Link>
                </li>
                <div className="divider"></div> 
                <li>
                    {
                        loggedIn.account_Type === "Instructor"?
                        (<Link to={"/courses"}>
                            Your Courses
                        </Link>):
                        (<Link to={"/enrolledCourses"}>
                            View Courses
                        </Link>)
                    }
                        {/* <Link to={"/courses"}>
                            View Courses
                        </Link> */}
                </li>
                
                <div className="divider"></div> 
                <li>
                    <Link to={"/courses"}>
                            Explore all Courses
                    </Link>
                </li>
                 
                <div className="divider"></div> 
                <li><a>Testimonials</a></li>

                <div className="divider"></div> 
                <li><a>About</a></li>

                <div className="divider"></div> 

                <InfoCard theme={theme}/>
                
                </ul>
            </div>
        </div>

        <div className="navbar-center">
            <Link to="/">
                <p className="btn btn-ghost text-xl rounded-lg font-normal font-semibold">Code100X</p>
            </Link>
        </div>

       
        {/* Theme-Toggle */}
        <div className="navbar-end flex space-x-5">
            {/* <button className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button> */}


            {/* PROFILE-LOGOUT-BUTTON */}
            <div className=''>
                <SignedIn>
                    <UserButton/>
                </SignedIn>

                <Link to="/login">
                    <SignedOut>
                        <button 
                            className="relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-NewBlue before:to-NewBlue before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
                                >
                                Sign in
                        </button>
                    </SignedOut>
                </Link>
            </div>

             {/* Github */}
            <a href='https://github.com/rohityadavv7' target='blank'>
                <button
                    className="group flex justify-center items-center gap-2 group-hover:before:duration-500 
                    group-hover:after:duration-500 after:duration-500 hover:border-neutral-900 duration-500 
                    hover:duration-500 underline underline-offset-2 hover:underline hover:underline-offset-4 
                    origin-left hover:decoration-2 hover:text-neutral-300 relative bg-neutral-900 px-6 py-2 
                    border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden after:absolute 
                    after:z-10 after:w-12 after:h-12 after:content[''] after:bg-sky-900 after:-left-8 after:top-8 
                    after:rounded-full after:blur-lg hover:after:animate-pulse"
                    >
                    <svg
                        className="w-6 h-6 fill-neutral-50"
                        height="100"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 100 100"
                        width="100"
                        x="0"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                    >
                        <path
                        className="svg-fill-primary"
                        d="M50,1.23A50,50,0,0,0,34.2,98.68c2.5.46,3.41-1.09,3.41-2.41s0-4.33-.07-8.5c-13.91,3-16.84-6.71-16.84-6.71-2.28-5.77-5.55-7.31-5.55-7.31-4.54-3.1.34-3,.34-3,5,.35,7.66,5.15,7.66,5.15C27.61,83.5,34.85,81.3,37.7,80a10.72,10.72,0,0,1,3.17-6.69C29.77,72.07,18.1,67.78,18.1,48.62A19.34,19.34,0,0,1,23.25,35.2c-.52-1.26-2.23-6.34.49-13.23,0,0,4.19-1.34,13.75,5.13a47.18,47.18,0,0,1,25,0C72.07,20.63,76.26,22,76.26,22c2.72,6.89,1,12,.49,13.23a19.28,19.28,0,0,1,5.14,13.42c0,19.21-11.69,23.44-22.83,24.67,1.8,1.55,3.4,4.6,3.4,9.26,0,6.69-.06,12.08-.06,13.72,0,1.34.9,2.89,3.44,2.4A50,50,0,0,0,50,1.23Z"
                        ></path>
                    </svg>
                        Github
                </button>
            </a>

            <label className="swap swap-rotate">
  
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onChange={handleToggle}/>
            
            {/* sun icon */}
            <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
            
            {/* moon icon */}
            <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
            
            </label>
        </div>
         <div className="divider bg-white"></div> 
    </div>
  )
}

export default Navbar