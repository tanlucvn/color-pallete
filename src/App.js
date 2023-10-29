import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Library from './screens/library'
import NotFound from './screens/404'
import Sidebar from './components/sidebar'
import './App.css'

export default function App() {
  return (
    <Router>
      <div className='main-body'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Library />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  )
}
