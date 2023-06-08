import React from "react";
import { FaArrowRight } from "react-icons/fa";
const Contact = () => {
  return (
    <div>
      <>
        {/* Contact Us */}
        <div className="max-w-[85rem] px-4 py-1 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="max-w-2xl lg:max-w-5xl mx-auto">
            <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
              {/* Card */}
              <div className="flex flex-col  p-4 sm:p-6 lg:p-8 dark:border-gray-700">
                <p className="pb-3">Contact Now</p>
                <h2 className="uppercase mb-8 text-xl font-bold text-gray-800 dark:text-gray-200">
                  Get in touch with us
                </h2>
                <form>
                  <div className="grid gap-4">
                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="hs-firstname-contacts-1"
                          className="sr-only "
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="hs-firstname-contacts-1"
                          id="hs-firstname-contacts-1"
                          className="bg-[#8080801a] py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="hs-email-contacts-1"
                          className="sr-only"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          name="hs-email-contacts-1"
                          id="hs-email-contacts-1"
                          autoComplete="email"
                          className="bg-[#8080801a] py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                          placeholder="Enter Email"
                        />
                      </div>
                    </div>
                    {/* End Grid */}
                    {/*  */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="hs-firstname-contacts-1"
                          className="sr-only "
                        >
                          Subject
                        </label>
                        <input
                          type="text"
                          name="hs-firstname-contacts-1"
                          id="hs-firstname-contacts-1"
                          className="bg-[#8080801a] py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                          placeholder="Subject"
                        />
                      </div>
                      <div>
                        <label htmlFor="hs-phone-number-1" className="sr-only">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          name="hs-phone-number-1"
                          id="hs-phone-number-1"
                          className="bg-[#8080801a] py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                          placeholder="Phone"
                        />
                      </div>
                    </div>
                    {/*  */}

                    <div>
                      <label htmlFor="hs-about-contacts-1" className="sr-only">
                        Message
                      </label>
                      <textarea
                        id="hs-about-contacts-1"
                        name="hs-about-contacts-1"
                        rows={4}
                        className="bg-[#8080801a] py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                        placeholder="Message"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  {/* End Grid */}
                  <a href="" className="flex mt-10">
                    <div className="bg-black py-2   sm:mb-0 text-white flex px-5 items-center gap-5 border-0 w-[180px]  rounded-lg border-gray-400 ">
                      <p>Send Message</p>
                      <FaArrowRight />
                    </div>
                  </a>
                </form>
              </div>
              {/* End Card */}
              <div className="pb-5 sm:pb-0">
                <img src="https://i.ibb.co/p3xcv5z/Group-6202.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* End Contact Us */}
      </>
    </div>
  );
};

export default Contact;
