import React, { useState, useEffect } from "react";
import "./App.css";
import { Container } from "../components";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Error fetching data...");
          }
        })
        .then((users) => setUsers(users))
        .catch(() => console.log("Error pulling data"));
    }

    getUsers();
  }, [users]);

  return (
    <div className="container">
      <Container data={users} />
    </div>
  );
};

export default App;
