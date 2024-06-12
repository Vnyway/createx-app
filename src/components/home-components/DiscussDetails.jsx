import React, { useState } from "react";
import { motion } from "framer-motion";

const DiscussDetails = () => {
  const [agreeWithTerms, setAgreeWithTerms] = useState(false);
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
          className="my-[60px] py-[60px] px-[40px] flex flex-col bg-white max-w-[470px] rounded-[4px] shadow-md">
          <h3 className="font-[700] text-[28px] leading-[42px] text-heading text-center mb-[30px]">
            A quick way to discuss details
          </h3>
          <div className="flex flex-col gap-[15px]">
            <div className="flex flex-col gap-[10px]">
              <label htmlFor="">Name*</label>
              <input
                className="h-[44px] bg-[#F4F5F6] outline-primary border-[1px] border-[#D7DADD] px-[15px] rounded-[4px]"
                placeholder="Your name"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <label htmlFor="">Phone*</label>
              <input
                className="h-[44px] bg-[#F4F5F6] outline-primary border-[1px] border-[#D7DADD] px-[15px] rounded-[4px]"
                placeholder="Your phone number"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <label htmlFor="">Email*</label>
              <input
                className="h-[44px] bg-[#F4F5F6] outline-primary border-[1px] border-[#D7DADD] px-[15px] rounded-[4px]"
                placeholder="Your working email"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <label htmlFor="">Message*</label>
              <input
                className="h-[44px] bg-[#F4F5F6] outline-primary border-[1px] border-[#D7DADD] px-[15px] rounded-[4px]"
                placeholder="Your message"
                type="text"
              />
            </div>
            <div
              className="flex gap-[5px] items-start"
              onClick={() => setAgreeWithTerms((pv) => !pv)}>
              <div
                className={`mt-[5px] shrink-0 size-[16px] border-primary border-[1px] rounded-[3px] flex justify-center items-center transition-all ease-out duration-300 ${
                  agreeWithTerms ? "bg-primary" : "bg-white"
                }`}>
                <img src="./images/discuss-details/check.svg" alt="" />
              </div>
              <label htmlFor="check">
                I agree to receive communications from Createx Construction
                Bureau.
              </label>
            </div>
          </div>
          <div className="flex justify-center mt-[30px]">
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
