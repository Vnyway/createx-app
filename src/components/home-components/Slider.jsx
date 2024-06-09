import React, { useEffect, useState } from "react";
import { motion, stagger, useMotionValue } from "framer-motion";

const imagesIndexes = [1, 2, 3, 4];

const DRAG_BUFFER = 50;

const Images = () => {
  return imagesIndexes.map((element) => {
    return (
      <div
        key={element}
        style={{
          backgroundImage: `url("./images/slider.svg")`,
          backgroundSize: "cover",
        }}
        className="aspect-video shrink-0 w-full h-[474px] md:h-[777px] lg:h-[988px]">
        <div className="container mx-auto mt-[20px] md:mt-[100px] lg:mt-[300px] flex flex-col gap-[35px] text-white">
          <h2 className="flex flex-col text-[72px] font-[700]">
            <span className="h-[80px]">
              CREATE<span className="text-primary">X</span>
            </span>
            <span className="h-[80px]">CONSTRUCTION</span>
          </h2>
          <p className="max-w-[595px] font-[400] text-[20px]">
            Cras ultrices leo vitae non viverra. Fringilla nisi quisque
            consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis
            purus eget pellentesque integer ipsum elementum felis.{" "}
          </p>
          <div className="flex gap-[20px] font-[700] text-[16px]">
            <motion.button
              transition={{ duration: 0.3 }}
              whileHover={{
                backgroundColor: "#FF5A30",
                borderColor: "#FF5A30",
              }}
              className="uppercase border-[1px] rounded-[4px] border-white bg-transparent px-[39px] py-[15px]">
              learn more about us
            </motion.button>
            <motion.button
              transition={{ duration: 0.3 }}
              whileHover={{
                backgroundColor: "#FFFFFF00",
                borderColor: "white",
              }}
              className="uppercase border-[1px] rounded-[4px] border-primary bg-primary px-[39px] py-[15px]">
              submit request
            </motion.button>
          </div>
        </div>
      </div>
    );
  });
};

const Slider = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [isLeftButtonEnabled, setIsLeftButtonEnabled] = useState(false);
  const [isRightButtonEnabled, setIsRightButtonEnabled] = useState(true);

  useEffect(() => {
    if (imageIndex === 0) {
      setIsLeftButtonEnabled(false);
      setIsRightButtonEnabled(true);
    } else if (imageIndex > 0 && imageIndex < 3) {
      setIsLeftButtonEnabled(true);
      setIsRightButtonEnabled(true);
    } else {
      setIsLeftButtonEnabled(true);
      setIsRightButtonEnabled(false);
    }
  }, [imageIndex]);

  const dragX = useMotionValue(0);
  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && imageIndex < imagesIndexes.length - 1) {
      setImageIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imageIndex > 0) {
      setImageIndex((pv) => pv - 1);
    }
  };

  return (
    <section className="relative overflow-hidden max-h-[988px]">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX, transition: "all ease-out 0.5s" }}
        animate={{ translateX: `-${imageIndex * 100}%` }}
        onDragEnd={onDragEnd}
        className="flex cursor-grab active:cursor-grabbing items-center">
        <Images />
      </motion.div>
      <div className="absolute  bottom-[15%] left-[0] w-full flex">
        <ul className="flex container mx-auto gap-[10px] font-[700] text-[28px] leading-[42px]">
          <li>
            <button
              onClick={() => setImageIndex(0)}
              className={`w-[178px] h-[54px] flex flex-col text-left ${
                imageIndex === 0 ? "text-white" : "text-[#ffffff4d]"
              }`}>
              <span
                className={`my-[5px] transition-all duration-1000 ease-out ${
                  imageIndex === 0 ? "#ffffff" : "#ffffff4d"
                }`}>
                01
              </span>
              <motion.span
                animate={{
                  backgroundPositionX: imageIndex === 0 ? "left" : "right",
                }}
                style={{
                  width: "178px",
                  height: "2px",
                  background:
                    "linear-gradient(to right, white 50%, #ffffff4d 50%)",
                  backgroundSize: "200% 100%",
                  backgroundPosition: "right bottom",
                  transition: "all 1s ease-out",
                }}></motion.span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setImageIndex(1)}
              className={`w-[178px] h-[54px] flex flex-col text-left ${
                imageIndex === 1 ? "text-white" : "text-[#ffffff4d]"
              }`}>
              <span
                className={`my-[5px] transition-all duration-1000 ease-out ${
                  imageIndex === 1 ? "#ffffff" : "#ffffff4d"
                }`}>
                02
              </span>
              <motion.span
                animate={{
                  backgroundPositionX: imageIndex === 1 ? "left" : "right",
                }}
                style={{
                  width: "178px",
                  height: "2px",
                  background:
                    "linear-gradient(to right, white 50%, #ffffff4d 50%)",
                  backgroundSize: "200% 100%",
                  backgroundPosition: "right bottom",
                  transition: "all 1s ease-out",
                }}></motion.span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setImageIndex(2)}
              className={`w-[178px] h-[54px] flex flex-col text-left ${
                imageIndex === 2 ? "text-white" : "text-[#ffffff4d]"
              }`}>
              <span
                className={`my-[5px] transition-all duration-1000 ease-out ${
                  imageIndex === 2 ? "#ffffff" : "#ffffff4d"
                }`}>
                03
              </span>
              <motion.span
                animate={{
                  backgroundPositionX: imageIndex === 2 ? "left" : "right",
                }}
                style={{
                  width: "178px",
                  height: "2px",
                  background:
                    "linear-gradient(to right, white 50%, #ffffff4d 50%)",
                  backgroundSize: "200% 100%",
                  backgroundPosition: "right bottom",
                  transition: "all 1s ease-out",
                }}></motion.span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setImageIndex(3)}
              className={`w-[178px] h-[54px] flex flex-col text-left ${
                imageIndex === 3 ? "text-white" : "text-[#ffffff4d]"
              }`}>
              <span
                className={`my-[5px] transition-all duration-1000 ease-out ${
                  imageIndex === 3 ? "#ffffff" : "#ffffff4d"
                }`}>
                04
              </span>
              <motion.span
                animate={{
                  backgroundPositionX: imageIndex === 3 ? "left" : "right",
                }}
                style={{
                  width: "178px",
                  height: "2px",
                  background:
                    "linear-gradient(to right, white 50%, #ffffff4d 50%)",
                  backgroundSize: "200% 100%",
                  backgroundPosition: "right bottom",
                  transition: "all 1s ease-out",
                }}></motion.span>
            </button>
          </li>
        </ul>
      </div>
      <motion.button
        onClick={() => imageIndex > 0 && setImageIndex((pv) => pv - 1)}
        initial="initial"
        whileHover="hover"
        animate="initial"
        transition={{ duration: 0.3 }}
        variants={{
          initial: {
            backgroundColor: isLeftButtonEnabled ? "#FFFFFF" : "#42455180",
          },
          hover: {
            backgroundColor: isLeftButtonEnabled ? "#FF5A30" : "#42455180",
          },
        }}
        className={`absolute size-[48px] rounded-full  flex justify-center items-center top-[50%] translate-y-[-50%] left-[20px] ${
          imageIndex > 0 ? "bg-white" : "cursor-not-allowed bg-customGray/50"
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
            fill="#424551"
            variants={{
              initial: { fill: "#424551" },
              hover: { fill: isLeftButtonEnabled ? "#FFFFFF" : "#424551" },
            }}
          />
        </svg>
      </motion.button>
      <motion.button
        onClick={() => imageIndex < 3 && setImageIndex((pv) => pv + 1)}
        initial="initial"
        whileHover="hover"
        animate="initial"
        transition={{ duration: 0.3 }}
        variants={{
          initial: {
            backgroundColor: isRightButtonEnabled ? "#FFFFFF" : "#42455180",
          },
          hover: {
            backgroundColor: isRightButtonEnabled ? "#FF5A30" : "#42455180",
          },
        }}
        className={`absolute size-[48px] rounded-full  flex justify-center items-center top-[50%] translate-y-[-50%] right-[20px] ${
          imageIndex < 3 ? "bg-white" : "cursor-not-allowed bg-customGray/50"
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
            fill="#424551"
            variants={{
              initial: { fill: "#424551" },
              hover: { fill: isRightButtonEnabled ? "#FFFFFF" : "#424551" },
            }}
          />
        </svg>
      </motion.button>
    </section>
  );
};

export default Slider;
