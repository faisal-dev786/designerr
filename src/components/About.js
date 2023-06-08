import React from "react";

const About = () => {
  return (
    <div>
      <div className="bg-gray-200 py-[100px] sm:py-[100px]">
        <div className="wrapper grid grid-cols-1 sm:grid-cols-2 ">
          <img src="https://i.ibb.co/Vvx6W9m/Group-2963.png" alt="" />
          <div>
            <p className="text-gray mt-5 sm:mt-0 mb-2">About Us</p>
            <h1 className="text-2xl sm:text-5xl font-semibold uppercase mb-5">
              Elevate your <span className="font-bold">online presence </span>
              with our expertise
            </h1>
            <p className="max-w-[550px]">
              We take pride in collaborating closely with our clients to truly
              understand their unique needs and goals, and then leveraging our
              expertise to create digital experiences that inspire and engage
              audiences. With Web Designrr , you can trust that you're getting
              innovative.
            </p>
            <div className="boxShadow bg-white mt-5 max-w-[400px] rounded">
              <div className="flex justify-evenly py-3">
                {" "}
                <img src="https://i.ibb.co/M7wMyHQ/Group-2964.png" alt="" />
                <img src="https://i.ibb.co/j3J2Mb3/Group-2965.png" alt="" />
                <img src="https://i.ibb.co/kX0Vmq6/Group-2966.png" alt="" />
                <img src="https://i.ibb.co/YXJy2kH/Group-2967.png" alt="" />
              </div>

              <p className="pl-[50px] pb-3">10+ Excellent Services</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
