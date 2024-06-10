import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LearnMore = ({ heading, button }) => {
  return (
    <div className="flex justify-center items-center gap-[40px] pt-[80px]">
      <h3 className="font-[700] text-[28px] text-heading">{heading}</h3>
      <motion.button
        initial="initial"
        whileHover="hover"
        variants={{
          initial: { backgroundColor: "#FF5A30", color: "#FFFFFF" },
          hover: { backgroundColor: "#FFFFFF", color: "#FF5A30" },
        }}
        className="bg-primary border-[1px] border-primary px-[40px] py-[10px] rounded-[4px] font-[700] text-[16px] text-[#FFFFFF] uppercase">
        <Link to="/work">{button}</Link>
      </motion.button>
    </div>
  );
};

export default LearnMore;
