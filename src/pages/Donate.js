import React from "react";
import "../App.css";
import Card from "../components/Card";
import AboutCard from "../components/AboutCard";
import axios from "axios";
import { useState } from "react";
import DonationCard from "../components/DonationCard";
import { Donation } from "../Team";

const Donate = () => {
  

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-red-500 text-[46px] font-[700] mb-10 ">
        Donate For A Cause
      </p>
      <div className="flex gap-6 p-8 mb-10">
        {Donation.map((item) => (
          <DonationCard
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Donate;
