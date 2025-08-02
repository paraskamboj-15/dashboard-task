import React from "react";
import "./App.css";
import Header from "./components/Header";
import Cards from "./components/Cards";
import PieChartBox from "./components/charts/PieChart";
import BarChart from "./components/charts/BarChart";
import Table from "./components/table/Table";

export default function App() {
  return (
    <div className="dashboard">
      <Header />
      <Cards />
      <PieChartBox />
      <BarChart />
      <Table />
    </div>
  );
}