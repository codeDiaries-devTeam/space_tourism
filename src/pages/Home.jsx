import React from "react";
import "../App.css";

const Home = () => {
  return (
    <div className="home">
      <div className="flex justify-around my-auto w-full h-screen items-center">
        <div className=" text-white border border-white w-[450px] h-[382px] ">
          <h2>SO, YOU WANT TO TRAVEL TO</h2>
          <h1>SPACE.</h1>
          <p>
            Let's face it: if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relaxe because we'll give you a truly out of this
            world experience.
          </p>
        </div>
        <div className=" flex justify-center items-center text-black border border-white w-[274px] h-[274px] bg-white rounded-full">
          <h1 className="">EXPLORE</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
