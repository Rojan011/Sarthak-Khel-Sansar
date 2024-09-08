import React, { useEffect, useLayoutEffect, useState } from "react";
import { Carousel2 } from "../components/Accessories/Carousel";
import { TypeAnimation } from "react-type-animation";

const Causes = () => {
  return (
    <div className="mb-[120px] flex flex-col items-center">
      <div
        className="flex justify-center items-start w-full h-[320px] bg-cover bg-no-repeat bg-right md:bg-center p-5"
        id="causes-banner"
      >
        <div className="flex flex-col w-[90%] md:w-[50%] h-full justify-around text-center text-gray-100">
          <h1 className="text-6xl tracking-tighter font-sans">Our Causes</h1>
          <div>
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                500,
                "We produce food for Mice", // initially rendered starting point
                1000,
                "We produce food for Hamsters",
                1000,
                "We produce food for Guinea Pigs",
                1000,
                "We produce food for Chinchillas",
                500,
              ]}
              speed={50}
              style={{ fontSize: "2em" }}
              repeat={Infinity}
            />
          </div>
        </div>
      </div>
      <Carousel2 />
    </div>
  );
};

export default Causes;
