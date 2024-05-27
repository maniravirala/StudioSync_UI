import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import SidebarLayout from './layouts/SidebarLayout'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {

  return (
    <>
    <Router>
        <Routes>
          <Route exact path="/" element={<SidebarLayout><Home /></SidebarLayout>} />
          <Route path="/about" element={<SidebarLayout><About /></SidebarLayout>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
    </>
  )
}

export default App
