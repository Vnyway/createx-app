import React, { useState } from "react";
import { motion, useMotionValue } from "framer-motion";

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
        className="aspect-video shrink-0 w-full ">
        <div className="container mx-auto flex flex-col gap-[35px] text-white">
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
              whileHover={{
                backgroundColor: "#FF5A30",
                borderColor: "#FF5A30",
                transition: { duration: 0.3 },
              }}
              className="uppercase border-[1px] rounded-[4px] border-white bg-transparent px-[39px] py-[15px]">
              learn more about us
            </motion.button>
            <motion.button
              whileHover={{
                backgroundColor: "transparent",
                borderColor: "white",
                transition: { duration: 0.3 },
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
  const [dragging, setDragging] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const dragX = useMotionValue(0);
  const onDragStart = () => {
    setDragging(true);
  };
  const onDragEnd = () => {
    setDragging(false);
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && imageIndex < imagesIndexes.length - 1) {
      setImageIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imageIndex > 0) {
      setImageIndex((pv) => pv - 1);
    }
  };
  return (
    <div className="relative overflow-hidden max-h-[988px]">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        animate={{ translateX: `-${imageIndex * 100}%` }}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        className="flex cursor-grab active:cursor-grabbing items-center">
        <Images />
      </motion.div>
      <div className="absolute  flex"></div>
      <button
        onClick={() => imageIndex > 0 && setImageIndex((pv) => pv - 1)}
        className="absolute flex size-[48px] rounded-full bg-white justify-center items-center top-[50%] translate-y-[-50%] left-[20px]">
        <img src="./images/arrow.svg" alt="" />
      </button>
      <button
        onClick={() => imageIndex < 3 && setImageIndex((pv) => pv + 1)}
        className="absolute size-[48px] rounded-full bg-white flex justify-center items-center top-[50%] translate-y-[-50%] right-[20px]">
        <img src="./images/arrow.svg" alt="" className="rotate-180" />
      </button>
    </div>
  );
};

export default Slider;
