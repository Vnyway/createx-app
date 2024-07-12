import React from "react";
import { Link } from "react-router-dom";

const PageTopSection = ({ background, heading, paragraph, path }) => {
  return (
    <section
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
      }}
      className="h-[400px] md:h-[600px] mt-[-80px] bg-[#F4F5F6] flex items-center">
      <div className="container mx-auto flex flex-col gap-[10px] md:gap-[20px] mt-[30px] md:mt-0">
        {path && path.length > 0 && (
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
        )}
        <h1 className="font-[700] text-[40px] md:text-[72px] text-heading max-w-[400px] leading-[80px]">
          {heading}
        </h1>
        <p className="font-[400] text-[16px] md:text-[20px] text-paragraph w-full md:w-[50%]">
          {paragraph}
        </p>
      </div>
    </section>
  );
};

export default PageTopSection;
