import React from "react";

const HerroBanner = () => {
  return (
    <div>
      <div className="bgBanner wrapperr">
        <div className="px-[30px] sm:px-[350px] py-[100px] sm:pt-[250px]">
          <h1 className="text-2xl sm:text-6xl  sm:max-w-[950px] text-white uppercase font-bold">
            Creative solutions for your digital needs
          </h1>
          <p className="text-white max-w-[800px] my-5">
            We believe in the transformative power of exceptional design and
            development. Whether it's crafting a stunning website, creating
            engaging graphics, or developing robust digital solutions
          </p>
          <button
            type="button"
            class="py-2.5 px-5 mr-2 mb-2 text-sm font-bold text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Get Started
          </button>
          {/* avater */}
          <div className="flex my-5 -space-x-4">
            <img
              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="https://i.ibb.co/VYfbgJc/Ellipse-1-3.png"
              alt=""
            />
            <img
              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="https://i.ibb.co/VYfbgJc/Ellipse-1-3.png"
              alt=""
            />
            <img
              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="https://i.ibb.co/VYfbgJc/Ellipse-1-3.png"
              alt=""
            />
            <img
              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="https://i.ibb.co/VYfbgJc/Ellipse-1-3.png"
              alt=""
            />

            <div className="pl-8 sm:pl-8">
              <p className="text-white">1200+ Happy Customers</p>
              <p className="text-white">4.5 (22.5K Reviews)</p>
            </div>
          </div>

          <></>
        </div>
      </div>
    </div>
  );
};

export default HerroBanner;
