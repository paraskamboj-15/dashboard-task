
import React from "react";

const tableData = [
  { name: "C++", usages: 40, year: 1983, developer: "Bjarne Stroustrup" },
  { name: "JavaScript", usages: 20, year: 1995, developer: "Brendan Eich" },
  { name: "React", usages: 20, year: 2013, developer: "Jordan Walke" },
  { name: "Node.js", usages: 15, year: 2009, developer: "Ryan Dahl" },
  { name: "Python", usages: 5, year: 1991, developer: "Guido van Rossum" },
  
];

const Table = () => { 
  return (
    <div className="widget table-container">
      <h3 className="widget-title">Technology Details</h3>
      <div className="table-scroll-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Usages (%)</th>
              <th>Year</th>
              <th>Developed By</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.usages}</td>
                <td>{item.year}</td>
                <td>{item.developer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;