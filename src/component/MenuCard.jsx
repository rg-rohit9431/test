import React, { useEffect, useState } from 'react';
import { useSnackBae } from '../context/SnackBae';

//image
import burger from '../assets/burger.png';
import notliked from '../assets/notliked.png'
import good from '../assets/good.png'
import musttry from '../assets/musttry.png';

const MenuCard = ({items}) => {
    const {commentVisible,setCommentVisible,menuId, setMenuId ,setLogin,User } = useSnackBae();
    useEffect(()=>{
    // console.log(items);
    },[]);

    // console.log({items?.name})
    return (
      <div
        onClick={() => {
          User ? setCommentVisible(!commentVisible) :  setLogin(true);
          
          setMenuId(items._id);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="w-[170px] sm:w-[260px] h-fit p-[1rem] shadow-xl rounded-md cursor-pointer"
      >
        <div className="w-full relative">
          <img
            src={items?.image}
            alt="image-menu"
            className="h-[150px] aspect-auto object-contain mx-auto"
          />
          <div className="p-[.5rem] rounded-md flex items-center justify-start w-fit h-fit absolute top-[.3rem] sm:top-[1rem] left-[.3rem] sm:left-[1rem]  bg-white border-2">
            <div
              className={`${
                items.veg === "Yes" ? "bg-[#67CE67]" : "bg-[#ED4F4F]"
              } rounded-full w-[10px] aspect-square `}
            ></div>
          </div>
          <p className="w-fit px-[.5rem] rounded-xl bg-[#FFD628] font-[500] sm:text-[1.2rem] absolute bottom-[.3rem] sm:bottom-[1rem] right-[.3rem] sm:right-[1rem] ">
            ₹ {items.price}
          </p>
        </div>
        <div>
          <p className="font-Roboto font-[500] sm:text-[1.2rem] my-[.5rem] text-center text-nowrap text-ellipsis overflow-hidden">
            {items?.name}
          </p>
          <div className="w-full flex justify-evenly ">
            <div className="flex flex-col items-center p-[.5rem] border-r-2">
              <p className="font-inter font-[500] text-[.9rem] sm:text-[1rem] mb-[.5rem]">
                {items.notLikedCount}
              </p>
              <img src={notliked} alt="notliked" />
              <p className="font-inter font-[400] text-[.6rem] sm:text-[.9rem] text-center mt-[.5rem]">
                Not Liked
              </p>
            </div>
            <div className="flex flex-col items-center p-[.5rem] ">
              <p className="font-inter font-[500]  text-[.9rem] sm:text-[1rem] mb-[.5rem]">
                {items.likedCount}
              </p>
              <img src={good} alt="good" />
              <p className="font-inter font-[400] text-[.6rem] sm:text-[.9rem] text-center mt-[.5rem]">
                Good
              </p>
            </div>
            <div className="flex flex-col items-center p-[.5rem] border-l-2">
              <p className="font-inter font-[500]  text-[.9rem] sm:text-[1rem] mb-[.5rem]">
                {items.mustTryCount}
              </p>
              <img src={musttry} alt="musttry" />
              <p className="font-inter font-[400] text-[.6rem] sm:text-[.9rem] text-center mt-[.5rem]">
                Must try
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default MenuCard