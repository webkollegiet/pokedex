import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/home";
import Pokemon from "./views/pokemon";
import TypeContextProvider from "./contexts/typeContext";
import SearchProvider from "./contexts/searchContext";

export default function App() {

  return (
    <SearchProvider>
      <TypeContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon/:id" element={<Pokemon />} />
          </Routes>
        </BrowserRouter>
      </TypeContextProvider>
    </SearchProvider>
  );
}