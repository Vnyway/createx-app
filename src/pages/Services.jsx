import React from "react";
import ServicesInfoSection from "../components/services-components/ServicesInfoSection";
import DiscussDetails from "../components/general-components/DiscussDetails";
import PageTopSection from "../components/general-components/PageTopSection";

const Services = () => {
  return (
    <main>
      <PageTopSection
        background="./images/services/background.svg"
        heading="SERVICES"
        paragraph="If you are looking for a full-service construction company, look to Createx Construction Bureau. We are doing our best to be a partner for all of your construction needs."
      />
      <ServicesInfoSection />
      <DiscussDetails />
    </main>
  );
};

export default Services;
