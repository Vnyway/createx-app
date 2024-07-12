import React from "react";
import { motion } from "framer-motion";
import LearnMore from "./LearnMore";
import { Link } from "react-router-dom";

const news = [
  {
    h3: "How to Build Climate Change-Resilient Infrastructure",
    img: "./images/facts-and-news/news1.svg",
    category: "Industry News",
    date: "June 24, 2020",
    commentsCount: 4,
    description:
      "Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis enim, nibh convallis...",
  },
  {
    h3: "How Construction Can Help Itself",
    img: "./images/facts-and-news/news2.svg",
    category: "Innovation",
    date: "June 12, 2020",
    commentsCount: 1,
  },
  {
    h3: "Types of Flooring Materials",
    img: "./images/facts-and-news/news3.svg",
    category: "Company News",
    date: "December 1, 2019",
    commentsCount: 0,
  },
];

const NewsCharacteristics = ({ category, date, commentsCount }) => (
  <div className="flex gap-[10px] font-[400] text-[10px] md:text-[14px] text-wrap text-paragraph items-center">
    <span>{category}</span>
    <span className="border-r-[1px] border-l-[1px] px-[10px] border-paragraph">
      {date}
    </span>
    <div className="flex items-center gap-[3px]">
      <img src="./images/facts-and-news/comments.svg" alt="" />
      <span>
        {commentsCount} {commentsCount === 1 ? "comment" : "comments"}
      </span>
    </div>
  </div>
);

const RecentNews = ({
  h3,
  img,
  category,
  date,
  commentsCount,
  description,
}) => (
  <motion.div
    initial="initial"
    whileHover="hover"
    className="flex flex-col cursor-pointer rounded-[4px] h-full shadow-md bg-white">
    <img src={img} alt={h3} />
    <div className="flex flex-col gap-[10px] my-[20px] mx-[20px]">
      <motion.h3
        variants={{
          initial: { color: "#1E212C" },
          hover: { color: "#FF5A30", transition: { duration: 0.3 } },
        }}
        className="font-[700] text-[18px] md:text-[20px] text-heading">
        {h3}
      </motion.h3>
      <NewsCharacteristics
        category={category}
        date={date}
        commentsCount={commentsCount}
      />
      {description && (
        <p className="font-[400] text-[14px] md:text-[16px]">{description}</p>
      )}
    </div>
  </motion.div>
);

const FactsAndNewsSection = () => {
  return (
    <section className="relative ">
      <img
        src="./images/facts-and-news/background.svg"
        className="w-[1065.95px] h-auto absolute -z-20 left-[-300px] top-[-380px]"
        alt="background"
      />
      <div className="container mx-auto my-[40px] md:my-[80px]">
        <div className="flex flex-col items-center text-heading">
          <h3 className="font-[700] text-[28px] md:text-[46px] text-center mb-[40px] md:mb-[60px]">
            Some facts and figures
          </h3>
          <ul className="flex flex-col md:flex-row gap-[40px] md:gap-[60px]">
            <li className="flex flex-col gap-[20px] items-center">
              <div className="relative size-[148px] flex justify-center items-center">
                <div className="absolute -z-10 size-full rounded-full border-[6px] border-[#F89828] border-opacity-30"></div>
                <img
                  className="absolute -z-10"
                  src="./images/facts-and-news/ellipse-yellow.svg"
                  alt="ellipse-yellow"
                />
                <h4 className="font-[700] text-[32px]">98%</h4>
              </div>
              <span className="font-[400] text-[14px] ">
                Totally satisfied clients
              </span>
            </li>
            <li className="flex flex-col gap-[20px] items-center">
              <div className="relative size-[148px] flex justify-center items-center">
                <div className="absolute -z-10 size-full rounded-full border-[6px] border-[#F52F6E] border-opacity-30"></div>
                <img
                  className="absolute -z-10"
                  src="./images/facts-and-news/ellipse-red.svg"
                  alt="ellipse-red"
                />
                <h4 className="font-[700] text-[32px]">20</h4>
              </div>
              <span className="font-[400] text-[14px] ">
                Years of experience
              </span>
            </li>
            <li className="flex flex-col gap-[20px] items-center">
              <div className="relative size-[148px] flex justify-center items-center">
                <div className="absolute -z-10 size-full rounded-full border-[6px] border-[#5A87FC] border-opacity-30"></div>
                <img
                  className="absolute -z-10"
                  src="./images/facts-and-news/ellipse-blue.svg"
                  alt="ellipse-blue"
                />
                <h4 className="font-[700] text-[32px]">9452</h4>
              </div>
              <span className="font-[400] text-[14px] ">
                Working hours spent
              </span>
            </li>
            <li className="flex flex-col gap-[20px] items-center">
              <div className="relative size-[148px] flex justify-center items-center">
                <div className="absolute -z-10 size-full rounded-full border-[6px] border-[#03CEA4]"></div>

                <h4 className="font-[700] text-[32px]">100%</h4>
              </div>
              <span className="font-[400] text-[14px] ">
                Succeeded projects
              </span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col mt-[40px] md:mt-[80px]">
          <h3 className="text-center font-[700] text-[28px] md:text-[46px] text-heading mb-[40px]">
            Recent news
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-[20px]">
            <Link
              to="/news/1"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className="md:row-span-2 md:col-span-3">
              <RecentNews
                h3={news[0].h3}
                img={news[0].img}
                category={news[0].category}
                date={news[0].date}
                commentsCount={news[0].commentsCount}
                description={news[0].description}
              />
            </Link>
            <Link
              to="/news/2"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className="md:col-span-2">
              <RecentNews
                h3={news[1].h3}
                img={news[1].img}
                category={news[1].category}
                date={news[1].date}
                commentsCount={news[1].commentsCount}
                description={news[1].description}
              />
            </Link>
            <Link
              to="/news/6"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className="md:col-span-2">
              <RecentNews
                h3={news[2].h3}
                img={news[2].img}
                category={news[2].category}
                date={news[2].date}
                commentsCount={news[2].commentsCount}
                description={news[2].description}
              />
            </Link>
          </div>
        </div>
        <LearnMore
          heading="Explore all our news posts"
          button="View all news"
          link="news"
        />
      </div>
    </section>
  );
};

export default FactsAndNewsSection;
