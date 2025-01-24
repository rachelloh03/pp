// only the logged in user should be able to view their specific dashboard

"use client";

import { logout } from "../(auth)/signin/actions";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [message, setMessage] = useState("Loading");
  const [people, setPeople] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/home")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMessage(data.message);
        setPeople(data.people);
      });
  }, []);
  return (
    <div>
      <div>
        <button onClick={() => logout()}>Logout</button>
      </div>
      <div>{message}</div>
      {people.map((person, index) => (
        <div key={index}>{person}</div>
      ))}
    </div>
  );
}
