import React from "react";

const ServiceBenefits = () => {
  return (
    <section className="container mx-auto flex flex-col mt-[40px] md:mt-[80px]">
      <div className="text-center mb-[20px]">
        <h2 className="font-[700] text-[26px] md:text-[46px] text-heading">
          Our core values
        </h2>
        <p className="font-[400] text-[12px] md:text-[18px] text-paragraph my-[10px] md:my-[20px]">
          Our mission is to set the highest standards for construction sphere.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-center gap-[30px] md:gap-[30px] lg:gap-[80px]">
        <div className="flex flex-col items-center gap-[5px] md:gap-[10px] w-full md:w-[285px]">
          <img
            src="./images/ic-like.svg"
            className="size-[40px] md:size-[48px]"
            alt=""
          />
          <h3 className="font-[700] text-[20px] text-heading">Quality</h3>
          <p className="font-[400] text-[12px] md:text-[16px] text-center text-paragraph">
            Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam
            velit nostrud aliquip sunt.
          </p>
        </div>
        <div className="flex flex-col items-center gap-[5px] md:gap-[10px] md:border-r-[1px] md:border-l-[1px] md:px-[30px] lg:px-[80px] w-[full] md:w-[345px] lg:w-[445px]">
          <img
            src="./images/ic-hand.svg"
            className="size-[40px] md:size-[48px]"
            alt=""
          />
          <h3 className="font-[700] text-[20px] text-heading">Safety</h3>
          <p className="font-[400] text-[12px] md:text-[16px] text-center text-paragraph">
            Anim reprehenderit sint voluptate exercitation adipisicing laborum
            adipisicing. Minim empor est ea.
          </p>
        </div>
        <div className="flex flex-col items-center gap-[5px] md:gap-[10px] w-full md:w-[285px]">
          <img
            src="./images/ic-slippers.svg"
            className="size-[40px] md:size-[48px]"
            alt=""
          />
          <h3 className="font-[700] text-[20px] text-heading">Comfort</h3>
          <p className="font-[400] text-[12px] md:text-[16px] text-center text-paragraph">
            Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit
            voluptate ullamco proident ea ad.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceBenefits;
