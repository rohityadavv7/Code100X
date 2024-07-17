import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { selectedCourseAtom } from '../../../Recoil/Store/Atoms/SelectedCourseAtom'
import { GrSecure } from "react-icons/gr";
import { useParams } from 'react-router-dom';
import { courseAPIS } from '../../../services/apis';
import axios from 'axios';
import Skeleton from '../../Designs/Skeleton';
import img from "../../../assets/course1cover.jpg"
import { BiDesktop } from "react-icons/bi";
import { IoLogoDiscord } from "react-icons/io5";
import { PiChalkboardTeacherBold } from "react-icons/pi";
import { themeAtom } from '../../../Recoil/Store/Atoms/ThemeAtom';


function BuyCourse() {
  const {id} = useParams();
  
  const theme = useRecoilValue(themeAtom)

  const{GET_SELECTED_COURSE_API} = courseAPIS;

  const[courseLoading, setCourseLoading] = useState(true);
  const [courseDetails, setCourseDetails] = useState({});

  async function getSelectedCourseDetails(){
    try{
      const response = await axios.post(GET_SELECTED_COURSE_API, { id
      } ,{ headers: {
          'Content-Type': 'application/json'
        }});
      console.log("SELECTED COURSE RESPONSE...", response.data.courseDetails);
      setCourseDetails(response.data.courseDetails)
      setCourseLoading(false)
    }catch(error){
      console.log("Error fetching course details", error)
    }
  }

  useEffect(() => {
    getSelectedCourseDetails()
  },[setCourseLoading])
  
  return (
    <div className='font-normal w-11/12 mx-auto p-4'>
        <h1 className='text-3xl font-semibold mt-4'>Complete your purchase</h1>
        
        <div className={`${theme === "black"? "text-white":" text-black"} flex w-full space-x-4 mt-8`}>
            
            {/* SUB-LEFT */}
            <div className='w-[60%]  border border-[#262626] text- justify-center rounded-md min-h-screen'>
                {
                  courseLoading?
                  (<div><Skeleton/></div>)
                  :
                  (<div className='p-4'>
                    <h1 className='text-5xl flex flex-col space-y-8'>
                      {courseDetails.courseName}
                      <div className='divider'></div>

                      <div className=''>
                        <img src={img} className='border-4 border-richblack-100' height={400} width={550}/>
                      </div>

                      <div className=' mt-8'>
                        <h2 className='text-3xl text-[#1058B7] border-b border-NewBlue p-1'>Overview</h2>
                    
                        <div className='mt-4 text-xl italic '>
                          {courseDetails.description}
                        </div>
                        
                        <div className='text-xl mt-4 font-semibold'>Validity: <span>3 Years</span></div>

                      </div>

                      <div className='text-2xl'>
                        Detailed Syllabus at : <span className='italic text-[#1058B7] underline'><a target='blank' href='https://github.com/rohityadavv7' >https://github.com/rohityadavv7</a></span>
                      </div>
                      <div className='flex justify-evenly'>
                        <div className='flex text-2xl space-x-3 items-center'>
                          <BiDesktop /> <span>Live Sessions</span>
                        </div>
                        <div className='flex text-2xl space-x-3 items-center'>
                          <IoLogoDiscord className='text-[#1058B7]' /> <span>Discord Community</span>
                        </div>
                        <div className='flex text-2xl space-x-3 justify-center items-center'>
                          <PiChalkboardTeacherBold className='' /> <span>Live TA Support</span>
                        </div>
                      </div>
                    </h1>
                  </div>)
                }
            </div>
            
            {/* SUB_RIGHT */}
            <div className='w-[40%] h-[50%] flex flex-col font-normal space-y-4 p-8 border border-[#262626] rounded-md'>
                <h1 className='text-2xl font-semibold text-NewBlue '>Billing Summary</h1>
                <div className='divider'></div>
                <div className='w-[80%] text-xl space-y-2 mx-auto'>
                  <p className='flex justify-between'>Price : <span>$99</span></p>
                  <p className='flex justify-between'>Discount : <span>$0</span></p>
                </div>
                <div className='divider'></div>

                <button 
                    className="relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-NewBlue before:to-NewBlue before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
                        >
                        Pay now!
                </button>

                <div className='pt-20 flex space-x-2 justify-center items-center text-center'> 
                    <GrSecure />
                    <p>Secured by Stripe</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BuyCourse