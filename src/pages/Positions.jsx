import React from "react";
import PageTopSection from "../components/general-components/PageTopSection";
import Offerings from "../components/positions-components/Offerings";
import CoreValues from "../components/general-components/CoreValues";
import DiscussDetails from "../components/general-components/DiscussDetails";

const features = [
  {
    id: 1,
    image: "./images/positions/icons/ic-brain.svg",
    name: "Training",
    description:
      "Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.",
  },
  {
    id: 2,
    image: "./images/positions/icons/ic-success.svg",
    name: "Professional Growth",
    description:
      "Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea.",
  },
  {
    id: 3,
    image: "./images/positions/icons/ic-budget.svg",
    name: "Growing Salary",
    description:
      "Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.",
  },
];

const Positions = () => {
  return (
    <main>
      <PageTopSection
        path={[
          { name: "Homepage", ref: "/" },
          { name: "About Us", ref: "./aboutUs" },
          { name: "Available Positions" },
        ]}
        heading="AVAILABLE POSITIONS"
        paragraph="Build your career with Createx Construction Bureau."
        background="./images/positions/background.svg"
      />
      <Offerings />
      <CoreValues
        features={features}
        heading="Employee benefits"
        paragraph="There’s always room for talent."
      />
      <DiscussDetails />
    </main>
  );
};

export default Positions;
