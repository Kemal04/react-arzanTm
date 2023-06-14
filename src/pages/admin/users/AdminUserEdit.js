import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Api_Address1 from '../../../env1'
import { toast } from 'react-toastify'

const AdminUserEdit = () => {

    const { darkMode } = useContext(ThemeContext)
    const navigate = useNavigate()

    let { user_id } = useParams();
    // useEffect(() => {
    //     axios.get(`${Api_Address1}/kanalinfo`, data).then((res) => {
    //         console.log(res.data);
    //     }).catch((res) => {
    //         toast.error(res.response.data.error)
    //     })
    // }, [user_id])

    useEffect(() => {
        console.log({ "user_id": parseInt(user_id) })
        const fetchData = async () => {
            const response = await fetch(`${Api_Address1}/kanalinfo`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: { "user_id": parseInt(user_id) },
            });
            const resData = await response;
            console.log(response)
        };

        fetchData();
    }, [user_id]);

    //Change Role
    const [role, setRole] = useState()
    const email = localStorage.getItem('email')
    const token = localStorage.getItem('token')

    const handleClick = async (e) => {
        e.preventDefault()

        if (!role) {
            toast.error("Rolyny saylan")
        }
        else {
            console.log(role, email, token, user_id);
            await axios.post(`${Api_Address1}/adminuserrole`, { user_role: role, user_id, email, token }).then((res) => {
                toast.success(res.data.success)
                navigate(`/admin/offical/users`)
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
                            <select name='role' className="form-select form-select-sm" onChange={(e) => setRole(e.target.value)}>
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