import React from "react";
import Image from "../../assets/IMG_2434.jpg";
import Teacher from "../../assets/arvind.jpg";

const Bca = () => {
  return (
    <>
      <h1 className="font-mono  text-3xl px-2 text-center underline text-red-600 ">
        Bachelor of Computer Applications
      </h1>
      <div className="grid lg:grid-cols-2 mt-10 mb-20 bg-gray-800">
        <div className="px-12">
          <h2 className="text-5xl font-mono text-orange-900 font-bold mt-14">
            Department Of Computer Application
          </h2>
          <p className=" text-white py-14 -mt-6 text-lg font-medium">
            The Department of Computer Application was established in 2009 with
            the objective of imparting quality education in Computer Science and
            Applications. The department has a strong faculty with a good mix of
            young and experienced members. The department has a well-equipped
            computer laboratory with a good number of computers and other
            equipment.
          </p>
        </div>
        <div className="p-8">
          <img src={Image} alt="" className="w-full" />
        </div>
      </div>
      <p className="px-10 -my-16  font-lg font-bold  ">
        BIMT College Budaun offers a 3-year Bachelor of Computer Applications
        (BCA) course at the undergraduate level. The course is affiliated with
        Mahatma Jyotiba Phule Rohilkhand University.
      </p>
      <div className="px-10 ">
        <div className="shadow-xl border-[3px] border-slate-100 rounded px-1 my-16  py-6">
          <p className="font-semibold text-lg px-4  py-2">Course Details:-</p>
          <ul className="font-mono font-medium px-5">
            <li>Duration: 3 years</li>
            <li>Affiliation: Mahatma Jyotiba Phule Rohilkhand University</li>
            <li>Department: Computer Science</li>
          </ul>
          <p className="font-semibold px-4 text-lg  py-2">Fee Structure:-</p>
          <ul className="px-5">
            <li>First sem: Rs14000/-</li>
            <li>Second sem: Rs10000/-</li>
            <li>Third sem: Rs10000/-</li>
            <li>Fourth sem: Rs10000/-</li>
            <li>Fifth sem: Rs10000/-</li>
            <li>Six sem: Rs10000/-</li>
          </ul>
          <h4 className="font-semibold px-4 text-lg  py-2">
            Admission Requirements:-
          </h4>
          <p className="px-5">
            To get admitted to the BCA course at BIMT College Budaun, you need
            to meet the eligibility criteria set by the college. You can contact
            the college for more information on admission requirements and
            procedures.
          </p>
        </div>
      </div>
      {/* <!-- faculty --> */}

      <div className="bg-gray-200 p-10  pb-1">
        <h2 className="font-bold text-center  font-mono text-2xl">Faculty</h2>
        <div className=" grid grid-cols-1 sm:grid-cols-3  gap-6 p-6">
          <div>
            <img src={Teacher} alt="" className="p-10 cursor-pointer w-96" />
            <p className="px-8 font-medium cursor-pointer hover:text-sky-600">
              Mr. Arvind Gupta
            </p>
          </div>
          <div>
            <img src={Teacher} alt="" className="p-10 cursor-pointer   w-96 " />
            <p className="px-8 font-medium cursor-pointer hover:text-sky-600">
              Mr. Arvind Gupta
            </p>
          </div>
          <div>
            <img src={Teacher} alt="" className="p-10 cursor-pointer w-96 " />
            <p className="px-8 font-medium cursor-pointer hover:text-sky-600">
              Mr. Arvind Gupta
            </p>
          </div>
        </div>
      </div>
    </>

   
  )
}

export default Bca

