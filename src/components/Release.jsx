import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import release1 from '../assets/release1.png'
import release2 from '../assets/super2.png'
import Card from './Card'

export default function Release() {
    return (
        <div className="releases">
            <div className="release orange">
                <div className="content">
                    <h2 className="title">Liberação Inicial 11/4</h2>
                    <p className="description">
                        Lançamos antecipadamente quatro NFTs de edição limitada
                        que podem ser oferecidas via <a href="#">OpenSea</a>
                    </p>
                    <p className="description">
                        Haverá a venda de quatro dessas NFTs super raras que
                        fizemos. Ainda não há data para o lançamento das últimas
                        quatro desta coleção imperdível, então certifique-se de
                        não perder!
                    </p>
                    <p className="description">
                        50% do dinheiro vai para caridade
                    </p>
                    <a href="#">
                        Check them out <BsArrowRight />
                    </a>
                </div>
                <div className="image">
                    <img src={release1} alt="release1" />
                    <div className="ellipse pink"></div>
                </div>
            </div>

            <div className="release green">
                <div className="card-container">
                    <Card
                        image={release2}
                        series="Floop Series"
                        title="Black Ligth Man"
                        price={2.99}
                        tag={12983}
                        time={1}
                        free={true}
                    />
                    <div className="ellipse orange"></div>
                </div>
                <div className="content">
                    <h2 className="title">Liberação Inicial 11/4</h2>
                    <p className="description">
                        Lançamos antecipadamente quatro NFTs de edição limitada
                        que podem ser oferecidas via <a href="#">OpenSea</a>
                    </p>
                    <p className="description">
                        Haverá a venda de quatro dessas NFTs super raras que
                        fizemos. Ainda não há data para o lançamento das últimas
                        quatro desta coleção imperdível, então certifique-se de
                        não perder!
                    </p>
                    <p className="description">
                        50% do dinheiro vai para caridade
                    </p>
                    <a href="#">
                        Check them out <BsArrowRight />
                    </a>
                </div>
            </div>
        </div>
    )
}
