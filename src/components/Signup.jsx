import React from 'react'
import signup from '../assets/signup2.png'

export default function Signup() {
    return (
        <div className="signup">
            <div className="container">
                <div className="content">
                    <p className="sub-title">Lançamento em breve</p>
                    <h1 className="title">UM NFT como nenhum outro</h1>
                    <p className="description">
                        Não perca o lançamento do nosso novo NFT. Inscreva-se
                        abaixo para receber atualizações quando entrarmos ao
                        vivo em 11/4
                    </p>
                    <button>Sign Up</button>
                </div>
                <div className="image-container">
                    <div className="image">
                        <img src={signup} alt="home" />
                    </div>
                    <div className="ellipse-container">
                        <div className="ellipse pink"></div>
                        <div className="ellipse orange"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
