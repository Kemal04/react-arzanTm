import React from 'react'
import '@splidejs/react-splide/css';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';
import banner from '../../assets/banners/home/1.png'

const HomeBanner = () => {

    const options = {
        type: 'loop',
        perPage: 1,
        perMove: 1,
        pagination: false,
        autoplay: false,
    };

    return (
        <div className='container p-0 text-center mt-3'>
            <Splide options={options} hasTrack={false}>
                <SplideTrack className='row g-0'>
                    <SplideSlide className='col-lg-12 p-0'>
                        <img src={banner} alt="banner" className='img-fluid' />
                    </SplideSlide>
                </SplideTrack>
            </Splide>
        </div>
    )
}

export default HomeBanner