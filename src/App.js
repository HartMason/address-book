import "./App.css";
import React, { useState, useEffect } from "react";
import { render } from "@testing-library/react";
import AddressDetails from "./AddressDetails";
import Axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("https://randomuser.me/api?results=25").then((res) => {
      setData(res.data.results);
    });
  }, []);


  // const [users, fetchUsers] = useState([])

  // const fetchData = () => {
  //   fetch('https://randomuser.me/api?results=25')
  //   .then(response => response.json())
  //   .then(parsedJSON =>parsedJSON.results.map( user => (
  //     {
  //     name: `${user.name.first} ${user.name.last}`,
  //     location: `${user.street.number} ${user.street.name}`
  //   }
  //   )))
  //   .then(contacts => this.setState({
  //     contacts,
  //     isLoading: false
  //   }))
  //   console.log(fetchData)

  // const {user, fetchUsers} = this.state

  return (
    <div className="App">
      <header className="header">Address Book</header>
      <div>
        {data.map((item, index) => {    //1st item or single element, 2nd is the index, third original array(data)
          return  <AddressDetails 
          key={index} 
          item={item} />;
        })}
      </div>
    </div>
  );
}

export default App;
