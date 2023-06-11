import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenAlt } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import logo from '../../../assets/icons/logo-circle.svg'
import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'

const AdminUserCreate = () => {

    const { darkMode } = useContext(ThemeContext)

    const [image, setImage] = useState(null)

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    }

    return (
        <div style={{ height: "100vh" }}>
            <div className='card border-0 shadow my-5'>
                <div className={`card-header p-3 ${darkMode ? "bg-dark-blue-footer text-white" : null}`}>
                    <div className='h5'>
                        <div>User Create</div>
                    </div>
                </div>
                <div className={`card-body h-auto ${darkMode ? "bg-dark-blue text-white" : ""}`}>
                    <div className='row align-items-center'>
                        <div className='col-xl-12 mb-4'>
                            <div className="avatar-upload">
                                <div className="avatar-edit">
                                    <input type='file' id="imageUpload" onChange={onImageChange} />
                                    <label htmlFor="imageUpload">
                                        <FontAwesomeIcon icon={faPenAlt} />
                                    </label>
                                </div>
                                <div className="avatar-preview">
                                    <div id="imagePreview" style={{ backgroundImage: `url(${image || logo})` }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-6 mb-4'>
                            <div className="input-group">
                                <span className="input-group-text bg-white justify-content-center" style={{ width: "100px" }} id="basic-addon1">Name</span>
                                <input name='name' className="form-control" aria-describedby="basic-addon1" placeholder="Name" />
                            </div>
                        </div>
                        <div className='col-xl-6 mb-4'>
                            <div className="input-group">
                                <span className="input-group-text bg-white justify-content-center" style={{ width: "100px" }} id="basic-addon1">Phone</span>
                                <input name='phone' type="number" className="form-control" aria-describedby="basic-addon1" placeholder="Phone Number" />
                            </div>
                        </div>
                        <div className='col-xl-6 mb-4'>
                            <div className="input-group">
                                <span className="input-group-text bg-white justify-content-center" style={{ width: "100px" }} id="basic-addon1">Password</span>
                                <input name='password' type="password" className="form-control" aria-describedby="basic-addon1" placeholder="Password" />
                            </div>
                        </div>
                        <div className='col-xl-6 mb-4'>
                            <div className="input-group">
                                <span className="input-group-text bg-white justify-content-center" style={{ width: "100px" }} id="basic-addon1">Confirim</span>
                                <input name='confirim_password' type="password" className="form-control" aria-describedby="basic-addon1" placeholder="Confirim Password" />
                            </div>
                        </div>
                        <div className=' d-flex justify-content-center'>
                            <div className='col-xl-4 mb-4'>
                                <select className="form-select" aria-label="Default select example">
                                    <option defaultChecked>Role</option>
                                    <option value="user">User</option>
                                    <option value="offical">Offical</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-12 d-flex justify-content-center mt-3 mb-5'>
                        <button className='btn btn-primary' style={{ backgroundColor: '#0500FF', padding: "5px 135px" }}>Save</button>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default AdminUserCreate