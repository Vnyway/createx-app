import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LearnMore = ({ heading, button, link }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-[20px] md:gap-[40px] pt-[40px] md:pt-[80px]">
      <h3 className="font-[700] text-[28px] text-heading">{heading}</h3>
      <Link to={`/${link}`} onClick={() => window.scrollTo(0, 0)}>
        <motion.button
          initial="initial"
          whileHover="hover"
          variants={{
            initial: { backgroundColor: "#FF5A30", color: "#FFFFFF" },
            hover: { backgroundColor: "#FFFFFF", color: "#FF5A30" },
          }}
          className="bg-primary w-full md:w-auto border-[1px] border-primary px-[40px] py-[10px] rounded-[4px] font-[700] text-[16px] text-[#FFFFFF] uppercase">
          {button}
        </motion.button>
      </Link>
    </div>
  );
};

export default LearnMore;
