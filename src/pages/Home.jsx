import React from "react";
import Header from "../components/header/Header";
import Slider from "../components/home-components/Slider";
import VideoSection from "../components/home-components/VideoSection";
import CoreValues from "../components/home-components/CoreValues";
import OurServices from "../components/home-components/OurServices";
import SelectedProjectsSection from "../components/home-components/SelectedProjectsSection";

const Home = () => {
  return (
    <main>
      <Slider />
      <VideoSection />
      <CoreValues />
      <OurServices />
      <SelectedProjectsSection />
    </main>
  );
};

export default Home;
