// only the logged in user should be able to view their specific dashboard

"use client";

import { logout } from "../../(auth)/signin/actions";
import axios from "axios";

let exercises: Array<{
  id: number;
  username: string;
  exercise: string;
  weight: string;
  reps: string;
}> = [];

const user_exercises: Array<{
  id: number;
  username: string;
  exercise: string;
  weight: string;
  reps: string;
}> = [];

try {
  const response = await axios.get("http://localhost:8080/api/exercise");
  exercises = response.data.data;
  console.log("exercises: ", exercises);
} catch (error) {
  console.log(error);
}

const url = window.location.href;
const pathSegments = url.split("/");
const username = pathSegments[pathSegments.length - 1].slice(1, -1);

for (let i = 0; i < exercises.length; i++) {
  const exercise = exercises[i];
  if (exercise["username"] === username) {
    user_exercises.push(exercise);
  }
}

console.log("user exercises: ", user_exercises);

export default function Dashboard() {
  return (
    <div>
      <div>
        <button onClick={() => logout()}>Logout</button>
      </div>
      <p>Welcome {username}!</p>
    </div>
  );
}
