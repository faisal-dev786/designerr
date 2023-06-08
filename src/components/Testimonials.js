import React from "react";

const Testimonials = () => {
  return (
    <div>
      <div className="wrapper py-10">
        <p className="text-center">Testimonials</p>
        <h1 className="text-center pt-3 text-2xl sm:text-4xl font-bold uppercase m-auto max-w-[400px]">
          What Are <span className="font-[800]">Customer</span> Say About Us
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:pl-[80px] sm:gap-[110px] ">
          <div className="boxxShadow ml-5 sm:ml-0 py-5 px-8 mt-[50px] sm:mt-[100px] bg-white rounded-xl max-w-[320px]">
            <div className="flex items-center relative">
              <img
                className="absolute max-w-[100px] sm:max-w-[unset] left-[-90px] sm:left-[-120px] top-[-20px] "
                src="https://i.ibb.co/5x1JJWZ/Group-6202.png"
                alt=""
              />
              <p className="pb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et{" "}
              </p>
            </div>

            <div className="flex items-center gap-3 border-t-2 pt-3">
              <img src="https://i.ibb.co/Kqrdjq1/Ellipse-35.png" alt="" />
              <div>
                <p>Carl Hooper</p>
                <img src="https://i.ibb.co/930DYR4/Group-5268.png" alt="" />
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div className="boxxShadow ml-5 sm:ml-0 py-5 px-8 mt-[50px] sm:mt-[100px] bg-white rounded-xl max-w-[320px]">
            <div className="flex items-center relative">
              <img
                className="absolute max-w-[100px] sm:max-w-[unset] left-[-90px] sm:left-[-120px] top-[-20px] "
                src="https://i.ibb.co/5x1JJWZ/Group-6202.png"
                alt=""
              />
              <p className="pb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et{" "}
              </p>
            </div>

            <div className="flex items-center gap-3 border-t-2 pt-3">
              <img src="https://i.ibb.co/Kqrdjq1/Ellipse-35.png" alt="" />
              <div>
                <p>Kelly Wilson</p>
                <img src="https://i.ibb.co/930DYR4/Group-5268.png" alt="" />
              </div>
            </div>
          </div>
          {/* card 3 */}
          <div className="boxxShadow  ml-5 sm:ml-0 py-5 px-8 mt-[50px] sm:mt-[100px] bg-white rounded-xl max-w-[320px]">
            <div className="flex items-center relative">
              <img
                className="absolute max-w-[100px] sm:max-w-[unset] left-[-90px] sm:left-[-120px] top-[-20px] "
                src="https://i.ibb.co/5x1JJWZ/Group-6202.png"
                alt=""
              />
              <p className="pb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et{" "}
              </p>
            </div>

            <div className="flex items-center gap-3 border-t-2 pt-3">
              <img src="https://i.ibb.co/Kqrdjq1/Ellipse-35.png" alt="" />
              <div>
                <p>Ellyes Perry</p>
                <img src="https://i.ibb.co/930DYR4/Group-5268.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
