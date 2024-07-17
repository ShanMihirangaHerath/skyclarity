import React from "react";
import { Button } from "../ui/button";

function Hero() {
  return (
    <div className="flex flex-col items-center mx-56 gap-9">
      <h1 
      className="font-extrabold text-[50px] text-center mt-16">
        <span className="text-[#efcc00]">Embark on Your Next Journey with AI:</span> Custom Itineraries Tailored Just
        for You!
      </h1>
      <p className="text-xl text-gray-500 text-center">Your Personalized Trip Planner and Travel Curator: Crafting Custom Itineraries Suited to Your Interests and Budget.</p>
    <Button>Get Start, It's Free!</Button>
    
    </div>
  );
}

export default Hero;
