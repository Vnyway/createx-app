import React from "react";
import { motion } from "framer-motion";

const DiscussDetails = () => {
  return (
    <section
      style={{
        backgroundImage: `url("./images/discuss-details/background.svg")`,
        backgroundSize: "cover",
      }}
      className="">
      <div className="container mx-auto flex justify-end">
        <form
          action="#"
          className="my-[60px] py-[60px] px-[40px] flex flex-col bg-white max-w-[415px]">
          <h3 className="font-[700] text-[28px] leading-[42px] text-heading text-center">
            A quick way to discuss details
          </h3>
          <div className="flex flex-col">
            <label htmlFor="">Name*</label>
            <input placeholder="Your name" type="text" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Phone*</label>
            <input placeholder="Your phone number" type="text" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Email*</label>
            <input placeholder="Your working email" type="text" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Message*</label>
            <input placeholder="Your message" type="text" />
          </div>
          <div className="flex gap-[5px] items-start">
            <input type="checkbox" value="" id="check" className="mt-[7px]" />
            <label htmlFor="check">
              I agree to receive communications from Createx Construction
              Bureau.
            </label>
          </div>
          <div className="flex justify-center">
            <motion.button
              initial="initial"
              whileHover="hover"
              variants={{
                initial: { backgroundColor: "#FF5A30", color: "#FFFFFF" },
                hover: { backgroundColor: "#FFFFFF", color: "#FF5A30" },
              }}
              className="bg-primary border-[1px] border-primary px-[40px] py-[10px] rounded-[4px] font-[700] text-[14px] text-[#FFFFFF] uppercase">
              Send request
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default DiscussDetails;
