import Home from "./pages/Home/Home";
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutKiet from "./pages/About/AboutKiet.js";
<<<<<<< HEAD
import SingElement from "./components/SingleElem/SingElement";
=======
import AboutPrastuti from "./pages/About/AboutPrastuti.js";
>>>>>>> d996bc51e1392e5ee129b2051a7679c12f5bbe07

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutKiet" element={<AboutKiet />} />
<<<<<<< HEAD
        <Route path="/singleElement/:id" element={<SingElement />} />
        {/* <Route path="/aboutPrastuti" element={<AboutPrastuti />} /> */}
=======
        <Route path="/aboutPrastuti" element={<AboutPrastuti />} />
>>>>>>> d996bc51e1392e5ee129b2051a7679c12f5bbe07
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
