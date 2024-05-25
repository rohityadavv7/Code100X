import React from 'react'
import LinkedinBtn from './LinkedinBtn'
import InstaBtn from './InstaBtn'
import GithubBtn from './GithubBtn'
function InfoCard({theme}) {
  return (
    <div class="flex items-center justify-center mt-4">
        <div
            class={`${theme === "dark" ?"bg-gray-600" :"bg-black"} flex flex-col justify-center items-center  text-white rounded-lg shadow-lg p-6 w-60`}
        >
            <h2 class="text-2xl font-bold mb-4 text-center">Welcome!</h2>
            <p class="mb-4 text-center">
            Thanks for visiting our website. Stay connected with us on social media.
            </p>
            <div class="flex space-x-11 mt-4">
                <LinkedinBtn/>

                <GithubBtn/>

                <InstaBtn/>
            </div>
        </div>
        </div>

  )
}

export default InfoCard