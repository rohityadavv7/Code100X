import React from 'react'
import { useRecoilValue } from 'recoil'
import { themeAtom } from '../Recoil/Store/Atoms/ThemeAtom'

function HeroSection() {
    const theme = useRecoilValue(themeAtom)
  return (
    <div className="hero font-normal flex gap-4 mt-20 pt-8 justify-between w-11/12 mx-auto">
        
        {/* LEFT_PART */}
        <div className="hero-content flex flex-col  p-8 w-[50%]">
            <div className='flex flex-col space-y-3'>
                <h1 className="text-5xl font-bold">Code100X,<br/></h1>
                <p className='text-5xl font-extrabold text-[#2563EB]'> <span>Infinite Learning</span></p>
                <p className='text-5xl font-bold'>Endless Possibilities</p>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>

           <div className='flex gap-8 w-full'>
                <button className="btn w-36 rounded-md btn-primary">Get Started</button>
                <button className="btn w-36 rounded-md btn-primary">Github</button>
            </div>
        </div>
        
        {/* RIGHT_PART */}
        <div className='w-[50%] flex gap-10 relative'>
            {/* BLOB */}
            <div className='w-2 blob h-2 bg-[#2563EB] absolute top-32 left-20 -z-10 rounded-full'>
            </div>

            {/* CARD-1 */}
            <div>
                <div
                class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform "
                >
                <div class="p-1 bg-green-200"></div>
                <div class="p-8">
                    <h2 class="text-3xl font-bold text-richblack-800 mb-4">Pro Plan</h2>
                    <p class="text-richblack-600 mb-6">Perfect for growing businesses</p>
                    <p class="text-4xl font-bold text-richblack-800 mb-6">$49.99</p>
                    <ul class="text-md text-richblack-500 mb-6">
                    <li class="mb-2 flex items-center">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="none"
                        class="w-4 h-4 mr-2 text-green-500"
                        >
                        <path
                            d="M5 13l4 4L19 7"
                            stroke-width="2"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                        ></path>
                        </svg>
                        25 Users
                    </li>
                    <li class="mb-2 flex items-center">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="none"
                        class="w-4 h-4 mr-2 text-green-500"
                        >
                        <path
                            d="M5 13l4 4L19 7"
                            stroke-width="2"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                        ></path>
                        </svg>
                        Advanced Features
                    </li>
                    <li class="flex items-center">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="none"
                        class="w-4 h-4 mr-2 text-green-500"
                        >
                        <path
                            d="M5 13l4 4L19 7"
                            stroke-width="2"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                        ></path>
                        </svg>
                        24/7 Support
                    </li>
                    </ul>
                </div>
                <div class="p-4">
                    <button
                    class="w-full bg-green-500 text-black rounded-full px-4 py-2 hover:bg-green-700 focus:outline-none focus:shadow-outline-green active:bg-green-800"
                    >
                    Select Plan
                    </button>
                </div>
                </div>
            </div>

            {/* CARD-2 */}
            <div className='flex flex-col space-y-4'>
                <div class="flex flex-col bg-black border border-[#2563EB] rounded-3xl ">
                      <div class="px-6 py-8 sm:p-10 sm:pb-6">
                        <div class="grid items-center justify-center w-full grid-cols-1 text-left">
                          <div>
                            <h2 class="text-lg font-medium tracking-tighter text-white lg:text-3xl">
                              Corporate
                            </h2>
                            <p class="mt-2 text-sm text-gray-100">Grow steadily and pizza.</p>
                          </div>
                          <div class="mt-6">
                            <p>
                              <span class="text-5xl font-light tracking-tight text-white">
                                $35
                              </span>
                              <span class="text-base font-medium text-white"> /mo </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="flex px-6 pb-8 sm:px-8">
                        <a aria-describedby="tier-starter" class="items-center justify-center w-full px-6 py-2.5 text-center text-black duration-200 bg-white border-2 border-white rounded-full nline-flex hover:bg-transparent hover:border-white hover:text-white focus:outline-none focus-visible:outline-white text-sm focus-visible:ring-white" href="#">
                          Get started
                        </a>
                      </div>
                </div>

                <div
                    class="relative flex h-[12em] w-[18em] items-center justify-center rounded-[1.5em] border-[1px] border-[rgba(107,33,168,1)] bg-[rgba(107,33,168,0.24)] p-[1.5em] text-lime-300"
                    >
                    <div
                        class="group absolute left-1/2 top-1/2 flex h-[3em] w-[3em] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-[1.5em] border-[1px] border-[#ffffffaa] bg-[#8988885c] backdrop-blur-[6px] duration-[500ms] hover:h-[10em] hover:w-[16em] hover:rounded-[1.5em]"
                    >
                        <svg
                        class="h-[1.5em] w-[1.5em] text-[#2563EB] duration-300 group-hover:opacity-0"
                        viewBox="0 0 48 48"
                        fill="none"
                        height="48"
                        width="48"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <g clip-path="url(#a)">
                            <path
                            clip-rule="evenodd"
                            d="M21.6 36h4.8V21.6h-4.8V36ZM24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0Zm0 43.2C13.44 43.2 4.8 34.56 4.8 24 4.8 13.44 13.44 4.8 24 4.8c10.56 0 19.2 8.64 19.2 19.2 0 10.56-8.64 19.2-19.2 19.2Zm-2.4-26.4h4.8V12h-4.8v4.8Z"
                            fill-rule="evenodd"
                            fill="#fff"
                            ></path>
                        </g>
                        <defs>
                            <clipPath id="a">
                            <path d="M0 0h48v48H0z" fill="#fff"></path>
                            </clipPath>
                        </defs>
                        </svg>
                        <div
                        class="items-left duration-600 absolute left-0 top-0 flex h-[10em] w-[16em] translate-y-[100%] flex-col justify-between p-[1.5em] font-nunito text-[hsl(0,0%,85%)] group-hover:translate-y-0"
                        >
                        <div class="items-left flex flex-col space-y-4 justify-center">
                            <h1 class="text-[1.5em] text-[#D97706] font-bold leading-[0.8em]">GET30</h1>
                            <p class="text-[0.9em] font-light">
                            Use this coupon code to get upto 30% off on all the courses.
                            </p>
                        </div>

                        <p class="cursor-pointer text-[0.7em] underline">learn more</p>
                        </div>
                    </div>
                    <h1 class="text-center font-nunito text-[2em] font-black text-purple-950">
                        Grab Your Coupon Code Here
                    </h1>
                </div>

            </div>

        </div>

        
    </div>
  )
}

export default HeroSection