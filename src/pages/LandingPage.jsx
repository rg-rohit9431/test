import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '@dotlottie/player-component';
import './LandingPage.css';
import { useSnackBae } from '../context/SnackBae';
import axios from 'axios';
import toast from 'react-hot-toast';

//components
import Footer from '../component/Footer'
import Loader from '../component/Loader';

//image
import bgHero from '../assets/Backgroundhero.png';
import doubleQuotes from '../assets/doublecott.png';
import slider1 from '../assets/slider1Landing.png';
import slider2 from '../assets/slider2Landing.png';
import slider3 from '../assets/slider3Landing.png';
import slider4 from '../assets/slider4Landing.png';
import slider5 from '../assets/slider5Landing.png';
import slider6 from '../assets/slider6Landing.png';
import foodicon from '../assets/FoodIcon.png';
import DiscountIcon from '../assets/DiscountIcon.png';
import CustomerReviewIcon from '../assets/CustomerReviewIcon.png';
import mobileImage from '../assets/mobileimage.png';
import PhoneMockup2Image from '../assets/PhoneMockup2Image.png';


//icons
import { IoIosCloseCircleOutline } from "react-icons/io";

const LandingPage = () => {
  const { loader } = useSnackBae();

  //demoPage
  const [seeDemo, setSeeDemo] = useState(false);
  const [demoData, setDemoData] = useState({
    brandName: '',
    email: '',
    contactNumber: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDemoData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };


  const requestdemo = async (demoData) => {

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://13.202.8.14:4000/api/becomepartner',
      headers: {},
      data: demoData
    };

    axios.request(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        if (response) {
          toast.success('Request Send successful!');
          setSeeDemo(false);
          setDemoData({
            brandName: '',
            email: '',
            contactNumber: ''
          })
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(error);
      });
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log('Form Data:', demoData);
    requestdemo(demoData);
  };

  //scroll-smooth
  function scrollSmooth() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <>
      {
        loader ? (<Loader />)
          : (
            <div className='w-full h-fit '>

              {/* hero-section */}
              <div className='bg-[#101010] w-full h-fit relative z-[100]'>
                {/* bgimage */}
                <img src={bgHero} alt='bg-effect' className='absolute top-0 w-full h-full sm:block hidden' />
                {/* demoPage */}
                {
                  seeDemo &&
                  <div className='w-[90%] mx-auto max-w-[613px] h-fit shadow-lg absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[200] bg-white rounded-md'>
                    <div className='flex justify-between px-[1rem] py-[1rem] border-b-2 border-gray-100'>
                      <p className='font-[500]'>Request Demo</p>
                      <IoIosCloseCircleOutline onClick={() => {
                        setSeeDemo(false);
                      }}
                        className='text-[1.5rem] cursor-pointer' />
                    </div>
                    <form onSubmit={handleSubmit} className='w-full sm:w-[80%] h-fit mx-auto mt-[1rem] p-[2rem]'>
                      <label htmlFor='brandName' className='block mb-[.5rem] font-[500]'>Brand Name</label>
                      <input
                        type='text'
                        id='brandName'
                        name='brandName'
                        placeholder='Important'
                        value={demoData.brandName}
                        onChange={handleInputChange}
                        className='w-full focus:outline-none border-2 border-gray-400 rounded-md h-[3rem] pl-[.5rem] mb-[.5rem]'
                        required
                      />
                      <label htmlFor='email' className='block mb-[.5rem] font-[500]'>Email</label>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Important'
                        value={demoData.email}
                        onChange={handleInputChange}
                        className='w-full focus:outline-none border-2 border-gray-400 rounded-md h-[3rem] pl-[.5rem] mb-[.5rem]'
                        required
                      />
                      <label htmlFor='contactNumber' className='block mb-[.5rem] font-[500]'>Contact Number</label>
                      <input
                        type='text'
                        id='contactNumber'
                        name='contactNumber'
                        placeholder='Important'
                        value={demoData.contactNumber}
                        maxLength={10}
                        onChange={handleInputChange}
                        className='w-full focus:outline-none border-2 border-gray-400 rounded-md h-[3rem] pl-[.5rem] mb-[.5rem]'
                        required
                      />
                      <button type="submit" className='bg-[#004AAD] text-[#FFFFFF] px-[2rem] py-[.5rem] rounded-md mt-[.5rem] relative left-[50%] translate-x-[-50%]'>Submit</button>
                    </form>
                  </div>
                }

                {/* content */}
                <div className='w-full sm:w-[90%] mx-auto h-fit min-h-[calc(100vh-70px)] relative flex sm:flex-row flex-col justify-evenly sm:justify-between items-center'>
                  <div className='flex flex-col w-[90%] mx-auto md:w-[70%] h-full gap-[1rem] sm:gap-[2rem] justify-center'>
                    <p className='text-[#E5E7EB] font-[700] text-[3.2rem] md:text-[3rem] lg:text-[3.8rem] leading-[3.6rem] md:leading-[4rem] lg:leading-[4.5rem]'>It’s not just food,<br className='lg:block hidden' />it’s an <span className='text-[#FFD628]'>Experience</span>
                    </p>
                    <p className='md:w-[70%] font-[400] text-[.8rem] sm:text-[1.1rem] text-[#D1D5DB]'>Our QR based interactive digital menu makes ordering a breeze, ensuring your patrons spend less time waiting and more time in indulging in delicious dishes.</p>
                    <div className='flex  gap-[2rem] sm:justify-start justify-center items-center'>
                      <Link to='/register' className='bg-[#FFD628] px-[1.5rem] py-[.5rem] rounded-3xl font-[500]'>Get Started</Link>
                      <Link
                        onClick={() => {
                          setSeeDemo(true);
                        }}
                        className='text-[#FFD628] border-2 border-[#FFD628] px-[1.5rem] py-[.5rem] rounded-3xl' >Request Demo</Link>
                    </div>
                  </div>
                  {/* gif */}
                  {/* <img src={gifhero} alt='gif-hero' className='w-[80%] md:w-[40%] aspect-auto' /> */}
                  {/* large-screeen */}
                  <div className='sm:block hidden'>
                    <dotlottie-player
                      src="https://lottie.host/28c3766f-e323-4fbf-b3eb-ee88d5b17317/450ZeXA8KZ.json"
                      autoplay
                      loop
                      style={{ width: "400px", height: "400px" }}
                    />
                  </div>
                  {/* small-screen */}
                  <div className='block sm:hidden'>
                    <dotlottie-player
                      src="https://lottie.host/28c3766f-e323-4fbf-b3eb-ee88d5b17317/450ZeXA8KZ.json"
                      autoplay
                      loop
                      style={{ width: "280px", height: "280px" }}
                    />
                  </div>

                </div>
              </div>

              {/* scrollar section */}
              <div className='w-full h-fit py-[2rem] bg-[#0F172A] relative'>
                <div className='w-[90%] h-fit mx-auto pt-[2rem] relative mb-[1rem]'>
                  <div className='w-full sm:w-[40%] h-fit z-[100] relative '>
                    <img src={doubleQuotes} alt='doublequotes' className=' absolute z-[-1]   ' />
                    <p className='w-full text-[2rem] sm:text-[3rem] z-[101] font-[700] font-inter leading-[3rem] lsm:eading-[4rem] text-[#ECFEFF] pl-[5rem] pt-[4rem]'>Real Opinion from Real Customers</p>
                    <p className='text-[.9rem] sm:text-[1rem] z-[101] font-[400] font-inter sm:leading-[2.5rem] leading-[1.4rem] text-[#E5E7EB] pl-[5rem] '>Unleash your inner food critic.</p>
                  </div>
                </div>

                {/* left slider */}
                <div className='w-full overflow-hidden'>
                  <div className='w-[calc(200px*18)] flex scrollleftanimation'>
                    <img src={slider1} alt='slider1' className='w-[250px] aspect-auto mx-[.5rem]' />
                    <img src={slider2} alt='slider1' className='w-[250px] aspect-auto mx-[.5rem]' />
                    <img src={slider3} alt='slider1' className='w-[250px] aspect-auto mx-[.5rem]' />
                    <img src={slider4} alt='slider1' className='w-[250px] aspect-auto mx-[.5rem]' />
                    <img src={slider5} alt='slider1' className='w-[250px] aspect-auto mx-[.5rem]' />
                    <img src={slider6} alt='slider1' className='w-[250px] aspect-auto mx-[.5rem]' />
                    <img src={slider1} alt='slider1' className='w-[250px] aspect-auto mx-[.5rem]' />
                    <img src={slider2} alt='slider1' className='w-[250px] aspect-auto mx-[.5rem]' />
                    <img src={slider3} alt='slider1' className='w-[250px] aspect-auto mx-[.5rem]' />
                    <img src={slider4} alt='slider1' className='w-[250px] aspect-auto mx-[.5rem]' />
                    <img src={slider5} alt='slider1' className='w-[250px] aspect-auto mx-[.5rem]' />
                    <img src={slider6} alt='slider1' className='w-[250px] aspect-auto mx-[.5rem]' />
                    <img src={slider1} alt='slider1' className='w-[250px] aspect-auto mx-[.5rem]' />
                    <img src={slider2} alt='slider1' className='w-[250px] aspect-auto mx-[.5rem]' />
                    <img src={slider3} alt='slider1' className='w-[250px] aspect-auto mx-[.5rem]' />
                    <img src={slider4} alt='slider1' className='w-[250px] aspect-auto mx-[.5rem]' />
                    <img src={slider5} alt='slider1' className='w-[250px] aspect-auto mx-[.5rem]' />
                    <img src={slider6} alt='slider1' className='w-[250px] aspect-auto mx-[.5rem]' />

                  </div>
                </div>
                {/* right slider */}
                <div className='mt-[2rem] w-full overflow-hidden'>
                  <div className='w-[calc(200px*18)] flex scrollrightanimation'>
                    <img src={slider1} alt='slider1' className='w-[250px] aspect-auto mx-[.5rem]' />
                    <img src={slider2} alt='slider1' className='w-[250px] aspect-auto mx-[.5rem]' />
                    <img src={slider3} alt='slider1' className='w-[250px] aspect-auto mx-[.5rem]' />
                    <img src={slider4} alt='slider1' className='w-[250px] aspect-auto mx-[.5rem]' />
                    <img src={slider5} alt='slider1' className='w-[250px] aspect-auto mx-[.5rem]' />
                    <img src={slider6} alt='slider1' className='w-[250px] aspect-auto mx-[.5rem]' />
                    <img src={slider1} alt='slider1' className='w-[250px] aspect-auto mx-[.5rem]' />
                    <img src={slider2} alt='slider1' className='w-[250px] aspect-auto mx-[.5rem]' />
                    <img src={slider3} alt='slider1' className='w-[250px] aspect-auto mx-[.5rem]' />
                    <img src={slider4} alt='slider1' className='w-[250px] aspect-auto mx-[.5rem]' />
                    <img src={slider5} alt='slider1' className='w-[250px] aspect-auto mx-[.5rem]' />
                    <img src={slider6} alt='slider1' className='w-[250px] aspect-auto mx-[.5rem]' />
                    <img src={slider1} alt='slider1' className='w-[250px] aspect-auto mx-[.5rem]' />
                    <img src={slider2} alt='slider1' className='w-[250px] aspect-auto mx-[.5rem]' />
                    <img src={slider3} alt='slider1' className='w-[250px] aspect-auto mx-[.5rem]' />
                    <img src={slider4} alt='slider1' className='w-[250px] aspect-auto mx-[.5rem]' />
                    <img src={slider5} alt='slider1' className='w-[250px] aspect-auto mx-[.5rem]' />
                    <img src={slider6} alt='slider1' className='w-[250px] aspect-auto mx-[.5rem]' />

                  </div>
                </div>

              </div>

              {/* snackbae Feature */}
              <div id='elementId' className='w-full h-fit bg-[#101010] md:p-[2rem]'>

                <p className='bg-white text-[#004AAD] px-[1.5rem] py-[.5rem] inline-block mt-[3rem] ml-[3rem] rounded-3xl font-Roboto font-[600]'>For Customer</p>

                <div className='w-fit mx-auto text-center mt-[2rem]'>
                  <p className=' font-inter font-[700] text-[2.4rem] md:text-[3rem] leading-[3.2rem] md:leading-[4.5rem] tracking-tighter text-[#E5E7EB]'>SnackBAE Features</p>
                  <p className=' font-inter font-[400] md:text-[1.2rem] leading-[1.6rem] tracking-tighter text-[#D1D5DB]'>Indulge in the ultimate dining experience with SnackBae!</p>
                </div>

                <div className='w-[70%] md:w-[90%] mx-auto h-fit flex md:flex-row flex-col md:items-start items-center justify-evenly gap-[2rem] mt-[4rem] pb-[2rem] '>
                  <div className='w-full md:w-[33%] h-fit text-center'>
                    <img src={foodicon} alt='foodicon' className=' relative left-[50%] translate-x-[-50%] mb-[1rem]' />
                    <p className='font-inter font-[600] text-[1.8rem] leading-[2.4rem] text-[#E5E7EB]'>Beat Decision Fatigue</p>
                    <p className='font-inter font-[400] text-[.9rem] leading-[1.6rem] text-[#D1D5DB]'>Say goodbye to decision fatigue! Get community-centred food recommendations tailored just for you, saving precious time on choosing what to eat.</p>
                  </div>

                  <div className='w-full md:w-[33%] h-fit text-center'>
                    <img src={DiscountIcon} alt='foodicon' className=' relative left-[50%] translate-x-[-50%] mb-[1rem]' />
                    <p className='font-inter font-[600] text-[1.8rem] leading-[2.4rem] text-[#E5E7EB]'>Pay and Save</p>
                    <p className='font-inter font-[400] text-[.9rem]  leading-[1.6rem] text-[#D1D5DB]'>Enjoy exclusive discounts every time you dine in by paying through SnackBae's convenient QR code system at participating eateries. It's quick, easy, and helps you save on every meal.</p>
                  </div>

                  <div className='w-full md:w-[33%] h-fit text-center'>
                    <img src={CustomerReviewIcon} alt='foodicon' className=' relative left-[50%] translate-x-[-50%] mb-[1rem]' />
                    <p className='font-inter font-[600] text-[1.8rem] leading-[2.4rem] text-[#E5E7EB]'>Be a Food Critic</p>
                    <p className='font-inter font-[400] text-[.9rem] leading-[1.6rem] text-[#D1D5DB]'>Share your expertise! Recommend dishes, eateries, and help others uncover the best sellers and hidden gems of Kolkata's vibrant food scene.</p>
                  </div>
                </div>
              </div>

              {/* partner section */}
              <div className='bg-[#004AAD] w-full h-fit  flex md:flex-row flex-col justify-around items-center relative '>
                <div className='md:w-[70%] lg:w-[50%] h-fit p-[1rem] '>
                  <p className='bg-white text-[#004AAD] px-[1.5rem] py-[.5rem] inline-block  rounded-3xl font-Roboto font-[600] mb-[1rem]'>For Partners</p>
                  <p className=' font-inter font-[700] text-[2.4rem] md:text-[3rem] leading-[3.2rem] md:leading-[4.5rem] tracking-tighter text-[#E5E7EB]'>Elevate Your Business: Revolutionize Customer Relations with SnackBae!</p>
                  <p className=' font-inter font-[400] md:text-[1.1rem] leading-[1.6rem] tracking-tighter text-[#D1D5DB]'>SnackBae is here to transform the way you engage with your customers and drive lasting relationships.</p>
                  <Link onClick={scrollSmooth} to='/joinAsPartner' className=' mt-[1rem] text-white bg-[#004AAD] px-[1.5rem] py-[.5rem] inline-block  rounded-3xl font-Roboto font-[600] border-2 border-white'>Learn More</Link>
                </div>
                {/* large-screen */}
                <img src={mobileImage} alt='mobileImage' className='md:block hidden w-[45%] lg:h-full aspect-auto' />
                {/* small-screen */}
                <div className='md:hidden w-full h-[400px] overflow-hidden flex justify-center '>
                  <img src={PhoneMockup2Image} alt='PhoneMockup2Image' className=' h-full aspect-auto' />

                </div>
              </div>

              {/* footer */}
              <Footer />
            </div>
          )
      }
    </>
  )
}

export default LandingPage