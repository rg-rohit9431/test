import React from 'react'

//icons
import { CiLocationOn } from "react-icons/ci";

//image
import eventimage from '../assets/eventimage.png';

const MerchantEvents = ({event}) => {
    return (
        <div className='max-w-[360px] w-[90%] mx-auto h-fit min-h-[280px] m-[.5rem] rounded-xl bg-[#F2F2F2]'>
            <img src={eventimage} alt="event-image" className='w-full aspect-auto rounded-xl object-cover' />
            <div className='w-full h-fit'>
                <div className='flex justify-between items-center p-[1rem]'>
                    <div>
                        <p className='font-inter font-[400] text-[12px] leading-[19.26px]'>{event?.time}</p>
                        <p className='font-inter font-[700] text-[16px] leading-[24px]'>{event?.eventName}</p>
                    </div>
                    <p className='font-Roboto font-[700] text-[16px] leading-[24px] tracking-tight text-[#0F172A] text-nowrap'>Free Entry</p>
                </div>

                <div className='flex justify-between items-center gap-[1rem] p-[1rem]'>
                    <div className='flex gap-[.5rem] items-center'>
                        <CiLocationOn />
                        <p className='font-inter font-[400] text-[12px] leading-[19.26px]'>{event?.location}</p>
                    </div>
                    <button className=' font-sans font-[600] text-[12px] leading-[17px] text-[#004AAD] px-[1rem] py-[.5rem] bg-[#FFD628] rounded-md text-nowrap'>Book Now</button>
                </div>
            </div>
        </div>
    )
}

export default MerchantEvents