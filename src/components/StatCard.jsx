import React from "react";

const StatCard = ({ icon, title, value, color }) => {
  return (
    <div className="stat-card">
      <div className="icon" style={{ backgroundColor: color + '33', color: color }}>
        {icon}
      </div>
      <div className="text-content">
        <p className="title">{title}</p>
        <p className="value">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;