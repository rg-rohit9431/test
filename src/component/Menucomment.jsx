import React, { useEffect, useState } from 'react'
import { useSnackBae } from '../context/SnackBae';


//components
import Comment from './Comment';

//image
import commentImage from '../assets/commentImage.png';
import notliked from '../assets/notliked.png'
import good from '../assets/good.png'
import musttry from '../assets/musttry.png';
import axios from 'axios';

//icons
import { IoIosCloseCircleOutline } from "react-icons/io";

const Menucomment = () => {

    const { commentVisible, setCommentVisible, setMenuId, menuId, menuData, setMenuData } = useSnackBae();
    console.log("menu id : ", menuId);
    const [data, setData] = useState([]);

    useEffect(() => {
        const userId = JSON.parse(localStorage.getItem("user"))._id;
        console.log(userId);
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `http://localhost:4000/api/getMenuById/${menuId}`,
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setMenuData(response.data);
                console.log(menuData);
                console.log("fd", menuData?.menu?.name);

                const a = menuData.menu.mustTry;
                const b = menuData.menu.liked;
                const c = menuData.menu.notLiked;

                if (userId) {
                    if (a) {
                        const containsString = (a, userId) => a.some((element) => element.includes(userId));
                        console.log(userId);
                        if (containsString(a, userId)) {
                            setValue(5);
                        }
                    }
                    if (b) {
                        const containsString = (b, userId) => b.some((element) => element.includes(userId));
                        console.log(userId);
                        if (containsString(b, userId)) {
                            setValue(4);
                        }
                    }
                    if (c) {
                        const containsString = (c, userId) => c.some((element) => element.includes(userId));
                        console.log(userId);
                        if (containsString(c, userId)) {
                            setValue(1);
                        }
                    }
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [menuId]);
    const [newone, setNewone] = useState(false);
    const [notlikedone, setNotliked] = useState(false);
    const [goodone, setGood] = useState(false);
    const [musttryone, setMustTry] = useState(false);
    const [comment, setComment] = useState('');

    const calculateTimeDifference = (fateDate) => {
        // Convert fate date to Date object
        const fateDateTime = new Date(fateDate);

        // Current date
        const currentDate = new Date();

        // Calculate time difference in milliseconds
        const timeDifference = currentDate.getTime() - fateDateTime.getTime();

        // Convert milliseconds to days, weeks, or months
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const weeksDifference = Math.floor(daysDifference / 7);
        const monthsDifference = Math.floor(daysDifference / 30);

        // Determine appropriate label based on time difference
        if (monthsDifference >= 1) {
            return `${monthsDifference} month${monthsDifference > 1 ? 's' : ''} ago`;
        } else if (weeksDifference >= 1) {
            return `${weeksDifference} week${weeksDifference > 1 ? 's' : ''} ago`;
        } else {
            if (daysDifference == 0)
                return "Today"
            else
                return `${daysDifference} day${daysDifference > 1 ? 's' : ''} ago`;
        }
    };

    const commentHandler = (e) => {
        setComment(e.target.value);
    }

    const submitHandler = () => {
        console.log(comment);
        let com = { "description": "", rated: "" };
        com.description = comment;

        const a = menuData.menu.mustTry;
        const b = menuData.menu.liked;
        const c = menuData.menu.notLiked;
        const userId = JSON.parse(localStorage.getItem("user"))._id;
        if (userId) {
            if (a) {
                const containsString = (a, userId) => a.some((element) => element.includes(userId));
                console.log(userId);
                if (containsString(a, userId)) {
                    com.rated = "mustTry";
                }
            }
            if (b) {
                const containsString = (b, userId) => b.some((element) => element.includes(userId));
                console.log(userId);
                if (containsString(b, userId)) {
                    com.rated = "liked";
                }
            }
            if (c) {
                const containsString = (c, userId) => c.some((element) => element.includes(userId));
                console.log(userId);
                if (containsString(c, userId)) {
                    com.rated = "notLiked";
                }
            }
        }
        let data = JSON.stringify(com);

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `http://localhost:4000/api/addComment/${userId}/${menuId}`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));

                let config = {
                    method: 'get',
                    maxBodyLength: Infinity,
                    url: `http://localhost:4000/api/getMenuById/${menuId}`,
                    headers: {}
                };

                axios.request(config)
                    .then((response) => {
                        console.log(JSON.stringify(response.data));
                        setMenuData(response.data);
                        console.log(menuData);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                console.log(error);
            });
            setComment('')
    }
    //input range
    const [value, setValue] = useState(4);

    const handleInputChange = (event) => {
        setValue(parseInt(event.target.value));
    };

    useEffect(() => {
        const rating = { "rated": "" };
        if (value <= 2)
            rating.rated = "notLiked";
        else if (value > 2 && value <= 4)
            rating.rated = "liked";
        else
            rating.rated = "mustTry";

        let data = JSON.stringify(rating);
        const userId = JSON.parse(localStorage.getItem("user"))._id;
        let config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: `http://localhost:4000/api/updateRating/${userId}/${menuId}`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                // setValueChanged(!valueChanged);

                let config1 = {
                    method: 'get',
                    maxBodyLength: Infinity,
                    url: `http://localhost:4000/api/getMenuById/${menuId}`,
                    headers: {}
                };

                axios.request(config1)
                    .then((response) => {
                        console.log(JSON.stringify(response.data));
                        setMenuData(response.data);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                console.log(error);
            });
    }, [value]);

    const handleClick = () => {
        setSliderColor('#FFD628');
    };

    const getEmoji = () => {
        if (value <= 2) {
            return <img src={notliked} alt="notliked" className='w-[30px] aspect-square' />; // Bad
        } else if (value <= 4) {
            return <img src={good} alt="good" className='w-[30px] aspect-square' />; // Good
        } else {
            return <img src={musttry} alt="musttry" className='w-[30px] aspect-square' />; // Must Try
        }
    };


    return (
        <div className=' relative w-full h-0 '>
            <div
                className={` border-2 rounded-t-3xl fixed bottom-0 left-[50%] translate-x-[-50%] max-w-[400px] h-[90vh] overflow-scroll hideScroller w-full comment ${commentVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                <div className='relative'>
                    <IoIosCloseCircleOutline
                        onClick={() => {
                            setMenuId("");
                            setCommentVisible(!commentVisible);
                        }}
                        className='text-[2rem] cursor-pointer fixed right-[1rem] top-[1rem] text-[#426CFF]' />
                </div>
                <img src={menuData?.menu?.image} alt="commentImage" className='h-[180px] aspect-auto object-contain mx-auto mt-[1rem]' />

                <p className='font-Roboto font-[500] sm:text-[1.2rem] my-[.5rem] text-center'>{menuData?.menu?.name}</p>

                <div className='flex gap-[1rem] items-center my-[.5rem] px-[20px]'>
                    <div className='p-[.5rem] rounded-md flex items-center justify-start w-fit h-fit border-2  bg-white'>
                        {menuData?.menu?.veg !== "Yes" &&
                            <div className='bg-[#ED4F4F] rounded-full w-[10px] aspect-square'></div>
                        }
                        {menuData?.menu?.veg == "Yes" &&
                            <div className='bg-[#2eae4e] rounded-full w-[10px] aspect-square'></div>
                        }
                    </div>
                    <p className='text-[#0F172AB2] font-Roboto font-[500]'>Category</p>
                </div>

                <p className='font-inter font-[400] text-[.9rem] text-[#64748B] text-center px-[20px]'>{menuData?.menu?.description}</p>

                {/* input slider */}
                <div className="flex flex-col items-center mb-[1rem]">
                    <div className="flex items-center justify-center mt-4">
                        <div
                            className=" flex items-center justify-center rounded-full border-2 border-yellow-300">
                            {getEmoji()}
                        </div>
                    </div>
                    <div className="mt-2">
                        {value <= 2 && <span>Not Liked</span>}
                        {value > 2 && value <= 4 && <span>Good</span>}
                        {value > 4 && <span>Must Try</span>}
                    </div>

                    <input
                        type="range"
                        min="2"
                        max="6"
                        step="2"
                        value={value}
                        onChange={handleInputChange}
                        className="w-64 h-[10px] mt-[1rem]  bg-[#00000069] appearance-auto accent-[#FFD601] cursor-pointer"
                    />
                </div>

                {/* comment */}
                <div className='relative w-[90%] mx-auto h-fit shadow-md rounded-lg'>
                    <textarea
                        className='w-full h-[10rem] focus:outline-none p-[1rem]'
                        placeholder='Write your thoughts....'
                        value={comment}
                        onChange={commentHandler} />
                    <button
                        onClick={submitHandler}
                        className=' bg-[#FFD628] px-[1.4rem] py-[.5rem] rounded-md font-[500] text-[1rem] leading-[1.15rem] absolute right-[1rem] bottom-[1rem]'>Submit</button>
                </div>

                <div className='w-full sticky top-0 bg-white z-[100] pb-[.5rem] border-b-2'>
                    {/* notlike,good,musttry */}
                    <div className='w-full flex justify-evenly mt-[1rem] '>
                        <div className='flex flex-col items-center px-[2rem] py-[1rem] border-r-2'>
                            <p className='font-inter font-[500] text-[.9rem] sm:text-[1rem] mb-[.5rem]'>{menuData?.menu?.notLikedCount}</p>
                            <img src={notliked} alt="notliked" />
                            <p className='font-inter font-[400] text-[.6rem] sm:text-[.9rem] text-center mt-[.5rem]'>Not Liked</p>
                        </div>
                        <div className='flex flex-col items-center px-[2rem]  py-[1rem]'>
                            <p className='font-inter font-[500]  text-[.9rem] sm:text-[1rem] mb-[.5rem]'>{menuData?.menu?.likedCount}</p>
                            <img src={good} alt="good" />
                            <p className='font-inter font-[400] text-[.6rem] sm:text-[.9rem] text-center mt-[.5rem]'>Good</p>
                        </div>
                        <div className='flex flex-col items-center px-[2rem] py-[1rem] border-l-2'>
                            <p className='font-inter font-[500]  text-[.9rem] sm:text-[1rem] mb-[.5rem]'>{menuData?.menu?.mustTryCount}</p>
                            <img src={musttry} alt="musttry" />
                            <p className='font-inter font-[400] text-[.6rem] sm:text-[.9rem] text-center mt-[.5rem]'>Must Try</p>
                        </div>
                    </div>


                    <div className='flex justify-evenly items-center my-[1rem]'>
                        <button
                            onClick={() => {
                                setGood(false);
                                setNewone(!newone);
                                setNotliked(false);
                                setMustTry(false);
                            }}
                            className=' bg-[#FFD628] px-[1.2rem] py-[.5rem] rounded-md font-[500] text-[1rem] leading-[1.15rem]'>New</button>
                        <button
                            onClick={() => {
                                setGood(false);
                                setNewone(false);
                                setNotliked(!notlikedone);
                                setMustTry(false);
                            }}
                            className=' bg-[#FFD628] px-[1.2rem] py-[.5rem] rounded-md font-[500] text-[1rem] leading-[1.15rem]'>Not Liked</button>
                        <button
                            onClick={() => {
                                setGood(!goodone);
                                setNewone(false);
                                setNotliked(false);
                                setMustTry(false);
                            }}
                            className=' bg-[#FFD628] px-[1.2rem] py-[.5rem] rounded-md font-[500] text-[1rem] leading-[1.15rem]'>Good</button>
                        <button
                            onClick={() => {
                                setGood(false);
                                setNewone(false);
                                setNotliked(false);
                                setMustTry(!musttryone);
                            }}
                            className=' bg-[#FFD628] px-[1.2rem] py-[.5rem] rounded-md font-[500] text-[1rem] leading-[1.15rem]'>Must try</button>
                    </div>
                </div>

                <div>
                    {menuData?.menu?.comments.map((comment) => (
                        <div className=' relative w-[80%] mx-auto h-fit border-2 p-[1rem] my-[1rem] rounded-3xl shadow-xl'>
                            <div className='w-full flex justify-evenly items-center'>
                                <img src={comment?.userId?.profileImage} alt="dummyimage" className='w-[40px] aspect-square rounded-full ' />
                                <p className='font-inter font-[500] text-[#334253]'>{comment?.userId?.name}</p>
                                <p className='font-inter font-[400] text-[#67727E]'>{calculateTimeDifference(comment?.createdAt)}</p>
                            </div>
                            <p className='font-inter font-[400] text-[#67727E] p-[1rem] pb-[3rem]'>{comment?.description}</p>
                            <div >
                                {comment?.rated == "mustTry" &&
                                    <div className='w-fit h-fit mt-[.5rem] flex flex-col items-center absolute right-[1rem] bottom-[1rem]'>
                                        <img src={musttry} alt="musttry" className='w-[20px] aspect-square' />
                                        <p className='font-inter font-[400] mt-[3px]'>must try</p>
                                    </div>
                                }
                                {comment?.rated == "liked" &&
                                    <div className='w-fit h-fit mt-[.5rem] flex flex-col items-center absolute right-[1rem] bottom-[1rem]'>
                                        <img src={good} alt="musttry" className='w-[20px] aspect-square' />
                                        <p className='font-inter font-[400] mt-[3px]'>Liked</p>
                                    </div>
                                }
                                {comment?.rated == "notLiked" &&
                                    <div className='w-fit h-fit mt-[.5rem] flex flex-col items-center absolute right-[1rem] bottom-[1rem]'>
                                        <img src={notliked} alt="musttry" className='w-[20px] aspect-square' />
                                        <p className='font-inter font-[400] mt-[3px]'>Not liked</p>
                                    </div>
                                }
                            </div>
                        </div>
                    ))

                    }
                </div>
            </div>
        </div>
    )
}

export default Menucomment


