import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import banner from '../../../assets/banners/video/1.png'

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

import download from '../../../assets/icons/download.svg'
import eye from '../../../assets/icons/eye.png'
import like from '../../../assets/icons/like.svg'
import like_empty from '../../../assets/icons/like-empty.svg'

import grid_little from '../../../assets/icons/grid-little.svg'
import grid_big from '../../../assets/icons/grid-big.svg'

import star from '../../../assets/icons/star.svg'
import play from '../../../assets/icons/play.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

const Video = () => {

    const [grid, setGrid] = useState(false)

    return (
        <>
            <div className='container d-flex align-items-center my-4'>
                <div className='text-green'>Baş sahypa</div>
                <div className='mx-2'>/</div>
                <div>Wideo</div>
            </div>

            <div className='container my-2'>
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='h3'>Wideo <span className='text-green'>(+19)</span></div>
                    <div className='d-flex align-items-center'>
                        <img src={grid_little} alt="" className='me-2' style={{ width: "24px", cursor: "pointer" }} onClick={() => setGrid(false)} />
                        <img src={grid_big} alt="" className='ms-2' style={{ width: "25px", cursor: "pointer" }} onClick={() => setGrid(true)} />
                    </div>
                </div>

                <div className='row mt-2'>
                    <div className='col-xl-auto'>
                        <button className='btn bg-light btn-outline-green btn-sm rounded px-4'>Hemmesi (256)</button>
                    </div>
                    <div className='col-xl-auto'>
                        <button className='btn btn-green btn-sm rounded px-4'>Sport (65)</button>
                    </div>
                    <div className='col-xl-auto'>
                        <button className='btn bg-light btn-outline-green btn-sm rounded px-4'>Awto (23)</button>
                    </div>
                    <div className='col-xl-auto'>
                        <button className='btn bg-light btn-outline-green btn-sm rounded px-4'>Medeniýet (39)</button>
                    </div>
                    <div className='col-xl-auto'>
                        <button className='btn bg-light btn-outline-green btn-sm rounded px-4'>Kibersport (11)</button>
                    </div>
                    <div className='col-xl-auto'>
                        <button className='btn bg-light btn-outline-green btn-sm rounded px-4'>Kibersport (11)</button>
                    </div>
                    <div className='col-xl-auto'>
                        <button className='btn bg-light btn-outline-green btn-sm rounded px-4'>Awto (23)</button>
                    </div>
                    <div className='col-xl-auto'>
                        <button className='btn bg-light btn-outline-green btn-sm rounded px-4'>Medeniýet (39)</button>
                    </div>
                </div>

                <div className='my-3'>
                    <img src={banner} alt="" className='img-fluid w-100' />
                </div>

                <div className='row justify-content-center'>
                    <div className='col-xl-6'>
                        <div className='d-flex align-items-center justify-content-center border-green' style={{ borderRadius: "10px 0 0 10px" }}>
                            <img src={play} alt="" className='img-fluid' />
                            Meşhurlar (65)
                        </div>
                    </div>
                    <div className='col-xl-6'>
                        <div className='d-flex align-items-center justify-content-center border-green' style={{ borderRadius: "0 10px 10px 0" }}>
                            <img src={star} alt="" className='img-fluid' />
                            Resmiler (25)
                        </div>
                    </div>
                </div>

                <div className='row mb-5 mt-4 gx-3'>
                    <Link to="/video" className={`col-xl-4 mb-3 text-decoration-none text-dark ${grid === true ? "col-xl-6" : null}`}>
                        <div className='card rounded-21'>
                            <div className='card-body d-flex align-items-center'>
                                <img src={haryt100} alt="" className='img-fluid me-2' style={{ width: "40px" }} />
                                <div>100haryt.com</div>
                            </div>
                            <div className='position-relative d-flex justify-content-center align-items-center'>
                                <img src={img_1} alt="" className='img-fluid w-100' />
                                <div className='card-img-overlay' style={{ top: "40%", left: "40%" }}>
                                    <FontAwesomeIcon icon={faPlayCircle} className='h1 opacity-75 text-white'/>
                                </div>
                            </div>
                            <div className='card-body'>
                                <div className='card-title' style={{ fontWeight: "500" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid..</div>
                                <div className='d-flex align-items-center justify-content-between small text-secondary'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div>19.02.2022</div>
                                        <div className='d-flex align-items-center ms-3'>
                                            <img src={download} alt="" className='img-fluid' />
                                            <span>155</span>
                                        </div>
                                        <div className='text-secondary d-flex align-items-center ms-3'>
                                            <img src={eye} alt="" className='img-fluid me-1' />
                                            <span>14,756</span>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center me-3'>
                                        <span>8,768</span>
                                        <img src={like} alt="" className='img-fluid ms-1' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/video" className={`col-xl-4 mb-3 text-decoration-none text-dark ${grid === true ? "col-xl-6" : null}`}>
                        <div className='card rounded-21'>
                            <div className='card-body d-flex align-items-center'>
                                <img src={arzanTm} alt="" className='img-fluid me-2' style={{ width: "40px" }} />
                                <div>100haryt.com</div>
                            </div>
                            <div className='position-relative d-flex justify-content-center align-items-center'>
                                <img src={img_2} alt="" className='img-fluid w-100' />
                                <div className='card-img-overlay' style={{ top: "40%", left: "40%" }}>
                                    <FontAwesomeIcon icon={faPlayCircle} className='h1 opacity-75 text-white'/>
                                </div>
                            </div>
                            <div className='card-body'>
                                <div className='card-title' style={{ fontWeight: "500" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid..</div>
                                <div className='d-flex align-items-center justify-content-between small text-secondary'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div>19.02.2022</div>
                                        <div className='d-flex align-items-center ms-3'>
                                            <img src={download} alt="" className='img-fluid' />
                                            <span>155</span>
                                        </div>
                                        <div className='text-secondary d-flex align-items-center ms-3'>
                                            <img src={eye} alt="" className='img-fluid me-1' />
                                            <span>14,756</span>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center me-3'>
                                        <span>8,768</span>
                                        <img src={like} alt="" className='img-fluid ms-1' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/video" className={`col-xl-4 mb-3 text-decoration-none text-dark ${grid === true ? "col-xl-6" : null}`}>
                        <div className='card rounded-21'>
                            <div className='card-body d-flex align-items-center'>
                                <img src={lays} alt="" className='img-fluid me-2' style={{ width: "40px" }} />
                                <div>100haryt.com</div>
                            </div>
                            <div className='position-relative d-flex justify-content-center align-items-center'>
                                <img src={img_3} alt="" className='img-fluid w-100' />
                                <div className='card-img-overlay' style={{ top: "40%", left: "40%" }}>
                                    <FontAwesomeIcon icon={faPlayCircle} className='h1 opacity-75 text-white'/>
                                </div>
                            </div>
                            <div className='card-body'>
                                <div className='card-title' style={{ fontWeight: "500" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid..</div>
                                <div className='d-flex align-items-center justify-content-between small text-secondary'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div>19.02.2022</div>
                                        <div className='d-flex align-items-center ms-3'>
                                            <img src={download} alt="" className='img-fluid' />
                                            <span>155</span>
                                        </div>
                                        <div className='text-secondary d-flex align-items-center ms-3'>
                                            <img src={eye} alt="" className='img-fluid me-1' />
                                            <span>14,756</span>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center me-3'>
                                        <span>8,768</span>
                                        <img src={like_empty} alt="" className='img-fluid ms-1' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/video" className={`col-xl-4 mb-3 text-decoration-none text-dark ${grid === true ? "col-xl-6" : null}`}>
                        <div className='card rounded-21'>
                            <div className='card-body d-flex align-items-center'>
                                <img src={halk_market} alt="" className='img-fluid me-2' style={{ width: "40px" }} />
                                <div>100haryt.com</div>
                            </div>
                            <div className='position-relative d-flex justify-content-center align-items-center'>
                                <img src={img_4} alt="" className='img-fluid w-100' />
                                <div className='card-img-overlay' style={{ top: "40%", left: "40%" }}>
                                    <FontAwesomeIcon icon={faPlayCircle} className='h1 opacity-75 text-white'/>
                                </div>
                            </div>
                            <div className='card-body'>
                                <div className='card-title' style={{ fontWeight: "500" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid..</div>
                                <div className='d-flex align-items-center justify-content-between small text-secondary'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div>19.02.2022</div>
                                        <div className='d-flex align-items-center ms-3'>
                                            <img src={download} alt="" className='img-fluid' />
                                            <span>155</span>
                                        </div>
                                        <div className='text-secondary d-flex align-items-center ms-3'>
                                            <img src={eye} alt="" className='img-fluid me-1' />
                                            <span>14,756</span>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center me-3'>
                                        <span>8,768</span>
                                        <img src={like_empty} alt="" className='img-fluid ms-1' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/video" className={`col-xl-4 mb-3 text-decoration-none text-dark ${grid === true ? "col-xl-6" : null}`}>
                        <div className='card rounded-21'>
                            <div className='card-body d-flex align-items-center'>
                                <img src={balary} alt="" className='img-fluid me-2' style={{ width: "40px" }} />
                                <div>100haryt.com</div>
                            </div>
                            <div className='position-relative d-flex justify-content-center align-items-center'>
                                <img src={img_5} alt="" className='img-fluid w-100' />
                                <div className='card-img-overlay' style={{ top: "40%", left: "40%" }}>
                                    <FontAwesomeIcon icon={faPlayCircle} className='h1 opacity-75 text-white'/>
                                </div>
                            </div>
                            <div className='card-body'>
                                <div className='card-title' style={{ fontWeight: "500" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid..</div>
                                <div className='d-flex align-items-center justify-content-between small text-secondary'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div>19.02.2022</div>
                                        <div className='d-flex align-items-center ms-3'>
                                            <img src={download} alt="" className='img-fluid' />
                                            <span>155</span>
                                        </div>
                                        <div className='text-secondary d-flex align-items-center ms-3'>
                                            <img src={eye} alt="" className='img-fluid me-1' />
                                            <span>14,756</span>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center me-3'>
                                        <span>8,768</span>
                                        <img src={like_empty} alt="" className='img-fluid ms-1' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/video" className={`col-xl-4 mb-3 text-decoration-none text-dark ${grid === true ? "col-xl-6" : null}`}>
                        <div className='card rounded-21'>
                            <div className='card-body d-flex align-items-center'>
                                <img src={mercedes_benz} alt="" className='img-fluid me-2' style={{ width: "40px" }} />
                                <div>100haryt.com</div>
                            </div>
                            <div className='position-relative d-flex justify-content-center align-items-center'>
                                <img src={img_6} alt="" className='img-fluid w-100' />
                                <div className='card-img-overlay' style={{ top: "40%", left: "40%" }}>
                                    <FontAwesomeIcon icon={faPlayCircle} className='h1 opacity-75 text-white'/>
                                </div>
                            </div>
                            <div className='card-body'>
                                <div className='card-title' style={{ fontWeight: "500" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid..</div>
                                <div className='d-flex align-items-center justify-content-between small text-secondary'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div>19.02.2022</div>
                                        <div className='d-flex align-items-center ms-3'>
                                            <img src={download} alt="" className='img-fluid' />
                                            <span>155</span>
                                        </div>
                                        <div className='text-secondary d-flex align-items-center ms-3'>
                                            <img src={eye} alt="" className='img-fluid me-1' />
                                            <span>14,756</span>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center me-3'>
                                        <span>8,768</span>
                                        <img src={like} alt="" className='img-fluid ms-1' />
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

export default Video