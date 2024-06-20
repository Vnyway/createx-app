import React from "react";
import PageTopSection from "../components/general-components/PageTopSection";
import { useParams } from "react-router-dom";
import ServiceOfferings from "../components/service-info-components/ServiceOfferings";
import CoreValues from "../components/general-components/CoreValues";
import SelectedProjectsSection from "../components/general-components/SelectedProjectsSection";
import Pricing from "../components/service-info-components/Pricing";
import SupportedSection from "../components/general-components/SupportedSection";
import DiscussDetails from "../components/general-components/DiscussDetails";

const services = [
  {
    id: 1,
    name: "Construction",
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
    name: "Project development",
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
    name: "Repairs",
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

const features = [
  {
    id: 1,
    image: "./images/service/ic-contract.svg",
    name: "Fixed Terms & Cost",
    description:
      "Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.",
  },
  {
    id: 2,
    image: "./images/service/ic-helmet.svg",
    name: "Qualified Workers",
    description:
      "Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea.",
  },
  {
    id: 3,
    image: "./images/service/ic-camera.svg",
    name: "Supervision & Control",
    description:
      "Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.",
  },
];

const projects = [
  {
    id: 1,
    image: "./images/service/projects/kids-bedroom.svg",
    h4: "Scandinavian Interior",
    span: "Private houses",
  },
  {
    id: 2,
    image: "./images/service/projects/scandinavian-interior.svg",
    h4: "Kids Bedroom",
    span: "Apartments & flats",
  },
  {
    id: 3,
    image: "./images/service/projects/kids-bedroom.svg",
    h4: "Scandinavian Interior",
    span: "Private houses",
  },
  {
    id: 4,
    image: "./images/service/projects/scandinavian-interior.svg",
    h4: "Kids Bedroom",
    span: "Apartments & flats",
  },
  {
    id: 5,
    image: "./images/service/projects/kids-bedroom.svg",
    h4: "Scandinavian Interior",
    span: "Private houses",
  },
  {
    id: 6,
    image: "./images/service/projects/scandinavian-interior.svg",
    h4: "Kids Bedroom",
    span: "Apartments & flats",
  },
];

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
      <ServiceOfferings data={data} />
      <CoreValues
        isButton={true}
        background="dark"
        heading="Our benefits"
        paragraph="Our mission is to set the highest standards for construction sphere."
        features={features}
      />
      <SelectedProjectsSection
        heading="Related projects"
        projects={projects}
        marginTop={true}
      />
      <Pricing />
      <SupportedSection paddingBot={true} />
      <DiscussDetails />
    </main>
  );
};

export default Service;
