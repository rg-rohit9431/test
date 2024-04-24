import React from 'react';
import {
    FacebookIcon,
    FacebookShareButton,
    TelegramShareButton,
    TelegramIcon,
    WhatsappShareButton,
    WhatsappIcon,
    FacebookMessengerShareButton,
    FacebookMessengerIcon,
    TwitterShareButton,
    TwitterIcon,
    InstapaperShareButton,
    InstapaperIcon,
} from 'react-share';

import { useSnackBae } from '../context/SnackBae';

//icons
import { IoMdClose } from "react-icons/io";
import { FaRegCopy } from "react-icons/fa6";
import toast from 'react-hot-toast';

const MerchantShare = () => {
    const shareUrl = window.location.href;
    const { shareVisible, setShareVisible } = useSnackBae();

    const copyUrl = () => {
        navigator.clipboard.writeText(shareUrl)
            .then(() => {
                console.log('URL copied successfully');
                toast.success('URL copied successfully');
                // You can add additional UI feedback here if needed
            })
            .catch(err => {
                console.error('Failed to copy URL: ', err);
                toast.error(error);
                // You can add error handling or UI feedback here if needed
            });
    };

    return (
        <div className='w-full h-0 relative'>
            <div className={`fixed bottom-0 left-[50%] translate-x-[-50%] max-w-[400px] w-full  hideScroller h-fit z-[3000] bg-white border-2 overflow-scroll comment ${shareVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'} rounded-t-xl`}>
                <div className='w-full flex justify-between items-center p-[1rem] border-b-2'>
                    <p className='font-inter font-[400] text-[#120D26] text-[24px]  leading-[29.05px]'>Share with friends</p>
                    <IoMdClose onClick={() => {
                        setShareVisible(!shareVisible);
                    }} className='text-[1.4rem] text-[#426CFF] cursor-pointer' />
                </div>
                <div className='w-full h-fit bg-white flex flex-wrap  gap-[1rem] justify-evenly items-center mt-[1rem] p-[1rem] pb-0'>
                    <FacebookShareButton url={shareUrl} className='flex flex-col items-center'>
                        <FacebookIcon size={40} className='rounded-full' />
                        <p className='mt-[.5rem] text-[#363636]'>Facebook</p>
                    </FacebookShareButton>
                    <WhatsappShareButton url={shareUrl} className='flex flex-col items-center'>
                        <WhatsappIcon size={40} className='rounded-full' />
                        <p className='mt-[.5rem] text-[#363636]'>WhatsAap</p>
                    </WhatsappShareButton>
                    <TelegramShareButton url={shareUrl} className='flex flex-col items-center'>
                        <TelegramIcon size={40} className='rounded-full' />
                        <p className='mt-[.5rem] text-[#363636]'>Telegram</p>
                    </TelegramShareButton>
                    <FacebookMessengerShareButton url={shareUrl} className='flex flex-col items-center'>
                        <FacebookMessengerIcon size={40} className='rounded-full' />
                        <p className='mt-[.5rem] text-[#363636]'>Messenger</p>
                    </FacebookMessengerShareButton>
                    <TwitterShareButton url={shareUrl} className='flex flex-col items-center'>
                        <TwitterIcon size={40} className='rounded-full' />
                        <p className='mt-[.5rem] text-[#363636]'>Twitter</p>
                    </TwitterShareButton>
                </div>

                <p className='font-inter font-[400] leadin-[19.36px] text-[#363636] p-[1rem]'>Or copy link</p>
                <div className='flex justify-between items-center py-[.5rem] px-[1rem] m-[1rem] mt-0 border-2 rounded-md bg-[#0000000D]'>
                    <p className='text-nowrap overflow-hidden text-ellipsis'>{shareUrl}</p>
                    <FaRegCopy onClick={copyUrl} className=' cursor-pointer text-[1.4rem] mx-[.1rem]' />
                </div>

                <div className='w-full h-fit py-[1rem] flex items-center'>
                    <button
                        onClick={() => {
                            setShareVisible(!shareVisible);
                        }} className='text-[#484646] font-[400] leading-[18px] tracking-tight w-[80%] h-[3.2rem] bg-[#EEEEEF] mx-auto rounded-md uppercase'>cancel</button>
                </div>
            </div>
        </div>
    )
}

export default MerchantShare