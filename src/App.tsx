import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Posters from "./Components/Posters";
import EditPage from "./Components/PreviewPage";
import EditDialog from "./Components/EditDialog";
import SideNav from "./Components/SideNav";

export default function App() {
  return (
    <div className="d-flex flex-column bg-dark" style={{ height: "100vh" }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Posters />} />
          <Route path="/edit/:id" element={<EditPage />} />
        </Routes>
        <SideNav/>
        <EditDialog />
      </BrowserRouter>
    </div>
  )
}