import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  assets,
  facilityIcons,
  roomCommonData,
  roomsDummyData,
} from "../assets/assets";
import StarRating from "../components/StarRating";

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const room = roomsDummyData.find((room) => room._id === id);
    room && setRoom(room);
    room && setMainImage(room.images[0]);
  }, []);
  return (
    room && (
      <div className="py-24 md:py-28 px-2 sm:px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="flex flex-col md:flex-row md:items-center items-start gap-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-playfair">
            {room.hotel.name}{" "}
            <span className="font-inter text-xs sm:text-sm">({room.roomType})</span>
          </h1>
          <p className="text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full">
            20% OFF
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 mt-2">
          <StarRating />
          <p className="ml-0 sm:ml-2 text-xs sm:text-base">200+ reviews</p>
        </div>

        <div className="flex items-center gap-1 text-gray-500 mt-2 text-xs sm:text-base flex-wrap">
          <img src={assets.locationIcon} alt="locationIcon" className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>{room.hotel.address}</span>
        </div>

        <div className="flex flex-col lg:flex-row mt-6 gap-4 lg:gap-6">
          <div className="w-full lg:w-1/2">
            <img
              src={mainImage}
              alt="Room Image"
              className="w-full h-56 sm:h-72 md:h-auto rounded-xl shadow-lg object-cover"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 w-full lg:w-1/2">
            {room?.images.length > 1 &&
              room.images.map((image, index) => (
                <img
                  onClick={() => setMainImage(image)}
                  key={index}
                  src={image}
                  alt="Room Image"
                  className={`w-full h-64 sm:h-64 md:h-64 rounded-xl shadow-md object-cover cursor-pointer ${
                    mainImage === image && "outline-3 outline-orange-500"
                  }`}
                />
              ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between mt-8 md:mt-10 gap-6 md:gap-0">
          <div className="flex flex-col w-full md:w-3/4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-playfair">
              Experience Luxury Like Never Before
            </h1>

            <div className="flex flex-wrap gap-2 md:gap-4 mt-6 md:mt-10">
              {room.amenities.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-2 py-2 rounded-lg bg-gray-100"
                >
                  <img
                    src={facilityIcons[item]}
                    alt="facilityIcons"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                  <p className="text-xs">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-xl sm:text-2xl font-medium mt-2 md:mt-0">${room.pricePerNight} /night</p>
        </div>

        <form
          className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white 
        shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-4 sm:p-6 rounded-xl mx-auto mt-10 sm:mt-16 max-w-full md:max-w-6xl gap-4 md:gap-0"
        >
          <div className="flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500 w-full">
            <div className="hidden md:block w-px h-15 bg-gray-300/70"></div>
            <div className="flex flex-col w-full md:w-auto">
              <label htmlFor="checkInDate" className="font-medium">
                Check-In
              </label>
              <input
                type="date"
                id="checkInDate"
                placeholder="Check-In"
                className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
                required
              />
            </div>
            <div className="hidden md:block w-px h-15 bg-gray-300/70"></div>
            <div className="flex flex-col w-full md:w-auto">
              <label htmlFor="checkOutDate" className="font-medium">
                Check-Out
              </label>
              <input
                type="date"
                id="checkOutDate"
                placeholder="Check-Out"
                className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
                required
              />
            </div>
            <div className="hidden md:block w-1 h-15 bg-gray-300/70"></div>
            <div className="flex flex-col w-full md:w-auto">
              <label htmlFor="guests" className="font-medium">
                Guests
              </label>
              <input
                type="number"
                id="guests"
                placeholder="0"
                className="max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#2563EB] hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md
              w-full md:w-auto mt-2 md:mt-0 md:px-20 py-3 md:py-4 text-base cursor-pointer"
          >
            Check Availability
          </button>
        </form>

        <div className="mt-16 sm:mt-24 space-y-4">
          {roomCommonData.map((spec, index) => (
            <div key={index} className="flex gap-2 items-start">
              <img src={spec.icon} alt={`${spec.item}`} className="w-5 sm:w-6" />

              <div>
                <p className="text-sm sm:text-base">{spec.title}</p>
                <p className="text-gray-500 text-xs sm:text-base">{spec.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-full md:max-w-3xl border-y border-gray-300 my-10 md:my-15 py-6 md:py-10 text-gray-500 text-xs sm:text-base">
          <p>
            Guests will be allocated on the ground floor according to
            availability. You get a comfortable Two bedroom apartment has a true
            city feeling. The price quoted is for two guest, at the guest slot
            please mark the number of guests to get the exact price for groups.
            The Guests will be allocated ground floor according to availability.
            You get the comfortable two bedroom apartment that has a true city
            feeling.
          </p>
        </div>

        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-row gap-4 items-center">
            <img
              src={room.hotel.owner.image}
              alt="Host"
              className="h-12 w-12 sm:h-14 sm:w-14 md:h-18 md:w-18 rounded-full"
            />
            <div>
              <p className="text-base sm:text-lg md:text-xl">Hosted By {room.hotel.name}</p>
              <div className="flex items-center mt-1">
                <StarRating />
                <p className="ml-2 text-xs sm:text-base">200+ reviews</p>
              </div>
            </div>
          </div>
          <button className="px-4 sm:px-6 py-2 sm:py-2.5 mt-2 sm:mt-4 rounded text-white bg-[#2563EB] hover:bg-primary-dull transition-all cursor-pointer">
            Contact Me
          </button>
        </div>
      </div>
    )
  );
};

export default RoomDetails;
