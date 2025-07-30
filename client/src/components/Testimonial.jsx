import React from "react";
import Title from "./Title";
import { testimonials } from "../assets/assets";
import StarRating from "./StarRating";

const Testimonial = () => {
  return (
    <div className="flex flex-col items-center px-4 sm:px-6 md:px-16 lg:px-24 bg-slate-50 pt-12 pb-16">
      <Title
        title="What Our Guests Say"
        subTitle="Discover why discerning travelers choose QuickStay for their luxury accommodations around the world."
      />

      <div className="flex flex-wrap justify-center items-stretch gap-6 mt-12 w-full">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-5 sm:p-6 rounded-xl shadow w-full sm:w-[340px] md:w-[320px] lg:w-[360px] flex flex-col"
          >
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-full object-cover"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <p className="font-playfair text-lg sm:text-xl">
                  {testimonial.name}
                </p>
                <p className="text-gray-500 text-sm sm:text-base">
                  {testimonial.address}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-4">
              <StarRating rating={testimonial.rating} />
            </div>
            <p className="text-gray-500 max-w-full sm:max-w-xs mt-4 text-sm sm:text-base">
              "{testimonial.review}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
