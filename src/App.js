import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Program from "./pages/program"; // Corrected import
import ContactUs from "./pages/contactus"; 

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Include the Header component */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} /> {/* Default Home Page */}
            <Route path="/AboutUs" element={<AboutUs/>} />
            <Route path="/program" element={<Program />} /> {/* Program Page Route */}
            <Route path="/ContactUs" element={<ContactUs />}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
