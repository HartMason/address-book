import "./App.css";
import React, { useState, useEffect } from "react";
import { render } from "@testing-library/react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api?results=25")
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      console.log("server says bad response");
    })
    .then((res) => setData(res.data))
    .catch((err) => console.log("didn't work"));
  },[])




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
  render()
  return (
    <div className="App">
      <header>Address Book</header>
      <div>
        {data && data.map(() => (userData) => {
          return <div>{userData}</div>;
        })}
      </div>
      <ol></ol>
    </div>
  );
}

export default App;
