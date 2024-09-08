import React, { useLayoutEffect } from "react";
import NewsCard from "../components/NewsCard";

const News = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    console.log("fdfddf");
  }, []);
  return (
    <div className="flex flex-col mb-[120px]">
      <NewsCard />
    </div>
  );
};

export default News;
