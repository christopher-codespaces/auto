import { FiLifeBuoy, FiDollarSign, FiUsers, FiBox, FiLayers, FiCheck } from 'react-icons/fi';

const Services = [
  {
    icon: <FiLifeBuoy size={46} />,
    title: 'ECU Repairs',
    content: 'Resolve issues with your car\'s Engine Control Unit (ECU). Our expert services fix the critical component responsible for managing key functions of your vehicle\'s engine.'
  },
  {
    icon: <FiDollarSign size={46} />,
    title: 'Car Cluster Repairs',
    content: 'Experience top-notch instrument cluster repairs for your car\'s dash and dashboard. We specialize in fixing gauge clusters, ensuring accurate readings and optimal performance.'
  },
  {
    icon: <FiUsers size={42} />,
    title: 'Auto Electrical Services',
    content: 'Choose the best for your auto electrical needs. Our services cover a wide range, from car repairs to maintenance. Trust us for reliable and efficient auto electrical solutions.'
  },
  {
    icon: <FiBox size={42} />,
    title: 'Car Key Coding',
    content: 'Benefit from expert roadside assistance for car key programming. We provide efficient key coding services, ensuring your new keys are as effective as the originals.'
  },
  {
    icon: <FiLayers size={44} />,
    title: 'Starter & Alternator Repairs',
    content: 'Ensure the longevity of your vehicle with our starter and alternator repair services. These critical components wear out over time and may need replacement to maintain peak performance.'
  },
  {
    icon: <FiCheck size={44} />,
    title: 'Sound Installations',
    content: 'Enhance your driving experience with quality audio equipment installations. Our expert services provide entertainment and information, making your journey more enjoyable.'
  },
  {
    icon: <FiCheck size={44} />,
    title: 'Car Brake Servicing',
    content: 'Trust our complete vehicle brake repair shop for expert service. We handle everything related to your car’s brakes and braking systems, ensuring optimal safety and performance.'
  },
];

const MySection = () => (
  <section className="py-12 bg-white sm:py-16 lg:py-20">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">Top-notch Car Services for Optimal Vehicle Performance</h1>
        <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">Explore our comprehensive range of auto services to ensure your {`vehicle's `}reliability and longevity. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
        {Services.map((service, index) => (
          <div key={index} className={`md:p-8 lg:p-14 ${index > 0 ? 'md:border-l md:border-gray-200' : ''} ${index > 2 ? 'md:border-t' : ''}`}>
            {service.icon}
            <h2 className="mt-12 text-xl font-bold text-gray-900 font-pj">{service.title}</h2>
            <p className="mt-5 text-base text-gray-600 font-pj">{service.content}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MySection;
