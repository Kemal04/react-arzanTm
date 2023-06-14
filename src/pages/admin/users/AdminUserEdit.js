import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Api_Address1 from '../../../env1'
import { toast } from 'react-toastify'

const AdminUserEdit = () => {

    const { darkMode } = useContext(ThemeContext)
    const navigate = useNavigate()

    
    let { userId } = useParams();
    const role = "Offical"
    const email = localStorage.getItem('email')
    const token = localStorage.getItem('accessToken')

    const handleClick = async (e) => {
        e.preventDefault()

        if (!role) {
            toast.error("Rolyny saylan")
        }
        else {
            console.log(role, email, token, userId);
            await axios.post(`${Api_Address1}/adminuserrole/${userId}`, { role, email, token }).then((res) => {
                toast.success(res.data.success)
                navigate(`/admin/users`)
            }).catch((error) => {
                toast.error(error.message)
            });
        }
    }


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
                        <div className='col-xl-12'>
                            <select name='role' className="form-select form-select-sm">
                                <option defaultValue>Role</option>
                                <option value="User">User</option>
                                <option value="Offical">Offical</option>
                            </select>
                        </div>
                        <div className='col-xl-12 d-flex justify-content-center mt-5'>
                            <button onClick={handleClick} className='btn btn-primary px-5' style={{ backgroundColor: '#0500FF' }}>Apply</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminUserEdit