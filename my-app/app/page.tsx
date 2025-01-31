"use client";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard/[username]/page";
import Home from "./home/page";
import SignInRoute from "./(auth)/signin/page";
import SignUpRoute from "./(auth)/signup/page";
import Success from "./(auth)/success/page";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUpRoute />} />
          <Route path="/signin" element={<SignInRoute />} />
          <Route path="/success" element={<Success />} />
          <Route path="/dashboard/:username" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
