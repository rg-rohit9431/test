import React, { useState } from 'react';
import { Link } from 'react-router-dom';


// dummy data for blogs
import teamMembers from '../TeamMember';

//icons
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";


//image
import about1 from '../assets/about1.png';
import about2 from '../assets/about2.png';

//components
import Footer from '../component/Footer';

const AboutUs = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScrollLeft = () => {
    const container = document.querySelector('.overflow-scroll');
    if (container) {
      container.scrollLeft -= 240;
      setScrollPosition(container.scrollLeft);
    }
  };

  const handleScrollRight = () => {
    const container = document.querySelector('.overflow-scroll');
    if (container) {
      container.scrollLeft += 240;
      setScrollPosition(container.scrollLeft);
    }
  };


  return (
    <div className='w-full h-fit'>
      {/* vission */}
      <div className='w-[90%] mx-auto py-[2rem] flex items-center justify-center md:flex-row flex-col-reverse '>
        <div className=' md:w-[60%] h-fit'>
          <p className='bg-[#FFFBEB] text-[#004AAD] px-[1.5rem] py-[.5rem] inline rounded-xl font-[600]  font-Roboto'>About Us</p>
          <p className='text-[#020617] font-Roboto font-[600]  text-[30px] md:text-[50px] leading-[60px] tracking-tight my-[.5rem]'>Vision</p>
          <p className='text-[#020617] font-Sen font-[400] md:text-[20px] leading-[30px] tracking-tight my-[.5rem]'>At SnackBae, our vision is to redefine the dining experience by providing innovative tools that enhance customer engagement, foster loyalty, and drive sustainable growth for businesses in the food industry.</p>
        </div>
        <img src={about1} alt='about1' className='w-[80%] md:w-[50%] aspect-auto' />
      </div>

      {/* mission */}
      <div className='w-[90%] mx-auto py-[2rem] flex items-center justify-center md:flex-row flex-col '>
        <img src={about2} alt='about2' className='w-[80%] md:w-[50%] aspect-auto' />
        <div className=' md:w-[60%] h-fit'>
          <p className='text-[#020617] font-Roboto font-[600] text-[30px] md:text-[50px] leading-[60px] tracking-tight my-[.5rem]'>Mission</p>
          <p className='text-[#020617] font-Sen font-[400] md:text-[20px] leading-[30px] tracking-tight my-[.5rem]'>Our mission at SnackBae is to empower restaurants and merchants with cutting-edge technology solutions to elevate the dining experience and increase customer retention. Through our innovative tools for marketing, loyalty-oriented offers, and data-driven insights, we strive to enable businesses to thrive in an ever-evolving landscape while delighting customers with personalized and memorable experiences.</p>
        </div>
      </div>

      {/* meet the team */}
      <p className='text-[#004AAD] font-Roboto font-[600]  text-[30px] md:text-[40px] leading-[60px] tracking-tight my-[.5rem] ml-[1rem]'>Meet The Team Member</p>
      <div className='relative'>
        <div className='overflow-scroll hideScroller w-full p-[1rem]'>
          <div
            className='w-[calc(240px*6)] flex gap-[1rem] justify-around'
            style={{ scrollBehavior: 'smooth' }}
          >
            {teamMembers.map((member, index) => (
              <Link target='_blank' to={member.linkedIn}>
                <div key={index} className="text-center w-[240px] h-fit">
                  <img src={member.image} alt={member.name} className='w-full aspect-square' />
                  <h2 className='text-[1.8rem] font-[500] leading-[2rem] mt-[.5rem] '>{member.name}</h2>
                  <p className='text-[1.1rem] text-nowrap text-[#004AAD]'>{member.position}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <button
          className='absolute top-[50%] translate-y-[-50%] left-0 bg-[#004AAD] bg-opacity-50 p-[1rem] rounded-full'
          onClick={handleScrollLeft}
          disabled={scrollPosition === 0}
        >
          <FaAngleLeft className='text-[1.4rem]' />
        </button>
        <button
          className='absolute top-[50%] translate-y-[-50%] right-0 bg-[#004AAD] bg-opacity-80  p-[1rem] rounded-full'
          onClick={handleScrollRight}
        >
          <FaAngleRight className='text-[1.4rem]' />
        </button>
      </div>


      {/* footer */}
      <Footer />
    </div>
  )
}

export default AboutUs