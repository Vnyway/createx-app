import React, { useState } from "react";
import PageTopSection from "../general-components/PageTopSection";
import { useParams } from "react-router-dom";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";

const services = [
  {
    id: 1,
    name: "Interior Design",
    description:
      "Dui augue nec mi mi. Ut ac lectus donec fames pellentesque. Laoreet aenean vulputate elementum blandit amet.",
    slider: [
      {
        id: 1,
        name: "Work Estimate",
        description:
          "Culpa nostrud commodo ea consequat aliquip reprehenderit.",
        image: "./images/service/service.svg",
        offerings: [
          {
            id: 1,
            name: "Interior design of apartments",
            description:
              "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.",
          },
          {
            id: 2,
            name: "Interior design of private houses",
            description:
              "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.",
          },
        ],
      },
      {
        id: 2,
        name: "Contract",
        description:
          "Laoreet ultrices curabitur luctus quisque consequat. Leo lorem velit imperdiet auctor et tempor.",
        image: "./images/service/service.svg",
        offerings: [
          {
            id: 3,
            name: "Interior design of apartments",
            description:
              "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.",
          },
          {
            id: 4,
            name: "Interior design of private houses",
            description:
              "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.",
          },
        ],
      },
      {
        id: 3,
        name: "Mobilization",
        description:
          "Odio massa scelerisque purus arcu sed velit eleifend cursus leo.",
        image: "./images/service/service.svg",
        offerings: [
          {
            id: 5,
            name: "Interior design of apartments",
            description:
              "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.",
          },
          {
            id: 6,
            name: "Interior design of private houses",
            description:
              "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.",
          },
        ],
      },
      {
        id: 4,
        name: "Construction Work",
        description:
          "Adipisicing esse aliqua aliquip qui amet. Aute eiusmod dolore dolore et ad et veniam ad deserunt.",
        image: "./images/service/service.svg",
        offerings: [
          {
            id: 7,
            name: "Interior design of apartments",
            description:
              "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.",
          },
          {
            id: 8,
            name: "Interior design of private houses",
            description:
              "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Interior Design",
    description:
      "Dui augue nec mi mi. Ut ac lectus donec fames pellentesque. Laoreet aenean vulputate elementum blandit amet.",
    slider: [
      {
        id: 1,
        name: "Work Estimate",
        description:
          "Culpa nostrud commodo ea consequat aliquip reprehenderit.",
        image: "./images/service/service.svg",
        offerings: [
          {
            id: 1,
            name: "Interior design of apartments",
            description:
              "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.",
          },
          {
            id: 2,
            name: "Interior design of private houses",
            description:
              "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.",
          },
        ],
      },
      {
        id: 2,
        name: "Contract",
        description:
          "Laoreet ultrices curabitur luctus quisque consequat. Leo lorem velit imperdiet auctor et tempor.",
        image: "./images/service/service.svg",
        offerings: [
          {
            id: 1,
            name: "Interior design of apartments",
            description:
              "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.",
          },
          {
            id: 2,
            name: "Interior design of private houses",
            description:
              "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.",
          },
        ],
      },
      {
        id: 3,
        name: "Mobilization",
        description:
          "Odio massa scelerisque purus arcu sed velit eleifend cursus leo.",
        image: "./images/service/service.svg",
        offerings: [
          {
            id: 1,
            name: "Interior design of apartments",
            description:
              "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.",
          },
          {
            id: 2,
            name: "Interior design of private houses",
            description:
              "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.",
          },
        ],
      },
      {
        id: 4,
        name: "Construction Work",
        description:
          "Adipisicing esse aliqua aliquip qui amet. Aute eiusmod dolore dolore et ad et veniam ad deserunt.",
        image: "./images/service/service.svg",
        offerings: [
          {
            id: 1,
            name: "Interior design of apartments",
            description:
              "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.",
          },
          {
            id: 2,
            name: "Interior design of private houses",
            description:
              "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Interior Design",
    description:
      "Dui augue nec mi mi. Ut ac lectus donec fames pellentesque. Laoreet aenean vulputate elementum blandit amet.",
    slider: [
      {
        id: 1,
        name: "Work Estimate",
        description:
          "Culpa nostrud commodo ea consequat aliquip reprehenderit.",
        image: "./images/service/service.svg",
        offerings: [
          {
            id: 1,
            name: "Interior design of apartments",
            description:
              "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.",
          },
          {
            id: 2,
            name: "Interior design of private houses",
            description:
              "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.",
          },
        ],
      },
      {
        id: 2,
        name: "Contract",
        description:
          "Laoreet ultrices curabitur luctus quisque consequat. Leo lorem velit imperdiet auctor et tempor.",
        image: "./images/service/service.svg",
        offerings: [
          {
            id: 1,
            name: "Interior design of apartments",
            description:
              "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.",
          },
          {
            id: 2,
            name: "Interior design of private houses",
            description:
              "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.",
          },
        ],
      },
      {
        id: 3,
        name: "Mobilization",
        description:
          "Odio massa scelerisque purus arcu sed velit eleifend cursus leo.",
        image: "./images/service/service.svg",
        offerings: [
          {
            id: 1,
            name: "Interior design of apartments",
            description:
              "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.",
          },
          {
            id: 2,
            name: "Interior design of private houses",
            description:
              "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.",
          },
        ],
      },
      {
        id: 4,
        name: "Construction Work",
        description:
          "Adipisicing esse aliqua aliquip qui amet. Aute eiusmod dolore dolore et ad et veniam ad deserunt.",
        image: "./images/service/service.svg",
        offerings: [
          {
            id: 1,
            name: "Interior design of apartments",
            description:
              "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.",
          },
          {
            id: 2,
            name: "Interior design of private houses",
            description:
              "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Interior Design",
    description:
      "Dui augue nec mi mi. Ut ac lectus donec fames pellentesque. Laoreet aenean vulputate elementum blandit amet.",
    slider: [
      {
        id: 1,
        name: "Work Estimate",
        description:
          "Culpa nostrud commodo ea consequat aliquip reprehenderit.",
        image: "./images/service/service.svg",
        offerings: [
          {
            id: 1,
            name: "Interior design of apartments",
            description:
              "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.",
          },
          {
            id: 2,
            name: "Interior design of private houses",
            description:
              "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.",
          },
        ],
      },
      {
        id: 2,
        name: "Contract",
        description:
          "Laoreet ultrices curabitur luctus quisque consequat. Leo lorem velit imperdiet auctor et tempor.",
        image: "./images/service/service.svg",
        offerings: [
          {
            id: 1,
            name: "Interior design of apartments",
            description:
              "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.",
          },
          {
            id: 2,
            name: "Interior design of private houses",
            description:
              "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.",
          },
        ],
      },
      {
        id: 3,
        name: "Mobilization",
        description:
          "Odio massa scelerisque purus arcu sed velit eleifend cursus leo.",
        image: "./images/service/service.svg",
        offerings: [
          {
            id: 1,
            name: "Interior design of apartments",
            description:
              "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.",
          },
          {
            id: 2,
            name: "Interior design of private houses",
            description:
              "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.",
          },
        ],
      },
      {
        id: 4,
        name: "Construction Work",
        description:
          "Adipisicing esse aliqua aliquip qui amet. Aute eiusmod dolore dolore et ad et veniam ad deserunt.",
        image: "./images/service/service.svg",
        offerings: [
          {
            id: 1,
            name: "Interior design of apartments",
            description:
              "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.",
          },
          {
            id: 2,
            name: "Interior design of private houses",
            description:
              "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.",
          },
        ],
      },
    ],
  },
];

const featureIndexes = [0, 1, 2, 3];

const Features = ({ data }) => {
  const [descriptionOpened, setDescriptionOpened] = useState(0);
  const handleToggle = (id) => {
    if (descriptionOpened === id) {
      setDescriptionOpened(0);
      console.log(descriptionOpened);
    } else {
      setDescriptionOpened(id);
      console.log(descriptionOpened);
    }
  };

  return data.slider.map((element) => {
    return (
      <div className="w-full shrink-0 flex gap-[60px]">
        <img
          onDragStart={(e) => e.preventDefault()}
          src={element.image}
          alt={element.name}
          className="w-[50%]"
        />
        <div className="flex flex-col w-[50%] justify-center gap-[20px]">
          <h2 className="font-[700] text-[46px] text-heading">We offer</h2>
          {element.offerings.map((offering) => {
            return (
              <div className="flex items-start gap-[20px]">
                <button
                  onClick={() => handleToggle(offering.id)}
                  className="relative size-[22px] shrink-0 mt-[12px]">
                  <svg
                    width="22"
                    height="2"
                    viewBox="0 0 22 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-0 top-[50%] translate-y-[-50%]">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 1C0 0.447715 0.447715 0 1 0V1V2C0.447715 2 0 1.55228 0 1ZM21 1L20.9999 2H1V1V0H20.9994L21 1ZM21 1L20.9999 2C21.5522 2 22 1.55228 22 1C22 0.447715 21.5517 0 20.9994 0L21 1Z"
                      fill="#FF5A30"
                    />
                  </svg>
                  <svg
                    width="22"
                    height="2"
                    viewBox="0 0 22 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-[50%] translate-x-[-50%] rotate-90">
                    <path
                      style={{ transition: "all", transitionDuration: "0.3s" }}
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 1C0 0.447715 0.447715 0 1 0V1V2C0.447715 2 0 1.55228 0 1ZM21 1L20.9999 2H1V1V0H20.9994L21 1ZM21 1L20.9999 2C21.5522 2 22 1.55228 22 1C22 0.447715 21.5517 0 20.9994 0L21 1Z"
                      fill={
                        descriptionOpened === offering.id
                          ? "#FFFFFF00"
                          : "#FF5A30"
                      }
                    />
                  </svg>
                </button>
                <motion.div
                  className={`${
                    descriptionOpened === offering.id ? "h-[179px]" : "h-[80px]"
                  } overflow-hidden flex-col gap-[200px] transition-all duration-300 ease-out`}>
                  <h3 className="font-[700] text-[28px] text-heading">
                    {offering.name}
                  </h3>
                  <p className={` font-[400] text-[16px] text-paragraph`}>
                    {offering.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    );
  });
};

const Offerings = ({ data }) => {
  const [featureIndex, setFeatureIndex] = useState(0);
  const dragX = useMotionValue(0);
  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -50 && featureIndex < featureIndexes.length - 1) {
      setFeatureIndex((pv) => pv + 1);
    } else if (x >= 50 && featureIndex > 0) {
      setFeatureIndex((pv) => pv - 1);
    }
  };
  return (
    <section className="container mx-auto py-[60px]">
      <div className="overflow-x-hidden">
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          style={{ x: dragX, transition: "all ease-out 0.5s" }}
          animate={{ translateX: `-${featureIndex * 100}%` }}
          onDragEnd={onDragEnd}
          className="flex cursor-grab active:cursor-grabbing items-center">
          <Features data={data} />
        </motion.div>
      </div>
      <div className="flex flex-col mt-[60px]">
        <h2 className="font-[700] text-[46px] text-heading mb-[40px]">
          That’s how we do it
        </h2>
        <div className="flex gap-[4%]">
          <div className="flex flex-col gap-[10px] w-[22%]">
            <button className="font-[700] text-[46px] text-[#D7DADD] size-[84px] rounded-full bg-primary">
              01
            </button>
            <h4 className="font-[700] text-[20px] text-heading">
              Work Estimate
            </h4>
            <p className="font-[400] text-[16px] text-paragraph">
              Culpa nostrud commodo ea consequat aliquip reprehenderit.
            </p>
          </div>
          <div className="flex flex-col gap-[10px] w-[22%]">
            <button className="font-[700] text-[46px] text-[#D7DADD] size-[84px] rounded-full bg-primary">
              02
            </button>
            <h4 className="font-[700] text-[20px] text-heading">Contract</h4>
            <p className="font-[400] text-[16px] text-paragraph">
              Laoreet ultrices curabitur luctus quisque consequat. Leo lorem
              velit imperdiet auctor et tempor.
            </p>
          </div>
          <div className="flex flex-col gap-[10px] w-[22%]">
            <button className="font-[700] text-[46px] text-[#D7DADD] size-[84px] rounded-full bg-primary">
              03
            </button>
            <h4 className="font-[700] text-[20px] text-heading">
              Mobilization{" "}
            </h4>
            <p className="font-[400] text-[16px] text-paragraph">
              Odio massa scelerisque purus arcu sed velit eleifend cursus leo.
            </p>
          </div>
          <div className="flex flex-col gap-[10px] w-[22%]">
            <button className="font-[700] text-[46px] text-[#D7DADD] size-[84px] rounded-full bg-primary">
              04
            </button>
            <h4 className="font-[700] text-[20px] text-heading">
              Construction Work
            </h4>
            <p className="font-[400] text-[16px] text-paragraph">
              Adipisicing esse aliqua aliquip qui amet. Aute eiusmod dolore
              dolore et ad et veniam ad deserunt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Service = () => {
  const { serviceId } = useParams();
  console.log(serviceId);
  const data = services.find((element) => element.id === Number(serviceId));
  return (
    <main>
      <PageTopSection
        path={[
          { name: "Homepage", ref: "/" },
          { name: "Services", ref: "/services" },
          { name: data.name },
        ]}
        heading={data.name}
        paragraph={data.description}
        background="./images/service/background.svg"
      />
      <Offerings data={data} />
    </main>
  );
};

export default Service;
