import "./Navbar.css";
// import { useState, useEffect } from "react";
// import { Link, Routes, Route, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const searchOnClickHandle = (event) => {
    const data = {
      action: "Search",
      userid: null,
      username: null,
      email: null,
      experience: null,
      level: null,
    };
    props.onClickSearch(data);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <a className="active" href="#home">
              Home
            </a>
          </li>
          <li>
            <a href="#about" value="Search" onClick={searchOnClickHandle}>
              Search
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
