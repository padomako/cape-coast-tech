import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import About from "./pages/About"
import Academics from "./pages/Academics"
import Admissions from "./pages/Admissions"
import Students from "./pages/Students"
import Contact from "./pages/Contact"
import StudentLogin from "./pages/StudentLogin"
import ProgrammePage from "./pages/programmes/ProgrammePage"
import WeekendTrainingPage from "./pages/WeekendTrainingPage"
import Announcements from "./pages/Announcements"
import Programmes from "./pages/Programmes"
import CampusLife from "./pages/student-life/CampusLife"
import Hostels from "./pages/student-life/Hostels"
import GraduateDocuments from "./pages/student-life/GraduateDocuments"


function App() {
  return (
    <Router>
      <Navbar />

      {/* Space reserved for fixed navbar */}
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/students" element={<Students />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/academics/:programmeSlug" element={<ProgrammePage />} />
          <Route path="/weekend-training" element={<WeekendTrainingPage />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/programmes" element={<Programmes />} />
          <Route path="/student-life/campus" element={<CampusLife />} />
          <Route path="/student-life/hostels" element={<Hostels />} />
          <Route path="/student-life/graduate-documents" element={<GraduateDocuments />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  )
}

export default App
