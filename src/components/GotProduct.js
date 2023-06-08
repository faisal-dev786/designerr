import React from "react";
import { FaArrowRight } from "react-icons/fa";
const GotProduct = () => {
  return (
    <div>
      <div className="wrapper py-10 grid grid-cols-1 sm:grid-cols-2">
        <div className="">
          <h1 className="text-2xl sm:text-4xl font-bold uppercase max-w-[300px]">
            Got a project in your mind
          </h1>
          <p className="max-w-[500px] py-5 sm:py-10">
            If you've got a project in mind, now is the time to turn that idea
            into a reality. Whether it's a website, app, or graphic design
            project, taking the first step towards making your vision a reality
            is often the hardest part. But with the right team behind you, the
            process can be smooth and stress-free.
          </p>
          <a href="">
            <div className="bg-black border-0 py-2 mb-10 sm:mb-0 text-white flex px-5 items-center gap-5  w-[150px]  rounded-lg border-gray-400 ">
              <p>Talk To Us</p>
              <FaArrowRight />
            </div>
          </a>
        </div>
        <div>
          <img src="https://i.ibb.co/tBrs1Qh/Object.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default GotProduct;
