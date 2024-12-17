import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Footer from "./components/Footer";
import "./App.css";
import Navbar from "./components/Navbar";
import ProjectPage from "./components/pages/project/ProjectPage";
import AboutPage from "./components/pages/about/AboutPage";
function App() {
  return (
    <div className="app bg-dark">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
