import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import logo from '../../assets/logo/logo.svg'
import location from '../../assets/icons/location.svg'
import search from '../../assets/icons/search.svg'
import globus from '../../assets/icons/globus.svg'
import bell from '../../assets/icons/bell.svg'
import logo_circle from '../../assets/icons/logo-circle.svg'
import user from '../../assets/icons/user.svg'
import user_bold from '../../assets/icons/user-bold.svg'
import user_tick from '../../assets/icons/user-bold-tick.svg'
import key from '../../assets/icons/key.svg'
import not_see from '../../assets/icons/not-see.svg'
import phone from '../../assets/icons/phone-bold.svg'

import profile from '../../assets/icons/mikki.png'

import wallet from '../../assets/icons/wallet.svg'
import plus from '../../assets/icons/plus.svg'
import selected from '../../assets/icons/selected.svg'
import logout_img from '../../assets/icons/logout.svg'
import { AuthContext } from '../../context/AuthContext';
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import Api_Address from '../../env';

const Navbar = () => {

    const { darkMode } = useContext(ThemeContext)
    const { setAuthState, authState } = useContext(AuthContext);

    const [name, setName] = useState("")
    const [phone_num, setPhoneNum] = useState("")
    const [password, setPassword] = useState("")
    const [cPassword, setCPassword] = useState("")

    const navigate = useNavigate()

    const registerUser = async (e) => {
        e.preventDefault();

        const data = { name: name, phone_num: phone_num, password: password }

        if (!name) {
            toast.error("Adyňyzy ýazyň!")
        }
        else if (!phone_num) {
            toast.error("Telefon belginizi ýazyň!")
        }
        else if (!password) {
            toast.error("Açar sözüňizi ýazyň!")
        }
        else if (!cPassword) {
            toast.error("Açar sözüňizi gaýtadan ýazyň!")
        }
        else if (cPassword !== password) {
            toast.error("Açar sözüňiz gabat gelenok !")
        }
        else if (password.length < 8) {
            toast.error("Açar sözüňiz 8-den uly bolmaly")
        }
        else {
            await axios.post(`${Api_Address}/api/v1/auth/user/register`, data).then((res) => {
                console.log("dfsgkahsdfgjk");
                if (res.data.error) {
                    toast.error(res.data.error)
                } else {
                    toast.success(res.data.success, ", Login sahypasyna gecin")
                    navigate("/")
                    window.location.reload()
                }
            })
        }
    }

    //LOGIN
    const [login_name, setLogin_Name] = useState("")
    const [login_password, setLogin_Password] = useState("")

    const loginUser = async (e) => {
        e.preventDefault();

        const data = { name: login_name, password: login_password }

        if (!login_name) {
            toast.error("Adynyzy ýazyň!")
        }
        else if (!login_password) {
            toast.error("Açar sözüňizi ýazyň!")
        }
        else if (login_password.length < 8) {
            toast.error("Açar sözüňiz 8-den uly bo  lmaly")
        }
        else {
            await axios.post(`${Api_Address}/api/v1/auth/user/login`, data).then((res) => {
                if (res.data.error) {
                    toast.error(res.data.error)
                } else {
                    localStorage.setItem("accessToken", res.data.token)
                    setAuthState({
                        name: res.data.name,
                        id: res.data.id,
                        status: true,
                        role: res.data.role,
                    });
                    toast.success(res.data.success)
                    navigate("/")
                    window.location.reload()
                }
            })
        }
    }

    const logout = () => {
        localStorage.removeItem("accessToken");
        setAuthState({ name: "", id: 0, status: false, role: "User" })
        navigate('/')
    };

    return (
        <>
            <nav className={`navbar navbar-expand-lg py-0 ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-white'}`}>
                <div className="container">

                    {/* LOGO */}
                    <Link to="/" className="navbar-brand ps-2">
                        <img src={logo} alt="" className='img-fluid' style={{ width: "150px" }} />
                    </Link>

                    {/* RESPONSOVE BUTTON */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* NAVBAR */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-4">
                            <li className="nav-item dropdown me-5">
                                <NavLink to="/" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span>
                                        <img src={location} alt="" className='img-fluid me-1' />
                                        Ashgabat
                                    </span>
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><Link to='/' className="dropdown-item">Ashgabat</Link></li>
                                    <li><Link to='/' className="dropdown-item">Ahal</Link></li>
                                    <li><Link to='/' className="dropdown-item">Balkan</Link></li>
                                    <li><Link to='/' className="dropdown-item">Dashoguz</Link></li>
                                    <li><Link to='/' className="dropdown-item">Mary</Link></li>
                                    <li><Link to='/' className="dropdown-item">Lebap</Link></li>
                                </ul>
                            </li>
                            <form className="d-flex ms-5">
                                <input className="form-control me-2 rounded-0 ps-5" type="search" placeholder="Gözle..." style={{ background: `url(${search}) no-repeat left`, backgroundPositionX: "20px", width: "500px" }} />
                            </form>
                            <li className="nav-item dropdown me-5 ms-5">
                                <NavLink to="/" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span>
                                        <img src={globus} alt="" className='img-fluid me-1' />
                                        Türkmençe
                                    </span>
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><Link to='/' className="dropdown-item text-capitalize">русский</Link></li>
                                    <li><Link to='/' className="dropdown-item">English</Link></li>
                                </ul>
                            </li>
                            <div className="dropdown mt-2">
                                <div className="position-relative" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={bell} alt="" className='img-fluid me-1' />
                                    <span className="position-absolute translate-middle badge rounded-circle px-1 bg-danger" style={{ top: "6px", left: "22px" }}>
                                        23
                                    </span>
                                </div>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><Link to="/" className="dropdown-item">Action</Link></li>
                                    <li><Link to="/" className="dropdown-item">Another action</Link></li>
                                    <li><Link to="/" className="dropdown-item">Something else here</Link></li>
                                </ul>
                            </div>
                            {!authState.status ?
                                (
                                    <>
                                        <div className="ms-5">
                                            <div type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                <img src={logo_circle} alt="" className='img-fluid me-1' />
                                            </div>
                                        </div>
                                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content px-4 py-2">
                                                    <div className="modal-header d-flex justify-content-center border-0">
                                                        <div className="modal-title" id="staticBackdropLabel">
                                                            <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                                                <li className="nav-item" role="presentation">
                                                                    <button style={{ borderTopRightRadius: "0", borderEndEndRadius: "0", fontWeight: "500" }} className="text-dark nav-link active px-5 bg-light" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                                                                        Ulgama girmek
                                                                    </button>
                                                                </li>
                                                                <li className="nav-item" role="presentation">
                                                                    <button style={{ borderTopLeftRadius: "0", borderBottomLeftRadius: "0", fontWeight: "500" }} className="text-dark nav-link px-5 bg-light" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                                                                        Agza bolmak
                                                                    </button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="tab-content" id="pills-tabContent">
                                                            {/* Login */}
                                                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                                                                <div className="d-flex justify-content-center align-items-center flex-column">

                                                                    <input value={login_name} onChange={(e) => setLogin_Name(e.target.value)} name='name' className="form-control ps-5" type="text" placeholder="Ulanyjy ady" style={{ background: `url(${user}) no-repeat left`, backgroundPositionX: "20px", width: "400px" }} />

                                                                    <div className="input-group ms-3 mb-4">
                                                                        <input value={login_password} onChange={(e) => setLogin_Password(e.target.value)} name='password' className="form-control ps-5 mt-4 border-end-0 flex-grow-0" type="password" placeholder="Açar sözi" style={{ background: `url(${key}) no-repeat left`, backgroundPositionX: "20px", width: "360px" }} />
                                                                        <span className="input-group-text mt-4 bg-white border-start-0" id="basic-addon1">
                                                                            <img src={not_see} alt="" className='img-fluid' />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className='d-flex justify-content-between align-items-center'>
                                                                    <div className="ms-2">
                                                                        <input type="checkbox" className="form-check-input me-2 p-2" id="exampleCheck1" />
                                                                        <label className="form-check-label" htmlFor="exampleCheck1">Ýatda sakla</label>
                                                                    </div>
                                                                    <div className='me-2'>
                                                                        <Link to='/' className='text-secondary text-decoration-none'>Açar sözi unutdym</Link>
                                                                    </div>
                                                                </div>
                                                                <div className="border-0 d-grid mt-3" style={{ justifyContent: 'unset' }}>
                                                                    <button onClick={loginUser} type="button" className="btn btn-green">Ulgama gir</button>
                                                                </div>
                                                            </div>
                                                            {/* Login */}

                                                            {/* Register */}
                                                            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                                                                <div className="d-flex justify-content-center flex-column">
                                                                    <label className="mb-2 ms-1" style={{ fontWeight: "500" }}>Çagyranyň linki, QR-kody ýa-da nomeri</label>
                                                                    <input disabled value="+993 " className="form-control ps-5 mb-4 bg-light" type="text" placeholder="Ulanyjy ady" style={{ background: `url(${user_tick}) no-repeat left`, backgroundPositionX: "20px", width: "400px" }} />

                                                                    <label className="mb-2 ms-1" style={{ fontWeight: "500" }}>Ulanyjy ady</label>
                                                                    <input value={name} onChange={(e) => setName(e.target.value)} name='name' className="form-control ps-5 mb-4" type="text" placeholder="Ulanyjy ady" style={{ background: `url(${user}) no-repeat left`, backgroundPositionX: "20px", width: "400px" }} />

                                                                    <label className="ms-1 mb-1" style={{ fontWeight: "500" }}>Telefon belgisi</label>
                                                                    <input value={phone_num} onChange={(e) => setPhoneNum(e.target.value)} type="number" min="60000000" max="65999999" name='phone_num' className="form-control ps-5 mb-4" placeholder="Ulanyjy ady" style={{ background: `url(${phone}) no-repeat left`, backgroundPositionX: "20px", width: "400px" }} />

                                                                    <div className="input-group mb-4">
                                                                        <label className="mb-2 ms-1" style={{ fontWeight: "500" }}>Açar sözi</label>
                                                                        <input value={password} onChange={(e) => setPassword(e.target.value)} name='password' className="form-control ps-5 border-end-0 flex-grow-0" type="password" placeholder="Açar sözi" style={{ background: `url(${key}) no-repeat left`, backgroundPositionX: "20px", width: "360px" }} />
                                                                        <span className="input-group-text bg-white border-start-0" id="basic-addon1">
                                                                            <img src={not_see} alt="" className='img-fluid' />
                                                                        </span>
                                                                    </div>

                                                                    <div className="input-group mb-4">
                                                                        <label className="mb-2 ms-1" style={{ fontWeight: "500" }}>Açar sözi (tassykla)</label>
                                                                        <input value={cPassword} onChange={(e) => setCPassword(e.target.value)} name='confirm_password' className="form-control ps-5 border-end-0 flex-grow-0" type="password" placeholder="Açar sözi (tassykla)" style={{ background: `url(${key}) no-repeat left`, backgroundPositionX: "20px", width: "360px" }} />
                                                                        <span className="input-group-text bg-white border-start-0" id="basic-addon1">
                                                                            <img src={not_see} alt="" className='img-fluid' />
                                                                        </span>
                                                                    </div>
                                                                </div>

                                                                <label className="ms-1 mb-1" style={{ fontWeight: "500" }}>Tassyklama görnüşi</label>
                                                                <select className="form-select mb-3" aria-label="Tassyklama koduny al" style={{ width: "400px" }} disabled>
                                                                    <option defaultValue>Tassyklama koduny al</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>

                                                                <div className="ms-2">
                                                                    <input type="checkbox" className="form-check-input me-2 p-2" id="exampleCheck1" />
                                                                    <label className="form-check-label" htmlFor="exampleCheck1">Düzgunnamany okadym we kabul etdim</label>
                                                                </div>

                                                                <div className="border-0 d-grid mt-3" style={{ justifyContent: 'unset' }}>
                                                                    <button onClick={registerUser} type="button" className="btn btn-green">Ulgama gir</button>
                                                                </div>
                                                            </div>
                                                            {/* Register */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <div className="dropdown ms-5">
                                        <div className="" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src={profile} alt="" className='img-fluid me-1' />
                                        </div>
                                        <ul className="dropdown-menu border-0 shadow" aria-labelledby="dropdownMenuButton1">
                                            <li>
                                                <Link to="/profile" className="dropdown-item d-flex align-items-center mb-2">
                                                    <img src={user_bold} alt='' className='img-fluid me-2' style={{ width: "16px" }} />
                                                    Profil
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/profile/wallet" className="dropdown-item d-flex align-items-center mb-2">
                                                    <img src={wallet} alt='' className='img-fluid me-2' style={{ width: "16px" }} />
                                                    Gapjyk
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/post-gosmak" className="dropdown-item d-flex align-items-center mb-2">
                                                    <img src={plus} alt='' className='img-fluid me-2' style={{ width: "16px" }} />
                                                    Post goşmak
                                                </Link>
                                            </li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li>
                                                <Link to="/profile" className="dropdown-item d-flex align-items-center mb-2">
                                                    <img src={selected} alt='' className='img-fluid me-2' style={{ width: "16px" }} />
                                                    Bellenenler
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/profile" className="dropdown-item d-flex align-items-center mb-2">
                                                    <img src={bell} alt='' className='img-fluid me-2' style={{ width: "16px" }} />
                                                    Bildirişler
                                                    <span className='small bg-danger px-1 rounded-circle ms-2 text-white' style={{ fontSize: "8px" }}>23</span>
                                                </Link>
                                            </li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li>
                                                <div onClick={logout} className="dropdown-item d-flex align-items-center mb-2 pe-4 text-danger" style={{ cursor: "pointer" }}>
                                                    <img src={logout_img} alt='' className='img-fluid me-2' style={{ width: "16px" }} />
                                                    Ulgamdan çykmak
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                )
                            }
                        </ul>
                    </div>


                </div>
            </nav >

            {/* SIDEBAR */}
            <div className={darkMode ? `offcanvas offcanvas-start bg-dark` : `offcanvas offcanvas-start bg-white`} style={{ width: "250px" }} data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel" >
                <div className="offcanvas-header flex-column align-items-start p-0">
                    <div className='d-flex align-items-center justify-content-between p-3'>
                        <h5 className="offcanvas-title me-5 pe-5" id="offcanvasWithBothOptionsLabel">Logo</h5>
                        <button type="button" className={`btn-close ms-4`} data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar