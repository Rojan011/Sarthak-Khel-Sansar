import React from "react";
import "../App.css";
import Card from "../components/Card";
import AboutCard from "../components/AboutCard";
import axios from "axios";
import { useState } from "react";

const About = () => {
  const [data, setdata] = useState([]);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  React.useEffect(() => {
    const getMilestones = async () => {
      const res = await axios.get("http://localhost:8000/milestones", {
        responseType: "json",
      });
      console.log(res);
      setdata(res.data);
    };
    getMilestones();
  }, []);

  return (
    <div className="flex flex-col">
      <div
        className="flex justify-center items-start w-full h-[320px] bg-cover bg-no-repeat bg-right md:bg-center p-5"
        id="about-banner"
      >
        <div className="flex flex-col w-[90%] md:w-[50%] h-full justify-around text-center text-gray-100">
          <h1 className="text-6xl tracking-tighter  font-sans">About Us</h1>
          <p className="text-gray-200">
            <h2 className="text-[30px]">Welcome to Sarthak Khel Sansar!</h2> 
            <p>At Sarthak Khel Sansar, we believe in the power of play to transform lives and build stronger communities. Our NGO is dedicated to providing opportunities for all ages to engage in sports and play-based learning, viewing play as a crucial tool for personal growth and social development.</p>

            <p>Our mission is to create inclusive, safe, and accessible environments where everyone can experience the joy and benefits of play. We focus on empowering underprivileged youth, promoting gender equality in sports, and fostering community unity.</p>

            <p>Our team is a passionate group of professionals and volunteers united by a vision of igniting change. Through our programs, we encourage physical activity, teach life skills, and build lasting connections.</p>

            <p>Join us in our journey to create a vibrant, resilient world—one game at a time.</p>

            <p>Let’s play hard, learn fast, and rise together.</p>
          </p>
        </div>
      </div>

      <div className="w-full bg-[var(--red)] py-10 pb-[100px] flex-col justify-around items-center">
        <h1 className="text-center text-2xl tracking-tighter font-bold text-white">
          OUR MILESTONES
        </h1>
        <div className="flex flex-wrap flex-col sm:flex-row items-center mt-7 gap-5 w-full justify-around">
          {data &&
            data.map((milestone) => {
              return (
                <Card
                  key={milestone.id}
                  heading={milestone.year}
                  para={milestone.title}
                  desc={milestone.description}
                  img={milestone.photourl}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default About;
