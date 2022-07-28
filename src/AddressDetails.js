import React, { useEffect, useState} from 'react';

const AddressDetails = (props) => {
const { item } = props; 

const [isClicked, setIsClicked] = useState(false);

const clickHandler = () => {
  setIsClicked(!isClicked);
  console.log(isClicked)
}

  return (
    <div>
    <li>
        <h3>{item.name.first + item.name.last}</h3>
    </li>
    <button onClick={clickHandler}>DETAILS</button>
    </div>
  )
}

export default AddressDetails