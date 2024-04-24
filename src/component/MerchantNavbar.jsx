import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSnackBae } from '../context/SnackBae';


//image
import logo from '../assets/logo.png';

const MerchantNavbar = () => {
    const navigate = useNavigate();
    const { user,setLogin ,login} = useSnackBae();

    return (
        <div className='relative bg-white  z-[1000] w-full h-[70px] flex justify-between items-center px-[1rem]'>
            {/* logo */}
            <img
                onClick={
                    () => {
                        navigate('/');
                    }
                }
                src={logo}
                alt='logo'
                className='h-full aspect-auto p-[.5rem] cursor-pointer' />

            {
                user ? (<div>
                    <img src='https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1567' 
                    alt="userImage" 
                    className='w-[50px] aspect-square object-contain rounded-full border-2'/>
                </div>) :
                    (<button 
                        onClick={()=>{
                            setLogin(!login);
                        }} 
                        className='sm:ml-[2rem] bg-[#FFD628] px-[1.4rem] py-[.5rem] rounded-md font-[500] text-[1rem] leading-[1.15rem]'>Login</button>)
            }
        </div>
    )
}

export default MerchantNavbar