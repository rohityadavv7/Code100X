import { useUser } from '@clerk/clerk-react'
import React from 'react'
import DisplayCourses from "./DisplayCourses"

function AllCourses() {
  const {isSignedIn} = useUser();
  return (
    <div>
      {
        isSignedIn?
        (<DisplayCourses className="-z-1000"/>)
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