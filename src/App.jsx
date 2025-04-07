import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Chairpersons from "./pages/Chairpersons";
import Faculties from "./pages/Faculties";
import Footer from "./components/Footer";
import Bca from "./pages/courses/Bca";


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
          <Route path="/chairpersons" element={ <Chairpersons/>} />
          <Route path="/faculties" element={ <Faculties/>} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
