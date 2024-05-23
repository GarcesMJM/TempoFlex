import React, { useState } from "react";
import "../css/SlideMenu.css";

const SlideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="menu-button" onClick={toggleMenu}>
        {isOpen ? "Close" : "Open"} Menu
      </button>
      <div className={`slide-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#">Item 1</a>
          </li>
          <li>
            <a href="#">Item 2</a>
          </li>
          <li>
            <a href="#">Item 3</a>
          </li>
          <li>
            <a href="#">Item 4</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SlideMenu;
