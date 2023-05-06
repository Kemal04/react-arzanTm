import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import banner from '../../../assets/banners/foto/1.png'

import img_1 from '../../../assets/cards/foto/1.png'
import img_2 from '../../../assets/cards/foto/2.png'
import img_3 from '../../../assets/cards/foto/3.png'
import img_4 from '../../../assets/cards/foto/4.png'
import img_5 from '../../../assets/cards/foto/5.png'
import img_6 from '../../../assets/cards/foto/6.png'

import haryt100 from '../../../assets/cards/posts/100haryt.png'
import arzanTm from '../../../assets/cards/posts/arzanTm.png'
import lays from '../../../assets/cards/posts/lays.png'
import halk_market from '../../../assets/cards/posts/halk-market.png'
import balary from '../../../assets/cards/posts/balary.png'
import mercedes_benz from '../../../assets/cards/posts/mercedes-benz.png'

import gallery from '../../../assets/icons/gallery.svg'
import eye from '../../../assets/icons/eye.png'


const Foto = () => {
    return (
        <>
            <div className='container d-flex align-items-center my-4'>
                <div className='text-green'>Baş sahypa</div>
                <div className='mx-2'>/</div>
                <div>Surat</div>
            </div>

            <div className='container mt-2 '>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='h3'>Surat <span className='text-green'>(+21)</span></div>
                    <Link to="/" className='bg-green text-white py-1 px-3 rounded-4 text-decoration-none'>Hemmesi <FontAwesomeIcon icon={faArrowRight} /></Link>
                </div>

                <div className='my-3'>
                    <img src={banner} alt="" className='img-fluid w-100' />
                </div>

                <div className='row my-5 gx-3'>
                    <Link to="/foto/arzanTm" className='col-xl-4 mb-3 text-decoration-none text-dark'>
                        <div className='card rounded-21'>
                            <div className='card-body d-flex align-items-center'>
                                <img src={haryt100} alt="" className='img-fluid me-2' style={{ width: "40px" }} />
                                <div>100haryt.com</div>
                            </div>
                            <img src={img_1} alt="" className='img-fluid' />
                            <div className='card-body'>
                                <div className='card-title' style={{ fontWeight: "500" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid..</div>
                                <div className='d-flex align-items-center'>
                                    <div className='text-secondary d-flex align-items-center me-3'>
                                        <img src={gallery} alt="" className='img-fluid me-1' />
                                        <span>12</span>
                                    </div>
                                    <div className='text-secondary d-flex align-items-center'>
                                        <img src={eye} alt="" className='img-fluid me-1' />
                                        <span>14,756</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/foto/arzanTm" className='col-xl-4 mb-3 text-decoration-none text-dark'>
                        <div className='card rounded-21'>
                            <div className='card-body d-flex align-items-center'>
                                <img src={arzanTm} alt="" className='img-fluid me-2' style={{ width: "40px" }} />
                                <div>100haryt.com</div>
                            </div>
                            <img src={img_2} alt="" className='img-fluid' />
                            <div className='card-body'>
                                <div className='card-title' style={{ fontWeight: "500" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid..</div>
                                <div className='d-flex align-items-center'>
                                    <div className='text-secondary d-flex align-items-center me-3'>
                                        <img src={gallery} alt="" className='img-fluid me-1' />
                                        <span>12</span>
                                    </div>
                                    <div className='text-secondary d-flex align-items-center'>
                                        <img src={eye} alt="" className='img-fluid me-1' />
                                        <span>14,756</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/foto/arzanTm" className='col-xl-4 mb-3 text-decoration-none text-dark'>
                        <div className='card rounded-21'>
                            <div className='card-body d-flex align-items-center'>
                                <img src={lays} alt="" className='img-fluid me-2' style={{ width: "40px" }} />
                                <div>100haryt.com</div>
                            </div>
                            <img src={img_3} alt="" className='img-fluid' />
                            <div className='card-body'>
                                <div className='card-title' style={{ fontWeight: "500" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid..</div>
                                <div className='d-flex align-items-center'>
                                    <div className='text-secondary d-flex align-items-center me-3'>
                                        <img src={gallery} alt="" className='img-fluid me-1' />
                                        <span>12</span>
                                    </div>
                                    <div className='text-secondary d-flex align-items-center'>
                                        <img src={eye} alt="" className='img-fluid me-1' />
                                        <span>14,756</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/foto/arzanTm" className='col-xl-4 mb-3 text-decoration-none text-dark'>
                        <div className='card rounded-21'>
                            <div className='card-body d-flex align-items-center'>
                                <img src={halk_market} alt="" className='img-fluid me-2' style={{ width: "40px" }} />
                                <div>100haryt.com</div>
                            </div>
                            <img src={img_4} alt="" className='img-fluid' />
                            <div className='card-body'>
                                <div className='card-title' style={{ fontWeight: "500" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid..</div>
                                <div className='d-flex align-items-center'>
                                    <div className='text-secondary d-flex align-items-center me-3'>
                                        <img src={gallery} alt="" className='img-fluid me-1' />
                                        <span>12</span>
                                    </div>
                                    <div className='text-secondary d-flex align-items-center'>
                                        <img src={eye} alt="" className='img-fluid me-1' />
                                        <span>14,756</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/foto/arzanTm" className='col-xl-4 mb-3 text-decoration-none text-dark'>
                        <div className='card rounded-21'>
                            <div className='card-body d-flex align-items-center'>
                                <img src={balary} alt="" className='img-fluid me-2' style={{ width: "40px" }} />
                                <div>100haryt.com</div>
                            </div>
                            <img src={img_5} alt="" className='img-fluid' />
                            <div className='card-body'>
                                <div className='card-title' style={{ fontWeight: "500" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid..</div>
                                <div className='d-flex align-items-center'>
                                    <div className='text-secondary d-flex align-items-center me-3'>
                                        <img src={gallery} alt="" className='img-fluid me-1' />
                                        <span>12</span>
                                    </div>
                                    <div className='text-secondary d-flex align-items-center'>
                                        <img src={eye} alt="" className='img-fluid me-1' />
                                        <span>14,756</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/foto/arzanTm" className='col-xl-4 mb-3 text-decoration-none text-dark'>
                        <div className='card rounded-21'>
                            <div className='card-body d-flex align-items-center'>
                                <img src={mercedes_benz} alt="" className='img-fluid me-2' style={{ width: "40px" }} />
                                <div>100haryt.com</div>
                            </div>
                            <img src={img_6} alt="" className='img-fluid' />
                            <div className='card-body'>
                                <div className='card-title' style={{ fontWeight: "500" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid..</div>
                                <div className='d-flex align-items-center'>
                                    <div className='text-secondary d-flex align-items-center me-3'>
                                        <img src={gallery} alt="" className='img-fluid me-1' />
                                        <span>12</span>
                                    </div>
                                    <div className='text-secondary d-flex align-items-center'>
                                        <img src={eye} alt="" className='img-fluid me-1' />
                                        <span>14,756</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Foto