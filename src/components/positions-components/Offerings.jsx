import React from "react";
import { motion } from "framer-motion";

const offerings = [
  {
    id: 1,
    location: "New York",
    workHours: "Full Time",
    job: "Heavy Equipment Operator",
  },
  {
    id: 2,
    location: "San Francisco",
    workHours: "Full Time",
    job: "Financial Compliance Analyst",
  },
  {
    id: 3,
    location: "New Jersey",
    workHours: "Full Time",
    job: "Project Manager - Buildings",
  },
  {
    id: 4,
    location: "New York",
    workHours: "Part Time",
    job: "Environment Specialist",
  },
  { id: 5, location: "New York", workHours: "Full Time", job: "Accountant" },
];

const Offerings = () => {
  return (
    <section>
      <div className="container mx-auto py-[40px] md:py-[80px] flex gap-[10%]">
        <div className="flex flex-col gap-[20px] w-[60%]">
          {offerings.map((element) => (
            <div
              style={{ transition: "all ease-in-out .3s" }}
              className="py-[20px] px-[30px] flex justify-between items-center rounded-[4px] border-[1px] border-[#E5E8ED] shadow-sm hover:shadow-md">
              <div className="flex flex-col gap-[5px]">
                <div className="flex gap-[10px] items-center">
                  <div className="flex gap-[3px]">
                    <img src="./images/positions/location.svg" alt="" />
                    <span className="font-[400] text-[14px] text-paragraph">
                      {element.location}
                    </span>
                  </div>
                  <div className="flex gap-[3px] border-l-[1px] border-[#787A80] pl-[10px] items-center">
                    <img src="./images/positions/clock.svg" alt="" />
                    <span className="font-[400] text-[14px] text-paragraph">
                      {element.workHours}
                    </span>
                  </div>
                </div>
                <h4 className="font-[700] text-[20px] text-heading">
                  {element.job}
                </h4>
              </div>
              <motion.button
                style={{ transition: "all ease-out .3s" }}
                initial={{ color: "#FF5A30", backgroundColor: "#FFFFFF" }}
                whileHover={{
                  color: "#FFFFFF",
                  backgroundColor: "#FF5A30",
                }}
                className="w-[151px] h-[44px]  font-[700] text-[14px] border-[1px] border-primary rounded-[4px] uppercase flex justify-center items-center">
                Apply now
              </motion.button>
            </div>
          ))}
        </div>
        <div className="w-[30%] flex flex-col gap-[20px]">
          <h4 className="font-[700] text-[28px] text-heading">
            Didn’t find what you were looking for?
          </h4>
          <p className="font-[400] text-[18px] text-customGray">
            Send your CV or subscribe to our newsletter to receive information
            about new vacancies.
          </p>
          <div className="flex w-full gap-[10px]">
            <motion.button
              style={{ transition: "all ease-out .3s" }}
              initial={{ color: "#FF5A30", backgroundColor: "#FFFFFF" }}
              whileHover={{
                color: "#FFFFFF",
                backgroundColor: "#FF5A30",
              }}
              className="w-[151px] h-[44px]  font-[700] text-[14px] border-[1px] border-primary rounded-[4px] uppercase flex justify-center items-center">
              subscribe
            </motion.button>
            <motion.button
              style={{ transition: "all ease-out .3s" }}
              initial={{
                color: "#FFFFFF",
                backgroundColor: "#FF5A30",
              }}
              whileHover={{ color: "#FF5A30", backgroundColor: "#FFFFFF" }}
              className="w-[151px] h-[44px]  font-[700] text-[14px] border-[1px] border-primary rounded-[4px] uppercase flex justify-center items-center">
              send cv
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offerings;
