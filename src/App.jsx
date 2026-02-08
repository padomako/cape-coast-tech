import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import About from "./pages/About"
import Academics from "./pages/Academics"
import Admissions from "./pages/Admissions"
import Students from "./pages/Students"
import Contact from "./pages/Contact"

function App() {
  return (
    <Router>
      {/* Global wrapper */}
      <div className="font-sans bg-gray-50 text-gray-900 leading-relaxed min-h-screen flex flex-col">

        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/students" element={<Students />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </Router>
  )
}

export default App
