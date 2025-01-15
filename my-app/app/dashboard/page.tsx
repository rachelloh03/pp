// only the logged in user should be able to view their specific dashboard

"use client";

import { logout } from "../(auth)/signin/actions";

export default function Dashboard() {
  return (
    <div>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}
