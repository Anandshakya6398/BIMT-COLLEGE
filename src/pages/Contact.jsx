import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Fee from "../assets/FeeStructure_2024-25.png";
import Image1 from "../assets/IMG_2434.jpg";
import Image2 from "../assets/IMG_2563.jpg";
import Image4 from "../assets/IMG_2592.jpg";
import Image5 from "../assets/IMG_2620.jpg";
import Image6 from "../assets/IMG_2620.jpg";
// import Image7 from "../assets/IMG_2620.jpg";
// import Image8 from "../assets/IMG_2620.jpg";
// import Image9 from "../assets/IMG_2620.jpg";
// import Image10 from "../assets/IMG_2620.jpg";
import {
  FaRegFileAlt,
  FaCheckCircle,
  FaCreditCard,
  FaEnvelopeOpenText,
  FaFileSignature,
  FaChair,
  FaUniversity,
  FaClipboardCheck,
} from "react-icons/fa";
import { motion } from "framer-motion";

const images = [
  Image1,
  Image2,
  Image4,
  Image5,
  Image6,
  // Image7,
  // Image8,
  // Image9,
  // Image10,
];

const steps = [
  { icon: <FaRegFileAlt size={30} />, text: "Fill  Application" },
  { icon: <FaUniversity size={30} />, text: "Scholarship/Entrance Exam" },
  { icon: <FaEnvelopeOpenText size={30} />, text: "Receive " },
  { icon: <FaChair size={30} />, text: "Book Your Seat" },
  { icon: <FaCheckCircle size={30} />, text: "Document Verification" },
  { icon: <FaClipboardCheck size={30} />, text: "Get Admission Letter" },
  { icon: <FaCreditCard size={30} />, text: "Pay Semester Fee" },
  { icon: <FaFileSignature size={30} />, text: "Confirm Your Admission" },
];

const Contact = () => {
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

  // EmailJS configuration
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_ID", "template_ID", form.current, {
        publicKey: "",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSubmitted(true);
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      {/* gradient-to-br from-blue-500 via-purple-300 to-pink-300 */}
      <div className="bg-sky-50 py-10 -mt-6 px-6 sm:px-8 lg:px-10 text-white  flex flex-col items-start lg:items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-red-500 mb-4">
          Admission Open For 2025-26
        </h2>
        <p className="text-lg text-center text-gray-700 mb-6 max-w-3xl mx-auto">
          Secure your future with world-class education and industry-aligned
          courses.
        </p>

        {/* form */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4 items-stretch">
          {/* Left Section with Information */}
          <div className="bg-white p-6 rounded-2xl shadow-xl max-w-lg mx-auto flex flex-col justify-between h-full">
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Why Choose BIMT College?
            </h2>
            <div className="space-y-4 flex-grow">
              <div className="border-l-4 border-red-400 pl-3">
                <h3 className="font-semibold text-lg text-black">
                  Industry-Integrated Learning
                </h3>
                <p className="text-black">
                  Partnerships with leading companies ensure practical, relevant
                  education.
                </p>
              </div>
              <div className="border-l-4 border-red-400 pl-3">
                <h3 className="font-semibold text-black text-lg">
                  World-Class Infrastructure
                </h3>
                <p className="text-black ">
                  State-of-the-art facilities and modern learning environments.
                </p>
              </div>
              <div className="border-l-4 border-red-400 pl-3">
                <h3 className="font-semibold text-black text-lg">
                  Expert Faculty
                </h3>
                <p className="text-black">
                  Learn from experienced professors and industry professionals.
                </p>
              </div>
              <div className="border-l-4 border-red-400 pl-3">
                <h3 className="font-semibold text-black text-lg">
                  Career Support
                </h3>
                <p className="text-black">
                  Dedicated placement cell and industry connections for better
                  opportunities.
                </p>
              </div>
            </div>
            {/* Contact Information */}
            <div className="bg-gray-100 p-4 rounded-lg mt-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">
                Contact Information
              </h3>
              <p className="mt-2 text-gray-700">
                <strong>Address:</strong> Kakrala Road, Budaun, India
              </p>
              <p className="mt-1 text-gray-700">
                <strong>Email:</strong> contact@bimtcollege.com
              </p>
              <p className="mt-1 text-gray-700">
                <strong>Phone: </strong> +123 456 7890
              </p>
            </div>
          </div>

          {/* Right Section (Form) */}
          <motion.div
            className="p-4 rounded-2xl shadow-2xl text-gray-900 max-w-xl sm:mx-10 border border-white/30 bg-white/20 backdrop-blur-lg flex flex-col justify-between h-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="w-full max-w-xl px-7 py-3 bg-white shadow-2xl rounded-2xl space-y-3 text-gray-900 h-full flex flex-col justify-between"
            >
              <div className="space-y-3 flex-grow">
                <h2 className="text-2xl text-blue-500 font-semibold mb-3 text-center underline underline-offset-4">
                  Admission Query
                </h2>
                <label className="block text-sm font-medium text-gray-700">
                  Name *
                </label>
                <input
                  required
                  type="text"
                  name="from_name"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:outline-none transition"
                />

                <label className="block text-sm font-medium text-gray-700">
                  Email *
                </label>
                <input
                  required
                  type="email"
                  name="from_email"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:outline-none transition"
                />

                <label className="block text-sm font-medium text-gray-700">
                  Phone *
                </label>
                <input
                  required
                  type="tel"
                  name="phone"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:outline-none transition"
                />

                <label className="block text-sm font-medium text-gray-700">
                  Course
                </label>
                <input
                  required
                  type="text"
                  name="course"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:outline-none transition"
                />

                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:outline-none transition resize-none h-12"
                />
              </div>

              <motion.input
                type="submit"
                value="Send"
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 rounded-lg hover:from-blue-600 hover:to-indigo-600 cursor-pointer transition duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />
            </form>
            {isSubmitted && (
              <p className="text-green-600 text-center mt-2 font-medium">
                Form successfully submitted!
              </p>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Fee Image - Only on Large Screens */}
      <div className="relative bg-sky-50 z-10 flex justify-center p-4 lg:pt-4 ">
        <img
          src={Fee}
          alt="Fee details"
          className="max-w-full shadow-2xl rounded-2xl h-auto object-contain"
        />
      </div>

      {/* Journey to Excellence Section */}

      <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Your Journey To Excellence
        </h2>
        <p className="text-lg text-gray-600 mt-2">in Just 8 Steps</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer flex flex-col items-center text-center"
            >
              {step.icon}
              <p className="mt-2 text-gray-700 font-medium">{step.text}</p>
            </div>
          ))}
        </div>

        <button className="mt-8 px-6 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 font-medium shadow-md hover:bg-gray-200 cursor-pointer transition">
          Start Your Journey Now
        </button>
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
    </>
  );
};

export default Contact;
