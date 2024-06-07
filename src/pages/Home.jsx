import React from "react";
import Header from "../components/header/Header";
import Slider from "../components/home-components/Slider";
import VideoSection from "../components/home-components/VideoSection";
import CoreValues from "../components/home-components/CoreValues";

const Home = () => {
  return (
    <main>
      <Slider />
      <VideoSection />
      <CoreValues />
    </main>
  );
};

export default Home;
