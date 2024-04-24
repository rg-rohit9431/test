import React from 'react'
import { useState } from 'react';

import { Link } from 'react-router-dom'
import { BiSolidDashboard } from "react-icons/bi";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BiSolidOffer } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";

import Dashboard from '../component/Dashboard';
import Menu from '../component/Menu';
import Payment from '../component/Payment';
import OfferAndEvents from '../component/OfferAndEvents';
import Navbar1 from '../component/Navbar1';

const RestaurantConsole = () => {

    const [das,setdas]=useState(true);
const [men,setmen]=useState(false);
const [pay,setpay]=useState(false);
const [off,setoff]=useState(false);
const [cus,setcus]=useState(false);
const [set,setset]=useState(false);
const [log,setlog]=useState(false);
 
const a=()=>{
   setdas(true)
   setmen(false)
   setpay(false)
   setoff(false)
   setcus(false)
   setset(false)
   setlog(false)
}
const b=()=>{
  setdas(false)
  setmen(true)
  setpay(false)
  setoff(false)
  setcus(false)
  setset(false)
  setlog(false)
}
const c=()=>{
  setdas(false)
  setmen(false)
  setpay(true)
  setoff(false)
  setcus(false)
  setset(false)
  setlog(false)
}
const d=()=>{
  setdas(false)
  setmen(false)
  setpay(false)
  setoff(true)
  setcus(false)
  setset(false)
  setlog(false)
}
const e=()=>{
  setdas(false)
  setmen(false)
  setpay(false)
  setoff(false)
  setcus(true)
  setset(false)
  setlog(false)
}
const f=()=>{
  setdas(false)
  setmen(false)
  setpay(false)
  setoff(false)
  setcus(false)
  setset(true)
  setlog(false)
}
const g=()=>{
  setdas(false)
  setmen(false)
  setpay(false)
  setoff(false)
  setcus(false)
  setset(false)
  setlog(true)
}


  return (
    <>
      <Navbar1/>
      <div className='w-full h-fit flex justify-center   '>
        {/* left side */}
        <div className='w-[20%] h-full hidden sm:block '>
        <div className='w-[20%] fixed mt-[70px] px-6 text-[.95rem] flex flex-col gap-32 '>
        <div>
        <div id=''
            onClick={a}
            
            className={`w-full h-[50px] cursor-pointer  mb-1 flex items-center rounded-lg font-semibold p-4 gap-3 ${ das ?('bg-[#F8FAFC] text-[#004AAD]'):('text-[#64748B]') } `}
          >
            <BiSolidDashboard className='text-[1.1rem]'/> <p className=''>Dashboard</p>
          </div>
          <div id=''
            onClick={b}
            
            className={`w-full h-[50px] cursor-pointer mb-1 flex items-center rounded-lg font-semibold p-4 gap-3 ${ men ?('bg-[#F8FAFC] text-[#004AAD]'):('text-[#64748B]') } `}
          >
            <MdOutlineAddShoppingCart className='text-[1.1rem]'/> <p className=''>Menu</p>
          </div>
          <div id=''
            onClick={c}
            
            className={`w-full h-[50px] cursor-pointer mb-1 flex items-center rounded-lg font-semibold p-4 gap-3 ${ pay ?('bg-[#F8FAFC] text-[#004AAD]'):('text-[#64748B]') } `}
          >
            <RiSecurePaymentLine className='text-[1.1rem]'/> <p className=''>Payments</p>
          </div>
          <div id=''
            onClick={d}
            
            className={`w-full h-[50px] cursor-pointer  mb-1 flex items-center rounded-lg font-semibold p-4 gap-3 ${ off ?('bg-[#F8FAFC] text-[#004AAD]'):('text-[#64748B]') } `}
          >
            <BiSolidOffer className='text-[1.1rem]'/> <p className=''>Offers & Events</p>
          </div>
          <div id=''
            onClick={e}
            
            className={`w-full h-[50px] cursor-pointer mb-1 flex items-center rounded-lg font-semibold p-4 gap-3 ${ cus ?('bg-[#F8FAFC] text-[#004AAD]'):('text-[#64748B]') } `}
          >
            <IoPersonOutline className='text-[1.1rem]' /><p className=''>Customers</p>
          </div>
        </div>
       
        <div className=''>
          <div id=''
            onClick={f}
            
            className={`w-full h-[50px] cursor-pointer  mb-1 flex items-center rounded-lg font-semibold p-4 gap-3 ${ set ?('bg-[#F8FAFC] text-[#004AAD]'):('text-[#64748B]') } `}
          >
            <CiSettings className='text-[1.2rem]' /><p className=''>Settings</p>
          </div>
          <Link id=''
            onClick={g}
            to="/customers"
            className={`w-full h-[50px] cursor-pointer mb-1 flex items-center rounded-lg font-semibold p-4 gap-3 ${ log ?('bg-[#F8FAFC] text-[#004AAD]'):('text-[#64748B]') } `}
          >
            <IoLogOutOutline className='text-[1.2rem]' /><p className=''>Log Out</p>
          </Link>
        </div>
          
          
    </div>
        </div>


        {/* Right side */}

        
        <div className='sm:w-[80%] w-full h-fit bg-[#F6F8FF] flex flex-col '>
         
         { das && <Dashboard/>}
         {men && <Menu/>}
         {pay && <Payment/>}
         {off  && <OfferAndEvents/>}

        </div>

      </div>
    </>
  )
}

export default RestaurantConsole