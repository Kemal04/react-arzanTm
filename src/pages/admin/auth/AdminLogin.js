import React from 'react'
import styles from './login.module.css'
import { useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { AuthContext } from '../../../context/AuthContext'

const AdminLogin = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { setAuthState } = useContext(AuthContext);

    const navigate = useNavigate();

    const loginUser = async (e) => {
        e.preventDefault();

        const data = { username: email, password: password }

        if (!email) {
            toast.error("Telefon belginizi ýazyň!")
        }
        else if (!password) {
            toast.error("Açar sözüňizi ýazyň!")
        }
        else {
            await axios.post(`https://it.net.tm/arzanapi/api/v1/rootman`, data).then((res) => {
                if (res.data.error) {
                    toast.error(res.data.error)
                } else {
                    toast.success(res.data.success)
                    localStorage.setItem("token", res.data.token)
                    setAuthState({
                        name_surname: res.data.name_surname,
                        id: res.data.id,
                        status: true,
                        role: res.data.role,
                    });
                    navigate("/admin")
                    window.location.reload()
                }

            })
        }
    }

    return (
        <>
            <div style={{ backgroundColor: '#080710', zIndex: "-1", padding: "50vh" }}>
                <div className={styles.background}>
                    <div className={styles.shape}></div>
                    <div className={styles.shape}></div>
                </div>
                <form className={styles.login_form} onSubmit={loginUser}>
                    <h3>Login Page</h3>

                    <label className={styles.login_label} htmlFor="email">E-mail</label>
                    <input name='username' value={email} onChange={(e) => setEmail(e.target.value)} className={styles.login_input} type="email" placeholder="Email address" id="email" autoComplete='off' required />

                    <label className={styles.login_label} htmlFor="password">Password</label>
                    <input name='password' value={password} onChange={(e) => setPassword(e.target.value)} className={styles.login_input} type="password" placeholder="Password" id="password" autoComplete='off' required />

                    <button className={styles.login_button} type='submit'>Log In</button>
                </form>
            </div>
        </>
    )
}

export default AdminLogin