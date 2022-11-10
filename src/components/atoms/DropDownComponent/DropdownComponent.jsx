import React, { useState } from "react";
import "./style.css"; 
export default function DropdownComponent(props) {
  const { options = [], selectedItem, setSelectedItem } = props;

  const [classActive, setClassActive] = useState(false);
  //   const [option, setOption] = useState("");

  const handleOnInputChange = (event) => {
    const data = event.target.value;
    setClassActive(false);
    setSelectedItem(data);
  };

  const handleFilter = (event) => {
    const data = event.target.value;
    setClassActive(true);
    setSelectedItem(data);
  };

  const optionFiltered = options?.filter((item) =>
    item.toLowerCase().includes(selectedItem.toLowerCase())
  );

  return (
    <div className={`dropdown ${classActive ? "active" : ""}`}>
      <input
        type="text"
        className="text02"
        value={selectedItem}
        onChange={(value) => {
          handleFilter(value);
        }}
        placeholder={selectedItem}
        onClick={() => setClassActive(!classActive)}
      ></input>
      <div className="option">
        {optionFiltered?.map((item) => {
          return (
            <option
              key={item}
              value={item}
              onClick={(value) => {
                handleOnInputChange(value);
              }}
            >
              {item}
            </option>
          );
        })}
      </div>
      <option></option>
    </div>
  );
}
