import React, { useState } from "react";
import data from "./data";

const Practice = () => {
  const [data1, setData1] = useState(data);

  const handleChange = (...args) => {
    const data = data1.map((item,index) => {
      if (args.includes(index)) {
        return {
          ...item,
          display: !item.display,
        };
      } else {
        return item;
      }
    });

    setData1(data);
  };

  return (
    <div className="grid-wrapper">
      <h1 style={{color:"whitesmoke"}}>Grid Lights</h1>
      <div className="grid-container">
        {data1.map((item, index) => (
          <div
            key={index}
            className={`grid-box ${item.display ? "active" : ""}`}
            onClick={() =>
              handleChange(index, index - 1, index + 1, index - 5, index + 5)
            }
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Practice;
