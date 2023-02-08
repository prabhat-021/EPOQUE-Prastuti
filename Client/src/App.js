import Home from "./pages/Home/Home";
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutKiet from "./pages/About/AboutKiet.js";
import AboutPrastuti from "./pages/About/AboutPrastuti.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutKiet" element={<AboutKiet />} />
        <Route path="/aboutPrastuti" element={<AboutPrastuti />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
