import React from "react";
import brakes from "./assets/brakes.jpeg";
import carkeys from "./assets/carkey.jpeg"
import cluster from "./assets/cluster.jpeg"
import download from "./assets/download.jpeg"
import elec from "./assets/elec.jpeg"
import sound from "./assets/sound.jpeg"
import starter from "./assets/stater.jpeg"
import Image from "next/image";

const ServicesFor = () => {
    const phoneNumber = "+27 79 347 3180"; // Replace this with the new phone number

  return (
    <section>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl pt-10">
        <p className=" text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium  text-black text-center	pb-8		">
          Our Services
        </p>
        <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
          <div className="p-6">
            <Image
              className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
              src={brakes}
              alt="Photo Shoot"
              loading="lazy"
              layout="responsive"
            />

            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
            Car Brakes Servicing
            </h1>

            <div className="mt-4">
            <a href={`https://wa.me/${phoneNumber}`}>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Book
                </button>
              </a>
            </div>
          </div>
          <div className="p-6">
            <Image
              className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
              src={carkeys}
              alt="Become A Partner"
              loading="lazy"
              layout="responsive"
              height="300"
            />

            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
            Car Key Coding
            </h1>

            <div className="mt-4">
            <a href={`https://wa.me/${phoneNumber}`}>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Book
                </button>
              </a>
            </div>
          </div>
          <div className="p-6">
            <Image
              className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
              src={cluster}
              alt="Get The App"
              loading="lazy"
              layout="responsive"
            />

            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
            Car clusters repairs
            </h1>

            <div className="mt-4">
            <a href={`https://wa.me/${phoneNumber}`}>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Book
                </button>
              </a>
            </div>
          </div>

          <div className="p-6">
            <Image
              className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
              src={download}
              alt="Become A Partner"
              loading="lazy"
              layout="responsive"
              height="300"
            />

            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
            ECU Repairs
            </h1>

            <div className="mt-4">
            <a href={`https://wa.me/${phoneNumber}`}>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Book
                </button>
              </a>
            </div>
          </div>
          <div className="p-6">
            <Image
              className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
              src={elec}
              alt="Flyers and business card"
              loading="lazy"
              layout="responsive"
            />

            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
            Auto Electrical Services
            </h1>

            <div className="mt-4">
            <a href={`https://wa.me/${phoneNumber}`}>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Book
                </button>
              </a>
            </div>
          </div>
          <div className="p-6">
            <Image
              className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
              src={sound}
              alt="Become A Partner"
              loading="lazy"
              layout="responsive"
              height="300"
            />

            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
            Sound Installations
            </h1>

            <div className="mt-4">
            <a href={`https://wa.me/${phoneNumber}`}>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Book
                </button>
              </a>
            </div>
          </div>

          <div className="p-6">
            <Image
              className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
              src={starter}
              alt="Become A Partner"
              loading="lazy"
              layout="responsive"
              height="300"
            />

            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
            Starter & alternator repairs
            </h1>

            <div className="mt-4">
            <a href={`https://wa.me/${phoneNumber}`}>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Book
                </button>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesFor;