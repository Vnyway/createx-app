import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    id: "1",
    image: "./images/services/construction.svg",
    heading: "Construction",
    paragraph:
      "Sapien, feugiat faucibus orci arcu, vulputate. Tristique varius consectetur vulputate arcu, scelerisque nisi, nibh. Enim semper id sodales ultricies sed ut ut augue. Mattis habitant venenatis, gravida posuere massa ac interdum. Eget aliquam dignissim ut vestibulum. ",
  },
  {
    id: "2",
    image: "./images/services/development.svg",
    heading: "Project Development",
    paragraph:
      "Volutpat tellus mauris sit sit. Posuere ut sit vestibulum amet viverra in. Est nulla lectus purus tincidunt massa tortor. Hendrerit vulputate elementum blandit massa vitae amet felis eget. ",
  },
  {
    id: "3",
    image: "./images/services/design.svg",
    heading: "Interior Design",
    paragraph:
      "Eleifend orci massa et facilisis orci feugiat ac. Congue in ut lacus, turpis accumsan gravida. Aliquet mattis dignissim massa sociis a, id bibendum. Egestas lorem eros, mi cras amet, vel eget molestie. Turpis enim arcu, amet donec massa pellentesque nulla duis. Arcu dictum metus sed purus senectus faucibus eget elementum pretium. ",
  },
  {
    id: "4",
    image: "./images/services/repairs.svg",
    heading: "Repairs",
    paragraph:
      "Facilisis cursus feugiat sit pulvinar amet. Ac facilisi dictum commodo, tortor gravida pretium, orci. Nunc sit sollicitudin id egestas mattis. Turpis viverra nec urna ultrices urna. ",
  },
];

const Services = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return services.map((element) => {
    if (screenSize < 768 || element.id % 2) {
      return (
        <div
          className="w-full flex flex-col md:flex-row gap-[20px] md:gap-[80px]"
          id={element.id}>
          <img src={element.image} alt="" className="w-full md:w-[50%]" />
          <div className="flex flex-col justify-center gap-[10px] md:gap-[30px]">
            <h3 className="font-[700] text-[32px] text-heading">
              {element.heading}
            </h3>
            <p className="font-[400] text-[16px] text-paragraph">
              {element.paragraph}
            </p>
            <Link
              to={`/${element.id}`}
              onClick={() => window.scrollTo(0, 0)}
              className="hover:bg-primary bg-white max-w-full md:max-w-[160px] mt-[10px] border-[1px] border-primary py-[10px] rounded-[4px] font-[700] text-[14px] text-primary hover:text-white transition-all duration-300 uppercase flex justify-center items-center">
              Learn more
            </Link>
          </div>
        </div>
      );
    } else {
      return (
        <div
          className="w-full flex flex-col md:flex-row gap-[20px] md:gap-[80px]"
          id={element.id}>
          <div className="flex flex-col justify-center gap-[10px] md:gap-[30px]">
            <h3 className="font-[700] text-[32px] text-heading">
              {element.heading}
            </h3>
            <p className="font-[400] text-[16px] text-paragraph">
              {element.paragraph}
            </p>
            <Link
              to={`/${element.id}`}
              onClick={() => window.scrollTo(0, 0)}
              className="hover:bg-primary bg-white max-w-full md:max-w-[160px] mt-[10px] border-[1px] border-primary py-[10px] rounded-[4px] font-[700] text-[14px] text-primary hover:text-white transition-all duration-300 uppercase flex justify-center items-center">
              Learn more
            </Link>
          </div>
          <img src={element.image} alt="" className="w-full md:w-[50%]" />
        </div>
      );
    }
  });
};

const ServicesInfoSection = () => {
  return (
    <section
      style={{
        backgroundImage: `url("./images/services/background-info.svg")`,
        backgroundSize: "cover",
      }}>
      <div className="container mx-auto py-[60px] flex flex-col gap-[80px]">
        <Services />
      </div>
    </section>
  );
};

export default ServicesInfoSection;
