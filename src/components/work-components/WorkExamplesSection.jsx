import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const projects = [
  {
    id: 1,
    image: "/images/work/projects/cubes-building.svg",
    heading: "Cubes Building",
    span: "Business Centers",
    categories: ["construction", "project development", "repairs"],
    goal: [
      "Build a private house 840 sq. feet with a large living room, three bedrooms, two bathrooms, a terrace, a pool and a garage for two cars.",
      "Modern design and care for each family member to feel as comfortable as possible in the new home.",
    ],
    details: [
      { name: "location", value: "2464 Royal Ln. Mesa, New Jersey" },
      { name: "client", value: "Darlene Robertson" },
      { name: "architect", value: "HIK Architecture" },
      { name: "size", value: "840 sq. feet" },
      { name: "value", value: "$2 million" },
      { name: "completed", value: "May 2020" },
    ],
    desicions: [
      "Vitae ultrices ornare eu sed in est quisque duis id.",
      "A fermentum in morbi pretium aliquam adipiscing donec tempus.",
      "Mauris odio pellentesque commodo, diam.",
      "Fermentum vestibulum est fermentum, egestas gravida scelerisque quis.",
      "At pharetra libero blandit risus, fringilla sed commodo diam.",
      "Integer ultricies viverra ut enim viverra ut.",
    ],
  },
  {
    id: 2,
    image: "/images/work/projects/cottage.svg",
    heading: "Modern Cottage",
    span: "Private houses",
    categories: ["project development", "interior design", "repairs"],
    goal: [
      "Build a private house 840 sq. feet with a large living room, three bedrooms, two bathrooms, a terrace, a pool and a garage for two cars.",
      "Modern design and care for each family member to feel as comfortable as possible in the new home.",
    ],
    details: [
      { name: "location", value: "2464 Royal Ln. Mesa, New Jersey" },
      { name: "client", value: "Darlene Robertson" },
      { name: "architect", value: "HIK Architecture" },
      { name: "size", value: "840 sq. feet" },
      { name: "value", value: "$2 million" },
      { name: "completed", value: "May 2020" },
    ],
    desicions: [
      "Vitae ultrices ornare eu sed in est quisque duis id.",
      "A fermentum in morbi pretium aliquam adipiscing donec tempus.",
      "Mauris odio pellentesque commodo, diam.",
      "Fermentum vestibulum est fermentum, egestas gravida scelerisque quis.",
      "At pharetra libero blandit risus, fringilla sed commodo diam.",
      "Integer ultricies viverra ut enim viverra ut.",
    ],
  },
  {
    id: 3,
    image: "/images/work/projects/beach-house.svg",
    heading: "Luxury Beach House",
    span: "Private houses",
    categories: ["construction", "interior design", "repairs"],
    goal: [
      "Build a private house 840 sq. feet with a large living room, three bedrooms, two bathrooms, a terrace, a pool and a garage for two cars.",
      "Modern design and care for each family member to feel as comfortable as possible in the new home.",
    ],
    details: [
      { name: "location", value: "2464 Royal Ln. Mesa, New Jersey" },
      { name: "client", value: "Darlene Robertson" },
      { name: "architect", value: "HIK Architecture" },
      { name: "size", value: "840 sq. feet" },
      { name: "value", value: "$2 million" },
      { name: "completed", value: "May 2020" },
    ],
    desicions: [
      "Vitae ultrices ornare eu sed in est quisque duis id.",
      "A fermentum in morbi pretium aliquam adipiscing donec tempus.",
      "Mauris odio pellentesque commodo, diam.",
      "Fermentum vestibulum est fermentum, egestas gravida scelerisque quis.",
      "At pharetra libero blandit risus, fringilla sed commodo diam.",
      "Integer ultricies viverra ut enim viverra ut.",
    ],
  },
  {
    id: 4,
    image: "/images/work/projects/double-bedroom.svg",
    heading: "Double Bedroom",
    span: "Apartments & flats",
    categories: ["project development", "interior design"],
    goal: [
      "Build a private house 840 sq. feet with a large living room, three bedrooms, two bathrooms, a terrace, a pool and a garage for two cars.",
      "Modern design and care for each family member to feel as comfortable as possible in the new home.",
    ],
    details: [
      { name: "location", value: "2464 Royal Ln. Mesa, New Jersey" },
      { name: "client", value: "Darlene Robertson" },
      { name: "architect", value: "HIK Architecture" },
      { name: "size", value: "840 sq. feet" },
      { name: "value", value: "$2 million" },
      { name: "completed", value: "May 2020" },
    ],
    desicions: [
      "Vitae ultrices ornare eu sed in est quisque duis id.",
      "A fermentum in morbi pretium aliquam adipiscing donec tempus.",
      "Mauris odio pellentesque commodo, diam.",
      "Fermentum vestibulum est fermentum, egestas gravida scelerisque quis.",
      "At pharetra libero blandit risus, fringilla sed commodo diam.",
      "Integer ultricies viverra ut enim viverra ut.",
    ],
  },
  {
    id: 5,
    image: "/images/work/projects/kids-bedroom.svg",
    heading: "Kids Bedroom",
    span: "Apartments & flats",
    categories: ["project development", "interior design", "repairs"],
    goal: [
      "Build a private house 840 sq. feet with a large living room, three bedrooms, two bathrooms, a terrace, a pool and a garage for two cars.",
      "Modern design and care for each family member to feel as comfortable as possible in the new home.",
    ],
    details: [
      { name: "location", value: "2464 Royal Ln. Mesa, New Jersey" },
      { name: "client", value: "Darlene Robertson" },
      { name: "architect", value: "HIK Architecture" },
      { name: "size", value: "840 sq. feet" },
      { name: "value", value: "$2 million" },
      { name: "completed", value: "May 2020" },
    ],
    desicions: [
      "Vitae ultrices ornare eu sed in est quisque duis id.",
      "A fermentum in morbi pretium aliquam adipiscing donec tempus.",
      "Mauris odio pellentesque commodo, diam.",
      "Fermentum vestibulum est fermentum, egestas gravida scelerisque quis.",
      "At pharetra libero blandit risus, fringilla sed commodo diam.",
      "Integer ultricies viverra ut enim viverra ut.",
    ],
  },
  {
    id: 6,
    image: "/images/work/projects/red-finger.svg",
    heading: "Red Finger Building",
    span: "Business Centers",
    categories: ["construction", "project development"],
    goal: [
      "Build a private house 840 sq. feet with a large living room, three bedrooms, two bathrooms, a terrace, a pool and a garage for two cars.",
      "Modern design and care for each family member to feel as comfortable as possible in the new home.",
    ],
    details: [
      { name: "location", value: "2464 Royal Ln. Mesa, New Jersey" },
      { name: "client", value: "Darlene Robertson" },
      { name: "architect", value: "HIK Architecture" },
      { name: "size", value: "840 sq. feet" },
      { name: "value", value: "$2 million" },
      { name: "completed", value: "May 2020" },
    ],
    desicions: [
      "Vitae ultrices ornare eu sed in est quisque duis id.",
      "A fermentum in morbi pretium aliquam adipiscing donec tempus.",
      "Mauris odio pellentesque commodo, diam.",
      "Fermentum vestibulum est fermentum, egestas gravida scelerisque quis.",
      "At pharetra libero blandit risus, fringilla sed commodo diam.",
      "Integer ultricies viverra ut enim viverra ut.",
    ],
  },
  {
    id: 7,
    image: "/images/work/projects/scandinavian-interior.svg",
    heading: "Scandinavian Interior",
    span: "Private houses",
    categories: ["project development", "interior design", "repairs"],
    goal: [
      "Build a private house 840 sq. feet with a large living room, three bedrooms, two bathrooms, a terrace, a pool and a garage for two cars.",
      "Modern design and care for each family member to feel as comfortable as possible in the new home.",
    ],
    details: [
      { name: "location", value: "2464 Royal Ln. Mesa, New Jersey" },
      { name: "client", value: "Darlene Robertson" },
      { name: "architect", value: "HIK Architecture" },
      { name: "size", value: "840 sq. feet" },
      { name: "value", value: "$2 million" },
      { name: "completed", value: "May 2020" },
    ],
    desicions: [
      "Vitae ultrices ornare eu sed in est quisque duis id.",
      "A fermentum in morbi pretium aliquam adipiscing donec tempus.",
      "Mauris odio pellentesque commodo, diam.",
      "Fermentum vestibulum est fermentum, egestas gravida scelerisque quis.",
      "At pharetra libero blandit risus, fringilla sed commodo diam.",
      "Integer ultricies viverra ut enim viverra ut.",
    ],
  },
  {
    id: 8,
    image: "/images/work/projects/painted-house.svg",
    heading: "Painted House",
    span: "Private houses",
    categories: ["construction", "interior design", "repairs"],
    goal: [
      "Build a private house 840 sq. feet with a large living room, three bedrooms, two bathrooms, a terrace, a pool and a garage for two cars.",
      "Modern design and care for each family member to feel as comfortable as possible in the new home.",
    ],
    details: [
      { name: "location", value: "2464 Royal Ln. Mesa, New Jersey" },
      { name: "client", value: "Darlene Robertson" },
      { name: "architect", value: "HIK Architecture" },
      { name: "size", value: "840 sq. feet" },
      { name: "value", value: "$2 million" },
      { name: "completed", value: "May 2020" },
    ],
    desicions: [
      "Vitae ultrices ornare eu sed in est quisque duis id.",
      "A fermentum in morbi pretium aliquam adipiscing donec tempus.",
      "Mauris odio pellentesque commodo, diam.",
      "Fermentum vestibulum est fermentum, egestas gravida scelerisque quis.",
      "At pharetra libero blandit risus, fringilla sed commodo diam.",
      "Integer ultricies viverra ut enim viverra ut.",
    ],
  },
];

const WorkExamplesSection = ({ id }) => {
  const [category, setCategory] = useState(1);
  const [shownProjects, setShownProjects] = useState([]);
  useEffect(() => {
    switch (category) {
      case 1:
        setShownProjects(projects);
        break;
      case 2:
        setShownProjects(
          projects.filter((project) =>
            project.categories.find((category) => category === "construction")
          )
        );
        break;
      case 3:
        setShownProjects(
          projects.filter((project) =>
            project.categories.find(
              (category) => category === "project development"
            )
          )
        );
        break;
      case 4:
        setShownProjects(
          projects.filter((project) =>
            project.categories.find(
              (category) => category === "interior design"
            )
          )
        );
        break;
      case 5:
        setShownProjects(
          projects.filter((project) =>
            project.categories.find((category) => category === "repairs")
          )
        );
        break;

      default:
        setShownProjects([]);
        break;
    }
  }, [category]);
  return (
    <section>
      <div className="container mx-auto pt-[40px] md:pt-0 md:mt-[-77px] pb-[40px] md:pb-[80px]">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-[20px] w-full">
          <motion.div
            initial="initial"
            whileHover="hover"
            animate={category === 1 ? "hover" : "initial"}
            transition={{ duration: 0.3 }}
            variants={{
              initial: {
                backgroundColor: "#FFFFFF",
                color: "#FF5A30",
              },
              hover: {
                backgroundColor: "#FF5A30",
                color: "#FFFFFF",
              },
            }}
            onClick={() => setCategory(1)}
            className="flex flex-col items-center justify-center gap-[10px] text-center h-[130px] md:h-[154px] rounded-[4px] shadow-md cursor-pointer">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_121490_1653)">
                <motion.path
                  d="M28.9219 21.0938C26.9645 21.0938 25.2653 21.9855 24 23.6748C22.7344 21.9855 21.0352 21.0938 19.0781 21.0938C15.423 21.0938 12.75 24.0978 12.75 27.7841C12.75 32.5499 17.369 35.5437 23.0848 40.4425C23.3481 40.6681 23.6741 40.7813 24 40.7809C24.3259 40.7809 24.6519 40.6681 24.9152 40.4425C30.6379 35.5375 35.25 32.5481 35.25 27.7841C35.25 24.1007 32.5796 21.0938 28.9219 21.0938ZM24 37.5286C18.85 33.178 15.5625 30.832 15.5625 27.7841C15.5625 25.5732 17.0739 23.9063 19.0781 23.9063C21.6844 23.9063 22.6069 26.9652 22.6472 27.1036C22.8193 27.7075 23.3712 28.125 24 28.125C24.6306 28.125 25.184 27.705 25.3539 27.0978C25.363 27.0659 26.2782 23.9063 28.9219 23.9063C30.9258 23.9063 32.4375 25.5732 32.4375 27.7841C32.4375 30.8346 29.1456 33.1816 24 37.5286Z"
                  transition={{ duration: 0.3 }}
                  variants={{
                    initial: { fill: "#FF5A30" },
                    hover: { fill: "#FFFFFF" },
                  }}
                />
                <motion.path
                  d="M46.5934 45.188H42.3746V23.3447C42.3827 23.3505 42.3907 23.356 42.3988 23.3619C43.0203 23.8075 43.8842 23.6746 44.343 23.063L47.7188 18.5641C47.9451 18.262 48.0406 17.8819 47.9843 17.5087C47.9275 17.1355 47.7231 16.8008 47.417 16.58C47.1921 16.4178 24.9437 0.354281 24.8298 0.271883C24.3369 -0.0884687 23.6678 -0.0892012 23.1742 0.268953C23.1064 0.318026 18.8573 3.38578 14.0625 6.84794V4.21964C14.0625 3.44291 13.433 2.81339 12.6562 2.81339H7.03125C6.25452 2.81339 5.625 3.44291 5.625 4.21964V12.9399C2.74146 15.0218 0.651123 16.5309 0.583008 16.58C0.277222 16.8008 0.072876 17.1355 0.0161133 17.5087C-0.0406494 17.8819 0.0549317 18.2624 0.281616 18.5641L3.65698 23.063C4.11584 23.6746 4.97974 23.8075 5.6012 23.3619C5.60925 23.356 5.61694 23.3505 5.625 23.3447V45.1884H1.40625C0.629517 45.1884 0 45.8179 0 46.5947C0 47.371 0.629517 48.0009 1.40625 48.0009H46.5934C47.3701 48.0009 47.9996 47.371 47.9996 46.5947C47.9996 45.8179 47.3701 45.188 46.5934 45.188ZM8.4375 5.62589H11.25V8.87858C10.2975 9.56632 9.35083 10.2497 8.4375 10.9089V5.62589ZM5.08081 20.2743L3.39075 18.0218C17.5712 7.78361 22.3722 4.31705 24 3.14151C26.2672 4.77884 33.1714 9.76371 44.6093 18.0218L42.9196 20.2743C42.7793 20.174 24.98 7.4108 24.8225 7.29764C24.3311 6.94315 23.6678 6.94388 23.1771 7.29801C22.8582 7.52726 5.48254 19.9861 5.08081 20.2743ZM8.4375 21.3279C18.7676 13.9209 22.5864 11.1828 24 10.1687C25.9102 11.5387 31.1199 15.2745 39.5625 21.3279V45.1884H8.4375V21.3279Z"
                  transition={{ duration: 0.3 }}
                  variants={{
                    initial: { fill: "#FF5A30" },
                    hover: { fill: "#FFFFFF" },
                  }}
                />
              </g>
              <defs>
                <clipPath id="clip0_121490_1653">
                  <rect width="48" height="48" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>All Projects</span>
          </motion.div>
          <motion.div
            initial="initial"
            whileHover="hover"
            animate={category === 2 ? "hover" : "initial"}
            transition={{ duration: 0.3 }}
            variants={{
              initial: {
                backgroundColor: "#FFFFFF",
                color: "#FF5A30",
              },
              hover: {
                backgroundColor: "#FF5A30",
                color: "#FFFFFF",
              },
            }}
            onClick={() => setCategory(2)}
            className="flex flex-col items-center justify-center gap-[10px] text-center h-[130px] md:h-[154px] rounded-[4px] shadow-md cursor-pointer">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <motion.path
                d="M46.5938 25.4062C47.3704 25.4062 48 24.7766 48 24V13.5C48 12.7234 47.3704 12.0938 46.5938 12.0938C45.6135 12.0938 26.4628 12.0938 25.4062 12.0938V3C25.4062 2.22337 24.7766 1.59375 24 1.59375H9C8.22338 1.59375 7.59375 2.22337 7.59375 3V12.0938H1.40625C0.629625 12.0938 0 12.7234 0 13.5V24C0 24.7766 0.629625 25.4062 1.40625 25.4062H7.59375V33.0938H1.40625C0.629625 33.0938 0 33.7234 0 34.5V45C0 45.7766 0.629625 46.4062 1.40625 46.4062H46.5938C47.3704 46.4062 48 45.7766 48 45V34.5C48 33.7234 47.3704 33.0938 46.5938 33.0938H40.4062V25.4062H46.5938ZM45.1875 22.5938C43.683 22.5938 34.3936 22.5938 32.9062 22.5938V14.9062H45.1875V22.5938ZM30.0938 22.5938C28.6208 22.5938 19.3889 22.5938 17.9062 22.5938V14.9062H30.0938V22.5938ZM10.4062 4.40625H22.5938V12.0938C21.1208 12.0938 11.8889 12.0938 10.4062 12.0938V4.40625ZM2.8125 22.5938V14.9062H15.0938V22.5938C13.6058 22.5938 4.31672 22.5938 2.8125 22.5938ZM10.4062 25.4062H22.5938V33.0938C21.1208 33.0938 11.8889 33.0938 10.4062 33.0938V25.4062ZM2.8125 35.9062H15.0938V43.5938H2.8125V35.9062ZM17.9062 35.9062H30.0938V43.5938H17.9062V35.9062ZM45.1875 35.9062V43.5938H32.9062V35.9062H45.1875ZM37.5938 33.0938C36.1208 33.0938 26.8889 33.0938 25.4062 33.0938V25.4062H37.5938V33.0938Z"
                transition={{ duration: 0.3 }}
                variants={{
                  initial: { fill: "#FF5A30" },
                  hover: { fill: "#FFFFFF" },
                }}
              />
            </svg>
            <span>Construction</span>
          </motion.div>
          <motion.div
            initial="initial"
            whileHover="hover"
            animate={category === 3 ? "hover" : "initial"}
            transition={{ duration: 0.3 }}
            variants={{
              initial: {
                backgroundColor: "#FFFFFF",
                color: "#FF5A30",
              },
              hover: {
                backgroundColor: "#FF5A30",
                color: "#FFFFFF",
              },
            }}
            onClick={() => setCategory(3)}
            className="flex flex-col items-center justify-center gap-[10px] text-center h-[130px] md:h-[154px] rounded-[4px] shadow-md cursor-pointer">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <motion.path
                d="M42.375 2.90625C40.2971 2.90625 38.4788 4.03866 37.5049 5.71875H1.40625C0.629625 5.71875 0 6.34837 0 7.125V43.6875C0 44.4641 0.629625 45.0938 1.40625 45.0938H42.375C45.4766 45.0938 48 42.5704 48 39.4688V8.53125C48 5.42963 45.4766 2.90625 42.375 2.90625ZM42.375 42.2812C41.8249 42.2812 3.32409 42.2812 2.8125 42.2812V8.53125H36.75V39.4688C36.75 40.2454 37.3796 40.875 38.1562 40.875C38.9329 40.875 39.5625 40.2454 39.5625 39.4688C39.5625 37.9179 40.8242 36.6562 42.375 36.6562C43.9258 36.6562 45.1875 37.9179 45.1875 39.4688C45.1875 41.0196 43.9258 42.2812 42.375 42.2812ZM45.1875 34.5986C44.3597 34.1187 43.3988 33.8438 42.375 33.8438C41.3512 33.8438 40.3903 34.1187 39.5625 34.5986V8.53125C39.5625 6.98044 40.8242 5.71875 42.375 5.71875C43.9258 5.71875 45.1875 6.98044 45.1875 8.53125V34.5986Z"
                transition={{ duration: 0.3 }}
                variants={{
                  initial: { fill: "#FF5A30" },
                  hover: { fill: "#FFFFFF" },
                }}
              />
              <motion.path
                d="M32.4375 11.3438H7.125C6.34837 11.3438 5.71875 11.9734 5.71875 12.75V38.0625C5.71875 38.8391 6.34837 39.4688 7.125 39.4688H21.1875C21.5605 39.4688 21.9181 39.3205 22.1818 39.0568C22.4456 38.7931 22.5938 38.4354 22.5938 38.0625V35.25C22.5938 33.4166 23.7693 31.8526 25.4062 31.2722V38.0625C25.4062 38.8391 26.0359 39.4688 26.8125 39.4688H32.4375C33.2141 39.4688 33.8438 38.8391 33.8438 38.0625V12.75C33.8438 11.9734 33.2141 11.3438 32.4375 11.3438ZM31.0312 36.6562H28.2188V29.625C28.2188 28.8484 27.5891 28.2188 26.8125 28.2188C22.9355 28.2188 19.7812 31.373 19.7812 35.25V36.6562H8.53125V28.2188H14.1562V32.4375C14.1562 33.2141 14.7859 33.8438 15.5625 33.8438C16.3391 33.8438 16.9688 33.2141 16.9688 32.4375V26.8125C16.9688 26.0359 16.3391 25.4062 15.5625 25.4062H8.53125V14.1562H16.9688V19.7812H12.75C11.9734 19.7812 11.3438 20.4109 11.3438 21.1875C11.3438 21.9641 11.9734 22.5938 12.75 22.5938H18.375H24C24.7766 22.5938 25.4062 21.9641 25.4062 21.1875C25.4062 20.4109 24.7766 19.7812 24 19.7812H19.7812V14.1562H31.0312V36.6562Z"
                transition={{ duration: 0.3 }}
                variants={{
                  initial: { fill: "#FF5A30" },
                  hover: { fill: "#FFFFFF" },
                }}
              />
            </svg>
            <span>Project Development</span>
          </motion.div>
          <motion.div
            initial="initial"
            whileHover="hover"
            animate={category === 4 ? "hover" : "initial"}
            transition={{ duration: 0.3 }}
            variants={{
              initial: {
                backgroundColor: "#FFFFFF",
                color: "#FF5A30",
              },
              hover: {
                backgroundColor: "#FF5A30",
                color: "#FFFFFF",
              },
            }}
            onClick={() => setCategory(4)}
            className="flex flex-col items-center justify-center gap-[10px] text-center h-[130px] md:h-[154px] rounded-[4px] shadow-md cursor-pointer">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_121490_838)">
                <motion.path
                  d="M9.9375 33.8438C7.61128 33.8438 5.71875 35.7363 5.71875 38.0625C5.71875 40.3887 7.61128 42.2812 9.9375 42.2812C12.2637 42.2812 14.1562 40.3887 14.1562 38.0625C14.1562 35.7363 12.2637 33.8438 9.9375 33.8438ZM9.9375 39.4688C9.16209 39.4688 8.53125 38.8379 8.53125 38.0625C8.53125 37.2871 9.16209 36.6562 9.9375 36.6562C10.7129 36.6562 11.3438 37.2871 11.3438 38.0625C11.3438 38.8379 10.7129 39.4688 9.9375 39.4688Z"
                  transition={{ duration: 0.3 }}
                  variants={{
                    initial: { fill: "#FF5A30" },
                    hover: { fill: "#FFFFFF" },
                  }}
                />
                <motion.path
                  d="M45.4619 28.569C46.4212 27.2708 46.598 25.4603 45.7256 23.9496L40.1035 14.118C39.131 12.4335 37.0801 11.6648 35.2507 12.1538C35.6402 10.4029 34.8759 8.52441 33.2423 7.58119L23.5 1.95656C22.1087 1.15313 20.4451 1.23544 19.1657 2.02678C18.4242 0.812437 17.0865 0 15.5625 0H4.21875C1.89253 0 0 1.89253 0 4.21875C0 5.19422 0 42.6583 0 43.7812C0 46.1075 1.89253 48 4.21875 48C5.31122 48 38.4345 48 43.7812 48C46.1075 48 48 46.1075 48 43.7812V32.4375C48 30.7085 46.954 29.2197 45.4619 28.569ZM16.9688 43.7812C16.9688 44.5567 16.3379 45.1875 15.5625 45.1875H4.21875C3.44334 45.1875 2.8125 44.5567 2.8125 43.7812C2.8125 43.1388 2.8125 31.6483 2.8125 31.0312H16.9688V43.7812ZM16.9688 28.2188H2.8125V16.875H16.9688V28.2188ZM16.9688 14.0625H2.8125V4.21875C2.8125 3.44334 3.44334 2.8125 4.21875 2.8125H15.5625C16.3379 2.8125 16.9688 3.44334 16.9688 4.21875V14.0625ZM19.7812 5.5845L20.1723 4.90716C20.5602 4.23544 21.4222 4.00444 22.0938 4.39228L31.836 10.0169C32.5077 10.4047 32.7386 11.2667 32.3498 11.9403L30.7249 14.7647C30.6842 14.8248 30.6476 14.8872 30.6169 14.9524L19.7812 33.787V5.5845ZM19.7812 39.427L32.9271 16.5767L35.6452 15.0074C36.3342 14.6096 37.2793 14.8512 37.665 15.5192L43.2871 25.3507C43.676 26.0242 43.4492 26.8877 42.7688 27.2805C41.7645 27.8618 20.7702 40.0161 19.7812 40.5886V39.427ZM45.1875 43.7812C45.1875 44.5567 44.5567 45.1875 43.7812 45.1875H19.5394C19.6893 44.7647 19.7734 44.3113 19.7798 43.8393L41.9034 31.0312H43.7812C44.5567 31.0312 45.1875 31.6621 45.1875 32.4375V43.7812Z"
                  transition={{ duration: 0.3 }}
                  variants={{
                    initial: { fill: "#FF5A30" },
                    hover: { fill: "#FFFFFF" },
                  }}
                />
              </g>
              <defs>
                <clipPath id="clip0_121490_838">
                  <rect width="48" height="48" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>Interior Design</span>
          </motion.div>
          <motion.div
            initial="initial"
            whileHover="hover"
            animate={category === 5 ? "hover" : "initial"}
            transition={{ duration: 0.3 }}
            variants={{
              initial: {
                backgroundColor: "#FFFFFF",
                color: "#FF5A30",
              },
              hover: {
                backgroundColor: "#FF5A30",
                color: "#FFFFFF",
              },
            }}
            onClick={() => setCategory(5)}
            className="flex flex-col items-center justify-center gap-[10px] text-center h-[130px] md:h-[154px] rounded-[4px] shadow-md cursor-pointer">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <motion.path
                d="M39.5625 4.21875C39.5625 1.89258 37.6699 0 35.3438 0H7.21875C4.89258 0 3 1.89258 3 4.21875V12.6562C3 14.9824 4.89258 16.875 7.21875 16.875H35.3438C37.6699 16.875 39.5625 14.9824 39.5625 12.6562V11.25H40.9688C41.744 11.25 42.375 11.881 42.375 12.6562V18.2812C42.375 19.0565 41.744 19.6875 40.9688 19.6875H24.0938C21.7676 19.6875 19.875 21.5801 19.875 23.9062V28.125H18.4688C17.692 28.125 17.0625 28.7545 17.0625 29.5312V35.0797L15.6562 40.7955C14.7418 44.4529 17.5052 48 21.2812 48C25.0591 48 27.8196 44.4492 26.9077 40.8007L25.5 35.0797V29.5312C25.5 28.7545 24.8705 28.125 24.0938 28.125H22.6875V23.9062C22.6875 23.131 23.3185 22.5 24.0938 22.5H40.9688C43.2949 22.5 45.1875 20.6074 45.1875 18.2812V12.6562C45.1875 10.3301 43.2949 8.4375 40.9688 8.4375H39.5625V4.21875ZM22.6875 30.9375V33.8438H19.875V30.9375H22.6875ZM21.2812 45.1875C19.344 45.1875 17.9117 43.3693 18.386 41.4727L19.571 36.6562H22.9915L24.1776 41.4778C24.6486 43.3612 23.2255 45.1875 21.2812 45.1875ZM7.21875 2.8125H35.3438C36.119 2.8125 36.75 3.44348 36.75 4.21875V5.625H32.5312C31.1646 5.625 29.417 6.13696 27.3933 6.72949C24.6599 7.53003 21.5621 8.4375 18.4688 8.4375C15.4534 8.4375 13.3275 7.55676 11.4518 6.78003C10.0177 6.18604 8.66345 5.625 7.21875 5.625H5.8125V4.21875C5.8125 3.44348 6.44348 2.8125 7.21875 2.8125ZM36.75 12.6562C36.75 13.4315 36.119 14.0625 35.3438 14.0625H7.21875C6.44348 14.0625 5.8125 13.4315 5.8125 12.6562V8.4375H7.21875C8.10388 8.4375 9.10657 8.85278 10.3755 9.3783C12.3885 10.2122 14.8938 11.25 18.4688 11.25C21.9657 11.25 25.4132 10.24 28.184 9.42883C29.9242 8.91907 31.5681 8.4375 32.5312 8.4375H36.75V12.6562Z"
                transition={{ duration: 0.3 }}
                variants={{
                  initial: { fill: "#FF5A30" },
                  hover: { fill: "#FFFFFF" },
                }}
              />
            </svg>
            <span>Repairs</span>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 min-[530px]:grid-cols-2 md:grid-cols-3 gap-[20px] pt-[40px] md:pt-[80px]">
          {shownProjects.map((element) => {
            return (
              <motion.div
                initial="initial"
                whileHover="hover"
                key={element.id}
                className="flex flex-col">
                <img
                  src={element.image}
                  className="w-full object-cover"
                  alt={element.heading}
                />
                <motion.div
                  variants={{
                    initial: {
                      height: "80px",
                      marginTop: 0,
                    },
                    hover: {
                      height: "145px",
                      marginTop: "-65px",
                      transition: { duration: 0.3 },
                    },
                  }}
                  className="flex flex-col gap-[5px] items-center py-[15px] bg-white shadow-md mb-[5px] h-[80px] overflow-y-hidden">
                  <h4 className="font-[700] text-[20px] text-center text-heading">
                    {element.heading}
                  </h4>
                  <span className="font-[400] text-[14px] text-paragraph">
                    {element.span}
                  </span>
                  <Link
                    to={`/work/${element.id}`}
                    onClick={() => window.scrollTo(0, 0)}>
                    <motion.button
                      initial={{ color: "#FF5A30", backgroundColor: "#FFFFFF" }}
                      whileHover={{
                        color: "#FFFFFF",
                        backgroundColor: "#FF5A30",
                        transition: { duration: 0.3 },
                      }}
                      className="uppercase font-[700] text-[14px] px-[32px] my-[10px] py-[10px] border-[1px] border-primary rounded-[4px]">
                      View Project
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkExamplesSection;
