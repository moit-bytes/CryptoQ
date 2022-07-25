import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export function AppRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          {/* <Route path="/dashboard" element={()=>window.open(`cryptoq-dash.herokuapp.com`)} exact /> */}
        </Routes>
      </Router>
    </>
  );
}
