// only the logged in user should be able to view their specific dashboard

"use client";

import { logout } from "../../(auth)/signin/actions";

export default function Dashboard() {
  const url = window.location.href;
  const pathSegments = url.split("/");
  const username = pathSegments[pathSegments.length - 1].slice(1, -1);
  return (
    <div>
      <div>
        <button onClick={() => logout()}>Logout</button>
      </div>
      <p>Welcome {username}!</p>
    </div>
  );
}
