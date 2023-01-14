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
        }
      })}
    </nav>
  );
};

export default ActiveCard;
