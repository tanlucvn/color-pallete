import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Library from '../library'
import Sidebar from '../../components/sidebar'
import "./index.css"

export default function Home() {
    return (
        <Router>
            <div className='main-body'>
                <Sidebar />
                <Routes>
                    <Route path='/' element={<Library />} />
                </Routes>
            </div>
        </Router>
    )
}
