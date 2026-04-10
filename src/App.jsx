import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/home";
import Pokemon from "./views/pokemon";

export default function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:id" element={<Pokemon />} />
        </Routes>
    </BrowserRouter>
  );
}