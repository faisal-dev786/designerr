import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Services = () => {
  return (
    <div>
      <div className="wrapper pt-10">
        <p className="text-center">Our Expertise</p>
        <h1 className="text-2xl sm:text-4xl font-bold text-center">
          Our Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {/* col 1 */}
          <div>
            <div className="boxxShadow mt-[100px] sm:mt-[150px] bg-white rounded-xl max-w-[320px] relative">
              <img
                className="absolute top-[-80px]"
                src="https://i.ibb.co/h7PvGX3/Group-2930.png"
                alt=""
              />
              <div className="px-[30px] py-[30px]">
                <h1 className="text-1xl sm:text-2xl font-bold">
                  Website Design
                </h1>
                <p className="pt-5 pb-8">
                  Lorem ipsum dolor sit amet, tur adipiscing elit, sed do{" "}
                </p>
                <a href="">
                  <div className="flex px-3 items-center gap-5 border-2 w-[150px]  rounded-lg border-gray-400 ">
                    <p>Read More</p>
                    <FaArrowRight />
                  </div>
                </a>
              </div>
            </div>
            {/*  */}
            <div className="boxxShadow mt-[100px] sm:mt-[100px] bg-white rounded-xl max-w-[320px] relative">
              <img
                className="absolute top-[-80px]"
                src="https://i.ibb.co/MVXPdq8/Group-2930.png"
                alt=""
              />
              <div className="px-[30px] py-[30px]">
                <h1 className="text-1xl sm:text-2xl font-bold">
                  Ui - Ux Design
                </h1>
                <p className="pt-5 pb-8">
                  Lorem ipsum dolor sit amet, tur adipiscing elit, sed do{" "}
                </p>
                <a href="">
                  <div className="flex px-3 items-center gap-5 border-2 w-[150px]  rounded-lg border-gray-400 ">
                    <p>Read More</p>
                    <FaArrowRight />
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* col 2 */}
          <div className="sm:mt-[150px] sm:pb-[100px]">
            <div className="boxxShadow mt-[100px] sm:mt-[150px] bg-white rounded-xl max-w-[320px] relative">
              <img
                className="absolute top-[-80px]"
                src="https://i.ibb.co/fSyth20/Group-2930.png"
                alt=""
              />
              <div className="px-[30px] py-[30px]">
                <h1 className="text-1xl sm:text-2xl font-bold">
                  Website Development
                </h1>
                <p className="pt-5 pb-8">
                  Lorem ipsum dolor sit amet, tur adipiscing elit, sed do{" "}
                </p>
                <a href="">
                  <div className="flex px-3 items-center gap-5 border-2 w-[150px]  rounded-lg border-gray-400 ">
                    <p>Read More</p>
                    <FaArrowRight />
                  </div>
                </a>
              </div>
            </div>
            {/*  */}
            <div className="boxxShadow mt-[100px] sm:mt-[100px] bg-white rounded-xl max-w-[320px] relative">
              <img
                className="absolute top-[-80px]"
                src="https://i.ibb.co/MVXPdq8/Group-2930.png"
                alt=""
              />
              <div className="px-[30px] py-[30px]">
                <h1 className="text-1xl sm:text-2xl font-bold">
                  Graphic Design
                </h1>
                <p className="pt-5 pb-8">
                  Lorem ipsum dolor sit amet, tur adipiscing elit, sed do{" "}
                </p>
                <a href="">
                  <div className="flex px-3 items-center gap-5 border-2 w-[150px]  rounded-lg border-gray-400 ">
                    <p>Read More</p>
                    <FaArrowRight />
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* col 3 */}
          <div>
            <div className="boxxShadow mt-[100px] sm:mt-[150px] bg-white rounded-xl max-w-[320px] relative">
              <img
                className="absolute top-[-80px]"
                src="https://i.ibb.co/4ML9ktR/Group-2930.png"
                alt=""
              />
              <div className="px-[30px] py-[30px]">
                <h1 className="text-1xl sm:text-2xl font-bold">Logo Design</h1>
                <p className="pt-5 pb-8">
                  Lorem ipsum dolor sit amet, tur adipiscing elit, sed do{" "}
                </p>
                <a href="">
                  <div className="flex px-3 items-center gap-5 border-2 w-[150px]  rounded-lg border-gray-400 ">
                    <p>Read More</p>
                    <FaArrowRight />
                  </div>
                </a>
              </div>
            </div>
            {/*  */}
            <div className="boxxShadow mt-[100px] sm:mt-[100px] bg-white rounded-xl max-w-[320px] relative">
              <img
                className="absolute top-[-80px]"
                src="https://i.ibb.co/chzc4wp/Group-2930.png"
                alt=""
              />
              <div className="px-[30px] py-[30px]">
                <h1 className="text-1xl sm:text-2xl font-bold">Html Design</h1>
                <p className="pt-5 pb-8">
                  Lorem ipsum dolor sit amet, tur adipiscing elit, sed do{" "}
                </p>
                <a href="">
                  <div className="flex px-3 items-center gap-5 border-2 w-[150px]  rounded-lg border-gray-400 ">
                    <p>Read More</p>
                    <FaArrowRight />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
