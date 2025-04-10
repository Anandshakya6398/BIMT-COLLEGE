import React, { useEffect, useRef, useState } from "react";
import "./About.css";
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
import {
  FaRobot,
  FaBrain,
  FaMicrochip,
  FaLaptopCode,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";

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

  return (
    <div className="about-container">
      <h1 className="about-title text-red-800">BADAUN INSTITUTE OF MANAGEMENT & TECHNOLOGY</h1>

      {/* Stats Section */}
        <div  className="flex justify-center p-6">
                <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl ">
                  {[Image1, Image2, Image3, Image4].map((img, index) => (
                    <div
                      key={index}
                      className="relative group overflow-hidden rounded-lg shadow-lg"
                    >
                      {/* Image Container */}
                      <div
                      //  data-aos="zoom-out-down"
                        className="w-full h-44 sm:h-56 md:h-64 lg:h-80 xl:h-96">
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
      <div className="overview-section">
        <div
        //  data-aos="zoom-out-down" 
         className="overview-text">
          <h2 className="overview-title">Overview & History</h2>
          <p
          //  data-aos="zoom-up"
          >
            Badaun Institute of Management & Technology is an institution established
            under the Shri Ram Educational Society in 2008. We provide quality education
            in multiple full-time degree courses like D.El.Ed, B.Com, B.Sc., BBA, and BCA.
          </p>
        </div>
        <img 
        // data-aos="zoom-in-left" 
        src={Building} alt="BIMT Building" className="overview-image hover:scale-105 duration-300" />
      </div>

      {/* Vision & Mission */}
      <div  className="vision-mission">
        <h2
        //  data-aos="zoom-out-down" 
         className="vm-heading">Vision & Mission</h2>
        <div className="vision-mission-cards">
          <div 
          // data-aos="zoom-in-right" 
          className="vm-card">
            <h3>Vision Statement</h3>
            <p>
             BIMT Provides student with quality eductaional experiences and support services that lead to the successful completion of degrees, transfer certiificates and basic skills proficiency.Through measurable learning out comes, ethical data driver decisions and student achievement.
            </p>
          </div>
          <div 
          // data-aos="zoom-in-left" 
          className="vm-card red">
            <h3>Mission Statement</h3>
            <p>
              The Division of Student Life is committed to enriching the academic, personal and professional growth of all BIMT students.
            </p>
          </div>
        </div>
      </div>

      {/* Ecosystem Section */}
      <div className="ecosystem-section">
        <h2
        //  data-aos="zoom-in-up"
        >Our AI-Powered Ecosystem</h2>
        <div className="ecosystem-grid">
          <div
          //  data-aos="zoom-in-left"
            className="eco-card">
            <h3><FaRobot className="text-red-700 text-3xl Brain"/> AI-Powered Learning</h3>
            <p>Personalized learning experiences using AI algorithms</p>
          </div>
          <div 
          // data-aos="zoom-in-down"
           className="eco-card">
            <h3> <FaBrain className="text-red-700 text-3xl Brain"/>Research Assistant</h3>
            <p>AI tools for data analysis and research insights</p>
          </div>
          <div
          //  data-aos="zoom-in-right" 
           className="eco-card">
            <h3> <FaMicrochip className="text-red-700 text-3xl Brain"/>Campus Ecosystem</h3>
            <p>Campus management and security systems</p>
          </div>
          <div 
          // data-aos="zoom-in-down"
           className="eco-card">
            <h3> <FaLaptopCode className="text-red-700 text-3xl Brain"/>WhatsApp Support</h3>
            <p>24/7 learning support and career guidance</p>
          </div>
          <div
          //  data-aos="zoom-in-up" 
           className="eco-card">
            <h3> <FaShieldAlt className="text-red-700 text-3xl Brain"/>Cybersecurity</h3>
            <p>Advanced threat detection and prevention systems</p>
          </div>
          <div 
          // data-aos="zoom-in-down" 
          className="eco-card">
            <h3> <FaChartLine className="text-red-700 text-3xl Brain"/>Career Assistant</h3>
            <p>AI-driven career guidance and job matching</p>
          </div>
        </div>
      </div>

      {/* Quality Policy */}
      <div className="quality-policy">
        <h2 
        // data-aos="zoom-in-down"
         className="quality">Quality Policy</h2>
        <p data-aos="zoom-in">
          At BIMT COLLEGE, we are committed to delivering exceptional educational
          experiences and advancing research and innovation with the highest standards
          of quality. Our quality policy is centered on:
        </p>
        <div className="quality-grid">
          <div
          //  data-aos="zoom-in-right" 
          className="quality-card ">
            <h3 className="headings ">Excellence in Education</h3>
            <p>
              Empowering students with practical knowledge, ethical leadership skills, and
              a commitment to integrity.
            </p>
          </div>
          {/* <div className="quality-card">
            <h3 className="headings">Innovative Research</h3>
            <p>Promoting cutting-edge research that addresses global challenges.</p>
          </div> */}
          <div 
          // data-aos="zoom-in-left" 
          className="quality-card">
            <h3 className="headings">Ethical Leadership</h3>
            <p>
              Cultivating a culture of ethical leadership that prepares students to
              contribute positively to society.
            </p>
          </div>
          <div
          //  data-aos="zoom-in-up" 
          className="quality-card">
            <h3 className="headings">Inclusivity and Engagement</h3>
            <p>
              Supporting diverse perspectives and preparing students for global challenges.
            </p>
          </div>
          <div
          //  data-aos="zoom-in-down"
           className="quality-card">
            <h3 className="headings ">Continuous Improvement</h3>
            <p>
              Engaging in regular evaluation and process enhancement to maintain high
              academic and operational standards.
            </p>
          </div>
        </div>
      </div>
       {/* Campus Life & Events - Scrollable Images */}

       <div className="bg-white rounded-xl p-5 shadow-lg w-full max-w-6xl mx-auto camp">
          <h2
          //  data-aos="zoom-in-down"
           className="text-2xl camp-title font-bold mb-4 text-center cm-heading">
            Campus Life & Events
          </h2>
          <div
            ref={scrollRef}
            className="flex space-x-4 gap-1 overflow-x-auto whitespace-nowrap scrollbar-hide w-full"
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
          {/* <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style> */}
        </div>
    </div>
  );
};

export default About;
