import React from "react";

const NewsDetails = ({ id, details }) => {
  return (
    <section className="mt-[-80px]">
      <div className="container mx-auto flex flex-col">
        <img src={`/images/news/news${id + 1}.svg`} alt="" />
      </div>
      <div>
        <div>
          <h3>{details.boldParagraph}</h3>
        </div>
      </div>
    </section>
  );
};

export default NewsDetails;
