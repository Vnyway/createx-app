import React from "react";

const SupportedSection = ({
  paddingTop,
  paddingBot,
  heading,
  paragraph,
  background,
}) => {
  return (
    <section
      className={`${paddingBot && "pb-[20px] md:pb-[40px]"} ${
        paddingTop && "pt-[40px] md:pt-[80px]"
      } ${background && "bg-[#F4F5F6]"}`}>
      <div className="container mx-auto">
        <h3 className="text-center font-[700] text-[28px] md:text-[46px] text-heading">
          {heading}
        </h3>
        {paragraph && (
          <p className="font-[400] text-[14px] md:text-[18px] text-paragraph text-center pt-[20px]">
            {paragraph}
          </p>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[40px] mt-[40px] mb-[40px] md:mb-[40px]">
          <div className="flex items-center justify-center">
            <img
              src="./images/partners/in-depth-consulting.svg"
              alt="in-depth-consulting"
            />
          </div>
          <div className="flex items-center justify-center">
            <img src="./images/partners/higher-fit.svg" alt="higher-fit" />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="./images/partners/sentinal-consulting.svg"
              alt="sentinal-consulting"
            />
          </div>
          <div className="flex items-center justify-center">
            <img src="./images/partners/happy-home.svg" alt="happy-home" />
          </div>
          <div className="flex items-center justify-center">
            <img src="./images/partners/for-sale.svg" alt="for-sale" />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="./images/partners/sunset-realty.svg"
              alt="sunset-realty"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportedSection;
