import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Footer from "./components/Footer";
import "./App.css";
import Navbar from "./components/Navbar";
import ProjectPage from "./pages/project/ProjectPage";
import NotFound from "./pages/NotFound";
import CursorFollower from "./components/CursorFollower";
function App() {
  return (
    <div className="app bg-dark">
      <BrowserRouter>
        <Navbar />
        <CursorFollower />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
