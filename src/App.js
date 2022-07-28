import "./App.css";
import React, { useState, useEffect } from "react";
import { render } from "@testing-library/react";
import AddressDetails from "./AddressDetails";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api?results=25").then((res) => {
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
  render();
  return (
    <div className="App">
      <header>Address Book</header>
      <div>
        {data.map((item) => {
          <AddressDetails key={item.login.uuid} item={item} />;
        })}
      </div>
      <ol></ol>
    </div>
  );
}

export default App;
