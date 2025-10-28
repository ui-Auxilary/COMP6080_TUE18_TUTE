import React, { useEffect, useState } from "react";

import Post from "../Post/Post";
import "./PostList.css";

export default function PostList() {
  let [users, setUsers] = useState([]);
  let [count, setCount] = useState(0);
  let [shouldFetch, setFetch] = useState(true);

  const fetchData = () => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    if (shouldFetch) {
      fetchData();
      setFetch(false);
    }
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      console.log("USERS", users);
    }
  }, [users]);

  return (
    <div id='container'>
      {users.map(({ name }, idx) => {
        return (
          <Post id={idx} fname={name} lname={name} gender={name} image={name} />
        );
      })}
      <button onClick={() => setCount(count + 1)}>Re-render</button>
    </div>
  );
}
