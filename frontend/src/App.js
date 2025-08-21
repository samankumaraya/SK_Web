import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EducationForm from "./pages/EducationForm";
function App() {
  return (
    <Router>
      {/* All routes must be inside <Router> */}
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/education" element={<EducationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
