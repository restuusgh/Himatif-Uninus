import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Makrab from "./pages/Makrab";
import Register from "./pages/Register";
import DataRegister from "./pages/DataRegister";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/makrab" element={<Makrab />} />
        <Route path="/register" element={<Register />} />
        <Route path="/data-register" element={<DataRegister />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
