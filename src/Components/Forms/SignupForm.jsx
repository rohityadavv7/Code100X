import React from 'react'
import { SignUp } from '@clerk/clerk-react'

function SignupForm() {
  return (
    <div className='w-11/12 flex items-center h-screen justify-center  mx-auto'>
        <div className=' '>
            <SignUp signInForceRedirectUrl={"/dashboard/user"} appearance={{
                variables: {
                    colorBackground:"#1F1F23",
                    colorInputBackground:"#242429",
                    colorInputText:"white",
                    colorTextOnPrimaryBackground:"white",
                    colorText:"white",
                    colorTextSecondary:"white",
                    colorNeutral:"white"

                }
            }}/>
        </div>
    </div>
  )
}

export default SignupForm