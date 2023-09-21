import { FaCarBattery, FaTools } from 'react-icons/fa';

const Model =()=>{

return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
                <div className="max-w-xl md:mx-auto">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Power Your Vehicles with Us
                    </h3>
                    <p className="mt-3 text-gray-600">
                        We provide top-notch auto electrical solutions to keep your vehicles running smoothly.
                    </p>
                </div>
                <div className="flex gap-3 items-center mt-4 md:justify-center">
                    <a href="javascript:void(0)" className="inline-block py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none">
                        <FaCarBattery className="inline-block mr-2" /> Get started
                    </a>
                    <a href="javascript:void(0)" className="inline-block py-2 px-4 text-gray-800 font-medium duration-150 border hover:bg-gray-50 active:bg-gray-100 rounded-lg">
                        <FaTools className="inline-block mr-2" /> Learn more
                    </a>
                </div>
            </div>
        </section>
    )
}


export default Model;