import React from 'react'

import icon from '../assets/icon.png'
import super1 from '../assets/super7.png'
import release2 from '../assets/super5.png'
import Card from './Card'

export default function Free() {
    return (
        <div className="free">
            <div className="container">
                <div className="background">
                    <div className="ellipse pink"></div>
                    <div className="ellipse green"></div>
                </div>
                <div className="content">
                    <div className="image">
                        <img src={icon} alt="icon" />
                    </div>
                    <h2 className="title">NFT grátis para madrugadores</h2>
                    <p className="description">
                        Inscreva-se hoje e você receberá um NFT grátis quando
                        lançarmos
                    </p>
                </div>
            </div>
            <div className="cards">
                <div className="card1">
                    <Card
                        image={super1}
                        series="Floop Series"
                        title="Purple Woman"
                        price={2.99}
                        tag={12983}
                        time={1}
                        free={true}
                    />
                </div>
                <div className="card2">
                    <Card
                        image={release2}
                        series="Floop Series"
                        title="Red Woman"
                        price={3.15}
                        tag={12985}
                        time={1}
                        free={true}
                    />
                </div>
            </div>
        </div>
    )
}
