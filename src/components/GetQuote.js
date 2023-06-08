import React from "react";
import { FaArrowRight } from "react-icons/fa";
const GetQuote = () => {
  return (
    <div>
      <div className="sm:mt-[200px] mb-[0px] sm:mb-[-110px] relative z-50">
        <div className="flex flex-wrap max-w-[1200px]  m-auto bg-[#000000db] justify-between items-center py-[20px] px-[30px] sm:px-[30px] sm:py-[60px] ">
          <h1 className=" text-white text-2xl sm:text-4xl max-w-[400px]">
            We Design digital experiences that drive excellent results
          </h1>
          <div>
            <p className="text-white sm:text-right mt-5">Talk to us now</p>
            <p className="text-white text-[25px] text-left">
              +1 (561) 664-6455
            </p>
          </div>
        </div>
      </div>
      <div className="quoteBgImg ">
        <div className="wrapper">
          <div className="pt-[100px] sm:pt-[400px] sm:pb-[100px]">
            <p className="text-center text-white">
              Get in touch with us anytime
            </p>
            <h1 className="text-center text-white pt-3 text-1xl sm:text-4xl font-bold uppercase">
              we believe that every
            </h1>
            <h1 className="text-center text-white pt-3 text-1xl sm:text-4xl font-bold uppercase">
              great project starts with a vision
            </h1>
            <a href="" className="flex justify-center mt-10">
              <div className="bg-black py-2 mb-10 sm:mb-0 text-white flex px-5 items-center gap-5 border-0 w-[170px]  rounded-lg border-gray-400 ">
                <p>Get A Quote</p>
                <FaArrowRight />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetQuote;
