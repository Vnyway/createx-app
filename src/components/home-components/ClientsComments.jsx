import React, { useState } from "react";
import { motion } from "framer-motion";

const comments = [
  {
    id: 1,
    img: "./images/partners/customer.svg",
    p: "Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim. Consectetur magna cillum consequat minim laboris cillum laboris voluptate minim proident exercitation ullamco.",
    h4: "Shawn Edwards",
    span: "Position, Company name",
  },
  {
    id: 2,
    img: "./images/partners/customer.svg",
    p: "Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim. Consectetur magna cillum consequat minim laboris cillum laboris voluptate minim proident exercitation ullamco.",
    h4: "Shawn Edwards",
    span: "Position, Company name",
  },
  {
    id: 3,
    img: "./images/partners/customer.svg",
    p: "Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim. Consectetur magna cillum consequat minim laboris cillum laboris voluptate minim proident exercitation ullamco.",
    h4: "Shawn Edwards",
    span: "Position, Company name",
  },
  {
    id: 4,
    img: "./images/partners/customer.svg",
    p: "Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim. Consectetur magna cillum consequat minim laboris cillum laboris voluptate minim proident exercitation ullamco.",
    h4: "Shawn Edwards",
    span: "Position, Company name",
  },
];

const Comments = () => {
  return comments.map((element) => {
    return (
      <div key={element.id} className="flex flex-col w-full shrink-0">
        <img
          src={element.img}
          className="size-[72px] mb-[20px]"
          alt="customer"
        />
        <p className="font-[400] text-[16px] text-customGray mb-[20px]">
          {element.p}
        </p>
        <h4 className="font-[700] text-[16px] text-heading mb-[10px]">
          {element.h4}
        </h4>
        <span className="font-[400] text-[14px] text-paragraph">
          {element.span}
        </span>
      </div>
    );
  });
};

const ClientsComments = () => {
  const [customerIndex, setCustomerIndex] = useState(0);
  return (
    <section className="bg-[#F4F5F6]">
      <div className="container mx-auto py-[40px]">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-[70%] md:mr-[50px]">
            <h3 className="font-[700] text-[28px] md:text-[36px] lg:text-[46px] text-heading mb-[40px] md:mb-[80px]">
              What our clients are saying
            </h3>
            <div className="relative w-full overflow-x-hidden">
              <motion.div
                style={{ transition: "all ease-out 0.5s" }}
                animate={{ translateX: `-${customerIndex * 100}%` }}
                className="flex items-center mb-[40px] md:mb-0">
                <Comments />
              </motion.div>
              <motion.button
                initial="initial"
                whileHover="hover"
                variants={{
                  initial: { backgroundColor: "#ffffff4d" },
                  hover: {
                    backgroundColor: customerIndex > 0 ? "#FF5A30" : "#F4F5F6",
                    transition: { duration: 0.3 },
                  },
                }}
                onClick={() =>
                  customerIndex > 0 && setCustomerIndex((pv) => pv - 1)
                }
                className={`absolute right-[55px] bottom-[60px] md:bottom-0 size-[48px] flex justify-center items-center rounded-full ${
                  customerIndex > 0 ? "" : "cursor-default"
                }`}>
                <svg
                  width="18"
                  height="12"
                  viewBox="0 0 18 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <motion.path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.20711 11.2071C5.81658 11.5976 5.18342 11.5976 4.79289 11.2071L0.292892 6.70711C-0.0976315 6.31658 -0.0976315 5.68342 0.292892 5.29289L4.79289 0.792893C5.18342 0.402369 5.81658 0.402369 6.20711 0.792893C6.59763 1.18342 6.59763 1.81658 6.20711 2.20711L3.41421 5L17 5C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7L3.41421 7L6.20711 9.79289C6.59763 10.1834 6.59763 10.8166 6.20711 11.2071Z"
                    variants={{
                      initial: { fill: "#424551" },
                      hover: {
                        fill: customerIndex > 0 ? "#FFFFFF" : "#424551",
                        transition: { duration: 0.3 },
                      },
                    }}
                  />
                </svg>
              </motion.button>
              <motion.button
                initial="initial"
                whileHover="hover"
                variants={{
                  initial: { backgroundColor: "#ffffff4d" },
                  hover: {
                    backgroundColor: customerIndex < 3 ? "#FF5A30" : "#F4F5F6",
                    transition: { duration: 0.3 },
                  },
                }}
                onClick={() =>
                  customerIndex < 3 && setCustomerIndex((pv) => pv + 1)
                }
                className={`absolute right-0 bottom-[60px] md:bottom-0 size-[48px] flex justify-center items-center rounded-full ${
                  customerIndex < 3 ? "" : "cursor-default"
                }`}>
                <svg
                  width="18"
                  height="12"
                  viewBox="0 0 18 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <motion.path
                    transform="rotate(180, 9, 6)"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.20711 11.2071C5.81658 11.5976 5.18342 11.5976 4.79289 11.2071L0.292892 6.70711C-0.0976315 6.31658 -0.0976315 5.68342 0.292892 5.29289L4.79289 0.792893C5.18342 0.402369 5.81658 0.402369 6.20711 0.792893C6.59763 1.18342 6.59763 1.81658 6.20711 2.20711L3.41421 5L17 5C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7L3.41421 7L6.20711 9.79289C6.59763 10.1834 6.59763 10.8166 6.20711 11.2071Z"
                    variants={{
                      initial: { fill: "#424551" },
                      hover: {
                        fill: customerIndex < 3 ? "#FFFFFF" : "#424551",
                        transition: { duration: 0.3 },
                      },
                    }}
                  />
                </svg>
              </motion.button>
            </div>
          </div>
          <div>
            <img src="./images/partners/partnership.svg" alt="partnership" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsComments;
