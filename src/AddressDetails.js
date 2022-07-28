import React, { useEffect, useState } from "react";
import "./addressDetails.css";

const AddressDetails = (props) => {
  const { item } = props;
  console.log(item);

  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () => {
    setIsClicked(!isClicked);
    console.log(isClicked);
  };

  return (
    <div>
      <li className="parentContainer">
        <h3>{item.name.first + " " + item.name.last}</h3>
        <img src={item.picture.large} />
        {!isClicked ? (
          <button onClick={clickHandler}>DETAILS</button>
        ) : (
          <button onClick={clickHandler}>Hide Details</button>
        )}
        {isClicked && (
          <div>
            <p>{item.email}</p>
            <p>{item.phone}</p>
          </div>
        )}
      </li>
    </div>
  );
};

export default AddressDetails;
