import React from 'react'
import { useRecoilValue } from 'recoil'
import { tokenAtom } from '../../../Recoil/Store/Atoms/TokenAtom'
import AllCourses from './AllCourses';
import Signup from '../../Forms/Signup';
import { userAtom } from '../../../Recoil/Store/Atoms/UserAtom';
import { useUser } from '@clerk/clerk-react';

function Courses() {
    const User = useRecoilValue(userAtom);
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