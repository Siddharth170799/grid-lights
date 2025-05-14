import React, { useState } from "react";


const Practice = () => {
  const [data1, setData1] = useState(new Array(25).fill({}));
  const columns = 5;
  const handleChange = (index) => {
    const newData = data1.map((item, i) => {
      const isSame = i === index;
      const isLeft = i == index - 1 && index % columns != 0 ? true : false;
      const isRight = i == index + 1 && (index + 1) % columns != 0;
      const isTop = i === index - columns;
      const isBottom = i === index + columns;

      if (isSame || isLeft || isRight || isTop || isBottom) {
        return {
          ...item,
          display: !item.display,
        };
      } else {
        return item;
      }
    });

    setData1(newData);
  };

  return (
    <div className="grid-wrapper">
      <h1 style={{ color: "whitesmoke" }}>Grid Lights</h1>
      <div className="grid-container">
        {data1.map((item, index) => (
          <div
            key={index}
            className={`grid-box ${item.display ? "active" : ""}`}
            onClick={() => handleChange(index)}
          ></div>
        ))}
      </div>
      <button onClick={() => setData1(new Array(25).fill({}))}>Reset</button>
    </div>
  );
};

export default Practice;
