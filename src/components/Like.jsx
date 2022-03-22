import React from 'react'
import eth1 from '../assets/eth1.png'
import eth2 from '../assets/eth2.png'

export default function Like() {
    return (
        <div className="like">
            <div className="container">
                <div className="content">
                    <div className="image">
                        <img src={eth1} alt="eth1" />
                    </div>
                    <h2 className="title">Um NFT como nenhum outro</h2>
                    <p className="description">
                        Não perca o lançamento do nosso novo NFT. Inscreva-se
                        abaixo para receber atualizações quando entrarmos ao
                        vivo em 11/4
                    </p>
                </div>
                <div className="content">
                    <div className="image">
                        <img src={eth2} alt="eth2" />
                    </div>
                    <h2 className="title">Um NFT como nenhum outro</h2>
                    <p className="description">
                        Não perca o lançamento do nosso novo NFT. Inscreva-se
                        abaixo para receber atualizações quando entrarmos ao
                        vivo em 11/4
                    </p>
                </div>
            </div>
        </div>
    )
}
