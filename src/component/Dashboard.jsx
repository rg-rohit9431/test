import React, { useState } from 'react'
import { CiLocationOn } from "react-icons/ci";
import { IoLogoWhatsapp } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { TbProgressHelp } from "react-icons/tb";
import { LuPhoneCall } from "react-icons/lu";

import { RxCrossCircled } from "react-icons/rx";
import { GoFileSymlinkFile } from "react-icons/go";
import { CiSearch } from "react-icons/ci";

const Dashboard = () => {
    const data1 = [{
        "Customer": "Nitish",
        "Id": "#Id238975",
        "Date": "Apr 23,2021",
        "Amount": "₹23423.00",
        "Discount": "₹234",
        "Status": "complete",
        "Mode": "Upi",
        "Merchant": "Foodoos",
        "Id1": "1234565"
    },
    {
        "Customer": "Nitish",
        "Id": "#Id238975",
        "Date": "Apr 23,2021",
        "Amount": "₹23423.00",
        "Discount": "₹234",
        "Status": "Cancelled",
        "Mode": "Upi",
        "Merchant": "Foodoos",
        "Id1": "1234565"
    },
    {
        "Customer": "Nitish",
        "Id": "#Id238975",
        "Date": "Apr 23,2021",
        "Amount": "₹23423.00",
        "Discount": "₹234",
        "Status": "In Progress",
        "Mode": "Debit Cart",
        "Merchant": "Foodoos",
        "Id1": "1234565"
    },
    {
        "Customer": "Nitish",
        "Id": "#Id238975",
        "Date": "Apr 23,2021",
        "Amount": "₹3423.00",
        "Discount": "₹234",
        "Status": "In Progress",
        "Mode": "Credit Cart",
        "Merchant": "Foodoos",
        "Id1": "1234565"
    }, {
        "Customer": "Nitish",
        "Id": "#Id238975",
        "Date": "Apr 23,2021",
        "Amount": "₹23423.00",
        "Discount": "₹234",
        "Status": "complete",
        "Mode": "Upi",
        "Merchant": "Foodoos",
        "Id1": "1234565"
    },
    {
        "Customer": "Nitish",
        "Id": "#Id238975",
        "Date": "Apr 23,2021",
        "Amount": "₹23423.00",
        "Discount": "₹234",
        "Status": "Cancelled",
        "Mode": "Upi",
        "Merchant": "Foodoos",
        "Id1": "1234565"
    },
    {
        "Customer": "Nitish",
        "Id": "#Id238975",
        "Date": "Apr 23,2021",
        "Amount": "₹23423.00",
        "Discount": "₹234",
        "Status": "In Progress",
        "Mode": "Debit Cart",
        "Merchant": "Foodoos",
        "Id1": "1234565"
    },
    {
        "Customer": "Nitish",
        "Id": "#Id238975",
        "Date": "Apr 23,2021",
        "Amount": "₹3423.00",
        "Discount": "₹234",
        "Status": "In Progress",
        "Mode": "Credit Cart",
        "Merchant": "Foodoos",
        "Id1": "1234565"
    },
    ]

    const sdata1 = [{
        "photo": "/Oval.png",
        "Name": "Amrobson",
        "Date": "1 month ago",
        "contant": "This place with good ambience and excellent food. Must try chicken steam momo which is best momo I have ever had and French fry was just melting in mouth. Literally awesome! Must try.",
        "Emoji": "/Group 1171277601.png",
        "Status": "New",
    },
    {
        "photo": "/Oval.png",
        "Name": "Amrobson",
        "Date": "1 month ago",
        "contant": "This place with good ambience and excellent food. Must try chicken steam momo which is best momo I have ever had and French fry was just melting in mouth. Literally awesome! Must try.",
        "Emoji": "/Group 1171277601.png",
        "Status": "Must try",
    },
    {
        "photo": "/Oval.png",
        "Name": "Amrobson",
        "Date": "1 month ago",
        "contant": "This place with good ambience and excellent food. Must try chicken steam momo which is best momo I have ever had and French fry was just melting in mouth. Literally awesome! Must try.",
        "Emoji": "/Group 1171277601.png",
        "Status": "Good",
    }, {
        "photo": "/Oval.png",
        "Name": "Amrobson",
        "Date": "1 month ago",
        "contant": "This place with good ambience and excellent food. Must try chicken steam momo which is best momo I have ever had and French fry was just melting in mouth. Literally awesome! Must try.",
        "Emoji": "/Group 1171277601.png",
        "Status": "New",
    }, {
        "photo": "/Oval.png",
        "Name": "Amrobson",
        "Date": "1 month ago",
        "contant": "This place with good ambience and excellent food. Must try chicken steam momo which is best momo I have ever had and French fry was just melting in mouth. Literally awesome! Must try.",
        "Emoji": "/Group 1171277601.png",
        "Status": "Not Liked",
    }
    ]

    const [switc, setswitch] = useState(false);

    const switch1 = () => {
        setswitch(!switc);
    }

    function openPopup() {
        document.getElementById('popup').style.display = "block";
        document.getElementById('background').style.filter = "blur(2Px)";

    }
    function closePopup() {
        document.getElementById('popup').style.display = "none";
        document.getElementById('background').style.filter = "blur(0px)";

    }

    // const New = ()=>{
    //     sdata1 = sdata1.filter((item) => item.Status == "New");
    //     // sdata1=filteredData;
    //     console.log(filteredData);
    // }

    const [items, setitems] = useState(sdata1);
    const filterItem = (categITem) => {
        const updateItem = sdata1.filter((curElem) => {
            return curElem.Status === categITem;
        })

        setitems(updateItem);
        console.log(updateItem);
    }



    const [slide, setslide] = useState(false);
    const [slide1, setslide1] = useState(false);
    const [slide2, setslide2] = useState(false);

    return (
        <div className='w-full h-fit relative  '>

            {/* QR code popup */}
            <div id="popup" className='w-[500px] h-[500px]  sm:left-[30%] fixed bg-[#FFFFFF] hidden  z-40 mt-[155px] rounded-2xl sm:p-4'>
                <div className='flex  items-center justify-between font-Roboto text-[1.2rem] text-[#0F172A] px-4 mt-2 border-b-2 mb-4 pb-2'>
                    <p>Get QR Code</p>
                    <RxCrossCircled onClick={closePopup} className='cursor-pointer' />
                </div>
                <div className='w-full h-fit flex flex-col items-center justify-center gap-2 font-inter'>
                    <div className='w-[200px] h-[200px] border-2 border-[#000000B2] rounded-xl p-2'>
                        <img className='w-full h-full' src="/Group 1171277979.png" alt="" />
                    </div>
                    <p>FOODOOS</p>
                    <p>AMP Baisakhi Mall,Salt Lake</p>
                    <div className='flex gap-4 font-semibold '>
                        <button className='px-5 rounded-md py-1 bg-[#FFD628] text-black '>Share Code</button>
                        <button className='px-5 rounded-md py-1 bg-[#004AAD] text-[#FFFFFF] '>Download QR</button>
                    </div>

                </div>
                <div className='border border-[#00000080] flex p-2 mt-4 items-center'>
                    <p className='font-inter text-[#64748B] w-[56%] text-[.9rem]'>Get Customised Table top QR and Brandable merchandise at a affordable price contact sales </p>
                    <div className='w-[40%] h-[40px] bg-[#67CE67] text-[1.1rem] font-semibold rounded-lg flex items-center justify-center gap-3 text-white'>
                        <IoLogoWhatsapp />
                        <p>Need Help?</p>
                    </div>
                </div>
            </div>

            <div className='sm:w-[80%] w-full  h-[70px] z-10 bg-[#FDE030] mt-[70px] flex justify-between items-center px-4 sm:px-10 fixed '>
                <div>
                    <p className='text-[1.6rem] font-semibold'>Dashboard</p>
                    <p className='text-[.9rem]'>Welcome to your Dashboard</p>
                </div>

                <div className='flex gap-5 '>
                    <button className='hidden sm:block bg-white px-5 py-1 rounded-md border text-[.9rem] font-Roboto border-[#000000B2]'>View Profile</button>
                    <button onClick={openPopup} className='bg-white px-5 py-1 rounded-md border text-[.9rem] font-Roboto  border-[#000000B2]'>Get QR Code</button>
                </div>


            </div>

            <div className='w-full h-fit  mt-[140px] '>
                {/* total report */}
                <div className=' w-full sm:flex px-2 gap-3'>
                    <div className='sm:w-[73%] flex flex-col gap-2'>
                        <div className='w-full h-fit bg-white flex sm:flex-row flex-col items-center justify-evenly gap-2 p-4 rounded-md ml-2'>
                            <div className='sm:hidden flex items-center justify-between w-full h-[60px] border border-[#000000B2] rounded-lg p-5  text-[1.2rem] font-semibold'>
                                <p>View Profile</p>
                                <GoFileSymlinkFile />
                            </div>
                            <div className='sm:w-[66%] w-full flex gap-2'>
                                <div className=' w-[50%] h-[135px] relative  rounded-md border border-[#00000080] p-3 flex flex-col justify-between '>

                                    <p className='text-[#777980] text-[.9rem] font-semibold'>Total Customer</p>
                                    <img className='size-8 absolute right-2' src="/Badge.png" alt="" />

                                    <p className='text-[#1D1F2C] text-[1.9rem] font-semibold '>4,412</p>
                                    <div className='flex text-[.7rem] gap-1'>
                                        <p>30% </p>
                                        <img src="/fi-rr-caret-up.png" alt="" />
                                        <p className='text-[#858D9D] text-[.7rem]'>In last week</p>
                                    </div>



                                </div>
                                <div className='w-[50%] h-[135px] relative  rounded-md border border-[#00000080] p-3 flex flex-col justify-between '>

                                    <p className='text-[#777980] text-[.9rem] font-semibold'>Returning Customer</p>
                                    <img className='size-8 absolute right-2' src="/Badge.png" alt="" />

                                    <p className='text-[#1D1F2C] text-[1.9rem] font-semibold '>1,412</p>
                                    <div className='flex text-[.7rem] gap-1'>
                                        <p>30% </p>
                                        <img src="/fi-rr-caret-up.png" alt="" />
                                        <p className='text-[#858D9D] text-[.7rem]'>In last week</p>
                                    </div>



                                </div>
                            </div>

                            <div className='sm:w-[33%] w-full h-[135px] relative  rounded-md border border-[#00000080] p-3 flex flex-col justify-between '>

                                <p className='text-[#777980] text-[.9rem] font-semibold'>Total Recommendation</p>
                                <img className='size-8 absolute right-2' src="/Badge.png" alt="" />

                                <p className='text-[#1D1F2C] text-[1.9rem] font-semibold '>412</p>
                                <div className='flex text-[.7rem] gap-1'>
                                    <p>30% </p>
                                    <img src="/fi-rr-caret-up.png" alt="" />
                                    <p className='text-[#858D9D] text-[.7rem]'>In last week</p>
                                </div>



                            </div>
                        </div>
                        <p className='text-[#000000] text-[1.6rem] font-semibold ml-4'>Totay's Report</p>
                        <div className='w-full h-fit flex sm:flex-row flex-col justify-evenly gap-2 p-4 rounded-md bg-white ml-2'>
                            <div className='sm:w-[50%] w-full h-full relative  rounded-md border border-[#00000080] p-3 flex flex-col justify-between '>

                                <p className='text-[#777980] text-[.9rem] font-semibold'>Returning Customer</p>
                                <img className='size-8 absolute right-2' src="/Badge (1).png" alt="" />

                                <p className='text-[#1D1F2C] text-[1.9rem] font-semibold '>1,412</p>
                                <div className='flex text-[.7rem] gap-1'>
                                    <p>30% </p>
                                    <img src="/fi-rr-caret-up.png" alt="" />
                                    <p className='text-[#858D9D] text-[.7rem]'>In last week</p>
                                </div>



                            </div>
                            <div className='sm:w-[50%] w-full relative  rounded-md border border-[#00000080] p-3 flex flex-col justify-between '>

                                <p className='text-[#777980] text-[.9rem] font-semibold'>Returning Customer</p>
                                <img className='size-8 absolute right-2' src="/Badge (1).png" alt="" />

                                <p className='text-[#1D1F2C] text-[1.9rem] font-semibold '>1,412</p>
                                <div className='flex text-[.7rem] gap-1'>
                                    <p>30% </p>
                                    <img src="/fi-rr-caret-up.png" alt="" />
                                    <p className='text-[#858D9D] text-[.7rem]'>In last week</p>
                                </div>



                            </div>
                        </div>
                    </div>
                    {/* Relationship */}
                    <div className='hidden  w-[27%] h-[360px] bg-white rounded-md py-4 px-5 sm:flex flex-col gap-4'>
                        <p className='text-[#0F172A] text-[1.2rem] font-semibold border-b border-[#F1F5F9] pb-3'>Relationship Manager</p>
                        <p className='text-[#64748B] text-[.8rem]  border-b pb-2'>Need help? contact your Relationship manager </p>

                        <div className='flex flex-col  gap-3'>
                            <div className='flex gap-2 items-center'>
                                <CiLocationOn className='text-[#94A3B8] font-bold text-[1.3rem]' />
                                <p className='text-[.9rem] font-Roboto text-[#0F172A]'>Nitish Kumar</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <LuPhoneCall className='text-[#94A3B8] font-bold text-[1.3rem]' />
                                <p className='text-[.9rem] font-Roboto text-[#0F172A]'>+91 91234567889</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <TbProgressHelp className='text-[#94A3B8] font-bold text-[1.3rem]' />
                                <p className='text-[.9rem] font-Roboto text-[#0F172A]'>Help@snackbae.in</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <CiCalendarDate className='text-[#94A3B8] font-bold text-[1.3rem]' />
                                <p className='text-[.9rem] font-Roboto text-[#0F172A]'>10 AM - 7 PM</p>
                            </div>
                        </div>

                        <div className='w-full h-[40px] bg-[#67CE67] text-[1.1rem] font-semibold rounded-lg flex items-center justify-center gap-3 text-white'>
                            <IoLogoWhatsapp />
                            <p>Need Help?</p>
                        </div>

                    </div>
                </div>


                {/* Latest Transaction */}
                <div className='w-full h-fit flex flex-col '>
                    <div className='w-full h-[70px] flex justify-between items-center px-6 '>
                        <div>
                            <p className='sm:text-[1.6rem] text-[1.25rem] font-semibold'>Latest Transaction</p>
                            <p className='text-[.9rem] text-[#000000]'>Recent 5 transaction</p>
                        </div>
                        <div className='flex items-center gap-6'>
                            <p className='text-[#004AAD] sm:text-[1.3rem] text-[.9rem] font-Roboto'>Notification</p>
                            {
                                switc ?
                                    <div className='w-[40px] h-[22px] bg-slate-400 rounded-full flex items-center '>
                                        <div className='size-[18px] bg-white rounded-full ml-1' onClick={switch1}></div>
                                    </div> :
                                    <div className='w-[40px] h-[22px] bg-green-400 rounded-full flex items-center '>
                                        <div className='size-[18px] bg-white rounded-full ml-5' onClick={switch1}></div>
                                    </div>
                            }
                        </div>


                    </div>
                    <div className='w-full h-[350px]  mt-4  px-6 bg-[#F6F8FF]  rounded-md   '>

                        <div className='text-[#6B7280] flex w-full justify-between mb-4 border-b-2 font-semibold text-[.9rem] gap-2' >
                            <div className='w-[34%] flex mb-3 items-center justify-evenly'>
                                <div className='flex text-center text-[1.05rem]  items-center'>Customer</div>
                                <div className=' sm:block hidden'>DATE & TIME</div>
                            </div>
                            <div className='grid sm:grid-cols-4 grid-cols-3 sm:text-[.9rem] text-[.8rem] mt-1  w-[66%] gap-2 justify-evenly '>

                                <div className=''>AMOUNT</div>
                                <div className=''>DISCOUNT</div>
                                <div className=' sm:ml-8 ml-2'>STATUS</div>
                                <div className='sm:block hidden ml-16'>MODE</div>

                            </div>
                        </div>

                        <div className='w-full h-[300px] overflow-y-hidden flex flex-col gap-1 '>
                            {data1.map((item, index) => (
                                <div key={index} className='w-full flex my-2  sm:text-[.9rem] text-[.8rem] font-semibold' >
                                    <div className='w-[34%] flex sm:flex-row flex-col mb-3 items-center justify-evenly'>
                                        <p className='text-[#111827] font-semibold text-[.9rem] ml-4'> {item.Customer}</p>
                                        <p className='text-[#6B7280] flex items-center '>{item.Date}</p>
                                    </div>

                                    <div className='grid sm:grid-cols-4 grid-cols-3  w-[66%] gap-2 justify-evenly '>
                                        {/* <p className='text-[#6B7280] flex items-center '>{item.Date}</p> */}
                                        <p className='text-[black]   flex items-center'>{item.Amount}</p>
                                        <p className='text-[#004AAD]   text-center flex items-center ml-7  '>{item.Discount}</p>
                                        <p className={`rounded-3xl  w-full  h-[70%] py-1  text-center mt-2 flex items-center justify-center 
                ${item.Status === 'complete' ? 'bg-[#DEF7EC] text-green-700 ' :
                                                item.Status === 'In Progress' ? 'bg-[#E1EFFE] text-[#7157f1]' :
                                                    item.Status === 'Cancelled' ? 'bg-[#FBD5D5] text-red-800' : ''
                                            }`}
                                        >{item.Status}</p>
                                        <p className={`rounded-3xl  hidden  text-center p-1 sm:flex mt-2 h-[70%] items-center justify-center  ml-6
                ${item.Mode === 'Upi' ? 'bg-[#DEF7EC] text-green-700' :
                                                item.Mode === 'Debit Cart' ? 'bg-[#fbd9de] text-[#FD4A65]' :
                                                    item.Mode === 'Credit Cart' ? 'bg-[#E1EFFE] text-[#7157f1]' : ''
                                            }`}>{item.Mode}</p>


                                    </div>



                                </div>
                            ))}
                        </div>

                    </div>



                </div>


                {/* Menu Performance */}

                <div className='w-full h-fit flex flex-col bg-[#F6F8FF] gap-4 '>
                    <div className='w-full h-[140px] flex flex-col  justify-start gap-3 px-6 mt-4 '>
                        <div>
                            <p className='text-[1.6rem] font-semibold'>Menu Performance</p>
                            <p className='text-[.9rem] text-[#000000]'>Based on your customer feedback</p>
                        </div>
                        {/* <div className='w-[35%] h-[45px] rounded-md bg-white'>
                            <input type="text" />
                        </div> */}
                        <div className='relative flex items-center mt-4'>
                            
                            <input
                                className='w-[40%] py-2 px-8 rounded-lg'
                                type="text"
                                placeholder='Search menu ...'
                            />
                            <CiSearch className='absolute text-[1.3rem] font-semibold ml-2 ' />
                        </div>


                    </div>

                    <div className=' h-[80px] bg-white flex items-center justify-evenly gap-2 mx-4 rounded-lg p-2'>
                        <div className='sm:w-[40%] w-[30%] h-full flex sm:flex-row flex-col sm:items-center justify-evenly font-semibold'>
                            <p className='sm:text-[1.2rem] text-[.8rem]'>Crispy Chicken Burger</p>
                            <div className='flex flex-col sm:block sm:items-center justify-center sm:ml-2   font-inter'>
                                <p className='text-[#000000B2] sm:text-[.8rem] text-[.6rem]'>Total</p>
                                <p className='text-[#000000B2] sm:text-[.8rem] text-[.6rem]'>Recomendation</p>
                                <p className='sm:text-[1.1rem] text-[.6rem]'>213</p>
                            </div>
                        </div>
                        <div className='sm:w-[60%] w-[70%] h-full flex justify-evenly gap-2 '>

                            <div className='flex flex-col text-[#000000] items-center justify-center font-inter'>
                                <div className='flex gap-2'>
                                    <img className='size-6' src="/🦆 emoji _disappointed but relieved face_.png" alt="" />
                                    <p className=' sm:text-[1.1rem] text-[.85rem]'>213</p>
                                </div>
                                <p className='sm:text-[.85rem] text-[.7rem]'>Not Liked</p>
                            </div>
                            <div className='flex flex-col text-[#000000] items-center justify-center font-inter'>
                                <div className='flex gap-2'>
                                    <img className='size-6' src="/Group 1171277598.png" alt="" />
                                    <p className=' text-[1.1rem]'>213</p>
                                </div>
                                <p className='sm:text-[.85rem] text-[.7rem]'>Not Liked</p>
                            </div>
                            <div className='flex flex-col text-[#000000] items-center justify-center font-inter'>
                                <div className='flex gap-2'>
                                    <img className='size-6' src="/Group 1171277601.png" alt="" />
                                    <p className=' sm:text-[1.1rem] text-[.8rem]'>213</p>
                                </div>
                                <p className='sm:text-[.85rem] text-[.7rem]'>Not Liked</p>
                            </div>
                            <div className='flex items-center justify-center cursor-pointer ml-2'>
                                {
                                    slide ? <img onClick={() => (setslide(!slide))} className='' src="/Vector (2).png" alt="" /> : <img onClick={() => (setslide(!slide))} className='mr-4' src="/Vector (1).png" alt="" />
                                }

                            </div>
                        </div>

                    </div>
                    {
                        slide &&
                        <div className='w-fu h-[390px] p-5 mx-4 rounded-lg mb-4 bg-white flex flex-col gap-5 '>
                            <p className='text-[#334253] text-[1.5rem]'>Customer Testimonials</p>
                            <div className='flex gap-5'>
                                <div onClick={() => filterItem('New')} className='px-4 py-1 rounded-md border border-[#000000]'>New</div>
                                <button onClick={() => filterItem('Must try')} className='px-4 py-1 rounded-md border border-[#000000]'>Must try</button>
                                <button onClick={() => filterItem('Good')} className='px-4 py-1 rounded-md border border-[#000000]'>Good</button>
                                <button onClick={() => filterItem('Not Liked')} className='px-4 py-1 rounded-md border border-[#000000]'>Not Liked</button>
                            </div>

                            <div className=' w-full overflow-scroll flex h-[350px]   gap-4'>
                                {items.map((item, index) => (
                                    <div key={index} className='h-full min-w-[310px] max-w-[310px] flex-col relative rounded-lg border font-inter border-[#00000099] p-4 gap-2'>
                                        <div className='flex items-center justify-start gap-4 w-full h-[20%]'>
                                            <img src={item.photo} alt="" />
                                            <p>{item.Name}</p>
                                            <p>{item.Date}</p>
                                        </div>
                                        <p className='w-full h-[70%] text-[#67727E] '>{item.contant}</p>
                                        <div className='absolute right-4 bottom-3 bg-[#F5F6FA] flex flex-col items-center justify-center size-14 rounded-md '>
                                            <img className='size-7' src={item.Emoji} alt="" />
                                            <p className='text-[.7rem] '>Must Try</p>
                                        </div>
                                    </div>
                                ))}

                            </div>


                        </div>
                    }

                    <div className=' h-[80px] bg-white flex items-center justify-evenly gap-2 mx-4 rounded-lg p-2'>
                        <div className='sm:w-[40%] w-[30%] h-full flex sm:flex-row flex-col sm:items-center justify-evenly font-semibold'>
                            <p className='sm:text-[1.2rem] text-[.8rem]'>Crispy Chicken Burger</p>
                            <div className='flex flex-col sm:block sm:items-center justify-center sm:ml-2   font-inter'>
                                <p className='text-[#000000B2] sm:text-[.8rem] text-[.6rem]'>Total</p>
                                <p className='text-[#000000B2] sm:text-[.8rem] text-[.6rem]'>Recomendation</p>
                                <p className='sm:text-[1.1rem] text-[.6rem]'>213</p>
                            </div>
                        </div>
                        <div className='sm:w-[60%] w-[70%] h-full flex justify-evenly gap-2 '>

                            <div className='flex flex-col text-[#000000] items-center justify-center font-inter'>
                                <div className='flex gap-2'>
                                    <img className='size-6' src="/🦆 emoji _disappointed but relieved face_.png" alt="" />
                                    <p className=' sm:text-[1.1rem] text-[.85rem]'>213</p>
                                </div>
                                <p className='sm:text-[.85rem] text-[.7rem]'>Not Liked</p>
                            </div>
                            <div className='flex flex-col text-[#000000] items-center justify-center font-inter'>
                                <div className='flex gap-2'>
                                    <img className='size-6' src="/Group 1171277598.png" alt="" />
                                    <p className=' text-[1.1rem]'>213</p>
                                </div>
                                <p className='sm:text-[.85rem] text-[.7rem]'>Not Liked</p>
                            </div>
                            <div className='flex flex-col text-[#000000] items-center justify-center font-inter'>
                                <div className='flex gap-2'>
                                    <img className='size-6' src="/Group 1171277601.png" alt="" />
                                    <p className=' sm:text-[1.1rem] text-[.8rem]'>213</p>
                                </div>
                                <p className='sm:text-[.85rem] text-[.7rem]'>Not Liked</p>
                            </div>
                            <div className='flex items-center justify-center cursor-pointer ml-2'>
                                {
                                    slide1 ? <img onClick={() => (setslide1(!slide1))} className='' src="/Vector (2).png" alt="" /> : <img onClick={() => (setslide1(!slide1))} className='mr-4' src="/Vector (1).png" alt="" />
                                }

                            </div>
                        </div>

                    </div>
                    {
                        slide1 &&
                        <div className='w-fu h-[390px] p-5 mx-4 rounded-lg mb-4 bg-white flex flex-col gap-5 '>
                            <p className='text-[#334253] text-[1.5rem]'>Customer Testimonials</p>
                            <div className='flex gap-5'>
                                <div onClick={() => filterItem('New')} className='px-4 py-1 rounded-md border border-[#000000]'>New</div>
                                <button onClick={() => filterItem('Must try')} className='px-4 py-1 rounded-md border border-[#000000]'>Must try</button>
                                <button onClick={() => filterItem('Good')} className='px-4 py-1 rounded-md border border-[#000000]'>Good</button>
                                <button onClick={() => filterItem('Not Liked')} className='px-4 py-1 rounded-md border border-[#000000]'>Not Liked</button>
                            </div>

                            <div className=' w-full overflow-scroll flex h-[350px]   gap-4'>
                                {items.map((item, index) => (
                                    <div key={index} className='h-full min-w-[310px] max-w-[310px] flex-col relative rounded-lg border font-inter border-[#00000099] p-4 gap-2'>
                                        <div className='flex items-center justify-start gap-4 w-full h-[20%]'>
                                            <img src={item.photo} alt="" />
                                            <p>{item.Name}</p>
                                            <p>{item.Date}</p>
                                        </div>
                                        <p className='w-full h-[70%] text-[#67727E] '>{item.contant}</p>
                                        <div className='absolute right-4 bottom-3 bg-[#F5F6FA] flex flex-col items-center justify-center size-14 rounded-md '>
                                            <img className='size-7' src={item.Emoji} alt="" />
                                            <p className='text-[.7rem] '>Must Try</p>
                                        </div>
                                    </div>
                                ))}

                            </div>


                        </div>
                    }

                    <div className=' h-[80px] bg-white flex items-center justify-evenly gap-2 mx-4 rounded-lg p-2'>
                        <div className='sm:w-[40%] w-[30%] h-full flex sm:flex-row flex-col sm:items-center justify-evenly font-semibold'>
                            <p className='sm:text-[1.2rem] text-[.8rem]'>Crispy Chicken Burger</p>
                            <div className='flex flex-col sm:block sm:items-center justify-center sm:ml-2   font-inter'>
                                <p className='text-[#000000B2] sm:text-[.8rem] text-[.6rem]'>Total</p>
                                <p className='text-[#000000B2] sm:text-[.8rem] text-[.6rem]'>Recomendation</p>
                                <p className='sm:text-[1.1rem] text-[.6rem]'>213</p>
                            </div>
                        </div>
                        <div className='sm:w-[60%] w-[70%] h-full flex justify-evenly gap-2 '>

                            <div className='flex flex-col text-[#000000] items-center justify-center font-inter'>
                                <div className='flex gap-2'>
                                    <img className='size-6' src="/🦆 emoji _disappointed but relieved face_.png" alt="" />
                                    <p className=' sm:text-[1.1rem] text-[.85rem]'>213</p>
                                </div>
                                <p className='sm:text-[.85rem] text-[.7rem]'>Not Liked</p>
                            </div>
                            <div className='flex flex-col text-[#000000] items-center justify-center font-inter'>
                                <div className='flex gap-2'>
                                    <img className='size-6' src="/Group 1171277598.png" alt="" />
                                    <p className=' text-[1.1rem]'>213</p>
                                </div>
                                <p className='sm:text-[.85rem] text-[.7rem]'>Not Liked</p>
                            </div>
                            <div className='flex flex-col text-[#000000] items-center justify-center font-inter'>
                                <div className='flex gap-2'>
                                    <img className='size-6' src="/Group 1171277601.png" alt="" />
                                    <p className=' sm:text-[1.1rem] text-[.8rem]'>213</p>
                                </div>
                                <p className='sm:text-[.85rem] text-[.7rem]'>Not Liked</p>
                            </div>
                            <div className='flex items-center justify-center cursor-pointer ml-2'>
                                {
                                    slide2 ? <img onClick={() => (setslide2(!slide2))} className='' src="/Vector (2).png" alt="" /> : <img onClick={() => (setslide2(!slide2))} className='mr-4' src="/Vector (1).png" alt="" />
                                }

                            </div>
                        </div>

                    </div>
                    {
                        slide2 &&
                        <div className='w-fu h-[390px] p-5 mx-4 rounded-lg mb-4 bg-white flex flex-col gap-5 '>
                            <p className='text-[#334253] text-[1.5rem]'>Customer Testimonials</p>
                            <div className='flex gap-5'>
                                <div onClick={() => filterItem('New')} className='px-4 py-1 rounded-md border border-[#000000]'>New</div>
                                <button onClick={() => filterItem('Must try')} className='px-4 py-1 rounded-md border border-[#000000]'>Must try</button>
                                <button onClick={() => filterItem('Good')} className='px-4 py-1 rounded-md border border-[#000000]'>Good</button>
                                <button onClick={() => filterItem('Not Liked')} className='px-4 py-1 rounded-md border border-[#000000]'>Not Liked</button>
                            </div>

                            <div className=' w-full overflow-scroll flex h-[350px]   gap-4'>
                                {items.map((item, index) => (
                                    <div key={index} className='h-full min-w-[310px] max-w-[310px] flex-col relative rounded-lg border font-inter border-[#00000099] p-4 gap-2'>
                                        <div className='flex items-center justify-start gap-4 w-full h-[20%]'>
                                            <img src={item.photo} alt="" />
                                            <p>{item.Name}</p>
                                            <p>{item.Date}</p>
                                        </div>
                                        <p className='w-full h-[70%] text-[#67727E] '>{item.contant}</p>
                                        <div className='absolute right-4 bottom-3 bg-[#F5F6FA] flex flex-col items-center justify-center size-14 rounded-md '>
                                            <img className='size-7' src={item.Emoji} alt="" />
                                            <p className='text-[.7rem] '>Must Try</p>
                                        </div>
                                    </div>
                                ))}

                            </div>


                        </div>
                    }


                    {/* Relationship */}
                    <div className='sm:hidden  w-full h-fit bg-white rounded-md py-4 px-5  flex-col gap-4'>
                        <p className='text-[#0F172A] text-[1.2rem] font-semibold border-b border-[#F1F5F9] pb-3'>Relationship Manager</p>
                        <p className='text-[#64748B] text-[.8rem]  border-b pb-2'>Need help? contact your Relationship manager </p>

                        <div className='flex flex-col  gap-3 my-5'>
                            <div className='flex gap-2 items-center'>
                                <CiLocationOn className='text-[#94A3B8] font-bold text-[1.3rem]' />
                                <p className='text-[.9rem] font-Roboto text-[#0F172A]'>Nitish Kumar</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <LuPhoneCall className='text-[#94A3B8] font-bold text-[1.3rem]' />
                                <p className='text-[.9rem] font-Roboto text-[#0F172A]'>+91 91234567889</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <TbProgressHelp className='text-[#94A3B8] font-bold text-[1.3rem]' />
                                <p className='text-[.9rem] font-Roboto text-[#0F172A]'>Help@snackbae.in</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <CiCalendarDate className='text-[#94A3B8] font-bold text-[1.3rem]' />
                                <p className='text-[.9rem] font-Roboto text-[#0F172A]'>10 AM - 7 PM</p>
                            </div>
                        </div>

                        <div className='w-full h-[40px] bg-[#67CE67] text-[1.1rem] font-semibold rounded-lg flex items-center justify-center gap-3 text-white'>
                            <IoLogoWhatsapp />
                            <p>Need Help?</p>
                        </div>

                    </div>





                </div>



            </div>

        </div>
    )
}

export default Dashboard