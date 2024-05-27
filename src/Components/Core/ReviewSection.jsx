import React from 'react'
import { useRecoilValue } from 'recoil'
import { themeAtom } from '../../Recoil/Store/Atoms/ThemeAtom'

function ReviewSection() {
    const theme = useRecoilValue(themeAtom)
    return (
    <div className='flex flex-col space-x-20 mx-auto w-11/12 mt-24 pt-8'>
        <div className='divider'></div>
        <div className='mb-10 mt-6 text-5xl font-normal'>
            <h1>Hear from our <span className='text-NewBlue'>Students</span></h1>
        </div>
        <div className='flex space-x-16'>
            <div className='flex flex-col space-y-6'>
                <div className='flex flex-col space-y-14'>
                    <div class={`${theme === "black" ? "bg-[#1C1917]":"bg-white"} w-full max-w-[370px] rounded-[20px]  py-2 px-8 text-left md:py-[20px] md:px-[70px]`}>
                        <div className='flex gap-6'>
                            <div className="avatar">
                                <div className="w-14 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>

                            <div>
                                <h3 class={`${theme === "black"?"text-white":"text-richblack-900"}text-white  text-md font-bold sm:text-2xl`}>John Doe</h3>
                                <p className='text-green-500 text-sm'>johnDoe@gmail.com</p>
                            </div>
                        </div>
                        <div className='divider'></div>
                        <p class="text-richblack-200 text-left leading-relaxed italic">"Best Place to up-skill yourself" </p>
                        
                    </div>

                </div>

                <div className='flex flex-col space-y-14'>
                    <div class={`${theme === "black" ? "bg-[#1C1917]":"bg-white"} w-full max-w-[370px] rounded-[20px]  py-2 px-8 text-left md:py-[20px] md:px-[70px]`}>
                        <div className='flex gap-6'>
                            <div className="avatar">
                                <div className="w-14 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>

                            <div>
                                <h3 class={`${theme === "black"?"text-white":"text-richblack-900"}text-white  text-md font-bold sm:text-2xl`}>John Doe</h3>
                                <p className='text-green-500 text-sm'>jognDoe@gmail.com</p>
                            </div>
                        </div>
                        <div className='divider'></div>
                        <p class="text-richblack-500 text-left leading-relaxed italic">"Best Place to up-skill yourself" </p>
                        
                    </div>

                </div>
            </div>

            <div className='flex flex-col space-y-10'>
                <div className='flex flex-col space-y-14'>
                    <div class={`${theme === "black" ? "bg-[#1C1917]":"bg-white"} w-full max-w-[370px] rounded-[20px]  py-2 px-8 text-left md:py-[20px] md:px-[70px]`}>
                        <div className='flex gap-6'>
                            <div className="avatar">
                                <div className="w-14 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>

                            <div>
                                <h3 class={`${theme === "black"?"text-white":"text-richblack-900"}text-white  text-md font-bold sm:text-2xl`}>John Doe</h3>
                                <p className='text-green-500 text-sm'>jognDoe@gmail.com</p>
                            </div>
                        </div>
                        <div className='divider'></div>
                        <p class="text-richblack-500 text-left leading-relaxed italic">"Best Place to up-skill yourself" </p>
                        
                    </div>

                </div>

                <div className='flex flex-col space-y-14'>
                    <div class={`${theme === "black" ? "bg-[#1C1917]":"bg-white"} w-full max-w-[370px] rounded-[20px]  py-2 px-8 text-left md:py-[20px] md:px-[70px]`}>
                        <div className='flex gap-6'>
                            <div className="avatar">
                                <div className="w-14 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>

                            <div>
                                <h3 class={`${theme === "black"?"text-white":"text-richblack-900"}text-white  text-md font-bold sm:text-2xl`}>John Doe</h3>
                                <p className='text-green-500 text-sm'>jognDoe@gmail.com</p>
                            </div>
                        </div>
                        <div className='divider'></div>
                        <p class="text-richblack-500 text-left leading-relaxed italic">"Best Place to up-skill yourself" </p>
                        
                    </div>

                </div>
            </div>

            <div className='flex flex-col space-y-6 mt-14'>
                <div className='flex flex-col space-y-14'>
                    <div class={`${theme === "black" ? "bg-[#1C1917]":"bg-white"} w-full max-w-[370px] rounded-[20px]  py-2 px-8 text-left md:py-[20px] md:px-[70px]`}>
                        <div className='flex gap-6'>
                            <div className="avatar">
                                <div className="w-14 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>

                            <div>
                                <h3 class={`${theme === "black"?"text-white":"text-richblack-900"}text-white  text-md font-bold sm:text-2xl`}>John Doe</h3>
                                <p className='text-green-500 text-sm'>jognDoe@gmail.com</p>
                            </div>
                        </div>
                        <div className='divider'></div>
                        <p class="text-richblack-500 text-left leading-relaxed italic">"Best Place to up-skill yourself" </p>
                        
                    </div>

                </div>

                
            </div>
        </div>

        <div className='divider mt-20'></div>
        

    </div>
    )
}

export default ReviewSection