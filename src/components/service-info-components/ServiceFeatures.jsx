import React, { useState } from "react";
import { motion } from "framer-motion";

const ServiceFeatures = ({ data }) => {
  const [descriptionOpened, setDescriptionOpened] = useState(0);
  const handleToggle = (id) => {
    if (descriptionOpened === id) {
      setDescriptionOpened(0);
      console.log(descriptionOpened);
    } else {
      setDescriptionOpened(id);
      console.log(descriptionOpened);
    }
  };

  return data.slider.map((element) => {
    return (
      <div className="w-full shrink-0 flex gap-[60px]">
        <img
          onDragStart={(e) => e.preventDefault()}
          src={element.image}
          alt={element.name}
          className="w-[50%]"
        />
        <div className="flex flex-col w-[50%] justify-center gap-[20px]">
          <h2 className="font-[700] text-[46px] text-heading">We offer</h2>
          {element.offerings.map((offering) => {
            return (
              <div className="flex items-start gap-[20px]">
                <button
                  onClick={() => handleToggle(offering.id)}
                  className="relative size-[22px] shrink-0 mt-[12px]">
                  <svg
                    width="22"
                    height="2"
                    viewBox="0 0 22 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-0 top-[50%] translate-y-[-50%]">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 1C0 0.447715 0.447715 0 1 0V1V2C0.447715 2 0 1.55228 0 1ZM21 1L20.9999 2H1V1V0H20.9994L21 1ZM21 1L20.9999 2C21.5522 2 22 1.55228 22 1C22 0.447715 21.5517 0 20.9994 0L21 1Z"
                      fill="#FF5A30"
                    />
                  </svg>
                  <svg
                    width="22"
                    height="2"
                    viewBox="0 0 22 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-[50%] translate-x-[-50%] rotate-90">
                    <path
                      style={{ transition: "all", transitionDuration: "0.3s" }}
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 1C0 0.447715 0.447715 0 1 0V1V2C0.447715 2 0 1.55228 0 1ZM21 1L20.9999 2H1V1V0H20.9994L21 1ZM21 1L20.9999 2C21.5522 2 22 1.55228 22 1C22 0.447715 21.5517 0 20.9994 0L21 1Z"
                      fill={
                        descriptionOpened === offering.id
                          ? "#FFFFFF00"
                          : "#FF5A30"
                      }
                    />
                  </svg>
                </button>
                <motion.div
                  className={`${
                    descriptionOpened === offering.id ? "h-[179px]" : "h-[80px]"
                  } overflow-hidden flex-col gap-[200px] transition-all duration-300 ease-out`}>
                  <h3 className="font-[700] text-[28px] text-heading">
                    {offering.name}
                  </h3>
                  <p className={` font-[400] text-[16px] text-paragraph`}>
                    {offering.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    );
  });
};

export default ServiceFeatures;
