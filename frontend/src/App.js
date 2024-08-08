import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Users from "./views/Users";
import Registerpage from "./views/Registerpage";
import Loginpage from "./views/Loginpage";
import Navbar from "./views/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/User" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
