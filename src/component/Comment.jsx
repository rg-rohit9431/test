import React from 'react'

//image
import dummyimage from '../assets/dummyimage.png';
import musttry from '../assets/musttry.png';


const Comment = () => {
    return (
        <div className=' relative w-[80%] mx-auto h-fit border-2 p-[1rem] my-[1rem] rounded-3xl shadow-xl'>
            <div className='w-full flex justify-evenly items-center'>
                <img src={dummyimage} alt="dummyimage" />
                <p className='font-inter font-[500] text-[#334253]'>amyrobson</p>
                <p className='font-inter font-[400] text-[#67727E]'>1 month ago</p>
            </div>
            <p className='font-inter font-[400] text-[#67727E] p-[1rem] pb-[3rem]'>This place with good ambience and excellent food. Must try chicken steam momo which is best momo I have ever had and French fry was just melting in mouth. Literally awesome! Must try.</p>
            <div className='w-fit h-fit mt-[.5rem] flex flex-col items-center absolute right-[1rem] bottom-[1rem]'>
                <img src={musttry} alt="musttry" className='w-[20px] aspect-square' />
                <p className='font-inter font-[400] mt-[3px]'>must try</p>
            </div>
        </div>
    )
}

export default Comment