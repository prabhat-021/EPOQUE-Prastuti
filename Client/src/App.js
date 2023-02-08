import Home from "./pages/Home/Home";
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutKiet from "./pages/About/AboutKiet.js";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegistrationPage/RegisterPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutKiet" element={<AboutKiet />} />
       
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

      </Routes>
    </BrowserRouter>
  );
}
