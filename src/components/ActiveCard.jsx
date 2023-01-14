import React from "react";

const ActiveCard = ({ data, page, activeTab, setActiveTab }) => {
  const changeContent = (index) => {
    setActiveTab(index);
  };
  return (
    <nav>
      {data.map((element, index) => {
        if (page === "destination") {
          return (
            <button
              key={index}
              onClick={() => changeContent(index)}
              className={`${
                index === activeTab
                  ? "underline text-white font-barlowCondensed uppercase px-3"
                  : "text-[#D0D6F9] font-barlowCondensed uppercase px-3"
              }`}
            >
              {element.name}
            </button>
          );
        } else if (page === "crew") {
          return (
            <button
              key={index}
              onClick={() => changeContent(index)}
              className={`${
                index === activeTab ? " px-3" : "px-3 text-gray-600"
              }`}
            >
              <div className=" text-9xl">.</div>
            </button>
          );
        } else if (page === "technology") {
          return (
            <button
              key={index}
              onClick={() => changeContent(index)}
              className={`${
                index === activeTab
                  ? "mb-4 bg-white text-black w-16 h-16 border rounded-full border-white "
                  : "mb-4 w-16 h-16 rounded-full border border-white"
              }`}
            >
              {index + 1}
            </button>
          );
        } else {
          return <p>not found</p>;
        }
      })}
    </nav>
  );
};

export default ActiveCard;
