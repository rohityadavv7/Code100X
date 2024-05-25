import React from 'react'
import { MdOutlineUnsubscribe } from "react-icons/md";

function Subscribe() {
  return (
    <div className='w-11/12 mx-auto flex space-x-24 mt-24 p-24'>
        <div>
            <div
                class="group flex flex-col justify-start items-start gap-2 w-96 h-56 duration-500 relative rounded-lg p-4 bg-[#A855F7] hover:-translate-y-2 hover:shadow-xl shadow-[#C084FC]"
                >
                <div
                    class="absolute flex items-center justify-center duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-[#C084FC]"
                    alt="image here"
                >
                    <MdOutlineUnsubscribe className='text-[80px]'/>
                </div>

                <div class="">
                    <h2 class="text-5xl font-bold mb-2 text-white">Subscribe</h2>
                    <p class="text-white line-clamp-3">
                    to our 
                    </p>
                    <span className='text-3xl text-white'>Newsletter</span>
                </div>
                <button
                    class="hover:bg-purple-400 bg-[#9333EA] text-white mt-6 rounded p-2 px-6"
                >
                    Explore
                </button>
            </div>

        </div>

        <div >
            <div class="flex flex-col items-center justify-center p-12 light">
                <div class="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
                    <h2 class="text-4xl font-bold text-richblack-800 mb-4">
                    Subscribe to Our Newsletter
                    </h2>

                    <form class="flex flex-col">
                    <input
                        type="email"
                        class="bg-gray-100 text-richblack-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                        placeholder="Enter your email address"
                    />

                    <button
                        type="submit"
                        class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                    >
                        Subscribe
                    </button>
                    </form>

                    <div class="flex justify-center mt-4">
                    <a href="#" class="text-sm text-gray-600 hover:underline"
                        >Privacy Policy</a
                    >
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Subscribe