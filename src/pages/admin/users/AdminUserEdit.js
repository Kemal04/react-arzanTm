import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import user from '../../../assets/cards/posts/100haryt.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const AdminUserEdit = () => {
    const { darkMode } = useContext(ThemeContext)
    return (
        <>
            <div className='card border-0 shadow my-5'>
                <div className={`card-header p-3 ${darkMode ? "bg-dark-blue-footer text-white" : null}`}>
                    <div className='h5'>
                        <div>Users Edit</div>
                    </div>
                </div>
                <div className={`card-body d-flex justify-content-center align-items-center ${darkMode ? "bg-dark-blue text-white" : ""}`} style={{ height: "711px" }}>
                    <div className='row justify-content-center'>
                        <div className='col-xl-12 mb-4'>
                            <div className='d-flex justify-content-center flex-column align-items-center'>
                                <img src={user} alt="" className='img-fluid mb-3' />
                                <div className='h5'>13-04-2023  10:35 <span className='bg-green text-white px-2' style={{ fontSize: "9px" }}>Start</span></div>
                                <div className='h5'>13-04-2024  10:35 <span className='bg-danger text-white px-2' style={{ fontSize: "9px" }}>End</span></div>
                            </div>
                        </div>
                        <div className='col-xl-12'>
                            <table className="table table-borderless">
                                <tbody>
                                    <tr >
                                        <th scope="row" className='pb-4'>Username</th>
                                        <td>
                                            <input type="text" className="form-control py-1" placeholder='Amanow Aman' />
                                        </td>
                                    </tr>
                                    <tr >
                                        <th scope="row" className='pb-4'>Phone</th>
                                        <td>
                                            <input type="number" className="form-control py-1" placeholder='+99362456484' />
                                        </td>
                                    </tr>
                                    <tr >
                                        <th scope="row" className='pb-4'>Email</th>
                                        <td>
                                            <input type="email" className="form-control py-1" placeholder='Amanow.95@gmail.com' />
                                        </td>
                                    </tr>
                                    <tr >
                                        <th scope="row" className='pb-4'>Registered date</th>
                                        <td>
                                            <input type="text" className="form-control py-1" placeholder='21-01-2021  18:00' />
                                        </td>
                                    </tr>
                                    <tr >
                                        <th scope="row" className='pb-4'>Role</th>
                                        <td>
                                            <select className="form-select py-1">
                                                <option defaultValue>Official user</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className='d-flex justify-content-around mb-4'>
                                <button className='btn btn-danger px-5 btn-sm'><FontAwesomeIcon icon={faBan} /> Block</button>
                                <button className='btn btn-outline-danger px-5 btn-sm'><FontAwesomeIcon icon={faTrashAlt} /> Delete</button>
                            </div>
                            <div className='d-flex justify-content-center mt-5'>
                                <button className='btn btn-primary' style={{ backgroundColor: '#0500FF', padding: "10px 160px" }}>Apply</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminUserEdit