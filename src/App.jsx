import { Navbar, Footer } from "./components";
import { Projects, Home } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-secondary text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
      <Footer />
      <script async defer src="https://buttons.github.io/buttons.js" />
    </div>
  );
}

export default App;
