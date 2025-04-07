import React from "react";
import Image from "../assets/building_2.jpg";
import { FaUserGraduate, FaUsers, FaIndustry } from "react-icons/fa";
import Arvind from '../assets/Teachers/Arvindsir.png'
import Manoj from '../assets/Teachers/Manojsir.png'
import Sourav from '../assets/Teachers/Souravsir.png'
import W1 from '../assets/Teachers/W1.png'
import W2 from '../assets/Teachers/W2.png'
import W3 from '../assets/Teachers/w3.png'
import W4 from '../assets/Teachers/W4.png'
import W5 from '../assets/Teachers/W5.png'
import W6 from '../assets/Teachers/W6.png'
import WM1 from '../assets/Teachers/Wm1.png'
import WM2 from '../assets/Teachers/Wm2.png'
import WM3 from '../assets/Teachers/Wm3.png'
import WM4 from '../assets/Teachers/Wm4.png'


const Faculties = () => {
  return (
    <div>
      <div className="relative -mt-6 mb-6 w-full h-[450px] md:h-[300px] flex items-center justify-center text-white">
        {/* Background Image */}
        <div
          className="absolute  inset-0  bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${Image})` }}
          
        >
          <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center  md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold">Shape Your Future</h1>
          <p className="text-lg md:text-xl mt-2">
            Discover 90+ programs across our world-class faculties
          </p>

          {/* Stats Section */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <div className="bg-green-700 bg-opacity-70 p-4 rounded-lg flex items-center space-x-3 w-40 md:w-48">
              <FaUserGraduate className="text-2xl" />
              <div>
                <p className="text-md sm:text-xl font-bold">50+</p>
                <p className="text-sm">Experts</p>
              </div>
            </div>
            <div className="bg-green-700 bg-opacity-70 p-4 rounded-lg flex items-center space-x-3 w-40 md:w-48">
              <FaUsers className="text-2xl" />
              <div>
                <p className="sm:text-xl font-bold">15,000+</p>
                <p className="text-sm">Students Enrolled</p>
              </div>
            </div>
            <div className="bg-green-700 bg-opacity-70 p-4 rounded-lg flex items-center space-x-3 w-40 md:w-48">
              <FaIndustry className="text-2xl" />
              <div>
                <p className="sm:text-xl font-bold ">0+</p>
                <p className="text-sm">Industry Collaborations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* next */}
      <h2 className="text-2xl font-bold text-center mt-2">Faculty Member</h2>
      <div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-12 px-8 mb-14 mt-10">
       
        <div>
          <div className="ring-3 rounded ring-red-800  text-center mx-auto w-74 h-96">
            <a href="">
              <img src={Sourav} alt="" className="h-86 w-72 rounded-2xl object-cover mx-auto" />
            </a>
            <p className="font-semibold font-mono text-lg py-2">
              <p>Mr. Sourav</p>
            </p>
          </div>
        </div>
        <div>
          <div className="border-2 text-center mx-auto w-76 h-96">
            <a href="">
              <img src={Arvind} alt="" className="w-72 object-cover mx-auto" />
            </a>
            <p className="font-semibold font-mono text-lg py-2">
              <p>Mr. Arvind Gupta</p>
            </p>
          </div>
        </div>
        <div>
          <div className="border-2 text-center mx-auto w-76 h-96">
            <a href="">
              <img src={Manoj} alt="" className="w-72 object-cover mx-auto" />
            </a>
            <p className="font-semibold font-mono text-lg py-2">
              <p> Mr. Manoj</p>
            </p>
          </div>
        </div>
        <div>
          <div className="border-2">
            <a href="">
              <img src={W1} alt="" className="" />
            </a>
            <p className="font-semibold font-mono text-lg py-2">
              <a href=""> Department Of Computer Applications</a>
            </p>
          </div>
        </div>
        <div>
          <div className="border-2">
            <a href="">
              <img src={W2} alt="" className="" />
            </a>
            <p className="font-semibold font-mono text-lg py-2">
              <a href=""> Department Of Computer Applications</a>
            </p>
          </div>
        </div>
        <div>
          <div className="border-2">
            <a href="">
              <img src={W3} alt="" className="" />
            </a>
            <p className="font-semibold font-mono text-lg py-2">
              <a href=""> Department Of Computer Applications</a>
            </p>
          </div>
        </div>
        <div>
          <div className="border-2">
            <a href="">
              <img src={W4} alt="" className="" />
            </a>
            <p className="font-semibold font-mono text-lg py-2">
              <a href=""> Department Of Computer Applications</a>
            </p>
          </div>
        </div>
        <div>
          <div className="border-2">
            <a href="">
              <img src={W5} alt="" className="" />
            </a>
            <p className="font-semibold font-mono text-lg py-2">
              <a href=""> Department Of Computer Applications</a>
            </p>
          </div>
        </div>
        <div>
          <div className="border-2">
            <a href="">
              <img src={W6} alt="" className="" />
            </a>
            <p className="font-semibold font-mono text-lg py-2">
              <a href=""> Department Of Computer Applications</a>
            </p>
          </div>
        </div>
        <div>
          <div className="border-2">
            <a href="">
              <img src={WM1} alt="" className="" />
            </a>
            <p className="font-semibold font-mono text-lg py-2">
              <a href=""> Department Of Computer Applications</a>
            </p>
          </div>
        </div>
        <div>
          <div className="border-2">
            <a href="">
              <img src={WM2} alt="" className="object-cover" />
            </a>
            <p className="font-semibold font-mono text-lg py-2">
              <a href=""> Department Of Computer Applications</a>
            </p>
          </div>
        </div>
        <div>
          <div className="border-2">
            <a href="">
              <img src={WM3} alt="" className="object-cover" />
            </a>
            <p className="font-semibold font-mono text-lg py-2">
              <a href=""> Department Of Computer Applications</a>
            </p>
          </div>
        </div>
        <div>
          <div className="border-2">
            <a href="">
              <img src={WM4} alt="" className="object-cover" />
            </a>
            <p className="font-semibold font-mono text-lg py-2">
              <a href=""> Department Of Computer Applications</a>
            </p>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Faculties;
