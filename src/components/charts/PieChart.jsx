import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "C++", value: 40 },
  { name: "JavaScript", value: 20 },
  { name: "React", value: 20 },
  { name: "Node.js", value: 15 },
  { name: "Python", value: 5 },
];

const COLORS = ["#6c5ce7", "#00b894", "#fdcb6e", "#ff7675", "#a29bfe"];

const PieChartBox = () => {
  return (
    <div className="widget pie-chart-box">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartBox;