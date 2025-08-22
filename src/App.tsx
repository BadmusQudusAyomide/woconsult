import React from "react";
// Routing and Pages
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ApplyPage from "./pages/ApplyPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apply" element={<ApplyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
