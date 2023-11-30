import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import NewFeatures from "./pages/newFeatures/NewFeatures";

function App() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/newFeature" element={<NewFeatures />} />
    </Routes>
  );
}

export default App;
