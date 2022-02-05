import React from "react";
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from "./Home";

function Nav() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/index' element={<Home/>} />
      </Routes>
    </Router>
  );
}


export default Nav;
