import React from 'react'
import { useRecoilValue } from 'recoil'
import { courseAtom } from '../../../Recoil/Store/Atoms/CoursesAtom'
import { loggedInAtom } from '../../../Recoil/Store/Atoms/LoggedInUserAtom';
import EnrollButton from '../../Designs/EnrollButton';

function StudentCourses() {
    const courses = useRecoilValue(courseAtom);
    const loggedIn  = useRecoilValue(loggedInAtom)
  return (
    <div className='w-11/12 flex flex-col mx-auto p-4 font-normal'>
        
        <h1 className='text-3xl mt-4 text-NewBlue font-semibold'>My Courses</h1>
        <div className='divider'></div>
        {
            courses.length !== 0 ? 
            (<div>

            </div>)
            :
            (<div className='text-cente flex flex-col items-center space-y-6 mt-8 text-2xl'>
                <h2>You have not enrolled into any course yet!</h2>
                <EnrollButton text={"Enroll Now"}/>
            </div>)
        }
    </div>
  )
}

export default StudentCourses