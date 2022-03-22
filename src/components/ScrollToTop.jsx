import React, { useState } from 'react'
import { BsChevronUp } from 'react-icons/bs'

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false)

    window.addEventListener('scroll', () => {
        window.scrollY > 400 ? setVisible(true) : setVisible(false)
    })

    return (
        <div className={`scrollTop ${visible ? 'visible' : ''}`}>
            <a href="#">
                <BsChevronUp />
            </a>
        </div>
    )
}
