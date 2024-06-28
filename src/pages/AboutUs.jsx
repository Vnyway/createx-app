import React from "react";
import PageTopSection from "../components/general-components/PageTopSection";
import Features from "../components/about-us-components/Features";
import CoreValues from "../components/general-components/CoreValues";
import History from "../components/about-us-components/History";

const features = [
  {
    id: 1,
    image: "./images/ic-like.svg",
    name: "Quality",
    description:
      "Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.",
  },
  {
    id: 2,
    image: "./images/ic-hand.svg",
    name: "Safety",
    description:
      "Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea.",
  },
  {
    id: 3,
    image: "./images/ic-slippers.svg",
    name: "Comfort",
    description:
      "Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.",
  },
];

const AboutUs = () => {
  return (
    <main>
      <PageTopSection
        path={[{ name: "Homepage", ref: "/" }, { name: "About Us" }]}
        heading="About Us"
        paragraph="Createx Construction Bureau has been successfully operating in the USA construction market since 2000. We are proud to offer you quality construction and exemplary service."
        background="./images/about-us/background.svg"
      />
      <Features />
      <CoreValues
        features={features}
        background="gray"
        heading="Our core values"
        paragraph="Our mission is to set the highest standards for construction sphere."
      />
      <History />
    </main>
  );
};

export default AboutUs;
