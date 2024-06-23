import React from "react";
import PageTopSection from "../components/general-components/PageTopSection";
import Features from "../components/about-us-components/Features";

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
    </main>
  );
};

export default AboutUs;
