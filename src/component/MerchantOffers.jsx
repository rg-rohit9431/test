import React from 'react'

  

const MerchantOffers = ({offer}) => {
  return (
    <div className='min-w-[240px] w-[240px] h-fit min-h-[180px] rounded-md p-[1rem] border-2 m-[.3rem]'>
        <p className='text-[#004AAD] font-inter font-[400] text-[18px]  leading-[21.87px] mb-[.5rem] '>{offer?.heading}</p>
        <p className='font-inter font-[600] leading-[19.36px] text-wrap '>{offer?.subheading} <span className='font-[400]'></span></p>
        <p className=' font-sans font-[300] text-[.8rem] leading-[1rem] tracking-tight my-[.5rem]'>T&C Applied</p>
        <button className='font-sans font-[400] text-[.9rem] tracking-tight leading-[1rem] bg-[#FFD628] w-full py-[.5rem] rounded-md mt-[.5rem]'>Redeem offer</button>
    </div>
  )
}

export default MerchantOffers