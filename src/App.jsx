import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Navbar />
              <About />
              <Projects />
              <Resume />
              <Contact />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
