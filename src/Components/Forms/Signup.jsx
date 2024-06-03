import React, { useEffect } from 'react'
import {SignUp, SignUpButton, useClerk, useUser} from "@clerk/clerk-react"
import { useNavigate } from 'react-router-dom';
import { useAuth , useSession} from "@clerk/clerk-react"
import {Axios} from "axios"
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userAtom } from '../../Recoil/Store/Atoms/UserAtom';


function Signup() {
    
  const {isSignedIn, user } = useUser();
  const {session} = useSession();
  const [User, setUser] = useRecoilState(userAtom);

  useEffect(() => {
    if(isSignedIn && session){
        Axios.post("/signup", {
          
        })
    }
    
    
  },[isSignedIn, session])
  

    
  return (
    <div className='w-11/12 mx-auto font-normal flex flex-col space-y-4 justify-center items-center'>
        <h1 className='text-2xl mt-20'>Welcome to <span className='text-NewBlue'>Code100X</span></h1>
        <h1 className='text-xl text-center font-semibold'>Please Sign in to view your enrolled courses</h1>
        <button
            className="relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-NewBlue before:to-NewBlue before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
                >
                <SignUpButton signInForceRedirectUrl={"/dashboard/user"}  />
        </button>



    </div>
  )
}

export default Signup