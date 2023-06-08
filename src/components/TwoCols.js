import React from "react";
import { FaArrowRight } from "react-icons/fa";
const TwoCols = () => {
  return (
    <div>
      <div className="wrapper py-10 grid grid-cols-1 sm:grid-cols-2">
        <div className="">
          <h1 className="text-2xl sm:text-4xl font-bold uppercase">
            Ui Ux Design
          </h1>
          <p className="max-w-[500px] py-5 sm:py-10">
            UI/UX designers carefully consider factors such as information
            architecture, interaction design, and visual hierarchy to ensure
            seamless interactions between users and digital products or
            services. By crafting interfaces that are visually engaging,
            intuitive to use, and align with the brand's identity.
          </p>
          <div className="flex flex-wrap gap-5 pb-10">
            <a className="underline" href="">
              Mobile App Ui Ux,{" "}
            </a>
            <a className="underline" href="">
              Website Ui Ux,
            </a>
            <a className="underline" href="">
              Software Ui Ux
            </a>
          </div>
          <a className="max-w-[170px]" href="">
            <div className="bg-black  border-0 py-3 mb-10 sm:mb-0 text-white flex px-5 items-center gap-5  max-w-[170px]  rounded-lg border-gray-400 ">
              <p>Learn More</p>
              <FaArrowRight />
            </div>
          </a>
        </div>
        <div>
          <img src="https://i.ibb.co/QmCgPwS/Mask-Group-49.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TwoCols;
