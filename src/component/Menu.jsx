import React from 'react'
import { RxCrossCircled } from "react-icons/rx";
import { useState } from 'react';


const Menu = () => {

  const [formData, setFormData] = useState({
    productName: '',
    productPrice: '',
    isVeg: '',
    category: '',
    description: '',
    productImage: null, // Added image state
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
      productImage: type === 'file' ? files[0] : prevData.productImage,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log('Form submitted:', formData);
  };

  function openPopup() {
    document.getElementById('popup').style.display = "block";
    document.getElementById('background').style.filter = "blur(2Px)";

}
function closePopup() {
    document.getElementById('popup').style.display = "none";
    document.getElementById('background').style.filter = "blur(0px)";

}

  return (
   
    <div className='w-full h-fit relative'>

         {/* QR code popup */}
         <div id="popup" className='w-[500px] h-[500px]  sm:left-[30%] fixed bg-[#FFFFFF] hidden  z-40 mt-[155px] rounded-2xl sm:p-4'>
                <div className='flex  items-center justify-between font-Roboto text-[1.2rem] text-[#0F172A] px-4 mt-2 border-b-2 mb-4 pb-2'>
                    <p>Add Menu item</p>
                    <RxCrossCircled onClick={closePopup} className='cursor-pointer' />
                </div>
                <div>
                <form onSubmit={handleFormSubmit}>
                <div>
          <label htmlFor="productImage">Product Image:</label>
          <input
            type="file"
            id="productImage"
            name="productImage"
            accept="image/*"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="productPrice">Product Price:</label>
          <input
            type="number"
            id="productPrice"
            name="productPrice"
            value={formData.productPrice}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="isVeg">Veg/Non-Veg:</label>
          <select
            id="isVeg"
            name="isVeg"
            value={formData.isVeg}
            onChange={handleInputChange}
          >
            <option value="">Select an option</option>
            <option value="Veg">Veg</option>
            <option value="Non-Veg">Non-Veg</option>
          </select>
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          >
            <option value="">Select a category</option>
            <option value="Fruits">Fruits</option>
            <option value="Vegetables">Vegetables</option>
            {/* Add more categories as needed */}
          </select>
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
                </div>
                
            </div>


         <div className='sm:w-[80%] w-full  h-[90px] z-10 bg-[#FDE030] mt-[70px] flex justify-between items-center px-4 sm:px-10 fixed '>
                <div>
                    <p className='text-[1.6rem] font-semibold'>Menu</p>
                    <p className='text-[.9rem]'>Manage your menu item here</p>
                </div>

                <div className='flex gap-5 '>
                    
                    <button onClick={openPopup} className='bg-[#004AAD] px-5 py-1.5 rounded-md border text-[.9rem] font-Roboto  border-[#000000B2] text-white'> +  Add Menu</button>
                </div>


            </div>
    </div>
  )
}

export default Menu