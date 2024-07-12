import React from "react";
import { useParams } from "react-router-dom";
import { news } from "../components/news-components/Categories";
import NewsTopSection from "../components/news-components/NewsTopSection";
import NewsDetails from "../components/news-components/NewsDetails";
import DiscussDetils from "../components/general-components/DiscussDetails";

const NewsIndex = () => {
  const { newsId } = useParams();
  const shownInfo = news.find((element) => element.id === newsId - 1);
  return (
    <main>
      <NewsTopSection
        heading={shownInfo.heading}
        category={shownInfo.category}
        comments={shownInfo.comments}
        date={shownInfo.date}
      />
      <NewsDetails id={shownInfo.id} details={shownInfo.details} />
      <DiscussDetils />
    </main>
  );
};

export default NewsIndex;
