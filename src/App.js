import React, { useState, useEffect } from "react";
import EditUser from "./EditUser.js";
import "./App.css";

const myUrl = "https://jsonplaceholder.typicode.com/users";

export default function App() {
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState([]);
  const [phone, setUserPhone] = useState([]);
  const [email, setUserEmail] = useState([]);

  useEffect(() => {
    fetch(myUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);

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
        {users.map((item) => {
          return (
            <tbody key={item.id}>
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>
                  <button>Edit</button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>

      <div className="modal">
        <div className="modal-header">
          <h1 className="modal-title">Edit user</h1>
        </div>
        <div className="modal-body">
          {users.map((item) => {
            return (
              <form key={item.id}>
                <label>
                  Username:
                  <input type="text" name="name" defaultValue={item.username} onChange={(e) => setUserName(e.target.value)}/>
                </label>
                <label> 
                  Phone:
                  <input type="phone" name="phone" defaultValue={item.phone} onChange={(e) => setUserPhone(e.target.value)} />
                </label>
                <label>
                  Email:
                  <input type="text" name="email" defaultValue={item.email} onChange={(e) => setUserEmail(e.target.value)} />
                </label>

                <button type="submit">Save changes</button>
              </form>
            );
          })}
        </div>
      </div>
    </div>
  );
}
