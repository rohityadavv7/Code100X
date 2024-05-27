import React from 'react'

function Questions() {
  return (
    <div className='w-11/12 mx-auto m-12 flex flex-col'>
        <div className='divider mb-36'></div>

        <div className='text-5xl font-normal mb-8'>
            <h1>Frequently Asked <span className='text-NewBlue'>Questions</span> </h1>
        </div>
        <div className="join join-vertical w-full font-normal">
            <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" defaultChecked /> 
                <div className="collapse-title text-xl font-medium">
                    <p> What is <span className='text-NewBlue'>Code100X </span>?</p>
                </div>
                <div className="collapse-content text-richblack-100"> 
                <p>Code100X is an online marketplace where users can purchase and enroll in a variety of courses taught by expert instructors from around the world.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" /> 
                <div className="collapse-title text-xl font-medium">
                    <p>How do I sign up ? </p>
                </div>
                <div className="collapse-content text-richblack-100"> 
                    <p>Click on the "Sign Up" button on the top right corner of our homepage. You can sign up using your email address or through your Google or Facebook account.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" /> 
                <div className="collapse-title text-xl font-medium">
                    <p>How do I enroll in a course?</p>
                </div>
                <div className="collapse-content text-richblack-100"> 
                    <p className=''>Once you find a course you’re interested in, click on the course title to view more details. If you decide to enroll, click the "Enroll Now" button and follow the checkout process.</p>
                </div>
            </div>

            <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" /> 
                <div className="collapse-title text-xl font-medium">
                    <p>What payment methods are accepted?</p>
                </div>
                <div className="collapse-content text-richblack-100"> 
                    <p className=''>We accept major credit and debit cards, PayPal, and other payment methods as specified on the checkout page.</p>
                </div>
            </div>

            <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" /> 
                <div className="collapse-title text-xl font-medium">
                    <p>How do I enroll in a course?</p>
                </div>
                <div className="collapse-content text-richblack-100"> 
                    <p className=''>Once you find a course you’re interested in, click on the course title to view more details. If you decide to enroll, click the "Enroll Now" button and follow the checkout process.</p>
                </div>
            </div>

            
        </div>
        <div className='font-normal mt-6 text-xl'>
            <p>Still have Queries? <span className='text-NewBlue'>Contact Us</span></p>
        </div>
        <div className='divider mt-36 mb-20' ></div>
    </div>
  )
}

export default Questions