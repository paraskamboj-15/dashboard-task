
import React from "react";
import { FaTasks } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="header-title">
        <FaTasks style={{ color: "var(--accent-primary)" }} />
        <h2>Dashboard</h2>
      </div>

      <div className="header-actions">
        <input type="date" defaultValue="2023-10-27" />
      </div>
    </header>
  );
};

export default Header;