import React from "react";
import Slider from "../components/home-components/Slider";
import VideoSection from "../components/home-components/VideoSection";
import CoreValues from "../components/home-components/CoreValues";
import OurServices from "../components/home-components/OurServices";
import SelectedProjectsSection from "../components/home-components/SelectedProjectsSection";
import ClientsComments from "../components/home-components/ClientsComments";
import FactsAndNewsSection from "../components/home-components/FactsAndNewsSection";
import DiscussDetails from "../components/home-components/DiscussDetails";

const Home = () => {
  return (
    <main>
      <Slider />
      <VideoSection />
      <CoreValues />
      <OurServices />
      <SelectedProjectsSection />
      <ClientsComments />
      <FactsAndNewsSection />
      <DiscussDetails />
    </main>
  );
};

export default Home;
