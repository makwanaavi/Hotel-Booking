import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StarRating from "../components/StarRating";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";

const CheckBox = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
      <input
        type="checkbox"
        checked={selected}
        onChange={(e) => onChange(e.target.checked, label)}
      />
      <span className="font-light select-none">{label}</span>
    </label>
  );
};

const RadioButton = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
      <input
        type="radio"
        name="sortOption"
        checked={selected}
        onChange={() => onChange(label)}
      />
      <span className="font-light select-none">{label}</span>
    </label>
  );
};

const AllRooms = () => {
  const navigate = useNavigate();
  const [openFilter, setOpenFilter] = useState(false);
  const roomTypes = ["Single Bed", "Double Bed", "Luxury Room", "Family Suite"];
  const priceRanges = ["50 - 100", "100 - 200", "200 - 300", "300+"];
  const sortOption = ["Price Low to High", "Price High to Low", "Newest First"];

  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-2 sm:px-4 md:px-8 lg:px-16 xl:px-24 gap-8">
      <div className="w-full lg:w-3/4">
        <div className="flex flex-col items-start text-left">
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-[40px]">
            Hotel Rooms
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-500/90 mt-2 max-w-174">
            Take advantage of our limited-time offers and special packages to
            enhance your stay and create unforgettable memories.
          </p>
        </div>

        <div>
          {roomsDummyData.map((room) => (
            <div
              className="flex flex-col md:flex-row items-start py-6 md:py-10 gap-4 md:gap-6 border-b border-gray-300 last:pb-10 md:last:pb-30 last:border-0"
              key={room._id}
            >
              <img
                onClick={() => {
                  navigate(`/rooms/${room._id}`);
                  scrollTo({ top: 0, behavior: "smooth" });
                }}
                src={room.images[0]}
                alt="hotel-img"
                title="View Room Details"
                className="w-full max-h-96 sm:max-h-65 md:max-w-1/2 rounded-xl shadow-lg object-cover cursor-pointer"
              />

              <div className="w-full md:w-1/2 flex flex-col gap-2 ">
                <p className="text-gray-500">{room.hotel.city}</p>
                <p
                  onClick={() => {
                    navigate(`/rooms/${room._id}`);
                    scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="text-gray-800 text-2xl sm:text-3xl font-playfair cursor-pointer"
                >
                  {room.hotel.name}
                </p>

                <div className="flex items-center">
                  <StarRating />
                  <p className="ml-2 text-xs sm:text-base">200+ reviews</p>
                </div>

                <div className="flex items-center gap-1 text-gray-500 mt-2 text-xs sm:text-sm">
                  <img src={assets.locationIcon} alt="locationIcon" />
                  <span>{room.hotel.address}</span>
                </div>

                <div className="flex flex-wrap items-center mt-3 mb-4 md:mb-6 gap-2 md:gap-4">
                  {room.amenities.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-2 md:px-3 py-1 md:py-2 rounded-lg bg-[#F5F5FF]/70"
                    >
                      <img
                        src={facilityIcons[item]}
                        alt="{item}"
                        className="w-4 h-4 md:w-5 md:h-5"
                      />
                      <p className="text-xs">{item}</p>
                    </div>
                  ))}
                </div>

                <p className="text-lg md:text-xl font-medium text-gray-700">
                  $ {room.pricePerNight} /night
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filter */}
      <div className="bg-white w-full sm:w-96 md:w-80 border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-16 rounded-lg shadow-sm lg:sticky lg:top-32">
        <div
          className={`flex items-center justify-between px-4 md:px-5 py-2.5 min-lg:border-b border-gray-300 ${
            openFilter && "border-b"
          }`}
        >
          <p className="text-base font-medium text-gray-800">FILTERS</p>
          <div className="text-xd cursor-pointer">
            <span
              className="lg:hidden"
              onClick={() => setOpenFilter(!openFilter)}
            >
              {openFilter ? "HIDE" : "SHOW"}
            </span>
            <span className="hidden lg:block">CLEAR</span>
          </div>
        </div>

        <div
          className={`${
            openFilter ? "h-auto" : "h-0 lg:h-auto"
          } overflow-hidden transition-all duration-500`}
        >
          <div className="px-4 md:px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Popular Filters</p>
            {roomTypes.map((room, index) => (
              <CheckBox key={index} label={room} />
            ))}
          </div>

          <div className="px-4 md:px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Price </p>
            {priceRanges.map((range, index) => (
              <CheckBox key={index} label={`$ ${range}`} />
            ))}
          </div>

          <div className="px-4 md:px-5 pt-5 pb-7">
            <p className="font-medium text-gray-800 pb-2">Sort By </p>
            {sortOption.map((option, index) => (
              <RadioButton key={index} label={option} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRooms;
