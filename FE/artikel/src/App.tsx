import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import DetailArtikel from "./pages/detail_artikel";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/detail/:index" element={<DetailArtikel />} />
      </Routes>
    </>
  );
}
