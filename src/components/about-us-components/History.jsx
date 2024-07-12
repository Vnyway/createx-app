import React, { useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const history = [
  {
    id: 1,
    description:
      "Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.  Eu nec vitae, ",
    image: "./images/about-us/history.svg",
  },
  {
    id: 2,
    description:
      "Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.  Eu nec vitae, ",
    image: "./images/about-us/history.svg",
  },
  {
    id: 3,
    description:
      "Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.  Eu nec vitae, ",
    image: "./images/about-us/history.svg",
  },
  {
    id: 4,
    description:
      "Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.  Eu nec vitae, ",
    image: "./images/about-us/history.svg",
  },
  {
    id: 5,
    description:
      "Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.  Eu nec vitae, ",
    image: "./images/about-us/history.svg",
  },
  {
    id: 6,
    description:
      "Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.  Eu nec vitae, ",
    image: "./images/about-us/history.svg",
  },
  {
    id: 7,
    description:
      "Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.  Eu nec vitae, ",
    image: "./images/about-us/history.svg",
  },
  {
    id: 8,
    description:
      "Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.  Eu nec vitae, ",
    image: "./images/about-us/history.svg",
  },
  {
    id: 9,
    description:
      "Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.  Eu nec vitae, ",
    image: "./images/about-us/history.svg",
  },
];

const HistoryComponents = () => {
  return history.map((element) => (
    <div key={element.id} className="w-full shrink-0 flex flex-col gap-[20px] ">
      <img src={element.image} alt={`${element.id}`} />
      <p className="font-[400] text-[16px] text-[#424451]">
        {element.description}
      </p>
    </div>
  ));
};

const HistoryLi = ({ id, text, historyIndex, setHistoryIndex }) => {
  return (
    <li className="relative" key={id}>
      <span
        style={{ transition: "all ease-in-out 1s " }}
        className={`size-[8px] absolute top-[50%] translate-y-[-50%] left-[-3px] shrink-0 rounded-full ${
          historyIndex === id ? "bg-[#FF5A30]" : "bg-[#9A9CA5]"
        } ring-[3px] ring-[#F3F4F5]`}></span>
      <button
        style={{ transition: "all ease-in-out 1s " }}
        onClick={() => setHistoryIndex(id)}
        className={`font-[700] text-[22px] md:text-[28px] pl-[20px] py-[7px] border-l-[2px] border-[#9A9CA5] border-opacity-60 ${
          historyIndex === id ? "text-primary" : "text-[#9A9CA5]"
        }`}>
        {text}
      </button>
    </li>
  );
};

const History = () => {
  const [historyIndex, setHistoryIndex] = useState(0);
  const dragX = useMotionValue(0);
  const list = [
    { id: 0, text: "Present" },
    { id: 1, text: "March 2019" },
    { id: 2, text: "November 2018" },
    { id: 3, text: "July 2015" },
    { id: 4, text: "August 2010" },
    { id: 5, text: "February 2007" },
    { id: 6, text: "May 2004" },
    { id: 7, text: "October 2001" },
    { id: 8, text: "June 2000" },
  ];

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -50 && historyIndex < 8) {
      setHistoryIndex((pv) => pv + 1);
    } else if (x >= 50 && historyIndex > 0) {
      setHistoryIndex((pv) => pv - 1);
    }
  };

  return (
    <section className="bg-[#F3F4F5]">
      <div className="container mx-auto pt-[20px] pb-[40px] md:pt-[40px] md:pb-[80px] flex flex-col md:flex-row">
        <div className="w-full md:w-[40%] lg:pr-[50px] flex flex-col">
          <h3 className="font-[700] text-heading text-[26px] md:text-[46px]">
            Our history
          </h3>
          <ul className="mt-[20px] md:mt-[40px]">
            {list.map((element) => (
              <HistoryLi
                id={element.id}
                text={element.text}
                historyIndex={historyIndex}
                setHistoryIndex={setHistoryIndex}
              />
            ))}
          </ul>
        </div>
        <div className="w-full md:w-[60%] flex flex-col">
          <div className="hidden md:block h-[120px] relative">
            <motion.button
              initial="initial"
              whileHover="hover"
              variants={{
                initial: { backgroundColor: "#F3F4F5" },
                hover: {
                  backgroundColor: historyIndex > 0 ? "#FF5A30" : "#F3F4F5",
                  transition: { duration: 0.3 },
                },
              }}
              onClick={() =>
                historyIndex > 0 && setHistoryIndex((pv) => pv - 1)
              }
              className={`absolute right-[55px] bottom-[50%] translate-y-[50%] size-[48px] flex justify-center items-center rounded-full ${
                historyIndex > 0 ? "" : "cursor-default"
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
                      fill: historyIndex > 0 ? "#F3F4F5" : "#424551",
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
                initial: { backgroundColor: "#F3F4F5" },
                hover: {
                  backgroundColor: historyIndex < 8 ? "#FF5A30" : "#F3F4F5",
                  transition: { duration: 0.3 },
                },
              }}
              onClick={() => {
                historyIndex < 8 && setHistoryIndex((pv) => pv + 1);
              }}
              className={`absolute right-0 bottom-[50%] translate-y-[50%] size-[48px] flex justify-center items-center rounded-full ${
                historyIndex < 8 ? "" : "cursor-default"
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
                      fill: historyIndex < 8 ? "#F3F4F5" : "#424551",
                      transition: { duration: 0.3 },
                    },
                  }}
                />
              </svg>
            </motion.button>
          </div>
          <div className="overflow-hidden mt-[40px] md:mt-0">
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              style={{ x: dragX, transition: "all ease-out 0.5s" }}
              animate={{ translateX: `-${historyIndex * 100}%` }}
              onDragEnd={onDragEnd}
              className="flex cursor-grab active:cursor-grabbing items-center">
              <HistoryComponents />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
