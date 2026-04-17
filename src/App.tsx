import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { ScrollToTop } from './components/shared/ScrollToTop'
import { FloatingContact } from './components/shared/FloatingContact'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import ClubsPage from './pages/ClubsPage'
import ContactPage from './pages/ContactPage'
import { DARK_BG } from './data/constants'

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen text-white overflow-x-hidden" style={{ background: DARK_BG }}>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/clubs" element={<ClubsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <FloatingContact />
    </Router>
  )
}
