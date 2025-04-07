import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
// import Services from "./pages/Courses";
// import Bca from "./pages/Bca";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Faculties from "./pages/Faculties";
import Footer from "./components/Footer";
import Bca from "./pages/courses/Bca";
import Administration from "./pages/Administration";


function App() {
  return (
    <Router>
      <Navbar />
      <div className=" mt-34">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/bca" element={<Bca />} />
          <Route path="/apply" element={<Contact />} />
          <Route path="/administration" element={ <Administration/>} />
          <Route path="/faculties" element={ <Faculties/>} />
          {/* <Route path="/faculties" element={ <Contact/>} /> */}

        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
