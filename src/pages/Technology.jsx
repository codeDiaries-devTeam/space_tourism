import React, { useState } from "react";
import ActiveCard from "../components/ActiveCard";
import launchPortrait from "../assets/technology/image-launch-vehicle-portrait.jpg";
import spaceportPortrait from "../assets/technology/image-spaceport-portrait.jpg";
import spacePortrait from "../assets/technology/image-space-capsule-portrait.jpg";

const Technology = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="technology flex flex-col justify-center text-white">
      <h1 className="  text-2xl uppercase pl-32 pb-10 mt-20">
        <span className=" text-gray-500 font-barlowCondensed">03 </span>
        space launch 101
      </h1>
      <div className=" flex flex-row justify-around items-center">
        <div className=" flex flex-row h-56 w-[650px]  ">
          <ActiveCard
            page="technology"
            data={data}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <div className="ml-20">
            <h4 className=" font-barlowCondensed tracking-widest text-[#D0D6F9]">
              THE TERMINOLOGY...{" "}
            </h4>
            <h2 className=" text-6xl uppercase mb-5 mt-2 font-bellefair ">
              {data[activeTab].name}
            </h2>
            <p className="pb-3 font-barlow text-lg text-[#D0D6F9] ">
              {data[activeTab].description}
            </p>
          </div>
        </div>
        <div>
          <img
            className="w-[420px] rounded-2xl"
            src={
              activeTab === 0
                ? launchPortrait
                : activeTab === 1
                ? spaceportPortrait
                : activeTab === 2
                ? spacePortrait
                : null
            }
            alt={data[activeTab].name}
          />
        </div>
      </div>
    </div>
  );
};

export default Technology;
