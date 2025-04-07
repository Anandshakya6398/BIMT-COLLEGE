import React from "react";

const Footer = () => {
  return (
    <>
      {/* About Section with Slightly Increased Height */}
      <section className="bg-black py-6 px-4 lg:py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* About Us */}
          <div className="text-white">
            <h2 className="text-xl font-semibold mb-3">About Us</h2>
            <p className="text-base leading-relaxed">
              BIMT College Budaun, also known as Budaun Institute of Management
              & Technology, is an educational institution located in Budaun,
              Uttar Pradesh, India. Established in 2009, it offers various UG &
              PG courses in management, technology, and education.
            </p>
          </div>

          {/* Courses */}
          <div className="text-white">
            <h2 className="text-xl font-semibold mb-3">Courses</h2>
            <ul className="text-base space-y-2">
              {[
                { short: "BCA", full: "Bachelor of Computer Applications" },
                { short: "BBA", full: "Bachelor of Business Administration" },
                { short: "B.COM", full: "Bachelor of Commerce" },
                { short: "B.Sc.", full: "Bachelor of Science" },
                { short: "B.Ed", full: "Bachelor of Education" },
                { short: "D.EL.Ed", full: "Diploma in Elementary Education" },
                { short: "M.Sc.", full: "Master of Science" },
                { short: "M.Com", full: "Master of Commerce" },
              ].map((course, index) => (
                <li key={index} className="flex items-center">
                  <span className="font-bold text-yellow-300">
                    {course.short}
                  </span>
                  <span className="ml-2">- {course.full}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Location */}
          <div className="text-white">
            <h3 className="text-lg font-semibold mb-3">Our Location</h3>
            <p className="text-base mb-2">
              <span className="font-semibold">Address:</span> Near Mandi Samiti,
              Kakrala Road, Budaun (U.P.)
            </p>
            <p className="text-base mb-2">
              <span className="font-semibold">Phone:</span>
              <a
                href="tel:9897777709"
                className="underline hover:text-yellow-300 ml-1"
              >
                9897777709
              </a>
              ,
              <a
                href="tel:9897777797"
                className="underline hover:text-yellow-300 ml-1"
              >
                9897777797
              </a>
            </p>
            <p className="text-base mb-3">
              <span className="font-semibold">Email:</span>
              <a
                href="mailto:bimtbadaun@yahoo.in"
                className="underline hover:text-yellow-300 ml-1"
              >
                bimtbadaun@yahoo.in
              </a>
            </p>

            {/* Google Maps */}
            <div className="w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3522.6977856757553!2d79.14649487433559!3d28.003141176014314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39754365082f1d8d%3A0x60c074a43f991681!2sBadaun%20Institute%20Of%20Management%20%26Technology%20(BIMT)!5e0!3m2!1sen!2sin!4v1733980652555!5m2!1sen!2sin"
                width="100%"
                height="180"
                className="rounded shadow-lg"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="bg-black text-white py-3 text-center">
        <p className="text-sm">
          Copyright © 2024 BIMT | Powered By:
          <span className="text-white font-bold"> Anand</span>
        </p>
      </div>
    </>
  );
};

export default Footer;
