import React from "react";
import { FaCarBattery, FaBolt, FaWrench } from 'react-icons/fa';

const About = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-screen-xl mx-auto text-gray-600 px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-600 mb-2">About Us</h2>
          <p className="text-base text-gray-700">
            Offering a range of services to keep your vehicle in optimal condition.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <FaBolt className="text-4xl text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Computer Diagnostic Testing</h3>
            <p className="text-sm text-gray-700">
              Our advanced computer diagnostic testing ensures accurate identification of issues in your {`vehicle's`} systems.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <FaWrench className="text-4xl text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Transmission Service & Repair</h3>
            <p className="text-sm text-gray-700">
              Expert service and repair for your {`vehicle's`} transmission, ensuring smooth and reliable performance.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <FaCarBattery className="text-4xl text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Battery Replacements</h3>
            <p className="text-sm text-gray-700">
              Swift and efficient battery replacement services to keep your vehicle powered and ready to go.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <FaBolt className="text-4xl text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Emissions Diagnostics</h3>
            <p className="text-sm text-gray-700">
              Accurate diagnostics for emissions-related issues, ensuring compliance with environmental standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
