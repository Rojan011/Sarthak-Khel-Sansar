import React from "react";

const DonationCard = (props) => {
  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
      <img
        className="w-full h-auto rounded-t-xl"
        src={props.image}
        alt="Card Image"
      />
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          {props.title}
        </h3>
        <p className="mt-1 text-gray-500 dark:text-neutral-400">
          {props.description}
        </p>
        <div className="flex items-center gap-56">
          <a
            className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:bg-red-700 disabled:opacity-50 disabled:pointer-events-none"
            href="#"
          >
            Learn More
          </a>
          <a
            className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:bg-red-700 disabled:opacity-50 disabled:pointer-events-none"
            href="#"
          >
            Donate Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
