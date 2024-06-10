import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    image: "./images/red-finger.svg",
    h4: "Red Finger Building",
    span: "Business Centers",
  },
  {
    id: 2,
    image: "./images/pencil.svg",
    h4: "The Pencil Building",
    span: "Business Centers",
  },
  {
    id: 3,
    image: "./images/red-finger.svg",
    h4: "Red Finger Building",
    span: "Business Centers",
  },
  {
    id: 4,
    image: "./images/pencil.svg",
    h4: "The Pencil Building",
    span: "Business Centers",
  },
  {
    id: 5,
    image: "./images/red-finger.svg",
    h4: "Red Finger Building",
    span: "Business Centers",
  },
  {
    id: 6,
    image: "./images/pencil.svg",
    h4: "The Pencil Building",
    span: "Business Centers",
  },
];

const SelectedProjects = () =>
  projects.map((element) => (
    <motion.div
      initial="initial"
      whileHover="hover"
      id={element.id}
      className="flex flex-col w-1/3 px-[1%] shrink-0">
      <img src={element.image} className="w-full object-cover" alt="" />
      <motion.div
        variants={{
          initial: { height: "80px", marginTop: 0 },
          hover: {
            height: "145px",
            marginTop: "-65px",
            transition: { duration: 0.3 },
          },
        }}
        className="flex flex-col gap-[5px] items-center py-[15px] bg-white shadow-md h-[80px] overflow-y-hidden">
        <h4 className="font-[700] text-[20px] text-heading">{element.h4}</h4>
        <span className="font-[400] text-[14px] text-paragraph">
          {element.span}
        </span>
        <motion.button
          initial={{ color: "#FF5A30", backgroundColor: "#FFFFFF" }}
          whileHover={{
            color: "#FFFFFF",
            backgroundColor: "#FF5A30",
            transition: { duration: 0.3 },
          }}
          className="uppercase font-[700] text-[14px] px-[32px] my-[10px] py-[10px] border-[1px] border-primary rounded-[4px]">
          View Project
        </motion.button>
      </motion.div>
    </motion.div>
  ));

const SelectedProjectsSection = () => {
  const [projectIndex, setProjectIndex] = useState(0);
  return (
    <section className="container mx-auto py-[80px] overflow-hidden">
      <div className="px-[1%] relative">
        <h3 className="font-[700] text-[46px] text-heading max-w-[80%]">
          Browse our selected projects and learn more about our work
        </h3>
        <motion.button
          initial="initial"
          whileHover="hover"
          variants={{
            initial: { backgroundColor: "#FFFFFF" },
            hover: {
              backgroundColor: projectIndex > 0 ? "#FF5A30" : "#FFFFFF",
              transition: { duration: 0.3 },
            },
          }}
          onClick={() => projectIndex > 0 && setProjectIndex((pv) => pv - 1)}
          className={`absolute right-[55px] bottom-[10px] size-[48px] flex justify-center items-center rounded-full ${
            projectIndex > 0 ? "" : "cursor-default"
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
                  fill: projectIndex > 0 ? "#FFFFFF" : "#424551",
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
            initial: { backgroundColor: "#FFFFFF" },
            hover: {
              backgroundColor: projectIndex < 3 ? "#FF5A30" : "#FFFFFF",
              transition: { duration: 0.3 },
            },
          }}
          onClick={() => projectIndex < 3 && setProjectIndex((pv) => pv + 1)}
          className={`absolute right-0 bottom-[10px] size-[48px] flex justify-center items-center rounded-full ${
            projectIndex < 3 ? "" : "cursor-default"
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
                  fill: projectIndex < 3 ? "#FFFFFF" : "#424551",
                  transition: { duration: 0.3 },
                },
              }}
            />
          </svg>
        </motion.button>
      </div>
      <motion.div
        style={{ transition: "all ease-out 0.5s" }}
        animate={{
          translateX: `-${(projectIndex * 100) / 3}%`,
        }}
        className="flex">
        <SelectedProjects />
      </motion.div>
      <div className="flex justify-center items-center gap-[40px] pt-[80px]">
        <h3 className="font-[700] text-[28px] text-heading">
          Explore all our works
        </h3>
        <motion.button
          initial="initial"
          whileHover="hover"
          variants={{
            initial: { backgroundColor: "#FF5A30", color: "#FFFFFF" },
            hover: { backgroundColor: "#FFFFFF", color: "#FF5A30" },
          }}
          className="bg-primary border-[1px] border-primary px-[40px] py-[10px] rounded-[4px] font-[700] text-[16px] text-[#FFFFFF] uppercase">
          <Link to="/work">View portfolio</Link>
        </motion.button>
      </div>
    </section>
  );
};

export default SelectedProjectsSection;
