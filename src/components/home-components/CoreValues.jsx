import React from "react";

const CoreValues = () => {
  return (
    <section className="container mx-auto flex flex-col mt-[80px]">
      <div className="text-center mb-[20px]">
        <h2 className="font-[700] text-[46px] text-heading">Our core values</h2>
        <p className="font-[400] text-[18px] text-paragraph my-[20px]">
          Our mission is to set the highest standards for construction sphere.
        </p>
      </div>
      <div className="flex">
        <div className="flex flex-col items-center gap-[10px]">
          <img src="./images/ic-like.svg" className="size-[48px]" alt="" />
          <h3 className="font-[700] text-[20px] text-heading">Quality</h3>
          <p className="font-[400] text-[16px] text-paragraph">
            Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam
            velit nostrud aliquip sunt.
          </p>
        </div>
        <div className="flex flex-col items-center gap-[10px]">
          <img src="./images/ic-hand.svg" className="size-[48px]" alt="" />
          <h3 className="font-[700] text-[20px] text-heading">Safety</h3>
          <p className="font-[400] text-[16px] text-paragraph">
            Anim reprehenderit sint voluptate exercitation adipisicing laborum
            adipisicing. Minim empor est ea.
          </p>
        </div>
        <div className="flex flex-col items-center gap-[10px]">
          <img src="./images/ic-slippers.svg" className="size-[48px]" alt="" />
          <h3 className="font-[700] text-[20px] text-heading">Comfort</h3>
          <p className="font-[400] text-[16px] text-paragraph">
            Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit
            voluptate ullamco proident ea ad.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
