import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import BlogPage from './components/BlogPage' // 👈 Make sure this file exists
import Contact from './components/Contact'
import About from './components/About'
import Trademark from './components/services/Trademark'
import Copyright from './components/services/Copyright'
import Patent from './components/services/Patent'
import LegalContract from './components/services/LegalContract'
import Design from './components/services/Design'
import Corporate from './components/services/Corporate'
import Consultation from './components/services/Consultation'
import './App.css'
import ScrollToTop from './components/scrolltoTop'

function App() {
  return (
    <Router>
      <ScrollToTop/>
      
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/trademark" element={<Trademark/>}/>
            <Route path="/copyright" element={<Copyright/>}/>
            <Route path="/patent" element={<Patent/>}/>
            <Route path="/legalContract" element={<LegalContract/>}/>
            <Route path="/design" element={<Design/>}/>
            <Route path="/corporate" element={<Corporate/>}/>
            <Route path="/consultation" element={<Consultation/>}/>



          </Routes>
        </main>
        <WhatsAppButton />
        <Footer />
      </div>
    </Router>
  )
}

export default App
