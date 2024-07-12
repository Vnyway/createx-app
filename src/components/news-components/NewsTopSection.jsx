import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NewsTopSection = ({ heading, category, date, comments }) => {
  const link1 = "Homepage / ";
  const link2 = "News / ";
  return (
    <section className="bg-[#F4F5F6] mt-[-80px]">
      <div className="container mx-auto pt-[100px] pb-[120px] md:pt-[140px] md:pb-[160px] flex flex-col gap-[30px]">
        <div className="">
          <Link to="/" className="font-400 text-[14px] text-customGray">
            {link1}
          </Link>
          <Link to="/news" className="font-400 text-[14px] text-customGray">
            {link2}
          </Link>
          <span className="font-400 text-[14px] text-paragraph">{heading}</span>
        </div>
        <h1 className="font-[700] text-[32px] md:text-[64px] text-heading md:leading-[80px]">
          {heading}
        </h1>
        <div className="flex flex-col gap-[20px] md:flex-row md:justify-between md:items-center">
          <div className="flex gap-[5px] md:gap-[10px] font-[400] text-[12px] md:text-[16px] text-wrap text-paragraph items-center">
            <span className="text-primary">{category}</span>
            <span className="border-r-[1px] border-l-[1px] px-[5px] md:px-[10px] border-paragraph">
              {date}
            </span>
            <div className="flex items-center gap-[3px]">
              <img src="/images/facts-and-news/comments.svg" alt="comments" />
              <span>
                {comments} {comments === 1 ? "comment" : "comments"}
              </span>
            </div>
          </div>
          <div className="flex gap-[10px] items-center">
            <motion.a initial="initial" whileHover="hover" href="#">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  d="M17.5628 1.00458L14.7856 1C11.6654 1 9.64903 3.12509 9.64903 6.41423V8.91055H6.85662C6.61532 8.91055 6.41992 9.1115 6.41992 9.35937V12.9763C6.41992 13.2241 6.61554 13.4249 6.85662 13.4249H9.64903V22.5514C9.64903 22.7993 9.84443 23 10.0857 23H13.729C13.9703 23 14.1657 22.799 14.1657 22.5514V13.4249H17.4307C17.672 13.4249 17.8674 13.2241 17.8674 12.9763L17.8688 9.35937C17.8688 9.24036 17.8226 9.12638 17.7409 9.04215C17.6591 8.95793 17.5477 8.91055 17.4318 8.91055H14.1657V6.79439C14.1657 5.77728 14.4017 5.26094 15.6915 5.26094L17.5624 5.26025C17.8035 5.26025 17.9989 5.0593 17.9989 4.81166V1.45317C17.9989 1.20576 17.8037 1.00504 17.5628 1.00458Z"
                  variants={{
                    initial: { fill: "#787A80" },
                    hover: { fill: "#FF5A30" },
                  }}
                />
              </svg>
            </motion.a>
            <motion.a initial="initial" whileHover="hover" href="#">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  d="M21.995 22L22 21.9992V14.6642C22 11.0758 21.2275 8.31167 17.0325 8.31167C15.0158 8.31167 13.6625 9.41833 13.11 10.4675H13.0517V8.64667H9.07416V21.9992H13.2158V15.3875C13.2158 13.6467 13.5458 11.9633 15.7017 11.9633C17.8258 11.9633 17.8575 13.95 17.8575 15.4992V22H21.995Z"
                  variants={{
                    initial: { fill: "#787A80" },
                    hover: { fill: "#FF5A30" },
                  }}
                />
                <motion.path
                  d="M2.32999 8.6475H6.47666V22H2.32999V8.6475Z"
                  variants={{
                    initial: { fill: "#787A80" },
                    hover: { fill: "#FF5A30" },
                  }}
                />
                <motion.path
                  d="M4.40167 2C3.07583 2 2 3.07583 2 4.40167C2 5.7275 3.07583 6.82583 4.40167 6.82583C5.7275 6.82583 6.80333 5.7275 6.80333 4.40167C6.8025 3.07583 5.72667 2 4.40167 2Z"
                  variants={{
                    initial: { fill: "#787A80" },
                    hover: { fill: "#FF5A30" },
                  }}
                />
              </svg>
            </motion.a>
            <motion.a initial="initial" whileHover="hover" href="#">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  d="M22.5 5.77233C21.7271 6.10027 20.8978 6.32267 20.0264 6.42196C20.9161 5.91181 21.5972 5.10263 21.92 4.1414C21.0854 4.61383 20.1642 4.95688 19.1826 5.14285C18.3966 4.33994 17.2785 3.83984 16.0384 3.83984C13.6593 3.83984 11.7303 5.68691 11.7303 7.9637C11.7303 8.2866 11.7683 8.60199 11.8418 8.90357C8.26201 8.73141 5.08768 7.08917 2.96314 4.59372C2.59176 5.20189 2.38049 5.91053 2.38049 6.66697C2.38049 8.09814 3.14161 9.36093 4.2964 10.0997C3.5904 10.0771 2.92639 9.89116 2.34508 9.58205V9.63357C2.34508 11.6314 3.83056 13.2988 5.80024 13.6783C5.43936 13.7713 5.05882 13.8228 4.66514 13.8228C4.38696 13.8228 4.11794 13.7964 3.85417 13.7461C4.40267 15.3859 5.99315 16.5783 7.87756 16.611C6.40388 17.7167 4.54573 18.3739 2.52749 18.3739C2.17976 18.3739 1.83724 18.3537 1.5 18.3173C3.40671 19.4896 5.67036 20.1732 8.10327 20.1732C16.028 20.1732 20.3597 13.8881 20.3597 8.43741L20.3453 7.90341C21.1917 7.32537 21.9239 6.59912 22.5 5.77233Z"
                  variants={{
                    initial: { fill: "#787A80" },
                    hover: { fill: "#FF5A30" },
                  }}
                />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsTopSection;
