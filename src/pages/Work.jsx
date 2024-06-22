import React from "react";
import PageTopSection from "../components/general-components/PageTopSection";
import WorkExamplesSection from "../components/work-components/WorkExamplesSection";
import ClientsComments from "../components/home-components/ClientsComments";
import SupportedSection from "../components/general-components/SupportedSection";
import DiscussDetails from "../components/general-components/DiscussDetails";

const Work = () => {
  return (
    <main>
      <PageTopSection
        path={[{ name: "Homepage", ref: "/" }, { name: "Work" }]}
        heading="Our work"
        paragraph="Our portfolio represents 20 years of construction experience backed by a passion for perfect client service, quality and innovations in consctuction industry."
        background="./images/work/background.svg"
      />
      <WorkExamplesSection />
      <ClientsComments />
      <SupportedSection
        heading="Our clients"
        paddingBot={true}
        paddingTop={true}
      />
      <DiscussDetails />
    </main>
  );
};

export default Work;
