import React from "react";
import { useParams } from "react-router-dom";
import { news } from "../components/news-components/Categories";
import NewsTopSection from "../components/news-components/NewsTopSection";
import NewsDetails from "../components/news-components/NewsDetails";

const NewsIndex = () => {
  const { newsId } = useParams();
  const shownInfo = news.find((element) => element.id === newsId - 1);
  console.log(shownInfo);
  return (
    <main>
      <NewsTopSection
        heading={shownInfo.heading}
        category={shownInfo.category}
        comments={shownInfo.comments}
        date={shownInfo.date}
      />
      <NewsDetails id={shownInfo.id} details={shownInfo.details} />
    </main>
  );
};

export default NewsIndex;
