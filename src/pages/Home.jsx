import React from "react";
import "../App.css";

const Home = () => {
  return (
    <div className="home flex md:flex-row justify-around items-center flex-col ">
      <div className=" text-[#D0D6F9] w-[450px] h-[382px] mt-60 text-center md:text-start">
        <h2 className="text-2xl font-barlowCondensed tracking-widest ">
          SO, YOU WANT TO TRAVEL TO
        </h2>
        <h1 className="text-9xl text-white font-bellefair uppercase my-8">
          SPACE
        </h1>
        <p className="font-barlow">
          Let's face it: if you want to go to space, you might as well
          genuinegfdggfd gfd ggf ly go to outer space and not hover kind of on
          the edge of it. Well sit back, and relaxe because we'll give you a
          truly out of this world experience.
        </p>
      </div>
      <div className=" flex m-36 md:m-0 justify-center items-center md:mt-64 text-2xl tracking-widest font-bellefair text-black w-96 h-96 rounded-full hover:border-[64px] hover:border-[rgba(255,255,255,0.1)]">
        <div className="flex justify-center items-center bg-white w-64 h-64 rounded-full">
          <h1>EXPLORE</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
