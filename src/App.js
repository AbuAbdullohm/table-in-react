import React, { Component } from "react";
// import BasicModal from "./modal";
import "./App.css";

class App extends Component {
  state = { users: [] };

  componentDidMount() {
    this.getUsersList();
  }

  getUsersList = () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((res) => res.json())
      .then((data) => this.setState({ users: data }))
      .catch((err) => console.error(err));
  };

  render() {
    const { users } = this.state;

    return (
      <div className="App">
        <h1>My Table</h1>
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>Name</th>
              <th>Username</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Edit</th>
            </tr>
          </thead>
          {users.map((item, key) => {
            return (
              <tbody>
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                  <td>
                    {/* <button onClick={BasicModal}>Edit</button> */}
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    );
  }
}

export default App;
