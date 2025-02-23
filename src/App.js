import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Program from "./pages/program"; // Corrected import

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Include the Header component */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} /> {/* Default Home Page */}
            <Route path="/program" element={<Program />} /> {/* Program Page Route */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
