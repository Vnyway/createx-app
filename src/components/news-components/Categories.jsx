import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const categories = [
  { id: 0, name: "All News" },
  { id: 1, name: "Company News" },
  { id: 2, name: "Innovation" },
  { id: 3, name: "Industry News" },
  { id: 4, name: "Expert Tips" },
  { id: 5, name: "Marketing" },
];

export const news = [
  {
    id: 0,
    heading: "How to Build Climate Change-Resilient Infrastructure",
    category: "Industry News",
    date: "June 24, 2020",
    comments: 4,
    description:
      "Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...",
    details: {
      boldParagraph:
        "Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod. ",
      paragraphs: [
        "At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel.",
        "Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus. In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut aliquet velit pharetra, nisi nunc, non.",
        "Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis. Vitae mus blandit in neque amet non fringilla blandit:",
        "Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.",
      ],
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus  facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque, ipsum.",
      list: [
        "A fermentum in morbi pretium aliquam adipiscing donec tempus.",
        "Vulputate placerat amet pulvinar lorem nisl.",
        "Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.",
        "Etiam duis lobortis in fames ultrices commodo nibh.",
      ],
      comments: [
        {
          author: "Devon Lane",
          date: new Date(2024, 6, 15),
          comment:
            "Phasellus varius faucibus ultrices odio in. Massa neque dictum natoque ornare rutrum malesuada et phasellus. Viverra natoque nulla cras vel nisl proin senectus. Tortor sed eleifend ante tristique felis sed urna aliquet. Suspendisse fames egestas sed duis purus diam et.",
        },
        {
          author: "Annette Black",
          date: new Date(2024, 5, 14),
          comment:
            "Egestas fermentum natoque sollicitudin mauris. Facilisis praesent urna sed rhoncus quis pharetra pellentesque erat sagittis.",
        },
        {
          author: "Albert Flores",
          date: new Date(2024, 7, 4),
          comment:
            "Libero commodo sit dui ac proin. Penatibus ultricies at adipiscing mauris nunc. Fames faucibus nisl duis id diam.",
        },
        {
          author: "Marvin McKinney",
          date: new Date(2024, 6, 28),
          comment:
            "Ullamcorper nibh sed ac ipsum nunc imperdiet rhoncus. Quam donec habitant nibh sit consequat erat libero, tincidunt. Eros ut aliquam proin et duis. Mauris, egestas congue nibh dui a nulla.",
        },
      ],
    },
  },
  {
    id: 1,
    heading: "How Construction Can Help Itself",
    category: "Innovation",
    date: "June 12, 2020",
    comments: 0,
    description:
      "Porta habitant vitae quam interdum. Leo viverra non volutpat rhoncus placerat vitae scelerisque. Rhoncus augue faucibus maecenas lacus...",
  },
  {
    id: 2,
    heading: "The Difference Between a Digger and an Excavator",
    category: "Expert Tips",
    date: "May 16, 2020",
    comments: 0,
    description:
      "Cras est nisi purus velit facilisi vitae, dolor. Lorem scelerisque integer duis et nulla lobortis cursus. Viverra erat sollicitudin praesent viverra...",
  },
  {
    id: 3,
    heading: "Building Construction Hand Tools",
    category: "Expert Tips",
    date: "February 25, 2020",
    comments: 1,
    description:
      "Tellus quis aliquet volutpat nunc pulvinar donec sed sapien. Vitae elit id dolor, tristique massa. Fames lobortis orci rutrum bibendum integer...",
  },
  {
    id: 4,
    heading: "Top 10 Construction Trends",
    category: "Industry News",
    date: "January 14, 2020",
    comments: 0,
    description:
      "Dignissim sed enim, eleifend morbi condimentum. Congue id quis vulputate dignissim eget. Ac ullamcorper nunc habitasse enim interdum platea...",
  },
  {
    id: 5,
    heading: "Types of Flooring Materials",
    category: "Company News",
    date: "December 1, 2019",
    comments: 0,
    description:
      "Maecenas donec lacinia nunc, quam sit magnis mauris. Neque bibendum et mauris, aenean. Vel arcu amet in sem parturient  integer duis et nulla...",
  },
];

const NewsCharacteristics = ({ category, date, comments }) => (
  <div className="flex gap-[5px] lg:gap-[10px] font-[400] text-[10px] md:text-[14px] text-wrap text-paragraph items-center">
    <span>{category}</span>
    <span className="border-r-[1px] border-l-[1px] px-[5px] lg:px-[10px] border-paragraph">
      {date}
    </span>
    <div className="flex items-center gap-[3px]">
      <img src="./images/facts-and-news/comments.svg" alt="" />
      <span>
        {comments} {comments === 1 ? "comment" : "comments"}
      </span>
    </div>
  </div>
);

const RecentNews = ({ id, heading, category, date, comments, description }) => {
  const newsId = id + 1;
  const path = `/news/${newsId}`;

  return (
    <Link to={path}>
      <motion.div
        id={id}
        initial="initial"
        whileHover="hover"
        style={{ transition: "all ease-out .3s" }}
        className="flex flex-col cursor-pointer rounded-[4px] h-full shadow-md hover:shadow-lg bg-white">
        <img src={`./images/news/news${id + 1}.svg`} alt="" />
        <div className="flex flex-col gap-[10px] my-[20px] mx-[20px]">
          <motion.h3
            variants={{
              initial: { color: "#1E212C" },
              hover: { color: "#FF5A30", transition: { duration: 0.3 } },
            }}
            className="font-[700] text-[18px] md:text-[20px] text-heading">
            {heading}
          </motion.h3>
          <NewsCharacteristics
            category={category}
            date={date}
            comments={comments}
          />
          {description && (
            <p className="font-[400] text-[14px] md:text-[16px]">
              {description}
            </p>
          )}
        </div>
      </motion.div>
    </Link>
  );
};

const Categories = () => {
  const [category, setCategory] = useState(0);
  const [shownNews, setShownNews] = useState([]);
  useEffect(() => {
    switch (category) {
      case 0:
        setShownNews(news);
        break;
      case 1:
        setShownNews(
          news.filter((element) => element.category === categories[1].name)
        );
        break;
      case 2:
        setShownNews(
          news.filter((element) => element.category === categories[2].name)
        );
        break;
      case 3:
        setShownNews(
          news.filter((element) => element.category === categories[3].name)
        );
        break;
      case 4:
        setShownNews(
          news.filter((element) => element.category === categories[4].name)
        );
        break;
      case 5:
        setShownNews(
          news.filter((element) => element.category === categories[5].name)
        );
        break;

      default:
        setShownNews([]);
        break;
    }
  }, [category]);

  const [screenSize, setScreenSize] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const animation =
    screenSize >= 768
      ? { translateX: `${category * 100}%` }
      : { translateY: `${category * 100}%` };

  return (
    <section>
      <div className="container mx-auto py-[40px] md:py-[80px]">
        <div className="flex flex-col gap-[40px]">
          <h3 className="font-[700] text-[32px] md:text-[46px] text-center">
            Categories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-6 relative">
            <motion.div
              style={{ transition: "all ease-out 0.5s" }}
              animate={animation}
              className="absolute w-full md:w-1/6 h-[46px] rounded-[4px] border-[1px] border-primary"></motion.div>
            {categories.map((element) => (
              <button
                id={element.id}
                style={{ transition: "all ease-out .5s" }}
                onClick={() => setCategory(element.id)}
                className={`h-[46px] font-[700] text-[17px] md:text-[15px] lg:text-[17px] flex justify-center items-center ${
                  category === element.id ? "text-[#FF5A30]" : "text-[#9A9CA5]"
                }`}>
                {element.name}
              </button>
            ))}
          </div>
          {shownNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
              {shownNews.map((element) => (
                <RecentNews
                  id={element.id}
                  heading={element.heading}
                  image={element.image}
                  category={element.category}
                  date={element.date}
                  comments={element.comments}
                  description={element.description}
                />
              ))}
            </div>
          ) : (
            <h3 className="font-[700] text-[32px] md:text-[46px] text-center">
              No {categories[category].name} news yet
            </h3>
          )}
        </div>
      </div>
    </section>
  );
};

export default Categories;
