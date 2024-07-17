import React, { useEffect , useState} from 'react'
import {SignUp, SignUpButton, useClerk, useUser, useAuth} from "@clerk/clerk-react"
import { Link, useNavigate } from 'react-router-dom';
import {  useSession} from "@clerk/clerk-react"
import axios from "axios"

import {userAPIS} from "../../services/apis"


function Signup() {
  const {user, isSignedIn} = useUser();

  const {SIGNUP_API} = userAPIS;

  

 

  const [checked, setChecked] = useState(false);

 
    
  return (
    <div className='w-11/12 mx-auto font-normal flex flex-col space-y-4 justify-center items-center'>
        <h1 className='text-2xl mt-20'>Welcome to <span className='text-NewBlue'>Code100X</span></h1>
        <h1 className='text-3xl text-center font-semibold'>Please Sign up to get Started!</h1>
        
        <Link to="/signup">
          <button 
              className="relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-NewBlue before:to-NewBlue before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
                  >
                  Sign up
          </button>
        </Link>




    </div>
  )
}

export default Signup