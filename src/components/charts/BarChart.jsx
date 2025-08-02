import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { name: "C++", quantity: 40 },
  { name: "JS", quantity: 20 },
  { name: "React", quantity: 20 },
  { name: "Node", quantity: 15 },
  { name: "Python", quantity: 5 },
];

const BarChartBox = () => {
  return (
    <div className="widget bar-chart-box">
      <h3 className="widget-title">Usage Quantity</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="name" tick={{ fill: 'var(--text-secondary)' }} />
          <YAxis tick={{ fill: 'var(--text-secondary)' }} />
          <Tooltip cursor={{fill: 'rgba(108, 92, 231, 0.1)'}}/>
          <Bar dataKey="quantity" fill="var(--accent-primary)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

// Fixed the export name to match the filename and import in App.js
export default BarChartBox;