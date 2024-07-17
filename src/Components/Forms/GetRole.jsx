import React, { useState } from 'react'
import { SignedIn } from '@clerk/clerk-react';
import { useUser } from '@clerk/clerk-react';
import { userAPIS } from '../../services/apis';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { loggedInAtom } from '../../Recoil/Store/Atoms/LoggedInUserAtom';



function GetRole() {

  const navigate = useNavigate();
    const [loggedIn,setLoggedIn] = useRecoilState(loggedInAtom);
    
   
    const {SIGNUP_API} = userAPIS;
    const [checked, setChecked] = useState("");
    const [userId, setUserId] = useState("");
    const [account_Type, setAccountType] = useState("Student");
    const[email, setEmail] = useState("");
    

    const{isSignedIn, user} = useUser()

    

    async function setRoleToDb(){
      try{
        
          console.log("User-> ", user);
          console.log("userId-> ", user.id);
          console.log("email-> ", user.emailAddresses[0].emailAddress)
          
          console.log("setting id-> ");
          setUserId(user.id)
          console.log("User id setted-> ", userId);
          
          console.log("Setting account type-> ")
          checked === "Yes"?setAccountType("Instructor"):setAccountType("Student")
          console.log("Account type setted-> ", account_Type);

          console.log("Setting email-> ")
          setEmail(user.emailAddresses[0].emailAddress)
          console.log("Printing setted email-> ", email);          

          const res = await axios.post(SIGNUP_API, {userId,account_Type,email})

          console.log('User signed up successfully-> ', res.data);
          const userCreated = res.data.newUser;

          localStorage.setItem("loggedInUser", JSON.stringify(userCreated))

          console.log("response-> ", userCreated);
          setLoggedIn(userCreated)
          console.log("logged in user-> ", loggedIn);
         
          navigate("/dashboard/user")
  
        setChecked(!checked); // toggle checkbox state on successful role update
      }catch(error){
        console.log("ERROR IN SIGNING UP...", error)
      }

    }

  return (
  
    
       <div className='w-11/12 h-screen flex justify-center mx-auto items-center '>
            <div className=' flex justify-center items-center flex-col  pt-10 pb-10 w-[40%] bg-richblack-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100'>
              <span className='text-NewBlue text-2xl'>Are you an Instructor? </span>
              <div className='pt-4'>
                  <div className='flex gap-8'>
                    <div class="dark:bg-black/10 flex justify-center items-center space-x-4">
                      <label class="text-white">
                
                          <input onClick={() => setChecked("Yes")}
                          class="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-6 h-6" type="checkbox"/>
                      </label>
                      <span className='text-xl font-normal'>Yes</span>


                    </div>

                    <div class="dark:bg-black/10 flex justify-center items-center space-x-4">
                      <label class="text-white">
                
                          <input onClick={() => setChecked("No")}
                          class="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-6 h-6" type="checkbox"/>
                      </label>
                      <span className='text-xl font-normal'>No</span>


                    </div>
                  </div>
                  <button
                  onClick={setRoleToDb}
                        class="flex items-center mt-4 bg-blue-500 text-white gap-1 px-4 py-2 cursor-pointer text-gray-800 font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
                      >
                        Next
                        <svg
                          class="w-5 h-5"
                          stroke="currentColor"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                          ></path>
                        </svg>
                  </button>
              </div>
            </div>
        </div>
    
   )
       
      
 
}

export default GetRole