import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import LearnMore from "../home-components/LearnMore";

const SelectedProjects = ({ projects }) =>
  projects.map((element) => (
    <motion.div
      initial="initial"
      whileHover="hover"
      key={element.id}
      id={element.id}
      className="flex flex-col w-full md:w-1/3 px-[1%] shrink-0">
      <img
        src={element.image}
        className="w-full object-cover"
        alt={`${element.id}`}
      />
      <motion.div
        variants={{
          initial: { height: "80px", marginTop: 0 },
          hover: {
            height: "145px",
            marginTop: "-65px",
            transition: { duration: 0.3 },
          },
        }}
        className="flex flex-col gap-[5px] items-center py-[15px] bg-white shadow-md mb-[5px] h-[80px] overflow-y-hidden">
        <h4 className="font-[700] text-[20px] text-heading">
          {element.heading}
        </h4>
        <span className="font-[400] text-[14px] text-paragraph">
          {element.span}
        </span>
        <Link
          to={`/work/${element.id - 1}`}
          onClick={() => window.scrollTo(0, 0)}>
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
        </Link>
      </motion.div>
    </motion.div>
  ));

const SelectedProjectsSection = ({ heading, projects, marginTop }) => {
  const [projectIndex, setProjectIndex] = useState(0);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section className={`${marginTop ? "mt-[-25px]" : ""} bg-white`}>
      <div className="container mx-auto py-[40px] md:py-[80px] overflow-hidden">
        <div className="px-[1%] relative md:pb-0 pb-[70px] mb-[10px] ">
          <h3 className="font-[700] text-[28px] md:text-[46px] text-heading w-full md:w-[80%]">
            {heading}
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
                backgroundColor:
                  (screenSize >= 768 && projectIndex < projects.length - 3) ||
                  (screenSize < 768 && projectIndex < projects.length - 1)
                    ? "#FF5A30"
                    : "#FFFFFF",
                transition: { duration: 0.3 },
              },
            }}
            onClick={() =>
              (screenSize < 768 &&
                projectIndex < projects.length - 1 &&
                setProjectIndex((pv) => pv + 1)) ||
              (screenSize >= 768 &&
                projectIndex < projects.length - 3 &&
                setProjectIndex((pv) => pv + 1))
            }
            className={`absolute right-0 bottom-[10px] size-[48px] flex justify-center items-center rounded-full ${
              (screenSize >= 768 && projectIndex < projects.length - 3) ||
              (screenSize < 768 && projectIndex < projects.length - 1)
                ? ""
                : "cursor-default"
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
                    fill:
                      (screenSize >= 768 &&
                        projectIndex < projects.length - 3) ||
                      (screenSize < 768 && projectIndex < projects.length - 1)
                        ? "#FFFFFF"
                        : "#424551",
                    transition: { duration: 0.3 },
                  },
                }}
              />
            </svg>
          </motion.button>
        </div>
        <div className="overflow-x-hidden">
          <motion.div
            style={{ transition: "all ease-out 0.5s" }}
            animate={{
              translateX:
                screenSize < 768
                  ? `-${projectIndex * 100}%`
                  : `-${(projectIndex * 100) / 3}%`,
            }}
            className="flex">
            <SelectedProjects projects={projects} />
          </motion.div>
        </div>
        <LearnMore
          heading="Explore all our works"
          button="View portfolio"
          link="work"
        />
      </div>
    </section>
  );
};

export default SelectedProjectsSection;
