import React, { useEffect, useState } from "react";

const AddressDetails = (props) => {
  const { item } = props;

  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () => {
    setIsClicked(!isClicked);
    console.log(isClicked);
  };

  return (
    <li>
      <h3>{item.name.first + item.name.last}</h3>
      <img src={item.picture.medium} />
      <button onClick={clickHandler}>DETAILS</button>
    </li>
  );
};

export default AddressDetails;
