import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import ProjectDetail from "./components/ProjectDetail";


function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <main className="content-area">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/proyectos" element={<Projects />} />
            <Route path="/sobre-mi" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/proyectos/:id" element={<ProjectDetail />} />
            <Route path="*" element={<h1>404 - No encontrado</h1>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
