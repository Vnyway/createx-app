import React from "react";
import { Link } from "react-router-dom";

const ProjectTopSection = ({
  path,
  heading,
  image,
  goal,
  details,
  decisions,
}) => {
  return (
    <section
      style={{
        backgroundImage: `url("/images/project/background.svg")`,
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "right",
      }}>
      <div className="container mx-auto pt-[20px] md:pt-[40px] pb-[40px] md:pb-[80px] flex flex-col gap-[80px]">
        <div className="flex flex-col gap-[10px]">
          <div>
            {path.map((element, id) => {
              if (id < path.length - 1) {
                return (
                  <span
                    key={id}
                    className="font-[400] text-[14px] text-heading">
                    <Link to={element.ref}>{`${element.name} / `}</Link>
                  </span>
                );
              } else {
                return (
                  <span
                    key={id}
                    className="font-[400] text-[14px] text-paragraph">
                    {element.name}
                  </span>
                );
              }
            })}
          </div>
          <h1 className="font-[700] text-[40px] md:text-[64px]">{heading}</h1>
          <div className="pt-[40px] flex flex-col md:flex-row md:items-center gap-[40px] md:gap-[4%]">
            <img src={image} alt={heading} className="w-full md:w-[48%]" />
            <div className="flex flex-col gap-[30px] w-full md:w-[48%]">
              <h2 className="font-[700] text-[24px] md:text-[32px] lg:text-[46px] text-heading">
                Constructive decisions
              </h2>
              <div className="flex flex-col gap-[15px]">
                {decisions.map((decision, index) => (
                  <div key={index} className="flex gap-[10px] items-center">
                    <img src="/images/news/check.svg" alt="check" />
                    <p>{decision}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[30px] md:gap-[10%] md:items-center">
          <div className="w-full md:w-[45%] flex flex-col gap-[20px]">
            <h2 className="font-[700] text-[26px] md:text-[36px] lg:text-[46px] text-heading">
              Project goal
            </h2>
            <div className="flex flex-col gap-[20px] font-[400] text-[18px] text-customGray">
              {goal.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="w-full flex flex-col gap-[10px] md:w-[45%] px-[20px] lg:px-[50px] py-[10px] lg:py-[40px] bg-white rounded-[4px] shadow-md">
            {details.map((detail, index) => (
              <div
                key={index}
                className="grid grid-cols-5 gap-[5px] md:gap-[10px]">
                <div className="flex items-center col-span-5 md:col-span-2">
                  <h4 className="capitalize font-[700] text-[20px] text-heading">
                    {detail.name}
                  </h4>
                </div>
                <div className="flex items-center col-span-5 md:col-span-3 pb-[10px] md:pb-0">
                  <span className="font-[400] text-[16px] text-paragraph">
                    {detail.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectTopSection;
