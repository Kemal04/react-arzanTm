import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import user from '../../../assets/cards/posts/100haryt.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Api_Address from '../../../env'
import { toast } from 'react-toastify'

const AdminUserEdit = () => {
    const { darkMode } = useContext(ThemeContext)

    let { userId } = useParams();
    const [user, setUser] = useState("");

    useEffect(() => {
        axios.get(`${Api_Address}/api/v1/user/${userId}`).then((res) => {
            setUser(res.data.user);
        });
    }, [userId]);

    const navigate = useNavigate()

    const [eUser, setEUser] = useState({
        role: "",
    })

    const handleChange = (e) => {
        setEUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    useEffect(() => {
        axios.get(`${Api_Address}/api/v1/user/edit/${userId}`, {
            headers: {
                accessToken: localStorage.getItem("accessToken"),
            },
        })
            .then((res) => {
                setEUser(res.data.user)
            }).catch((error) => {
                toast.error(error.message)
            })

    }, [userId])

    const handleClick = async (e) => {
        e.preventDefault()

        if (!eUser.role) {
            toast.error("Rolyny saylan")
        }
        else {
            await axios.post(`${Api_Address}/api/v1/user/edit/${userId}`, eUser, {
                headers: {
                    accessToken: localStorage.getItem("accessToken"),
                },
            }).then((res) => {
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
                            <select name='role' className="form-select form-select-sm" onChange={handleChange}>
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