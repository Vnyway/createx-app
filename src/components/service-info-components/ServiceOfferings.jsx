import React, { useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import ServiceFeatures from "./ServiceFeatures";

const featureIndexes = [0, 1, 2, 3];

const ServiceOfferings = ({ data }) => {
  const [featureIndex, setFeatureIndex] = useState(0);
  const dragX = useMotionValue(0);

  const [descriptionOpened, setDescriptionOpened] = useState(0);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -50 && featureIndex < featureIndexes.length - 1) {
      setFeatureIndex((pv) => pv + 1);
      setDescriptionOpened(0);
    } else if (x >= 50 && featureIndex > 0) {
      setFeatureIndex((pv) => pv - 1);
      setDescriptionOpened(0);
    }
  };
  return (
    <section className="container mx-auto py-[60px]">
      <div className="overflow-hidden">
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          style={{ x: dragX, transition: "all ease-out 0.5s" }}
          animate={{ translateX: `-${featureIndex * 100}%` }}
          onDragEnd={onDragEnd}
          className="flex cursor-grab active:cursor-grabbing items-center">
          <ServiceFeatures
            data={data}
            descriptionOpened={descriptionOpened}
            setDescriptionOpened={setDescriptionOpened}
          />
        </motion.div>
      </div>
      <div className="hidden md:flex flex-col mt-[60px]">
        <h2 className="font-[700] text-[46px] text-heading mb-[40px]">
          That’s how we do it
        </h2>
        <div className="flex px-[10px]">
          <div className="flex flex-col gap-[10px] w-[25%]">
            <div className="relative">
              <button
                style={{
                  transition: "all 1s ease-out",
                }}
                onClick={() => setFeatureIndex(0)}
                className={`ml-[-33px] shrink-0 font-[700] text-[46px] size-[116px] rounded-full bg-opacity-5 flex justify-center items-center ${
                  featureIndex === 0
                    ? "bg-[#FF5A30] text-[#FF5A30]"
                    : "bg-[#FFFFFF] text-[#D7DADD]"
                }`}>
                <div
                  style={{
                    transition: "all 1s ease-out",
                  }}
                  className={`size-[84px] rounded-full shrink-0 bg-primary bg-opacity-10 flex justify-center items-center ${
                    featureIndex === 0 ? "bg-[#FF5A30]" : "bg-[#FFFFFF]"
                  }`}>
                  01
                </div>
              </button>
              <div className="absolute top-[50%] translate-y-[50%] left-[83px] right-[33px] -z-10 h-0 w-auto border-[1px] border-dashed border-[#D7DADD]"></div>
            </div>
            <div className="pr-[33px] flex flex-col gap-[10px]">
              <h4 className="font-[700] text-[18px] lg:text-[20px] text-heading">
                Work Estimate
              </h4>
              <p className="font-[400] text-[15px] lg:text-[16px] text-paragraph">
                Culpa nostrud commodo ea consequat aliquip reprehenderit.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[10px] w-[25%]">
            <div className="relative">
              <button
                style={{
                  transition: "all 1s ease-out",
                }}
                onClick={() => setFeatureIndex(1)}
                className={`ml-[-33px] shrink-0 font-[700] text-[46px] size-[116px] rounded-full bg-opacity-5 flex justify-center items-center ${
                  featureIndex === 1
                    ? "bg-[#FF5A30] text-[#FF5A30]"
                    : "bg-[#FFFFFF] text-[#D7DADD]"
                }`}>
                <div
                  style={{
                    transition: "all 1s ease-out",
                  }}
                  className={`size-[84px] rounded-full shrink-0 bg-primary bg-opacity-10 flex justify-center items-center ${
                    featureIndex === 1 ? "bg-[#FF5A30]" : "bg-[#FFFFFF]"
                  }`}>
                  02
                </div>
              </button>
              <div className="absolute top-[50%] translate-y-[50%] left-[83px] right-[33px] -z-10 h-0 w-auto border-[1px] border-dashed border-[#D7DADD]"></div>
            </div>
            <div className="pr-[33px] flex flex-col gap-[10px]">
              <h4 className="font-[700] text-[18px] lg:text-[20px] text-heading">
                Contract
              </h4>
              <p className="font-[400] text-[15px] lg:text-[16px] text-paragraph">
                Laoreet ultrices curabitur luctus quisque consequat. Leo lorem
                velit imperdiet auctor et tempor.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[10px] w-[25%]">
            <div className="relative">
              <button
                style={{
                  transition: "all 1s ease-out",
                }}
                onClick={() => setFeatureIndex(2)}
                className={`ml-[-33px] shrink-0 font-[700] text-[46px] size-[116px] rounded-full bg-opacity-5 flex justify-center items-center ${
                  featureIndex === 2
                    ? "bg-[#FF5A30] text-[#FF5A30]"
                    : "bg-[#FFFFFF] text-[#D7DADD]"
                }`}>
                <div
                  style={{
                    transition: "all 1s ease-out",
                  }}
                  className={`size-[84px] rounded-full shrink-0 bg-primary bg-opacity-10 flex justify-center items-center ${
                    featureIndex === 2 ? "bg-[#FF5A30]" : "bg-[#FFFFFF]"
                  }`}>
                  03
                </div>
              </button>
              <div className="absolute top-[50%] translate-y-[50%] left-[83px] right-[33px] -z-10 h-0 w-auto border-[1px] border-dashed border-[#D7DADD]"></div>
            </div>
            <div className="pr-[33px] flex flex-col gap-[10px]">
              <h4 className="font-[700] text-[18px] lg:text-[20px] text-heading">
                Mobilization
              </h4>
              <p className="font-[400] text-[15px] lg:text-[16px] text-paragraph">
                Odio massa scelerisque purus arcu sed velit eleifend cursus leo.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[10px] w-[25%]">
            <div className="relative">
              <button
                style={{
                  transition: "all 1s ease-out",
                }}
                onClick={() => setFeatureIndex(3)}
                className={`ml-[-33px] shrink-0 font-[700] text-[46px] size-[116px] rounded-full bg-opacity-5 flex justify-center items-center ${
                  featureIndex === 3
                    ? "bg-[#FF5A30] text-[#FF5A30]"
                    : "bg-[#FFFFFF] text-[#D7DADD]"
                }`}>
                <div
                  style={{
                    transition: "all 1s ease-out",
                  }}
                  className={`size-[84px] rounded-full shrink-0 bg-primary bg-opacity-10 flex justify-center items-center ${
                    featureIndex === 3 ? "bg-[#FF5A30]" : "bg-[#FFFFFF]"
                  }`}>
                  04
                </div>
              </button>
            </div>
            <div className="pr-[33px] flex flex-col gap-[10px]">
              <h4 className="font-[700] text-[18px] lg:text-[20px] text-heading">
                Construction Work
              </h4>
              <p className="font-[400] text-[15px] lg:text-[16px] text-paragraph">
                Adipisicing esse aliqua aliquip qui amet. Aute eiusmod dolore
                dolore et ad et veniam ad deserunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOfferings;
