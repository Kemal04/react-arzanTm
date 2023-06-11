import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCameraAlt, faPenAlt, faPlus, faTrashAlt, faVideo } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from '../../../context/ThemeContext'
import { Link } from 'react-router-dom'
import img_1 from '../../../assets/category/1.png'

const AdminPhoto = () => {

    const { darkMode } = useContext(ThemeContext)

    return (
        <>
            <div className='card border-0 shadow my-5'>
                <div className={`card-header border-0 pb-1 p-3 ${darkMode ? "bg-dark-blue-footer text-white" : "bg-white"}`}>
                    <div className='row align-items-center justify-content-center'>
                        <div className='col-xl-9 col-lg-9 col-md-9 col-12'>
                            <div className='row'>
                                <div className='col-xl-3 small'>
                                    <Link to="/admin/gallery/video" className='d-flex align-items-center justify-content-center py-1 px-2 rounded-2 small fw-bold text-dark text-decoration-none' style={{ border: "1px solid #7280FF" }}>
                                        <FontAwesomeIcon icon={faVideo} className='me-1' />
                                        Video Gallery
                                    </Link>
                                </div>
                                <div className='col-xl-3 small'>
                                    <Link to="/admin/gallery/photo" className='d-flex align-items-center justify-content-center py-1 px-2 rounded-2 small fw-bold text-white text-decoration-none' style={{ border: "1px solid #7280FF", backgroundColor: "#000AFF" }}>
                                        <FontAwesomeIcon icon={faCameraAlt} className='me-1' />
                                        Photo Galleery
                                    </Link>
                                </div>
                                <div className='col-xl-6'>
                                    <div className='d-flex justify-content-end'>
                                        <Link to="/admin/gallery/photo-create" className='d-flex align-items-center justify-content-center py-1 px-2 rounded-2 small fw-bold text-white text-decoration-none' style={{ border: "1px solid #7280FF", backgroundColor: "#000AFF" }}>
                                            <FontAwesomeIcon icon={faPlus} className='me-1' />
                                            Add Photo
                                        </Link>
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
                                <th className='border' scope="col">Type</th>
                                <th className='border' scope="col">Created at</th>
                                <th className='border' scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" style={{ fontSize: "15px" }}>1</th>
                                <th>
                                    <div className='d-flex align-items-center'>
                                        <img src={img_1} alt="" style={{ width: "100", height: "65px" }} />
                                        <div className='ms-4'>
                                            <div style={{ fontSize: "15px", fontWeight: "700" }}>Arzan TM bilen oran gyzykly</div>
                                        </div>
                                    </div>
                                </th>
                                <th>Photo</th>
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

export default AdminPhoto