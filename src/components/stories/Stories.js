import React from 'react'

import haryt100 from '../../assets/cards/posts/100haryt.png'
import ynamdar from '../../assets/cards/posts/ynamdar.png'
import giper from '../../assets/cards/posts/giper.png'
import balary from '../../assets/cards/posts/balary.png'
import akyol from '../../assets/cards/posts/akyol.png'
import halk_market from '../../assets/cards/posts/halk-market.png'
import nur_yupek from '../../assets/cards/posts/nur-yupek.png'
import yupekci from '../../assets/cards/posts/yupekci.png'
import lays from '../../assets/cards/posts/lays.png'
import coca_cola from '../../assets/cards/posts/coca-cola.png'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import { Link } from 'react-router-dom'

const Stories = () => {

    const option = {
        type: 'loop',
        perPage: 10,
        perMove: 1,
        pagination: false,
        autoplay: false,
        arrows: false,
        breakpoints:
        {
            991: { perPage: 10, gap: '1.5rem', },
            768: { perPage: 3, gap: '1.5rem', },
            575: { perPage: 1, gap: '1rem', },
        }
    };

    const stories = [
        {
            id: 1,
            img: haryt100,
            name: "100haryt.com",
            number: 23
        },
        {
            id: 1,
            img: ynamdar,
            name: "Ynamdar",
            number: 23
        },
        {
            id: 1,
            img: giper,
            name: "giper",
            number: 23
        },
        {
            id: 1,
            img: balary,
            name: "Balary",
            number: 23
        },
    ]

    return (
        <div className='container mt-4'>
            <Splide options={option} hasTrack={false}>
                <SplideTrack>
                    {
                        stories.map((story, index) => (
                            <SplideSlide key={index}>
                                <div className="card border-0 position-relative text-center mx-2" style={{ width: "80px" }}>
                                    <img src={story.img} alt="" className='img-fluid' />
                                    <div className='small mt-2'>{story.name}</div>
                                    <span className="position-absolute translate-middle badge rounded-pill px-1 bg-green" style={{ left: "75px", top: "13px" }}>
                                        {story.number}
                                    </span>
                                </div>
                            </SplideSlide>
                        ))
                    }
                </SplideTrack>
            </Splide>
        </div >
    )
}

export default Stories