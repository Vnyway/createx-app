import React from "react";
import Slider from "../components/home-components/Slider";
import VideoSection from "../components/home-components/VideoSection";
import CoreValues from "../components/general-components/CoreValues";
import OurServices from "../components/home-components/OurServices";
import SelectedProjectsSection from "../components/general-components/SelectedProjectsSection";
import ClientsComments from "../components/home-components/ClientsComments";
import FactsAndNewsSection from "../components/home-components/FactsAndNewsSection";
import DiscussDetails from "../components/general-components/DiscussDetails";
import SupportedSection from "../components/general-components/SupportedSection";

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

const projects = [
  {
    id: 1,
    image: "./images/home/projects/red-finger.svg",
    h4: "Red Finger Building",
    span: "Business Centers",
  },
  {
    id: 2,
    image: "./images/home/projects/pencil.svg",
    h4: "The Pencil Building",
    span: "Business Centers",
  },
  {
    id: 3,
    image: "./images/home/projects/red-finger.svg",
    h4: "Red Finger Building",
    span: "Business Centers",
  },
  {
    id: 4,
    image: "./images/home/projects/pencil.svg",
    h4: "The Pencil Building",
    span: "Business Centers",
  },
  {
    id: 5,
    image: "./images/home/projects/red-finger.svg",
    h4: "Red Finger Building",
    span: "Business Centers",
  },
  {
    id: 6,
    image: "./images/home/projects/pencil.svg",
    h4: "The Pencil Building",
    span: "Business Centers",
  },
];

const Home = () => {
  return (
    <main>
      <Slider />
      <VideoSection />
      <CoreValues
        isForm={true}
        features={features}
        heading="Our core values"
        paragraph="Our mission is to set the highest standards for construction sphere."
      />
      <OurServices />
      <SelectedProjectsSection
        heading="Browse our selected projects and learn more about our work"
        projects={projects}
      />
      <SupportedSection
        paddingTop={true}
        paddingBot={true}
        heading="Supported by 12+ partners"
        background={true}
      />
      <ClientsComments />
      <FactsAndNewsSection />
      <DiscussDetails />
    </main>
  );
};

export default Home;
