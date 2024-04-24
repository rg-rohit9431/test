import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSnackBae } from '../context/SnackBae';


//image
import logo from '../assets/logo.png';

const MerchantNavbar = () => {
    const navigate = useNavigate();
    const { User, setLogin, login } = useSnackBae();
    const [visible, setVisible] = useState();
    useEffect(() => { }
        , [User])

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
                User ? (
                    <div onClick={() => {
                        setVisible(!visible);
                    }}
                        className='relative cursor-pointer'>
                        <img src={User.profileImage}
                            alt="userImage"
                            className='w-[50px] aspect-square object-contain rounded-full border-2' />

                        <button onClick={() => {
                            localStorage.removeItem('user');
                            window.location.reload();
                        }}
                            className={`absolute right-0 bg-white px-[1rem] py-[.5rem] rounded-md text-nowrap ${visible ? ('block') : ('hidden')}`}>Log out</button>
                    </div>
                ) :
                    (<button
                        onClick={() => {
                            setLogin(!login);
                        }}
                        className='sm:ml-[2rem] bg-[#FFD628] px-[1.4rem] py-[.5rem] rounded-md font-[500] text-[1rem] leading-[1.15rem]'>Login</button>)
            }
        </div>
    )
}

export default MerchantNavbar