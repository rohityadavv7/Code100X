import { UserButton } from '@clerk/clerk-react'
import React from 'react'
import {useAuth, useUser} from "@clerk/clerk-react"
import { themeAtom } from '../../../Recoil/Store/Atoms/ThemeAtom';
import { useRecoilValue } from 'recoil';

function UserDashboard() {

    const {user, isSignedIn} = useUser()
    const {firstName, lastName} = user;
    // console.log("user -> ", user);

    const theme = useRecoilValue(themeAtom);

    // console.log("name is-> ",firstName, lastName);

    
    

  return (
    <div className='w-11/12 mx-auto grid mt-16 grid-cols-10 font-normal text-center'>
       {/* LEFT-PART */}
        <div className='bg grid col-span-3 items-center rounded-lg'>
            <div class="bg-lightBlack w-[80%] min-h-[500px] rounded-lg">
                <div class="flex p-2 gap-1">
                    <div class="">
                    <span class="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
                    </div>
                    <div class="circle">
                    <span class="bg-NewBlue inline-block center w-3 h-3 rounded-full"></span>
                    </div>
                    <div class="circle">
                    <span class="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
                    </div>
                </div>
                <div class="card__content">
                </div>
            </div>


        </div>


        {/* RIGHT-PART */}
        <div className={`${theme === "black" ? "bg-lightBlack text-white":"bg-[#DBDBDB] text-black"} col-span-7 grid rounded-lg p-8`}>
            <h1 className='text-3xl  flex space-x-1 '>
            
                <p>Welcome,<span className='text-NewBlue ml-2 text-2xl'>{isSignedIn?`${firstName + ' ' + lastName}`:`${"User"}`}</span></p>
                <div className='divider'></div>
                
            </h1>
        </div>
    </div>
  )
}

export default UserDashboard