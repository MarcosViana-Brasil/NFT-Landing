import React, { useState, useEffect } from 'react'
import scrollreveal from 'scrollreveal'

import ScrollToTop from '../src/components/ScrollToTop'
import SuperRare from '../src/components/SuperRare'
import Release from '../src/components/Release'
import Clients from '../src/components/Clients'
import Navbar from '../src/components/Navbar'
import Signup from '../src/components/Signup'
import Footer from '../src/components/Footer'
import Home from '../src/components/Home'
import Free from '../src/components/Free'
import Like from '../src/components/Like'

import './scss/index.scss'

export default function App() {
    const [theme, setTheme] = useState('dark')

    const changeTheme = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark')
    }

    useEffect(() => {
        const registerAnimations = () => {
            const sr = scrollreveal({
                origin: 'bottom',
                distance: '80px',
                duration: 2000,
                reset: false,
            })
            sr.reveal(
                `
                nav, .home, .free, .clients, .super-rare, .releases, .like, .signup, .footer
            `,
                { interval: 500 }
            )
        }
        registerAnimations()
    }, [])

    window.setTimeout(() => {
        const home = document.getElementsByClassName('home')

        home[0].style.transform = 'none'
        const nav = document.getElementsByTagName('nav')
        nav[0].style.transform = 'none'
    }, 1500)

    return (
        <div className="app-container" data-theme={theme}>
            <ScrollToTop />
            <Navbar changeTheme={changeTheme} currentTheme={theme} />
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
