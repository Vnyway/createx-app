import React from "react";
import PageTopSection from "../components/general-components/PageTopSection";
import Categories from "../components/news-components/Categories";
import DiscussDetails from "../components/general-components/DiscussDetails";

const News = () => {
  return (
    <main>
      <PageTopSection
        background="./images/news/background.svg"
        heading="NEWS"
        paragraph="Stay tuned with our news, expert tips and articles."
        path={[{ name: "Homepage", ref: "/" }, { name: "News" }]}
      />
      <Categories />
      <DiscussDetails />
    </main>
  );
};

export default News;
