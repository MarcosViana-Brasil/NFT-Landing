import React from 'react'

import ScrollToTop from '../src/components/ScrollToTop'
import Navbar from '../src/components/Navbar'
import Home from '../src/components/Home'
import Free from '../src/components/Free'
import Clients from '../src/components/Clients'
import SuperRare from '../src/components/SuperRare'
import Release from '../src/components/Release'
import Like from '../src/components/Like'
import Signup from '../src/components/Signup'
import Footer from '../src/components/Footer'

import './scss/index.scss'

export default function App() {
    return (
        <div className="app-container">
            <ScrollToTop />
            <Navbar />
            <Home />
            <Free />
            <Clients />
            <SuperRare />
            <Release />
            <Like />
            <Signup />
            <Footer />
        </div>
    )
}
