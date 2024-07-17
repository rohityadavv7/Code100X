import { SignIn } from '@clerk/clerk-react'
import React, { useEffect } from 'react'

function LoginForm() {
  return (
    <div className='w-11/12 flex h-screen mx-auto items-start justify-center'>
        <div className='mt-8'>
            <SignIn appearance={{
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

export default LoginForm