import React, { useEffect, useState} from 'react';

const AddressDetails = (props) => {
const { item } = props; 



  return (
    <li>
        <h3>{item.name.first + item.name.last}</h3>
    </li>
  )
}

export default AddressDetails