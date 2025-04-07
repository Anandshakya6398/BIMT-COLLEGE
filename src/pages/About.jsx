import React, { useEffect, useRef, useState } from "react";
import {
  FaRobot,
  FaBrain,
  FaMicrochip,
  FaLaptopCode,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";
import Building from "../assets/building_2.jpg";
import Image1 from "../assets/IMG_2620.jpg";
import Image2 from "../assets/IMG_2434.jpg";
import Image3 from "../assets/IMG_2592.jpg";
import Image4 from "../assets/IMG_2592.jpg";
import Image01 from "../assets/IMG_2434.jpg";
import Image02 from "../assets/IMG_2563.jpg";
import Image04 from "../assets/IMG_2592.jpg";
import Image5 from "../assets/Whatsapp3.jpg";
import Image6 from "../assets/IMG_2620.jpg";
import Image7 from "../assets/IMG_2620.jpg";
// import Image8 from "../assets/IMG_2620.jpg";
// import Image9 from "../assets/IMG_2620.jpg";
// import Image10 from "../assets/IMG_2620.jpg";

const images = [
  Image01,
  Image02,
  Image04,
  Image5,
  Image6,
  Image7,
  // Image8,
  // Image9,
  // Image10
];

const About = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const scroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    };
    const interval = setInterval(scroll, 10);
    return () => clearInterval(interval);
  }, [isPaused]);
  const features = [
    {
      icon: <FaRobot className="text-green-700 text-3xl" />,
      title: "AI-Powered Learning",
      description: "Personalized learning experiences using AI algorithms",
    },
    {
      icon: <FaBrain className="text-green-700 text-3xl" />,
      title: "Research Assistant",
      description: "AI tools for data analysis and research insights",
    },
    {
      icon: <FaMicrochip className="text-green-700 text-3xl" />,
      title: "Campus Ecosystem",
      description: "campus management and security systems",
    },
    {
      icon: <FaLaptopCode className="text-green-700 text-3xl" />,
      title: "WhatsApp Support",
      description: "24/7 learning support and career guidance",
    },
    {
      icon: <FaShieldAlt className="text-green-700 text-3xl" />,
      title: " Cybersecurity",
      description: "Advanced threat detection and prevention systems",
    },
    {
      icon: <FaChartLine className="text-green-700 text-3xl" />,
      title: "Career assistant",
      description: " AI-driven career guidance and job matching",
    },
  ];
  const policies = [
    {
      title: "Excellence in Education",
      description:
        "Providing a transformative and rigorous educational experience that empowers students with practical knowledge, ethical leadership skills, and a commitment to integrity.",
    },
    {
      title: "Innovative Research",
      description:
        "Promoting cutting-edge research that drives sustainable development and addresses global challenges.",
    },
    {
      title: "Ethical Leadership",
      description:
        "Cultivating a culture of ethical leadership and professional excellence that prepares students to contribute positively to society.",
    },
    {
      title: "Inclusivity and Engagement",
      description:
        "Fostering an inclusive and dynamic learning environment that supports diverse perspectives and prepares students for global challenges.",
    },
    {
      title: "Continuous Improvement",
      description:
        "Engaging in regular evaluation and improvement of our programs and processes to maintain and enhance the quality of our academic and operational standards.",
    },
  ];
  return (
    <>
      <div className="w-full min-h-screen ">
        {/* Header Section */}
        <div className="text-center p-4 text-white">
          <h2 className="text-xl sm:text-3xl font-bold uppercase text-red-600">
            Badaun Institute Of Management & Technology
          </h2>
        </div>

        {/* Statistics Section */}
        <div className="flex justify-center p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
            {[Image1, Image2, Image3, Image4].map((img, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                {/* Image Container */}
                <div className="w-full h-44 sm:h-56 md:h-64 lg:h-80 xl:h-96">
                  <img
                    src={img}
                    alt={`Statistic ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105 object-top"
                    loading="lazy"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>

                {/* Text Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
                  <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                    {["5+", "1.5K+", "1K+", "2+"][index]}
                  </h1>
                  <p className="text-xs sm:text-sm md:text-lg italic">
                    {
                      [
                        "Academic Programmes",
                        "Student Network",
                        "Student Enrolled",
                        "Celebrate Festival",
                      ][index]
                    }
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Overview Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between p-6 lg:py-16 max-w-6xl mx-auto gap-10">
          <div className="lg:w-1/2">
            <h2 className="text-3xl text-red-800 font-semibold mb-4">
              Overview & History
            </h2>
            <p className="text-md text-gray-700 leading-relaxed">
              Badaun Institute of Management & Technology is an institution
              established under the Shri Ram Educational Society in 2008. We
              provide quality education in multiple full-time degree courses
              like D.El.Ed, B.Ed, B.Com, B.Sc., BBA, and BCA.
            </p>
          </div>
          <div className="lg:w-2/2 mt-6 lg:mt-0">
            <img
              src={Building}
              alt="College Building"
              className="w-full h-auto transform transition duration-500 hover:scale-105 animate-fade-in cursor-pointer shadow-lg"
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center py-6 px-5 bg-white">
          <h2 className="text-3xl font-bold text-green-700 mb-6">
            Vision & Mission
          </h2>
          <div className="flex flex-col md:flex-row gap-6 max-w-4xl">
            {/* Vision Statement */}
            <div className="bg-red-100 p-6 hover:shadow-xl rounded-lg shadow-md transform transition duration-500 hover:scale-105 animate-fade-in w-full md:w-1/2">
              <h3 className="text-xl font-bold text-red-700">
                Vision Statement
              </h3>
              <p className="text-gray-700  mt-2">
                To be a premier College of higher learning that advances
                research, innovation, and ethical leadership, empowering
                students to drive sustainable development and societal
                well-being with integrity.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-red-100 p-6 transform transition duration-500 hover:scale-105 animate-fade-in hover:shadow-xl rounded-lg shadow-md w-full md:w-1/2">
              <h3 className="text-xl font-bold text-red-700">
                Mission Statement
              </h3>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>
                  Provide a transformative educational experience that empowers
                  students with practical knowledge and ethical leadership
                  skills.
                </li>
                <li>
                  Promote cutting-edge research and innovation that drives
                  sustainable development and addresses global challenges.
                </li>
                <li>Advance knowledge and drive sustainable development.</li>
                <li>
                  Contribute to societal well-being through integrity and
                  excellence.
                </li>
                <li>
                  Cultivate an inclusive and dynamic learning environment
                  preparing students for global challenges.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="bg-gray-100 py-12 px-6 text-center">
          <h2 className=" bg-gradient-to-r from-red-500 via-purple-700 to-indigo-900 bg-clip-text text-transparent font-bold text-3xl ">
            Our AI-Powered Ecosystem
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mt-4 mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white cursor-pointer p-6 rounded-2xl shadow-lg border-t-4 border-red-700 flex flex-col transform transition duration-500 hover:scale-105 animate-fade-in items-center"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-6xl mx-auto py-12 px-6 text-center">
        <h2 className=" bg-gradient-to-r from-red-500 via-purple-700 to-indigo-900 bg-clip-text text-transparent font-bold text-3xl ">
            Quality Policy
          </h2>
          <p className="text-gray-600 mb-10">
            At Future University, we are committed to delivering exceptional
            educational experiences and advancing research and innovation with
            the highest standards of quality. Our quality policy is centered on:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {policies.map((policy, index) => (
              <div
                key={index}
                className="bg-white cursor-pointer shadow-lg rounded-2xl p-6 border transform transition duration-500 hover:scale-105 animate-fade-in border-gray-200"
              >
                <h3 className="text-lg font-semibold text-green-700 mb-2">
                  {policy.title}
                </h3>
                <p className="text-gray-600">{policy.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Campus Life & Events - Scrollable Images */}

        <div className="bg-white rounded-xl p-5 shadow-lg w-full max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Campus Life & Events
          </h2>
          <div
            ref={scrollRef}
            className="flex space-x-4 overflow-x-auto whitespace-nowrap scrollbar-hide w-full"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {[...images, ...images].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Campus Life ${(index % images.length) + 1}`}
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-cover rounded-lg shadow-md flex-shrink-0"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              />
            ))}
          </div>
          <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>
      </div>
    </>
  );
};

export default About;
