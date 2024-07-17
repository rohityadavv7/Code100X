import React from 'react'
import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil'
import { tokenAtom } from '../../../Recoil/Store/Atoms/TokenAtom'
import AllCourses from './AllCourses';
import Signup from '../../Forms/Signup';
import axios from "axios"
import { useUser } from '@clerk/clerk-react';
import { useEffect } from 'react'
import { courseAPIS } from '../../../services/apis';
import { allCoursesAtom } from '../../../Recoil/Store/Atoms/AllCoursesAtom';

function Courses() {
    const [allCourses, setAllCourses] = useRecoilState(allCoursesAtom) 

    const {GET_ALL_COURSES_API} = courseAPIS;

    async function getAllCourses(){
        try{
            const response = await axios.get(GET_ALL_COURSES_API);

            // console.log("ALL COURSES API...",response.data.allCourses);
            setAllCourses(response.data.allCourses);
            console.log("ALL COURSES", allCourses)
        }catch(error){
            console.log('Error fetching courses:', error)
        }
    }

    useEffect(()=> {
        getAllCourses()
    },[setAllCourses])
  
    const token = useRecoilValue(tokenAtom);
    const {isSignedIn} = useUser();
  return (
    <div>
        {
            isSignedIn ? <div className=''>
                <AllCourses/>
            </div>
            :
            <div>
                <Signup/>
            </div>
        }
    </div>
  )
}

export default Courses