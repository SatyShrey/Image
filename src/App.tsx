import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Posters from "./Components/Posters";
import EditPage from "./Components/EditPage";

export default function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100dvh" }}>
      <BrowserRouter>
          <Header />
        <Routes>
          <Route path="/" element={<Posters />} />
          <Route path="/edit/:id" element={<EditPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}