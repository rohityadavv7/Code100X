import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { themeAtom } from '../../../Recoil/Store/Atoms/ThemeAtom'
import img1 from "../../../assets/course-1.png"
import { Link, useNavigate } from 'react-router-dom'
import { selectedCourseAtom } from '../../../Recoil/Store/Atoms/SelectedCourseAtom'
import { BiBookAlt } from "react-icons/bi";
import Tooltip from '../../Designs/Tooltip'

function DisplayCourses({course, title,description}) {
    const navigate = useNavigate()
    const setSelectedCourseAtom = useSetRecoilState(selectedCourseAtom)
    const theme = useRecoilValue(themeAtom)
  return (
    <div className='w-11/12 mx-auto mt-20 relative font-normal '>
        <div class={`${theme === "black"?"bg-black border border-richblack-200 transition-all duration-150 hover:border hover:border-NewBlue text-white ":"bg-white border border-richblack-300"} "relative flex w-80 flex-col 
        rounded-xl  bg-clip-border shadow-md "`}>
                <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-clip-border shadow-lg shadow-blue-gray-500/40 ">
                    <img src={img1}/>
                </div>
                <div class="p-6 flex flex-col space-y-2">
                    <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
                        {course.courseName}
                    </h5>

                    <div className='flex space-x-4 items-center'>
                        <div className='flex items-center space-x-2 w-[50%] p-2 border border-richblack-200 rounded-md '>
                            <BiBookAlt /> <span>15 Chapters</span>
                        </div>

                        <span className='p-2 rounded-md hover:cursor-pointer font-semibold px-3 font-normal bg-indigo-400'> {course.courseType}</span>
                    </div>
                    
                </div>
                <div class="p-6 pt-0">
                    <Link to={`/buyCourse/${course._id}`}>
                        <button data-ripple-light="true" type="button" 
                        className="select-none rounded-lg bg-[#1E293B] 
                        hover:bg-richblack-800 transition-all duration-150 py-3 px-6 text-center align-middle font-sans
                        text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20  hover:shadow-lg
                        hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] 
                        active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                            Buy Now
                        </button>
                    </Link>
                </div>
        </div>
    </div>
  )
}

export default DisplayCourses