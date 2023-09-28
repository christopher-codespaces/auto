import React from "react";
import { FaCarBattery, FaBolt, FaWrench } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="py-28">
      <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
        <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
          <h1 className="text-sm text-indigo-600 font-medium">
            Your Trusted Auto Electrical Service
          </h1>
          <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
          Let Our Auto Electrical and Diagnostics Experts Keep Your Vehicle Running Smoothly
          </h2>
          <p>
          {`Looking for reliable and efficient auto electrical and diagnostics services?
          Look no further! Our team of experienced technicians specialize in diagnosing and repairing a wide range of electrical issues in vehicles.
          From battery replacements to advanced diagnostic testing, we've got you covered.
          Trust us to get your vehicle back on the road in no time.
          Contact us today to schedule your appointment.
          `}
         </p>
          <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
            <a href="javascript:void(0)" className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
              Contact Us
            </a>

          </div>
        </div>
        <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
          <img
            src="https://images.pexels.com/photos/3807329/pexels-photo-3807329.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="md:rounded-tl-[108px]"
            alt="Auto Electrical Services"
          />
        </div>
      </div>

    </section>
  );
};

export default Hero;
