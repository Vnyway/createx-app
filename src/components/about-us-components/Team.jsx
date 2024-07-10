import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { hover } from "@testing-library/user-event/dist/hover";

const team = [
  {
    id: 1,
    image: "./images/about-us/team/member1.svg",
    heading: "Courtney Alexander",
    span: "CEO, Co-Founder",
  },
  {
    id: 2,
    image: "./images/about-us/team/member2.svg",
    heading: "Calvin Fox",
    span: "CTO, Co-Founder",
  },
  {
    id: 3,
    image: "./images/about-us/team/member3.svg",
    heading: "Johnny Lane",
    span: "Commercial Manager",
  },
  {
    id: 4,
    image: "./images/about-us/team/member4.svg",
    heading: "Diane Mccoy",
    span: "Director of Human Resources",
  },
  {
    id: 5,
    image: "./images/about-us/team/member5.svg",
    heading: "Judith Warren",
    span: "Lead Accountant",
  },
  {
    id: 6,
    image: "./images/about-us/team/member6.svg",
    heading: "Floyd Simmmons",
    span: "Finacial Director",
  },
  {
    id: 7,
    image: "./images/about-us/team/member7.svg",
    heading: "Serenity Edwards",
    span: "Director of Marketing",
  },
  {
    id: 8,
    image: "./images/about-us/team/member8.svg",
    heading: "Shawn Edwards",
    span: "Tech Lead",
  },
];

const Team = () => {
  return (
    <section>
      <div className="container mx-auto pt-0 md:pt-[40px] pb-[40px] md:pb-[80px] flex flex-col gap-[30px] md:gap-[40px]">
        <h3 className="text-center font-[700] text-[28px] md:text-[46px] text-heading">
          Our team
        </h3>
        <p className="font-[400] text-[14px] md:text-[18px] text-paragraph text-center mt-[-20px]">
          People are at the heart of Createx Construction Bureau
        </p>
        <div className="grid gap-[15px] grid-cols-2 md:grid-cols-4">
          {team.map((element) => (
            <motion.div
              initial="initial"
              whileHover="hover"
              className="text-center pb-[10px]"
              id={element.id}>
              <img src={element.image} alt={element.heading} />

              <h3 className="font-[700] text-[18px] md:text-[20px] text-heading pt-[10px]">
                {element.heading}
              </h3>
              <span className="font-[400] text-[14px] md:text-[16px] text-paragraph ">
                {element.span}
              </span>
            </motion.div>
          ))}
        </div>
        <p className="font-[400] text-[16px] md:text-[18px] text-heading text-center">
          Become a part of the best team in the construction market of the USA.{" "}
          <Link
            className="text-primary underline"
            to="/positions"
            onClick={() => window.scrollTo(0, 0)}>
            Available Positions
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Team;
