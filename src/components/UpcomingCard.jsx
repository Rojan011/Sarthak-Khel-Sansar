import React from "react";

const UpcomingCard = (props) => {
  return (
    <div class="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div class="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
          alt="ui/ux review check"
        />
      </div>
      <div class="p-6">
        <h4 class="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {props.title}
        </h4>
        <p class="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
         {props.description}
        </p>
      </div>
      <div class="flex items-center justify-between p-6">
        <div class="flex items-center -space-x-3">
          <img
            alt="natali craig"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
            class="relative inline-block h-9 w-9 !rounded-full  border-2 border-white object-cover object-center hover:z-10"
          />
          <img
            alt="Tania Andrew"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
            class="relative inline-block h-9 w-9 !rounded-full  border-2 border-white object-cover object-center hover:z-10"
          />
        </div>
        <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          {props.date}
        </p>
      </div>
    </div>
  );
};

export default UpcomingCard;
