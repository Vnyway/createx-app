import React from "react";

const WorldWork = () => {
  return (
    <section className="bg-[#F4F5F6]">
      <div className="container mx-auto py-[40px] md:py-[80px] flex flex-col items-center gap-[20px] md:gap-[60px] text-center">
        <h3 className="font-[700] text-[26px] md:text-[46px] text-heading">
          We work worldwide
        </h3>
        <img src="./images/about-us/map.svg" alt="map" />
      </div>
    </section>
  );
};

export default WorldWork;
