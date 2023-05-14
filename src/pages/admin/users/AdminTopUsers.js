import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenAlt, faPlus, faStar, faTrashAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from '../../../context/ThemeContext'
import search from '../../../assets/icons/search.svg'
import user_2 from '../../../assets/icons/user-2.png'
import { Link } from 'react-router-dom'

const AdminTopUsers = () => {
    const { darkMode } = useContext(ThemeContext)
    return (
        <>
            <div className='card border-0 shadow my-5'>
                <div className={`card-header border-0 pb-1 p-3 ${darkMode ? "bg-dark-blue-footer text-white" : "bg-white"}`}>
                    <div className='row align-items-center justify-content-between'>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-12'>
                            <div className='row'>
                                <div className='col-xl-4'>
                                    <Link to='/admin/offical/users' className='d-flex align-items-center justify-content-center py-1 px-2 rounded-2 small fw-bold text-dark text-decoration-none' style={{ border: "1px solid #7280FF" }}>
                                        <FontAwesomeIcon icon={faStar} className='me-1 rounded-circle p-1 bg-dark text-white' style={{ fontSize: "8px" }} />
                                        Ofical User
                                    </Link>
                                </div>
                                <div className='col-xl-4'>
                                    <Link to='/admin/users' className='d-flex align-items-center justify-content-center py-1 px-2 rounded-2 small fw-bold text-dark text-decoration-none' style={{ border: "1px solid #7280FF" }}>
                                        <FontAwesomeIcon icon={faUserCircle} className='me-1' />
                                        Simple User
                                    </Link>
                                </div>
                                <div className='col-xl-4'>
                                    <Link to='/admin/top-users' className='d-flex align-items-center justify-content-center py-1 px-2 rounded-2 small fw-bold text-white text-decoration-none' style={{ border: "1px solid #7280FF", backgroundColor: "#000AFF" }}>
                                        <FontAwesomeIcon icon={faStar} className='me-1' />
                                        Top User
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-5 col-lg-5 col-md-5 col-12'>
                            <div className='row justify-content-end g-3'>
                                <div className='col-xl-4 col-lg-3 col-md-3 col-6'>
                                    <div className='d-flex align-items-center justify-content-center py-1 px-2 rounded-2 small fw-bold text-dark text-decoration-none' style={{ border: "1px solid #7280FF" }}>
                                        <FontAwesomeIcon icon={faPlus} className='me-1' />
                                        Add User
                                    </div>
                                </div>
                                <div className='col-xl-8 col-lg-3 col-md-3 col-6'>
                                    <div className="input-group">
                                        <input className="form-control form-control-sm ps-5 fw-bold" type="text" placeholder="Search..." style={{ background: `url(${search}) no-repeat left`, backgroundPositionX: "20px" }} aria-describedby="basic-addon1" />
                                        <span className="input-group-text py-0 bg-white" id="basic-addon1">Search</span>
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
                                <th className='border' scope="col">Avatar Username</th>
                                <th className='border' scope="col">Phone</th>
                                <th className='border' scope="col">Role</th>
                                <th className='border' scope="col">Date of Registration</th>
                                <th className='border' scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" style={{ fontSize: "15px" }}>35477</th>
                                <td>
                                    <div className='d-flex align-items-center'>
                                        <img src={user_2} alt="" style={{ width: "40px" }} />
                                        <div className='ms-2'>
                                            <div style={{ fontSize: "15px", fontWeight: "700" }}>Marala</div>
                                        </div>
                                    </div>
                                </td>
                                <th>+99362054646</th>
                                <th>User</th>
                                <th>13-04-2023  10:35</th>
                                <th>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <FontAwesomeIcon icon={faTrashAlt} className='text-danger' />
                                        <FontAwesomeIcon icon={faPenAlt} className='text-green' />
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

export default AdminTopUsers