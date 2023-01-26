import React, { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Home, Landing } from "./screens";

const App = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const theUser = localStorage.getItem("user");

    if (theUser && !theUser.includes("undefined")) {
      setUser(JSON.parse(theUser));
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={user?.email ? <Navigate to="/home" /> : <Landing />}
        />
        <Route
          path="/signup"
          element={user?.email ? <Navigate to="/home" /> : <Landing />}
        />
        <Route
          path="/login"
          element={user?.email ? <Navigate to="/home" /> : <Landing />}
        />
        <Route
          path="/home"
          element={user?.email ? <Home user={user} /> : <Navigate to="/" />}
        />
        <Route
          path="/users"
          element={user?.email ? <Home user={user} /> : <Navigate to="User" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
