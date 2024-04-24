import React, { useEffect, useState } from "react";
import { useSnackBae } from "../context/SnackBae";
import { useNavigate } from "react-router-dom";

//components
import MerchantNavbar from "../component/MerchantNavbar";
import { useParams } from "react-router-dom";
import ToggleSwitch from "../component/ToggleSwitch";
import MenuCard from "../component/MenuCard";
import MerchantOffers from "../component/MerchantOffers";
import Menucomment from "../component/Menucomment";
import MerchantEvents from "../component/MerchantEvents";
import MerchantShare from "../component/MerchantShare";

//icons
import { MdOutlineShare } from "react-icons/md";
import { FaAnglesRight } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

//image
import Instagram from "../assets/Instagram.png";
import groupImage from "../assets/groupImage.png";
import eventnofound from "../assets/eventnofound.png";
import Restaurantmenu from "../assets/Restaurantmenu.png";
import termsImage from "../assets/termsImage.png";

// otp
import { auth } from "../firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

import axios from "axios";

//restaurentdata
const restaurantOffers = [

];

const restaurantEvents = [

];

const MerchantProfile = () => {
  const {
    login,
    setLogin,
    isOn,
    setIsOn,
    setShareVisible,
    shareVisible,
    restaurentdata,
    setRestaurentData,
    menuId,
  } = useSnackBae();

  const { id } = useParams();
  // const [restaurentdata, setrestaurentdata] = useState(null);
  const [recommend, setRecommend] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `http://localhost:4000/api/getRestaurantDetails/${id}`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data.restaurant);
        setRestaurentData(response.data.restaurant);
        console.log(restaurentdata);
        const userId = JSON.parse(localStorage.getItem("user"))._id;
        const a = response.data.restaurant?.recommendedBy;
        console.log(a);

        if (userId) {
          if (a) {
            const containsString = (a, userId) => a.some((element) => element.includes(userId));
            console.log(userId);
            if (containsString(a, userId)) {
              console.log(containsString(a, userId));
              let recommand = document.getElementById("recommand");
              recommand.style.backgroundColor = "#FFD628";
            } else {
              let recommand = document.getElementById("recommand");
              recommand.style.backgroundColor = "";
            }
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [recommend]);

  //searchbar
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const handleRecommand = async () => {
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    console.log(userId);
    if (userId) {
      let data = "";

      let config = {
        method: "put",
        maxBodyLength: Infinity,
        url: `http://localhost:4000/api/toggleRecommendation/${userId}/${id}`,
        headers: {},
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          setRecommend(!recommend);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setLogin(true);
      setOtp(true);
    }
  };

  const [menus, setMenus] = useState(true);
  const [events, setEvents] = useState(false);
  const [offers, setoffers] = useState(false);
  const [filter, setFilter] = useState(false);

  const scrollToElement = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  //login and signup
  const [openphno, setOpenPhno] = useState(true);
  const [openotp, setOpenOtp] = useState(false);
  const [openprofile, setOpenProfile] = useState(false);
  const [user, setUser] = useState();
  // phoneNumber
  const [phoneNumber, setPhoneNumber] = useState("");
  const handlePhoneChange = (e) => {
    const inputPhoneNumber = e.target.value.replace(/\D/g, "");
    if (inputPhoneNumber.length <= 10) {
      setPhoneNumber(inputPhoneNumber);
    }
  };

  const handleSubmit = async () => {
    console.log("inside onsignup");
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha-container", {});
      const formatPh = "+91" + phoneNumber;
      console.log(formatPh);
      // const confirmation = await signInWithPhoneNumber(auth, formatPh);
      const confirmation = await signInWithPhoneNumber(
        auth,
        formatPh,
        recaptcha
      );
      console.log(confirmation);
      setUser(confirmation);
      setOpenPhno(false);
      setOpenOtp(true);
    } catch (err) {
      console.log(err);
    }
  };

  //otp
  const [otp, setOtp] = useState("");
  const handleOtpChange = (e) => {
    const otpNumber = e.target.value.replace(/\D/g, "");
    if (otpNumber.length <= 6) {
      setOtp(otpNumber);
    }
  };

  const handleOtpSubmit = async () => {
    try {
      await user.confirm(otp);
      //   toast({
      //     title: "OTP verified",
      //     status: "success",
      //     duration: 5000,
      //     isClosable: true,
      //     position: "top-right",
      //   });
      //   setMobile(false);
      //   setShowOTP(false);

      // setOpenPhno(false);
      // setOpenOtp(false);

      // finding if user exists
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `http://localhost:4000/api/checkContactExists/${phoneNumber}`,
        headers: {},
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          if (response.data.length != 0) {
            // if user exists
            console.log("inside if user exists");

            localStorage.setItem("user", JSON.stringify(response.data.data));
            setOpenPhno(false);
            setOpenOtp(false);
            setOpenProfile(true);
            navigate(`/profile/merchant/${id}`);
          } else {
            setLogin(false);
            setOpenPhno(false);
            setOpenOtp(false);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (e) {
      console.log(e);
    }
  };

  //current date
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;

  //profile
  const [profileData, setProfileData] = useState({
    profileImage:
      "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1709387339~exp=1709390939~hmac=2bbe2e46b4676e1e7592d5557de6c4768adbf2da781cd9c59e6660fd2b1dbba3&w=740",
    fullName: "user",
    gender: "male",
    dob: currentDate,
    contact: "",
    email: "abc@gmail.com",
    foodPreference: "veg",
    anniversary: "",
    terms: false,
  });

  const handleChangeProfile = (e) => {
    const { name, value, type, checked, files } = e.target;

    setProfileData((prevProfileData) => ({
      ...prevProfileData,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };
  const handleImagePreview = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData((prevProfileData) => ({
          ...prevProfileData,
          profileImage: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitProfile = async (e) => {
    e.preventDefault();
    console.log("Profile data :", profileData);

    const data = JSON.stringify(profileData);
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:4000/api/addUser",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        localStorage.setItem("user", JSON.stringify(response.data.data));
        setLogin(false);
        setOpenProfile(false);
        navigate(`/profile/merchant/${id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //payment
  const [paymentamount, setPaymentAmount] = useState("");
  const [paymentVisible, setPaymentVisible] = useState(false);
  const [ishidden, setIsHidden] = useState(false);


  //search bar
  const searchMenu = async (req, res) => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `http://localhost:4000/api/searchMenu/${id}/${search}`,
      headers: {}
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //get all menu items for recommendation
  const forRecommendation = async (req, res) => {

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `http://localhost:4000/api/getTop5/${id}`,
      headers: {}
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="w-full h-fit">
      <MerchantNavbar />
      {login && (
        <div
          className=" absolute top-[70px] w-full h-fit py-[1rem]  min-h-[calc(100vh-70px)] bg-white opacity-95 z-[1000] border-2
            flex justify-center items-center"
        >
          {/* phoneNumber */}
          {openphno && (
            <div className="max-w-[320px] w-full h-fit rounded-md border-2 flex flex-col justify-center bg-white">
              <div className="w-full flex justify-between items-center gap-[4rem] p-[1rem] border-b-2">
                <p className="font-inter font-[600] text-[1.1rem] leading-[32px]">
                  Login or Signup{" "}
                </p>
                <IoClose
                  onClick={() => {
                    setLogin(!login);
                  }}
                  className="text-[1.4rem] cursor-pointer"
                />
              </div>
              <div className="w-[90%] mx-auto">
                <p className="font-inter font-[600] text-[1.1rem] leading-[32px] text-[#0000009E] py-[.5rem]">
                  Enter Mobile Number
                </p>
                <input
                  className="w-full h-[3rem] focus:outline-none border-2 border-[#FFD600] rounded-md pl-[1rem]"
                  type="tel"
                  placeholder="Enter Your Number"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  required
                />
              </div>
              <button
                onClick={handleSubmit}
                className="w-[90%] mx-auto h-[3rem] my-[1rem] bg-[#FFD600] text-[#004AAD] rounded-md font-inter font-[700] text-[1.1rem] leading-[32px]"
              >
                Continue
              </button>
              <div id="recaptcha-container"></div>
            </div>
          )}

          {/* otp */}
          {openotp && (
            <div className="max-w-[320px] w-full h-fit rounded-md border-2 flex flex-col justify-center relative">
              <div className=" relative w-full h-fit my-[1rem]">
                <IoClose
                  onClick={() => {
                    setLogin(!login);
                  }}
                  className="text-[1.4rem] absolute right-[1rem] cursor-pointer"
                />
              </div>
              <p className="w-[90%] mx-auto font-inter font-[500] leading-[32px] text-[#0000009E] py-[.5rem] ">
                Enter OTP sent on +91 <span>{phoneNumber}</span>
              </p>
              <input
                className="w-[90%] mx-auto
                                 h-[3rem] focus:outline-none border-2 border-[#FFD600] rounded-md pl-[1rem]"
                type="text"
                placeholder="Enter Your Otp"
                value={otp}
                onChange={handleOtpChange}
                required
              />

              <button
                onClick={handleOtpSubmit}
                className="w-[90%] mx-auto h-[3rem] my-[1rem] bg-[#FFD600] text-[#004AAD] rounded-md font-inter font-[700] text-[1.1rem] leading-[32px]"
              >
                Verify
              </button>
            </div>
          )}

          {/* profile */}
          {openprofile && (
            <div className="max-w-[320px] w-full h-fit rounded-md border-2 flex flex-col justify-center relative">
              <p className="font-[600] font-sans text-[1.8rem]">
                Create Profile
              </p>

              {/* form */}
              <form className="w-[90%] mx-auto flex flex-col">
                {/* image */}

                <label
                  htmlFor="profileImage"
                  className="relative inline-block w-20 h-20 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                >
                  {profileData.profileImage ? (
                    <div className="">
                      <img
                        src={profileData.profileImage}
                        alt="Profile"
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <FaEdit size={20} className=" text-white" />{" "}
                        {/* Edit icon */}
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <span className="text-gray-600">Upload</span>
                    </div>
                  )}
                  <input
                    type="file"
                    id="profileImage"
                    name="profileImage"
                    accept="image/*"
                    required
                    className="absolute inset-0 opacity-0"
                    onChange={(e) => {
                      handleChangeProfile(e);
                      handleImagePreview(e);
                    }}
                  />
                </label>

                {/* fullName */}
                <div className="relative w-full flex flex-col">
                  <label
                    className="bg-white inline px-[1rem] w-fit h-fit relative top-[10px] left-[15px]"
                    htmlFor="fullName"
                  >
                    Full Name:
                  </label>
                  <input
                    className="border-2 border-[#EAB308] bg-white h-[3rem] rounded-md px-1 mb-[.5rem]"
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    onChange={handleChangeProfile}
                  />
                </div>
                {/* gender */}
                <label
                  className="bg-white inline px-[1rem] w-fit h-fit relative top-[10px] left-[15px]"
                  htmlFor="gender"
                >
                  Gender:
                </label>
                <select
                  className="border-2 border-[#EAB308] bg-white h-[3rem] rounded-md px-1 mb-[.5rem]"
                  id="gender"
                  name="gender"
                  value={profileData.gender}
                  onChange={handleChangeProfile}
                  required
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>

                {/* dob */}

                <label
                  className="bg-white inline px-[1rem] w-fit h-fit relative top-[10px] left-[15px]"
                  htmlFor="dob"
                >
                  Date of Birth:
                </label>
                <input
                  className="border-2 border-[#EAB308] bg-white h-[3rem] rounded-md px-1 mb-[.5rem]"
                  type="date"
                  id="dob"
                  name="dob"
                  required
                  onChange={handleChangeProfile}
                />

                {/* Anniversary */}

                <label
                  className="bg-white inline px-[1rem] w-fit h-fit relative top-[10px] left-[15px]"
                  htmlFor="anniversary"
                >
                  Anniversary :
                </label>
                <input
                  className="border-2 border-[#EAB308] bg-white h-[3rem] rounded-md px-1 mb-[.5rem]"
                  type="date"
                  id="anniversary"
                  name="anniversary"
                  onChange={handleChangeProfile}
                />

                {/* email */}

                <label
                  className="bg-white inline px-[1rem] w-fit h-fit relative top-[10px] left-[15px]"
                  htmlFor="email"
                >
                  Email ID:
                </label>
                <input
                  className="border-2 border-[#EAB308] bg-white h-[3rem] rounded-md px-1 mb-[.5rem]"
                  type="email"
                  id="email"
                  name="email"
                  required
                  onChange={handleChangeProfile}
                />

                {/* foodPreference */}
                <label
                  className="bg-white inline px-[1rem] w-fit h-fit relative top-[10px] left-[15px]"
                  htmlFor="foodPreference"
                >
                  Food Preference:
                </label>
                <select
                  className="border-2 border-[#EAB308] bg-white h-[3rem] rounded-md px-1 mb-[.5rem]"
                  id="foodPreference"
                  name="foodPreference"
                  value={profileData.foodPreference}
                  onChange={handleChangeProfile}
                  required
                >
                  <option value="veg">Veg</option>
                  <option value="nonveg">NonVeg</option>
                  <option value="Both">Both</option>
                </select>
                {/* terms */}
                <div className="mb-[.5rem]">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    checked={profileData.terms}
                    onChange={handleChangeProfile}
                    required
                  />
                  <label className="ml-[.5rem]" htmlFor="terms">
                    I accept the terms and conditions
                  </label>
                </div>

                <button
                  className="bg-[#EAB308] font-sen font-[500] px-6 py-3 rounded-md uppercase mb-[.5rem]"
                  type="button"
                  onClick={handleSubmitProfile}
                >
                  Continue
                </button>
              </form>
            </div>
          )}
        </div>
      )}

      {/* hero section */}
      <div className="relative w-full h-fit pb-[15vh]">
        <div className="bg-[#FFD628] w-full h-[25vh] rounded-b-3xl absolute z-[-1]"></div>
        <div className="bg-[#FFFFFF] w-[95%] md:w-[80%] h-fit mx-auto relative top-[10vh] shadow-md rounded-xl p-[1rem] md:p-[2rem] flex flex-row  justify-between items-center gap-[1rem]">
          <div className="sm:w-[70%] flex flex-col gap-[1.3rem]">
            <div className=" flex items-center  justify-evenly sm:justify-start">
              <img
                src={restaurentdata?.image}
                alt="logo"
                className="w-[50px] md:w-[150px] aspect-square object-cover mix-blend-multiply rounded-full mr-[.2rem] "
              />
              <div>
                <p className="font-Roboto font-[600] text-[1.2rem] leading-[1.2rem] md:text-[2.4rem] md:leading-[2.4rem]">
                  {restaurentdata?.name}
                </p>
                <p className=" text-[#0f172aca] font-Roboto font-[500] text-[.9rem] md:text-[1.2rem] md:leading-[1.8rem]">
                  Chinese,Italian and Indian
                </p>
              </div>
            </div>
            <div className="w-full flex flex-wrap gap-[.5rem] md:gap-[1rem] items-center justify-center sm:justify-start">
              <button
                onClick={handleRecommand}
                id="recommand"
                className=" px-[.5rem] py-[.2rem] sm:px-[1rem] sm:py-[.85rem] border-[2.5px] border-[#FFD628] rounded-lg font-inter font-[600] sm:text-[1rem] text-[.8rem] "
              >
                Recommend
              </button>
              <button
                onClick={() => {
                  setShareVisible(!shareVisible);
                }}
                className="p-[.3rem] sm:p-[1rem] border-[2.5px] border-[#FFD628] rounded-lg font-inter font-[600] "
              >
                <MdOutlineShare className="sm:text-[1.2rem]" />
              </button>
              <button className="p-[.3rem] sm:p-[.6rem] border-[2.5px] border-[#FFD628] rounded-lg font-inter font-[600] ">
                <img
                  src={Instagram}
                  alt="Instagram"
                  className="w-[15px] sm:w-[30px] aspect-square"
                />
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-[1rem] sm:gap-[2rem] ">
            <div className="p-[.5rem] sm:p-[1rem] bg-[#0000001A] w-fit h-fit rounded-lg">
              <div className="w-fit flex gap-[1rem] items-center">
                <img
                  src={groupImage}
                  alt="groupImage"
                  className="h-[20px] sm:h-[30px] lg:h-[40px] aspect-auto"
                />
                <p className="block font-Roboto font-[600] md:text-[1.4rem] leading-[1.5rem]">
                  {restaurentdata?.recommendationCount}
                </p>
              </div>
              <p className="block font-Roboto font-[400] text-[.9rem] sm:text-[1.1rem] leading-[1.5rem]  mt-[.5rem] text-center">
                Recommendation
              </p>
            </div>
            <button
              onClick={() => {
                setPaymentVisible(!paymentVisible);
              }}
              className="bg-[#004AAD] rounded-lg flex gap-[1rem] items-center justify-center sm:px-[1rem] text-white sm:py-[.5rem] px-[.5rem] py-[.3rem]"
            >
              <p className=" font-sans font-[600] sm:text-[1.2rem] ">
                Pay Bill
              </p>
              <FaAnglesRight className="sm:text-[1.2rem]" />
            </button>
          </div>
        </div>
      </div>

      <div className=" sticky top-0 pt-[3rem] w-[95%] md:w-[80%] mx-auto bg-white z-[100] ">
        <div className=" relative  ">
          <div className="flex border-b-[2px] gap-[1.5rem]  px-[1rem]">
            <button
              onClick={() => {
                setMenus(!menus);
                setEvents(false);
                setoffers(false);
              }}
              className={` font-inter font-[600] text-[1rem] leading-[1.6rem] ${menus
                ? "text-[#004AAD] border-b-[5px] border-[#004AAD]"
                : "text-black"
                }`}
            >
              Menu
            </button>
            <button
              onClick={() => {
                setMenus(false);
                setEvents(!events);
                setoffers(false);
              }}
              className={` font-inter font-[600] text-[1rem] leading-[1.6rem] ${events
                ? "text-[#004AAD] border-b-[5px] border-[#004AAD]"
                : "text-black"
                }`}
            >
              Events
            </button>
            <button
              onClick={() => {
                setMenus(false);
                setEvents(false);
                setoffers(!offers);
              }}
              className={` font-inter font-[600] text-[1rem] leading-[1.6rem] ${offers
                ? "text-[#004AAD] border-b-[5px] border-[#004AAD]"
                : "text-black"
                } `}
            >
              Offers
            </button>
          </div>

          <div className=" flex flex-wrap  gap-[.5rem] justify-between items-center py-[2rem] overflow-hidden border-b-2">
            <div className="relative w-fit  shadow-xl rounded-md border-2 ">
              <input
                className=" w-[250px] sm:w-[400px] focus:outline-none h-[3rem] px-[1rem]"
                type="text"
                placeholder="Search for dish"
                value={search}
                onChange={handleSearch}
              />
              <CiSearch className=" absolute right-[1rem] top-[50%] translate-y-[-50%] text-[1.3rem]" />
            </div>
            <div className="flex gap-[1rem] items-center w-fit">
              <div className="p-[.5rem] rounded-md border-2 flex items-center justify-start w-fit h-fit ">
                <div
                  className={`${isOn ? "bg-[#67CE67]" : "bg-[#ED4F4F]"
                    } rounded-full w-[10px] aspect-square`}
                ></div>
              </div>
              <ToggleSwitch />
            </div>
          </div>
        </div>
      </div>

      {/* menufilter */}
      <div
        className={`${filter ? "max-w-[260px]" : "hidden"
          }  bg-white shadow-lg py-[1rem] px-[1.5rem] rounded-md text-center fixed bottom-[5rem] left-[50%] translate-x-[-50%] z-[100]`}
      >
        <div className="text-[#5E5E5E] font-inter font-[700] text-[1.1rem] sm:text-[1.2rem] flex justify-around items-center border-b-2 py-[.5rem] gap-[1rem] ">
          <p>Browse Menu</p>
          <IoIosCloseCircleOutline
            onClick={() => {
              setFilter(!filter);
            }}
            className="text-[2rem] cursor-pointer"
          />
        </div>
        {restaurentdata?.category.map((category, index) => (
          <div key={index}>
            <p className="py-[.5rem] font-inter font-[400] sm:text-[1.1rem] cursor-pointer">
              {category?.name}
            </p>
          </div>
        ))}
      </div>

      {/* menucomment */}
      <div>
        {menuId &&
          <Menucomment />
        }
      </div>


      {/* MerchantShare */}
      <MerchantShare />

      {/* paybill */}
      <div className="w-full h-0 relative">
        <div
          className={`fixed bottom-0 left-[50%] translate-x-[-50%] max-w-[400px] w-full hideScroller h-[100vh] z-[3000] bg-white border-2 overflow-scroll comment ${paymentVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0"
            }`}
        >
          <IoClose
            onClick={() => {
              setPaymentVisible(!paymentVisible);
            }}
            className="absolute right-[1rem] top-[1rem] text-[#426CFF] text-[1.5rem] cursor-pointer"
          />

          <div className="w-full h-fit mt-[2rem]">
            {/* logo-image */}
            <img
              src={restaurentdata?.image}
              alt="merchant-logo"
              className="w-[100px] aspect-square rounded-full mx-auto"
            />
            <p className="font-inter font-[600] text-[1.1rem] leading-[32px] text-center">
              Paying to FOODOOS
            </p>
            <p className="font-inter font-[400] leading-[32px] text-center">
              AMP Baisakhi Mall,Salt Lake
            </p>

            {/* pay-amount */}
            <div className="w-fit flex bg-[#D9D9D938] justify-center items-center  px-[1rem] py-[.5rem] mx-auto rounded-md my-[.5rem]">
              <p className="font-inter font-[400] leading-[24px] text-[35px] text-[#262627]">
                ₹
              </p>
              <input
                className="w-[7rem] h-[3rem] focus:outline-none bg-transparent text-[1.5rem] text-[#262627C7] font-[700] font-inter  px-[.5rem]"
                type="text"
                placeholder="400"
                value={paymentamount}
                onChange={(e) => {
                  setPaymentAmount(e.target.value);
                  console.log(paymentamount);
                }}
              />
            </div>

            <div className="flex justify-center items-center gap-[.5rem] py-[1rem]">
              <div className="w-[110px] h-[.7px] bg-[#00000057]"></div>
              <p className="font-[500] font-inter leading-[19.36px] uppercase">
                Redeem Offers
              </p>
              <div className="w-[110px] h-[.7px] bg-[#00000057]"></div>
            </div>

            {/* offers */}

            <div className={` flex gap-[1rem] overflow-x-scroll hideScroller`}>
              {restaurantOffers.map((offer, index) => (
                <MerchantOffers key={index} offer={offer} />
              ))}
            </div>

            {/* payment */}

            <div className="flex justify-center items-center gap-[.5rem] py-[1rem]">
              <div className="w-[110px] h-[.7px] bg-[#00000057]"></div>
              <p className="font-[500] font-inter leading-[19.36px] uppercase">
                Bill Summary
              </p>
              <div className="w-[110px] h-[.7px] bg-[#00000057]"></div>
            </div>

            <div className="w-[90%] mx-auto border-2 rounded-xl p-[1rem]">
              <div className="flex justify-between items-center my-[.25rem]">
                <p className="font-[400] font-inter leading-[19.36px] uppercase">
                  Bill Amount{" "}
                </p>
                <p className="text-[#262627C7]">₹ {paymentamount}</p>
              </div>

              <div className="flex justify-between items-center my-[.25rem] ">
                <p className="font-[400] font-Roboto leading-[19.36px] text-[#004AAD]">
                  offers
                </p>
                <p className="text-[#004AAD]">-₹ {paymentamount}</p>
              </div>

              <div className="flex justify-between items-center my-[.25rem] ">
                <p className="font-[400] font-Roboto leading-[19.36px]">
                  Convenience fee
                </p>
                <p className="text-[#262627C7]">₹ {paymentamount}</p>
              </div>

              <div className="w-full h-[1px] bg-[#00000057] my-[1rem]"></div>

              <div className="flex justify-between items-center my-[.25rem] ">
                <p className="font-[600] font-inter leading-[19.36px]">
                  To be paid
                </p>
                <p className="text-[#262627C7]">₹ {paymentamount}</p>
              </div>
            </div>

            <div className="w-[90%] mx-auto h-fit my-[2rem] py-[1rem] border-2 rounded-3xl">
              <div className="flex justify-around items-center">
                <div className="flex gap-[1rem] items-center">
                  <img
                    src={termsImage}
                    alt="termsImage"
                    className="h-[20px] aspect-auto"
                  />
                  <p className="text-[#262627] font-inter font-[700] leading-[24px]">
                    Terms & Conditions
                  </p>
                </div>

                {!ishidden ? (
                  <FaChevronUp
                    className=" cursor-pointer"
                    onClick={() => {
                      setIsHidden(!ishidden);
                    }}
                  />
                ) : (
                  <FaChevronDown
                    className=" cursor-pointer"
                    onClick={() => {
                      setIsHidden(!ishidden);
                    }}
                  />
                )}
              </div>
              <div
                className={`border-dotted border-2 w-[90%] mx-auto   ${ishidden
                  ? "opacity-0 h-0 duration-200 transition-opacity transition-height"
                  : "opacity-100 h-auto duration-200 transition-opacity transition-height my-[1rem] p-[1rem]"
                  }`}
              >
                <p className="my-[.5rem] font-inter font-[400] text-[12px] leading-[19.2px] text-[#262627]">
                  No refund on any purchase are possible{" "}
                </p>
                <p className="my-[.5rem] font-inter font-[400] text-[12px] leading-[19.2px] text-[#262627]">
                  Refunds are only processed by the merchants
                </p>
                <p className="my-[.5rem] font-inter font-[400] text-[12px] leading-[19.2px] text-[#262627]">
                  By paying, you consent to receive communications via email,
                  whatsapp from the associated entities.
                </p>
              </div>
            </div>

            <button className="  bg-[#4BCA59] text-[#ffffff] font-[700] font-Roboto max-w-[300px] w-full h-[3.6rem] mx-auto mb-[1rem] rounded-md flex justify-center items-center gap-[1rem]">
              <FaWhatsapp className="text-[2rem]" /> WhatsApp
            </button>
          </div>

          <div className="sticky bottom-0 w-full bg-white border-2 p-[1rem] rounded-t-3xl">
            <button className="  bg-[#004AAD] text-[#ffffff] font-[700] font-Roboto w-[300px]  h-[3.6rem] mx-auto  rounded-md block">
              Pay Now
            </button>
          </div>
        </div>
      </div>

      {/* menu */}
      {menus && (
        <div>
          {/* Restaurantmenu */}
          {restaurentdata?.category.map((category) => (
            <div className="w-[95%] md:w-[80%] mx-auto">
              {/* Most Recomended */}
              <div id={category?.name} className="w-full h-fit py-[1rem]">
                <div className="w-full flex justify-between items-center my-[1rem]">
                  <p className="font-Roboto font-[500] text-[1.4rem] leading-[3rem]">
                    {category?.name}
                  </p>
                  <FaAngleDown className={`text-[1.4rem]`} />
                </div>
                <div className="flex flex-wrap items-center justify-center gap-[.5rem]">
                  {category?.menuItems.map(
                    (items, index) => (
                      <MenuCard key={index} items={items} />
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* offers  */}
      {offers && (
        <div>
          {restaurantOffers?.length == 0 ? (
            <div className="w-full flex flex-col items-center p-[2rem] pb-[6rem]">
              <img
                src={eventnofound}
                alt="eventnofound"
                className="w-[200px] md:w-[260px] aspect-auto"
              />
              <p className=" font-Sen font-[700] text-[1.6rem] md:text-[2.4rem] leading-[3rem] text-center">
                Opps ! no offers found
              </p>
              <p className=" font-Sen font-[400] md:text-[1.6rem] md:leading-[2rem] text-[#525C67] text-center">
                Restaurant dont have any active offers
              </p>
            </div>
          ) : (
            <div className="w-[90%] mx-auto h-fit flex flex-wrap gap-[.5rem] items-center justify-center my-[1rem]">
              {restaurantOffers.map((offer, index) => (
                <MerchantOffers key={index} offer={offer} />
              ))}
            </div>
          )}
        </div>
      )}

      {/* events  */}
      {events && (
        <div>
          {restaurantEvents?.length === 0 ? (
            <div className="w-full flex flex-col items-center p-[2rem] pb-[6rem]">
              <img
                src={eventnofound}
                alt="eventnofound"
                className="max-w-[260px] aspect-auto"
              />
              <p className=" font-Sen font-[700] text-[1.6rem] md:text-[2.4rem] leading-[3rem] text-center">
                Opps ! no event found
              </p>
              <p className=" font-Sen font-[400] md:text-[1.6rem] md:leading-[2rem] text-[#525C67] text-center">
                Restaurant dont have any upcomming event{" "}
              </p>
            </div>
          ) : (
            <div className="w-[90%] mx-auto h-fit flex flex-wrap justify-center my-[1rem]">
              {restaurantEvents.map((event, index) => (
                <MerchantEvents key={index} event={event} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MerchantProfile;