import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Vaccine from "./Pages/Vaccine";
import Card from "./Pages/Card";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vaccine" element={<Vaccine />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App;