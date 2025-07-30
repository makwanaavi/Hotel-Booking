import React from "react";
import Hero from "../components/Hero";
import FeatureDestination from "../components/FeatureDestination";
import ExclusiveOffers from "../components/ ExclusiveOffers";
import Testimonial from "../components/Testimonial";

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeatureDestination />
      <ExclusiveOffers/>
      <Testimonial/>
    </>
  );
};

export default HomePage;
