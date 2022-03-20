import React from 'react'
import super1 from '../assets/super5.png'
import super2 from '../assets/super6.png'
import super3 from '../assets/super7.png'
import super4 from '../assets/super8.png'
import super5 from '../assets/super9.png'
import super6 from '../assets/super10.png'
import super7 from '../assets/super11.png'
import super8 from '../assets/super13.png'
import Card from './Card'

export default function SuperRare() {
    const data = [
        {
            image: super1,
            series: 'Gloop Series',
            title: 'Red Woman',
            price: 3.09,
            tag: 12983,
            time: 1,
        },
        {
            image: super2,
            series: 'Gloop Series',
            title: 'Purple Woman',
            price: 3.15,
            tag: 12985,
            time: 1,
        },
        {
            image: super3,
            series: 'Gloop Series',
            title: 'Gold Woman',
            price: 3.08,
            tag: 12989,
            time: 1,
        },
        {
            image: super4,
            series: 'Gloop Series',
            title: 'Saint Woman',
            price: 3.05,
            tag: 12994,
            time: 1,
        },
        {
            image: super5,
            series: 'Gloop Series',
            title: 'Saint Woman',
            price: 3.07,
            tag: 12995,
            time: 1,
        },
        {
            image: super6,
            series: 'Gloop Series',
            title: 'Saint Woman',
            price: 3.07,
            tag: 12997,
            time: 1,
        },
        {
            image: super7,
            series: 'Gloop Series',
            title: 'Saint Woman',
            price: 3.06,
            tag: 12998,
            time: 1,
        },
        {
            image: super8,
            series: 'Gloop Series',
            title: 'Saint Woman',
            price: 3.1,
            tag: 12999,
            time: 1,
        },
    ]

    return (
        <div className="super-rare">
            <div className="title-container">
                <h2 className="title">LE Leilão Super Raro</h2>
                <p className="description">
                    Lançamos antecipadamente quatro NFTs de edição limitada que
                    podem ser licitadas via <a href="#">OpenSea</a>
                </p>

                <div className="cards">
                    {data.map(
                        ({ image, series, title, price, tag, time }, index) => (
                            <Card
                                image={image}
                                series={series}
                                title={title}
                                price={price}
                                tag={tag}
                                time={time}
                                key={index}
                                free={false}
                            />
                        )
                    )}
                </div>
            </div>
        </div>
    )
}
