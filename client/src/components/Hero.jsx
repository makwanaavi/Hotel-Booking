// import React from "react";

// const Hero = () => {
//   return (
//     <div
//       className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/heroImage.png")]
//     bg-no-repeat bg-cover bg-center h-screen'
//     >
//       <p className="bg-[#49B9FF]/50 px-3.5 py-1 rounded-full mt-20">
//         The Ultimate Hotel Experience
//       </p>
//       <h1 className="font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4]">
//         Discover Your Perfect Getaway Destination
//       </h1>
//       <p className="max-w-130 mt-2 text-base md:text-base">
//         Unparalleled luxury and comfort await at the world's most exclusive
//         hotels and resorts. Start your journey today.
//       </p>
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import { assets, cities } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url('/src/assets/heroImage.png')] bg-no-repeat bg-cover bg-center h-screen relative">
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <p className="bg-[#49B9FF]/50 px-4 py-2 rounded-full text-sm tracking-wide shadow-md mt-24 md:mt-0 inline-block">
          <span className="bg-white w-2 h-2 rounded-full inline-block mr-2"></span>
          The Ultimate Hotel Experience
        </p>

        <h1 className="font-playfair text-3xl md:text-6xl lg:text-7xl font-extrabold leading-tight mt-6">
          Discover Your Perfect Getaway Destination
        </h1>

        <p className="mt-6 text-sm md:text-lg max-w-2xl text-white/90 leading-relaxed ">
          ✨ Unparalleled luxury and comfort await at the world's most exclusive
          hotels and resorts. Your dream escape starts here — let us make it
          unforgettable.
        </p>

        <form className="bg-white/10 text-white rounded-lg px-6 py-4 mt-8  flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto">
          <div>
            <div className="flex items-center gap-2">
              <img
                src={assets.calenderIcon}
                alt="calenderIcon"
                className="h-4"
              />
              <label htmlFor="destinationInput">Destination</label>
            </div>
            <input
              list="destinations"
              id="destinationInput"
              type="text"
              className=" rounded border text-black border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
              placeholder="Type here"
              required
            />
            <datalist id="destinations">
              {cities.map((city, index) => (
                <option key={index} value={city} />
              ))}
            </datalist>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <img
                src={assets.calenderIcon}
                alt="calenderIcon"
                className="h-4"
              />
              <label htmlFor="checkIn">Check in</label>
            </div>
            <input
              id="checkIn"
              type="date"
              className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none text-black"
            />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <img
                src={assets.calenderIcon}
                alt="calenderIcon"
                className="h-4"
              />
              <label htmlFor="checkOut">Check out</label>
            </div>
            <input
              id="checkOut"
              type="date"
              className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none text-black"
            />
          </div>

          <div className="flex md:flex-col max-md:gap-2 max-md:items-center">
            <label htmlFor="guests">Guests</label>
            <input
              min={1}
              max={4}
              id="guests"
              type="number"
              className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16 text-black"
              placeholder="0"
            />
          </div>

          <button className="flex items-center justify-center gap-1 rounded-md bg-[#49B9FF]/50 py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1">
            <img src={assets.searchIcon} alt="searchIcon" className="h-7" />
            <span>Search</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
