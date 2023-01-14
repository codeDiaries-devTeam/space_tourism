import React, { useState } from "react";
import ActiveCard from "../components/ActiveCard";
import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";

const Destination = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);
  console.log(data);
  return (
    <div className="destination flex flex-col justify-center text-white">
      <h1 className=" text-2xl uppercase pl-40 pb-10 mt-20">
        <span className=" text-gray-500">01 </span>
        Pick your destination
      </h1>
      <div className="flex flex-row justify-around">
        <img
          className="w-96 animate-destination"
          src={
            activeTab === 0
              ? moon
              : activeTab === 1
              ? mars
              : activeTab === 2
              ? europa
              : activeTab === 3
              ? titan
              : null
          }
          alt={data[activeTab].name}
        />
        <div className=" text-white flex flex-col gap-5 w-[420px] h-56">
          <ActiveCard
            page="destination"
            data={data}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <h2 className="text-8xl font-bellefair uppercase mt-3">
            {data[activeTab].name}{" "}
          </h2>
          <p className="pb-8 border-b border-gray-600 font-barlow text-[#D0D6F9]">
            {data[activeTab].description}
          </p>
          <div className="flex flex-row gap-5">
            <div>
              <h4 className=" text-xs font-barlowCondensed tracking-widest text-[#D0D6F9]">
                AVG. DISTANCE
              </h4>
              <h2 className=" text-lg font-bellefair mt-3 uppercase">
                {data[activeTab].distance}
              </h2>
            </div>
            <div>
              <h4 className=" text-xs font-barlowCondensed tracking-widest text-[#D0D6F9]">
                EST. TRAVEL TIME
              </h4>
              <h2 className=" text-lg font-bellefair mt-3 uppercase">
                {data[activeTab].travel}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
