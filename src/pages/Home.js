import React, { useEffect, useLayoutEffect, useState } from "react";
import DonationCard from "../components/DonationCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeaturedCard from "../components/FeaturedCard";
import { ProfileCard } from "../components/ProfileCard";
import { Team } from "../Team";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    console.log("fdfddf");
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const [data, setdata] = useState([]);
  const [team, setteam] = useState([]);
  const [help, sethelp] = useState([]);
  const [reviews, setreviews] = useState([]);
  // useEffect(() => {
  //   const getCauses = async () => {
  //     const res = await axios.get("http://localhost:8000/causes");
  //     console.log(res.data);
  //     setdata(res.data);
  //   };
  //   const getMembers = async () => {
  //     const res = await axios.get("http://localhost:8000/team_members");
  //     console.log(res.data);
  //     setteam(res.data);
  //   };
  //   const getHelp = async () => {
  //     const res = await axios.get("http://localhost:8000/help");
  //     console.log(res.data);
  //     sethelp(res.data);
  //   };
  //   const getReviews = async () => {
  //     const res = await axios.get("http://localhost:8000/reviews/joined");
  //     console.log(res.data, "reviews");
  //     setreviews(res.data);
  //   };
  //   console.log(team);
  //   getCauses();
  //   getReviews();
  //   getMembers();
  //   getHelp();
  // }, []);

  const navigate = useNavigate();
  return (
    <div>
      <section class="banner-1">
        <div class="diagonal-div"></div>
        <div class="diagonal-div-2"></div>

        <div class="banner-text">
          <p class="banner-heading-1">PLAY WITH PURPOSE</p>
          <p class="banner-heading-2">TRANSFORM WITH PASSION</p>
          <p class="banner-heading-3">
            <div>
              Unlock the potential within every movement. In a world where
              creativity meets determination, each step forward becomes a
              catalyst for change, driving us
            </div>{" "}
            to build a brighter, more vibrant future.
          </p>
          <button
            onClick={() => {
              navigate("causes");
            }}
          >
            Join Us
          </button>
        </div>
      </section>
      <section class="help-section">
        <p>
          HOW COULD <span style={{ color: "var(--red)" }}>YOU HELP ?</span>
        </p>
        <div class="help-container">
          {help.map((e) => {
            return (
              <div class="cards">
                <div class="help-img">
                  <img src={e.photourl} />
                </div>
                <h1>{e.title}</h1>
                <p>{e.descr}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section class="about-us">
        <div class="about-us-1">
          <img src="assets/about.png" />
        </div>
        <div class="about-us-2">
          <div class="about-text">
            <div className="flex flex-col items-center justify-center">
              <p class="about-heading-2">WE ARE</p>
              <p class="about-heading-2">NON-PROFIT ORGANIZATION</p>
            </div>
            <p class="about-heading-3">
              Our team at Sarthak Khel Sansar is a diverse group of passionate
              individuals united by a shared vision of transforming communities
              through the power of play. With backgrounds in sports, education,
              social work, and community development, we bring a wealth of
              experience and dedication to every initiative we undertake. Each
              member of our team is committed to creating inclusive, safe, and
              engaging environments where everyone can thrive. Together, we
              design and implement programs that not only foster physical
              activity but also promote life skills, leadership, and social
              cohesion. Our collective energy and enthusiasm drive us to make a
              lasting impact, one community at a time.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => {
                  navigate("causes");
                }}
              >
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <section class="feature-section">
        <p>
          FEATURED <span style={{ color: "var(--red)" }}>CAUSES</span>
        </p>

        <div class="featured-container">
          {data.map((cause) => {
            return (
              <FeaturedCard
                raised={cause.raised_money}
                goal={cause.goal}
                title={cause.title}
                img={cause.photourl}
              />
            );
          })}
        </div>
      </section>

      {/* <Slider className="w-full flex overflow-hidden">
        {reviews.map((e) => {
          return (
            <section class="testimonials">
              <h1>WHAT TEAM SAYS</h1>

              <div class="dialog">
                <img src="assets/quotes.png" />
                <p style={{ marginBottom: "30px" }}>{e.review_text}</p>

                <div class="triangle"></div>
                <div className="w-full 0  flex iconT justify-center items-center p-6">
                  <img src={e.photoUrl} className="rounded-full" />
                </div>
                <div>
                  <span>
                    <span style={{ color: "var(--red)" }}>
                      {e.first_name} {e.last_name}
                    </span>{" "}
                    | {e.role}
                  </span>
                </div>
              </div>
            </section>
          );
        })}
      </Slider> */}
      <section class="volunteer">
        <p class="title">
          OUR <span style={{ color: "var(--red)" }}>TEAM</span>
        </p>

        <div className="slider-container">
          <Slider {...settings}>
            {Team.map((item) => (
              <ProfileCard name={item.name} position={item.position} />
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Home;