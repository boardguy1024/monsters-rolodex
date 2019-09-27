import React from "react";
import "./search-box.style.css";

export const SearchBox = ({ placeholder, onChangedHandler }) => {
  return (
    <div className="search">
      <input
        className="search-box"
        placeholder={placeholder}
        onChange={onChangedHandler}
      ></input>
    </div>
  );
};
