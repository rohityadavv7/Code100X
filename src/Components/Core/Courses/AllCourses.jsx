import { useUser } from '@clerk/clerk-react'
import React from 'react'
import DisplayCourses from "./DisplayCourses"
import { useRecoilValue } from 'recoil';
import { allCoursesAtom } from '../../../Recoil/Store/Atoms/AllCoursesAtom';

function AllCourses() {
  const {isSignedIn} = useUser();
  const allCourses = useRecoilValue(allCoursesAtom)
  console.log("all courses -> ", allCourses)
  return (
    <div>
      {
        allCourses.length !== 0?
        (
          <div className='flex w-11/12 mx-auto space-x-16'>
            {
              allCourses.map((course,id)=> {
                return(
                  <div key={id}>
                    <DisplayCourses title={course.title} course={course} description={course.description}/>
                  </div>
                )
              })
            }
          </div>
        )
        :
        (<div className="flex flex-col gap-4 w-52">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>)
      }
    </div>
  )
}

export default AllCourses