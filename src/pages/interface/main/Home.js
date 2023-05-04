import React from 'react'
import HomeBanner from '../../../components/banners/HomeBanner'
import haryt100 from '../../../assets/cards/posts/100haryt.png'
import ynamdar from '../../../assets/cards/posts/ynamdar.png'
import giper from '../../../assets/cards/posts/giper.png'
import balary from '../../../assets/cards/posts/balary.png'
import akyol from '../../../assets/cards/posts/akyol.png'
import halk_market from '../../../assets/cards/posts/halk-market.png'
import nur_yupek from '../../../assets/cards/posts/nur-yupek.png'
import yupekci from '../../../assets/cards/posts/yupekci.png'
import lays from '../../../assets/cards/posts/lays.png'
import coca_cola from '../../../assets/cards/posts/coca-cola.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import img_1 from '../../../assets/cards/selected/1.png'
import img_2 from '../../../assets/cards/selected/2.png'
import img_3 from '../../../assets/cards/selected/3.png'
import img_4 from '../../../assets/cards/selected/4.png'
import img_5 from '../../../assets/cards/selected/5.png'

import konkurs from '../../../assets/cards/others/konkurs.png'
import top from '../../../assets/cards/others/top.png'
import foto from '../../../assets/cards/others/foto.png'
import video from '../../../assets/cards/others/video.png'
import offical from '../../../assets/cards/others/offical.png'

import cheap_1 from '../../../assets/cards/cheap/1.png'
import cheap_2 from '../../../assets/cards/cheap/2.png'
import cheap_3 from '../../../assets/cards/cheap/3.png'
import cheap_4 from '../../../assets/cards/cheap/4.png'
import cheap_5 from '../../../assets/cards/cheap/5.png'
import cheap_6 from '../../../assets/cards/cheap/6.png'
import cheap_7 from '../../../assets/cards/cheap/7.png'
import cheap_8 from '../../../assets/cards/cheap/8.png'
import cheap_9 from '../../../assets/cards/cheap/9.png'
import cheap_10 from '../../../assets/cards/cheap/10.png'


const Home = () => {
    return (
        <>
            <HomeBanner />
            {/* POSTS */}
            <div className='container mt-4'>
                <div className='row align-items-center justify-content-between'>
                    <div className='col-auto'>
                        <div className="card border-0 position-relative text-center">
                            <img src={haryt100} alt="" className='img-fluid' />
                            <div className='small mt-2'>100haryt.com</div>
                            <span className="position-absolute translate-middle badge rounded-pill px-1 bg-green" style={{ left: "75px", top: "13px" }}>
                                23
                            </span>
                        </div>
                    </div>
                    <div className='col-auto'>
                        <div className="card border-0 position-relative text-center">
                            <img src={ynamdar} alt="" className='img-fluid' />
                            <div className='small mt-2'>Ynamdar</div>
                            <span className="position-absolute translate-middle badge rounded-pill px-1 bg-green" style={{ left: "75px", top: "13px" }}>
                                23
                            </span>
                        </div>
                    </div>
                    <div className='col-auto'>
                        <div className="card border-0 position-relative text-center">
                            <img src={giper} alt="" className='img-fluid' />
                            <div className='small mt-2'>Giper</div>
                            <span className="position-absolute translate-middle badge rounded-pill px-1 bg-green" style={{ left: "75px", top: "13px" }}>
                                23
                            </span>
                        </div>
                    </div>
                    <div className='col-auto'>
                        <div className="card border-0 position-relative text-center">
                            <img src={balary} alt="" className='img-fluid' />
                            <div className='small mt-2'>Balary</div>
                            <span className="position-absolute translate-middle badge rounded-pill px-1 bg-green" style={{ left: "75px", top: "13px" }}>
                                23
                            </span>
                        </div>
                    </div>
                    <div className='col-auto'>
                        <div className="card border-0 position-relative text-center">
                            <img src={akyol} alt="" className='img-fluid' />
                            <div className='small mt-2'>Akyol Kompy..</div>
                            <span className="position-absolute translate-middle badge rounded-pill px-1 bg-green" style={{ left: "75px", top: "13px" }}>
                                23
                            </span>
                        </div>
                    </div>
                    <div className='col-auto'>
                        <div className="card border-0 position-relative text-center">
                            <img src={halk_market} alt="" className='img-fluid' />
                            <div className='small mt-2'>Halk Market</div>
                            <span className="position-absolute translate-middle badge rounded-pill px-1 bg-green" style={{ left: "75px", top: "13px" }}>
                                23
                            </span>
                        </div>
                    </div>
                    <div className='col-auto'>
                        <div className="card border-0 position-relative text-center">
                            <img src={nur_yupek} alt="" className='img-fluid' />
                            <div className='small mt-2'>Nur Yupek</div>
                            <span className="position-absolute translate-middle badge rounded-pill px-1 bg-green" style={{ left: "75px", top: "13px" }}>
                                23
                            </span>
                        </div>
                    </div>
                    <div className='col-auto'>
                        <div className="card border-0 position-relative text-center">
                            <img src={yupekci} alt="" className='img-fluid' />
                            <div className='small mt-2'>Yupekchi</div>
                            <span className="position-absolute translate-middle badge rounded-pill px-1 bg-green" style={{ left: "75px", top: "13px" }}>
                                23
                            </span>
                        </div>
                    </div>
                    <div className='col-auto'>
                        <div className="card border-0 position-relative text-center">
                            <img src={lays} alt="" className='img-fluid' />
                            <div className='small mt-2'>Lay’s</div>
                            <span className="position-absolute translate-middle badge rounded-pill px-1 bg-green" style={{ left: "75px", top: "13px" }}>
                                23
                            </span>
                        </div>
                    </div>
                    <div className='col-auto'>
                        <div className="card border-0 position-relative text-center">
                            <img src={coca_cola} alt="" className='img-fluid' />
                            <div className='small mt-2'>Coca-Cola</div>
                            <span className="position-absolute translate-middle badge rounded-pill px-1 bg-green" style={{ left: "75px", top: "13px" }}>
                                23
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* CARDS */}
            <div className='container mt-5'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='h3'>Saýlananlar</div>
                    <Link to="/" className='bg-green text-white py-1 px-3 rounded-4 text-decoration-none'>Hemmesi <FontAwesomeIcon icon={faArrowRight} /></Link>
                </div>

                <div className='row justify-content-between mt-3'>
                    <div className='col-xl-auto mb-5'>
                        <div className='position-relative card-about'>
                            <img src={img_1} alt="About Us" className='img-fluid' />
                            <div className='position-absolute bottom-0 start-0 w-100 footer-rgba px-3 py-2'>
                                <div className='h5 text-white'>
                                    Iýmit
                                </div>
                                <small className='' style={{ color: "#C4C4C4" }}>19.02.2022</small>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-auto mb-5'>
                        <div className='position-relative card-about'>
                            <img src={img_2} alt="About Us" className='img-fluid' />
                            <div className='position-absolute bottom-0 start-0 w-100 footer-rgba px-3 py-2'>
                                <div className='h5 text-white'>
                                    Oýun
                                </div>
                                <small className='' style={{ color: "#C4C4C4" }}>19.02.2022</small>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-auto mb-5'>
                        <div className='position-relative card-about'>
                            <img src={img_3} alt="About Us" className='img-fluid' />
                            <div className='position-absolute bottom-0 start-0 w-100 footer-rgba px-3 py-2'>
                                <div className='h5 text-white'>
                                    Multik
                                </div>
                                <small className='' style={{ color: "#C4C4C4" }}>19.02.2022</small>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-auto mb-5'>
                        <div className='position-relative card-about'>
                            <img src={img_4} alt="About Us" className='img-fluid' />
                            <div className='position-absolute bottom-0 start-0 w-100 footer-rgba px-3 py-2'>
                                <div className='h5 text-white'>
                                    Multik
                                </div>
                                <small className='' style={{ color: "#C4C4C4" }}>19.02.2022</small>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-auto mb-5'>
                        <div className='position-relative card-about'>
                            <img src={img_5} alt="About Us" className='img-fluid' />
                            <div className='position-absolute bottom-0 start-0 w-100 footer-rgba px-3 py-2'>
                                <div className='h5 text-white'>
                                    Oýun
                                </div>
                                <small className='' style={{ color: "#C4C4C4" }}>19.02.2022</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* OTHERS */}
            <div className='container'>
                <div className='row text-center'>
                    <div className='col-xl-12 mb-4'>
                        <img src={konkurs} alt="" className='img-fluid w-100' />
                    </div>
                    <div className='col-xl-12 mb-4'>
                        <img src={top} alt="" className='img-fluid w-100' />
                    </div>
                    <div className='col-xl-6 mb-4'>
                        <img src={foto} alt="" className='img-fluid w-100' />
                    </div>
                    <div className='col-xl-6 mb-4'>
                        <img src={video} alt="" className='img-fluid w-100' />
                    </div>
                    <div className='col-xl-12 mb-4'>
                        <img src={offical} alt="" className='img-fluid w-100' />
                    </div>
                </div>
            </div>

            {/* CHEAP */}

            <div className='container mt-2'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='h3'>Arzanladyşlar</div>
                    <Link to="/" className='bg-green text-white py-1 px-3 rounded-4 text-decoration-none'>Hemmesi <FontAwesomeIcon icon={faArrowRight} /></Link>
                </div>

                <div className='row justify-content-between mt-3'>
                    <div className='col-auto'>
                        <div className='card rounded-1'>
                            <img src={cheap_1} alt="" />
                        </div>      
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home