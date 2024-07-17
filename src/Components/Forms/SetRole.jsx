import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useUser } from '@clerk/clerk-react'
import { userAPIS } from '../../services/apis'
import { useRecoilState } from 'recoil';
import { loggedInAtom } from '../../Recoil/Store/Atoms/LoggedInUserAtom';

function SetRole() {

    const{LOGIN_API} = userAPIS;
    const {user} = useUser()
    const [email, setEmail] = useState("")
    const [loggedIn, setLoggedIn] = useRecoilState(loggedInAtom)

    const navigate = useNavigate();

    async function setRoleFromDb(){
        try{
            console.log(user.emailAddresses);
            setEmail(user.emailAddresses[0].emailAddress)
            console.log("email-> ", email);
            const res = await axios.post(LOGIN_API,{email});
            console.log("LOGIN RESPONSE...", res.data);
            const userloggedIn = res.data.user;

            console.log("loggedin user-> ", userloggedIn)
            setLoggedIn(userloggedIn);
            localStorage.removeItem("loggedInUser");

            localStorage.setItem("loggedInUser", JSON.stringify(userloggedIn));

            navigate("/dashboard/user");


        }catch(error){
            console.log("ERROR IN LOGGIN IN...", error);
        }
    }

  return (
    <div>
        <div className='w-11/12 h-screen flex justify-center mx-auto items-center '>
            <div className=' flex justify-center items-center flex-col  pt-10 pb-10 w-[40%] bg-richblack-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100'>
              <span className='text-NewBlue text-2xl'>Yay! you are logged in now...</span>
              
                  <button
                  onClick={setRoleFromDb}
                        className="flex font-normal items-center mt-4 bg-blue-500 text-white gap-1 px-4 py-2 cursor-pointer text-gray-800 font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
                      >
                            Go to Dashboard!
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

export default SetRole