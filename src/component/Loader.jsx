import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className='w-full h-[calc(100vh-70px)] flex justify-center items-center'>
        <span className="loader"></span>
    </div>
  )
}

export default Loader