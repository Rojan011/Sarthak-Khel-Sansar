import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NewsCard = () => {
  const [data, setdata] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getNews = async () => {
      const res = await axios.get("http://localhost:8000/news");
      console.log(res.data);
      setdata(res.data);
    };
    getNews();
  }, []);
  return (
    <section class="text-gray-600 body-font ">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col w-full mb-20 justify-center items-center">
          <div class="lg:w-full w-full mb-6 text-center">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Ngo Latest News
            </h1>
            <div class="h-1 w-20 bg-red-500 rounded mx-auto"></div>
          </div>
        </div>
        <div class="flex flex-wrap m-4">
          {data.map((news) => {
            return (
              <div
                class="xl:w-1/4 md:w-1/2 p-4 cursor-pointer"
                onClick={() => {
                  window.open(
                    news.articlelink,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
              >
                <div class="bg-gray-100 p-6 rounded-lg min-h-[400px]">
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6"
                    src={news.photourl}
                    alt="content"
                  />
                  <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    News
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    {news.title}
                  </h2>
                  <p class="leading-relaxed text-base">{news.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewsCard;
