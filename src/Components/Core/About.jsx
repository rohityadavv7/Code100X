import React from 'react'
import AboutImg from "../../assets/about.jpg"

function About() {
  return (
    <div className='w-11/12 mx-auto mt-32 rounded-lg font-normal'>
        <div className='divider mt-20 mb-20'></div>
        <div className='flex gap-6'>
            <div class="flex items-center p-3 w-full bg-[#191817] rounded-md ml shadow-lg ">
                <section class="block  space-y-8 border-gray-300 m-3 ">
                    <div class="pl-3">
                        <h3 class="text-gray-600 font-semibold text-4xl">About <span className='text-NewBlue'>Code100X</span></h3>
                        <h3 class="bg-clip-text mt-2 text-richblack-300 bg-gradient-to-l from-[#005BC4] to-[#27272A] text-lg font-bold">Marketplace</h3>
                    </div>

                    <p className='ml-3 text-2xl text-richblack-300'>At Code100X, Discover a world of learning with our diverse range of online courses, expertly crafted by top instructors from around the globe. Whether you’re looking to advance your career, learn a new skill, or explore a passion, we have something for everyone. Join our community and start your learning journey today!</p>
                    
                    <div className="stats shadow bg-[#191817]">
                        
                        <div className="stat">
                            <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <div className="stat-title">Downloads</div>
                            <div className="stat-value">31K</div>
                            <div className="stat-desc">Jan 1st - Feb 1st</div>
                        </div>
                        
                        <div className="stat">
                            <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                            </div>
                            <div className="stat-title">New Users</div>
                            <div className="stat-value">4,200</div>
                            <div className="stat-desc">↗︎ 400 (22%)</div>
                        </div>
                        
                        <div className="stat">
                            <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                            </div>
                            <div className="stat-title">New Registers</div>
                            <div className="stat-value">1,200</div>
                            <div className="stat-desc">↘︎ 90 (14%)</div>
                        </div>
                        
                    </div>
                </section>
            </div>
        </div>
    </div>
  )
}

export default About