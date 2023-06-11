import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faMobileAlt, faPenAlt, faPhotoFilm, faPlus, faStar, faTh, faTrashAlt, faVideo } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from '../../../context/ThemeContext'
import { Link } from 'react-router-dom'
import img_1 from '../../../assets/category/1.png'

const AdminWebCategory = () => {

    const { darkMode } = useContext(ThemeContext)

    return (
        <>
            <div className='card border-0 shadow my-5'>
                <div className={`card-header border-0 pb-1 p-3 ${darkMode ? "bg-dark-blue-footer text-white" : "bg-white"}`}>
                    <div className='row align-items-center justify-content-between'>
                        <div className='col-xl-12 mt-2 mb-4'>
                            <div className='row align-items-center'>
                                <div className='col-xl-8 d-flex justify-content-end align-items-center'>
                                    <Link to="/admin/web/categories" className='text-white px-3 py-2 small text-decoration-none rounded-2 me-4' style={{ backgroundColor: "#000AFF" }}>
                                        <FontAwesomeIcon icon={faMobileAlt} className='me-2' />
                                        Web Banner
                                    </Link>
                                    <Link to="/admin/app/categories" className='text-dark px-3 py-2 small text-decoration-none rounded-2 ms-4' style={{ border: "1px solid #000AFF" }}>
                                        <FontAwesomeIcon icon={faGlobe} className='me-2' />
                                        App Banner
                                    </Link>
                                </div>
                                <div className='col-xl-4 text-end'>
                                    <Link to="/admin/web/category-create" className='text-white px-3 py-2 small text-decoration-none rounded-2 ms-4' style={{ backgroundColor: "#000AFF" }}>
                                        <FontAwesomeIcon icon={faPlus} className='me-2' />
                                        Add Category
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-9 col-lg-9 col-md-9 col-12'>
                            <div className='row'>
                                <div className='col-xl-3 small'>
                                    <div className='d-flex align-items-center justify-content-center py-1 px-2 rounded-2 small fw-bold text-white text-decoration-none' style={{ border: "1px solid #7280FF", backgroundColor: "#000AFF" }}>
                                        <FontAwesomeIcon icon={faTh} className='me-1' />
                                        Discount category
                                    </div>
                                </div>
                                <div className='col-xl-3 small'>
                                    <div className='d-flex align-items-center justify-content-center py-1 px-2 rounded-2 small fw-bold text-dark text-decoration-none' style={{ border: "1px solid #7280FF" }}>
                                        <FontAwesomeIcon icon={faStar} className='me-1 rounded-circle p-1 bg-dark text-white' style={{ fontSize: "8px" }} />
                                        Ofical User
                                    </div>
                                </div>
                                <div className='col-xl-3 small'>
                                    <div className='d-flex align-items-center justify-content-center py-1 px-2 rounded-2 small fw-bold text-dark text-decoration-none' style={{ border: "1px solid #7280FF" }}>
                                        <FontAwesomeIcon icon={faPhotoFilm} className='me-1' />
                                        Photo category
                                    </div>
                                </div>
                                <div className='col-xl-3 small'>
                                    <div className='d-flex align-items-center justify-content-center py-1 px-2 rounded-2 small fw-bold text-dark text-decoration-none' style={{ border: "1px solid #7280FF" }}>
                                        <FontAwesomeIcon icon={faVideo} className='me-1' />
                                        Video category
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`card-body p-3 ${darkMode ? "bg-dark-blue text-white" : ""}`}>
                    <table className="table align-middle border">
                        <thead>
                            <tr className="bg-light" style={{ fontSize: "12px" }}>
                                <th className='border' scope="col">#</th>
                                <th className='border' scope="col">Banner and Title</th>
                                <th className='border' scope="col">Priority</th>
                                <th className='border' scope="col">Created at</th>
                                <th className='border' scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" style={{ fontSize: "15px" }}>1</th>
                                <th>
                                    <div className='d-flex align-items-center'>
                                        <img src={img_1} alt="" style={{ width: "175px", height:"55px" }} />
                                        <div className='ms-4'>
                                            <div style={{ fontSize: "15px", fontWeight: "700" }}>Hemmesi</div>
                                        </div>
                                    </div>
                                </th>
                                <th>1</th>
                                <th>13-04-2023  10:35</th>
                                <th>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <FontAwesomeIcon icon={faTrashAlt} className='text-danger' style={{ cursor: "pointer" }} />
                                        <Link to={`/admin/app/category-edit/`} className='text-decoration-none'><FontAwesomeIcon icon={faPenAlt} className='text-green' /></Link>
                                    </div>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default AdminWebCategory