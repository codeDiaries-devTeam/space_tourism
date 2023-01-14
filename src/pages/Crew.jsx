import React, { useState } from "react";
import ActiveCard from "../components/ActiveCard";
import douglas from "../assets/crew/image-douglas-hurley.png";
import mark from "../assets/crew/image-mark-shuttleworth.png";
import victor from "../assets/crew/image-victor-glover.png";
import ansari from "../assets/crew/image-anousheh-ansari.png";

const Crew = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="crew flex flex-col justify-center text-white ">
      <h1 className="  text-2xl uppercase pl-32 mb-28 mt-20">
        <span className=" text-gray-500">02 </span>
        meet your crew
      </h1>
      <div className="flex flex-row justify-between pl-32 items-center">
        <div className=" text-white w-[500px]">
          <h3 className=" text-3xl font-bellefair uppercase text-gray-500 ">
            {data[activeTab].role}{" "}
          </h3>
          <h2 className=" text-5xl font-bellefair uppercase py-5">
            {data[activeTab].name}
          </h2>
          <p className=" text-[#D0D6F9] pb-3 border-gray-600">
            {data[activeTab].bio}
          </p>
          <ActiveCard
            page="crew"
            data={data}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
        <div>
          <img
            className="w-[400px] absolute bottom-0 right-40"
            src={
              activeTab === 0
                ? douglas
                : activeTab === 1
                ? mark
                : activeTab === 2
                ? victor
                : activeTab === 3
                ? ansari
                : null
            }
            alt={data[activeTab].name}
          />
        </div>
      </div>
    </div>
  );
};

export default Crew;
