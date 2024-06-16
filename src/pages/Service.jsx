import React, { useState } from "react";
import PageTopSection from "../components/general-components/PageTopSection";
import { useParams } from "react-router-dom";
import ServiceOfferings from "../components/service-info-components/ServiceOfferings";
import ServiceBenefits from "../components/service-info-components/ServiceBenefits";

const services = [
  {
    id: 1,
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
      <ServiceBenefits />
    </main>
  );
};

export default Service;
