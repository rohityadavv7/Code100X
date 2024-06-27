import React, { useEffect , useState} from 'react'
import {SignUp, SignUpButton, useClerk, useUser, useAuth} from "@clerk/clerk-react"
import { Link, useNavigate } from 'react-router-dom';
import {  useSession} from "@clerk/clerk-react"
import axios from "axios"

import {userAPIS} from "../../services/apis"


function Signup() {
  const {user, isSignedIn} = useUser();

  const {SIGNUP_API} = userAPIS;

  async function setUserInDB(){
    console.log("user details -> ", user);
    try{
      const response = await axios.post(SIGNUP_API, {
        checked,
        user
      })
      console.log(response.data);
    }catch(error){
      console.log("ERROR IN SETTING USER IN DB...", error);
    }
  }

 

  const [checked, setChecked] = useState(false);

 
    
  return (
    <div className='w-11/12 mx-auto font-normal flex flex-col space-y-4 justify-center items-center'>
        <h1 className='text-2xl mt-20'>Welcome to <span className='text-NewBlue'>Code100X</span></h1>
        <h1 className='text-3xl text-center font-semibold'>Please Sign up to get Started!</h1>
        <h1 className='mt-8 pt-10 pb-10'>
          <span className='text-NewBlue text-2xl'>Are you an Instructor? </span>
          <div className='pt-4'>
            <div className=''>
              <div class="dark:bg-black/10 flex justify-center items-center space-x-4">
                <label class="text-white">
                  <input onClick={() => setChecked((prev) => !prev)}
                  class="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-6 h-6" type="checkbox"/>
                </label>
                <span className='text-xl font-normal'>Yes</span>
              </div>

            </div>
          </div>
        </h1>
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