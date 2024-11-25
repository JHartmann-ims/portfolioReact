import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Me from "./components/Me";
import Footer from "./components/Footer"
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
    <Router>
      <Navbar />
      <div className="flex-grow">
      <Routes>
        <Route path="/" element={<Me />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
