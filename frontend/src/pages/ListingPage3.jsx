import React, { useContext } from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { listingDataContext } from '../Context/ListingContext';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function ListingPage3() {
    let navigate = useNavigate()
    let {title,setTitle,
        description,setDescription,
        ameneties,setAmeneties,
        frontEndImage1,setFrontEndImage1,
        frontEndImage2,setFrontEndImage2,
        frontEndImage3,setFrontEndImage3,
        
        backEndImage1,setBackEndImage1,
        backEndImage2,setBackEndImage2,
        backEndImage3,setBackEndImage3,
        
        rent,setRent,
        city,setCity,
        landmark,setLandmark,
        category,setCategory,
        handleAddListing,
        adding,setAdding
    } = useContext(listingDataContext)
    
  return (
    <div className='w-full min-h-screen bg-white flex flex-col items-center relative overflow-auto'>

  {/* Back Button */}
  <div 
    className='w-[50px] h-[50px] bg-red-500 cursor-pointer absolute top-5 left-5 rounded-full flex items-center justify-center shadow-md'
    onClick={() => navigate("/listingpage2")}
  >
    <FaArrowLeftLong className='w-6 h-6 text-white' />
  </div>

  {/* Title */}
  <div className='w-full flex justify-center mt-16 mb-6 px-4'>
    <h1 className='text-2xl md:text-3xl text-[#272727] text-center font-sans leading-snug'>
      {`${landmark.toUpperCase()} , ${city.toUpperCase()}`}
    </h1>
  </div>

  {/* Images Section */}
  <div className='w-[95%] md:w-[80%] h-auto flex flex-col md:flex-row gap-4 mb-6'>
    {/* Main Image */}
    <div className='w-full md:w-[70%] h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-md'>
      <img src={frontEndImage1} alt="" className='w-full h-full object-cover' />
    </div>

    {/* Side Images */}
    <div className='w-full md:w-[30%] flex flex-col gap-4'>
      <div className='w-full h-[150px] md:h-[190px] overflow-hidden rounded-xl shadow-md'>
        <img src={frontEndImage2} alt="" className='w-full h-full object-cover' />
      </div>
      <div className='w-full h-[150px] md:h-[190px] overflow-hidden rounded-xl shadow-md'>
        <img src={frontEndImage3} alt="" className='w-full h-full object-cover' />
      </div>
    </div>
  </div>

  {/* Details Section */}
  <div className='w-[95%] md:w-[80%] flex flex-col gap-4 text-[#272727] mb-6'>

    <div className="space-y-1">
  <div className="text-xl md:text-2xl font-bold font-serif text-gray-900">
    {title.toUpperCase()}
  </div>
  <div className="text-lg md:text-xl font-medium font-sans text-gray-700">
    {category.toUpperCase()}
  </div>
  <div className="text-base md:text-lg font-light font-mono text-gray-600">
    {landmark.toUpperCase()}
  </div>
</div>


    <div className='text-base md:text-lg text-gray-700 leading-relaxed'>
      {`${description.toUpperCase()}`}
    </div>

   <h3 className="text-lg font-semibold mb-2">AMENITIES</h3>
      <ul className="list-disc ml-5 space-y-1">
        {ameneties.split("\n").map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

    <div className='text-lg md:text-xl font-semibold'>
  {`Rs.${Number(rent).toLocaleString()}/Night`}
</div>
  </div>

  {/* Button */}
  <div className='w-[95%] md:w-[80%] flex justify-center mb-10'>
    <button 
      className='px-10 py-3 bg-red-500 text-white text-lg md:text-xl font-medium rounded-xl shadow-md hover:bg-red-600 transition-all'
      onClick={handleAddListing} 
      disabled={adding}
    >
      {adding ? "Adding..." : "Add Listing"}
    </button>
  </div>

</div>

  )
}

export default ListingPage3
