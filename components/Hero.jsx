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
            We Keep Your Vehicle Running <FaBolt className="inline-block" /> Smoothly
          </h2>
          <p>
            At  we are your reliable partners in auto electrical services. We specialize in keeping your vehicle running smoothly, so you can hit the road with confidence.
          </p>
          <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
            <a href="javascript:void(0)" className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
              {`Let's`} Get Started
            </a>
            <a href="javascript:void(0)" className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">
              Get Access <FaCarBattery className="inline-block" />
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
      <div className="mt-14 px-4 md:px-8">
        <p className="text-center text-sm text-gray-700 font-semibold">Trusted by the Best Auto Electrical Companies</p>
        <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-6 mt-6">
          <FaWrench className="text-4xl text-indigo-600" />
          <FaCarBattery className="text-4xl text-indigo-600" />
          <FaBolt className="text-4xl text-indigo-600" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
