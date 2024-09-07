import React, { useEffect, useLayoutEffect, useState } from "react";
import Stats from "../components/Stats";
import FeaturedCauses from "../components/FeaturedCauses";
import DonationCard from "../components/DonationCard";
import axios from "axios";
import { Carousel2 } from "../components/Accessories/Carousel";


const Causes = () => {
  const active = "bg-white text-red-500";
  const inactive = "bg-red-500 text-white";
  const [One, setOne] = useState(inactive);
  const [Two, setTwo] = useState(inactive);
  const [Three, setThree] = useState(active);
  const [User, setUser] = useState({ session: null });
  const [UserDonations, setUserDonations] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    const checkSession = async () => {
      const res = await axios.get("http://localhost:8000/user/login", {
        withCredentials: true,
      });
      setUser(res.data);
      console.log(User, "cause");
      return User;
    };

    checkSession();

    console.log(User, "fdfdfdfdfrjieurireuieru");
  }, []);

  return (
    <div className="mb-[120px] flex flex-col items-center">
      <div
        className="flex justify-center items-start w-full h-[320px] bg-cover bg-no-repeat bg-right md:bg-center p-5"
        id="causes-banner"
      >
        <div className="flex flex-col w-[90%] md:w-[50%] h-full justify-around text-center text-gray-100">
          <h1 className="text-6xl tracking-tighter font-sans">Our Causes</h1>
          <p className="text-gray-200">
            We are a team of dedicated individuals, volunteers, and supporters
            who share a common vision: to alleviate suffering, promote equality,
            and uplift communities. With unwavering determination and a
            heartfelt passion for change, we have undertaken numerous projects
            and initiatives, all aimed at addressing the pressing challenges
            faced by marginalized individuals and communities.
          </p>
        </div>
      </div>
<Carousel2/>
      
    </div>
  );
};

export default Causes;
