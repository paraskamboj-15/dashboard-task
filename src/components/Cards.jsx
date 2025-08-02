import React from "react";
import StatCard from "./StatCard";
import { FaLaptopCode } from "react-icons/fa"; 
const COLORS = ["#6c5ce7", "#00b894", "#fdcb6e", "#ff7675", "#a29bfe"];

const Cards = () => {
  const cardData = [
    { title: "C++", value: "40" },
    { title: "JS", value: "20" },
    { title: "React", value: "20" },
    { title: "Node", value: "15" },
    { title: "Python", value: "5" },
  ];

  return (
    <div className="cards">
      {cardData.map((card, index) => (
        <StatCard
          key={card.title} 
          title={card.title}
          value={`${card.value}%`}
          icon={<FaLaptopCode />}
          color={COLORS[index % COLORS.length]}
        />
      ))}
    </div>
  );
};

export default Cards;