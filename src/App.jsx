import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../components/Home";
import { About } from "../components/About";
import { Works } from "../components/Works";
import { Navbar } from "../components/Navbar";
import { StudyCase } from "../components/StudyCase";
import "./App.css";

const App = () => {
  return (
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/:path" element={<StudyCase />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;