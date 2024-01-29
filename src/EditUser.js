import { useState } from "react";

export const EditUser = () => {
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      body: JSON.stringify({
        name: userName,
        phone: userPhone,
        email: userEmail,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="phone"
          value={userPhone}
          onChange={(e) => setUserPhone(e.target.value)}
        />
      </div>
      <div>
        <input
          type="email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
      </div>
      <button type="submit">Save changes</button>
    </form>
  );
};

export default EditUser;
