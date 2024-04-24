import React from 'react'

//component
import Footer from '../component/Footer'



const ContactUs = () => {
    return (
        <div className=''>
            <div className='flex lg:flex-row flex-col w-full  justify-between lg:items-start items-center gap-[1rem] lg:px-[2rem] px-[1rem] '>
                <div className="container mx-auto py-8">
                    <h1 className="text-3xl font-semibold mb-1">Got questions or need assistance?</h1>

                    <p className="mb-6"> --- We're here to help! Feel free to reach out to us using the contact information below:</p>

                    <div className=" -mx-4">

                        {/* Booking Related Queries/Issues */}
                        <div className="w-full  px-4 mb-8">
                            <h2 className="text-xl font-semibold mb-4">Booking Related Queries/Issues</h2>
                            <p>Call us at: <a href="tel:+917044292143" className="text-blue-500">+91 7044292143</a></p>
                            <p>Email us at: <a href="mailto:booking@snackbae.in" className="text-blue-500">booking@snackbae.in</a></p>
                        </div>

                        {/* Influencer Partnership Queries */}
                        <div className="w-full  px-4 mb-8">
                            <h2 className="text-xl font-semibold mb-4">Influencer Partnership Queries</h2>
                            <p>Email us at: <a href="mailto:social@snackbae.in" className="text-blue-500">social@snackbae.in</a></p>
                        </div>

                        {/* Partners Related Queries/Issues */}
                        <div className="w-full px-4 mb-8">
                            <h2 className="text-xl font-semibold mb-4">Partners Related Queries/Issues</h2>
                            <p>Email us at: <a href="mailto:partners@snackbae.in" className="text-blue-500">partners@snackbae.in</a></p>
                        </div>

                        {/* Careers Openings */}
                        <div className="w-full px-4 mb-8">
                            <h2 className="text-xl font-semibold mb-4">Careers Openings</h2>
                            <p>Email us at: <a href="mailto:careers@snackbae.in" className="text-blue-500">careers@snackbae.in</a></p>
                        </div>

                    </div>

                    <p className="mt-3 ">Our dedicated team is committed to providing you with prompt and reliable support. Don't hesitate to get in touch – we're here to ensure your SnackBAE experience is nothing short of exceptional!</p>

                    {/* Office Address */}
                    <div className="mt-8">
                        <h2 className="text-xl font-semibold mb-4">Office Address</h2>
                        <p>BL 11 Jyangra</p>
                        <p>Rabindrapally</p>
                        <p>Baguiati, Kolkata 700059</p>
                        <p>West Bengal</p>
                    </div>
                </div>
                {/* <img src={contactGirl} alt='contactGirl' className='max-w-[500px] w-full aspect-square'/> */}
                <div className='w-full lg:w-[50%]  py-[4rem]'>
                    <button className='block border-2 border-[#426CFF] text-[#426CFF] font-[700] max-w-[300px] w-full h-[3.6rem] mx-auto rounded-md mb-[1rem] font-Roboto'>Partner@snackbae.in</button>
                    <button className='block border-2 border-[#426CFF] text-[#426CFF] font-[700] font-Roboto max-w-[300px] w-full h-[3.6rem] mx-auto mb-[1rem] rounded-md'>+91 9123456789</button>
                    <button className='block bg-[#4BCA59] text-[#ffffff] font-[700] font-Roboto max-w-[300px] w-full h-[3.6rem] mx-auto mb-[1rem] rounded-md'>WhatsApp</button>
                </div>
            </div>

            <Footer/>

        </div>
    )
}

export default ContactUs