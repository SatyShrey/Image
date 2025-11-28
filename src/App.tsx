import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Posters from "./Components/Posters";
import EditPage from "./Components/PreviewPage";
import EditDialog from "./Components/EditDialog";
import SideNav from "./Components/SideNav";
import BackgroundRemover from "./Components/BackgroundRemove";

export default function App() {
  return (
    <div className="d-flex flex-column bg-dark overflow-hidden" style={{ height: "100dvh" }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Posters />} />
          <Route path="/edit/:id" element={<EditPage />} />
          <Route path="/remove-bg" element={<BackgroundRemover/>}/>
        </Routes>
        <SideNav />
        <EditDialog />
      </BrowserRouter>
    </div>
  )
}