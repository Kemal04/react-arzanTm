import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo/logo.svg'
import location from '../../assets/icons/location.svg'
import search from '../../assets/icons/search.svg'
import globus from '../../assets/icons/globus.svg'
import bell from '../../assets/icons/bell.svg'
import logo_circle from '../../assets/icons/logo-circle.svg'

const Navbar = () => {

    const { darkMode, toggleDarkMode } = useContext(ThemeContext)

    const darkModeClick = () => {
        toggleDarkMode();
    }

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
                            <div className="dropdown ms-5">
                                <div type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={logo_circle} alt="" className='img-fluid me-1' />
                                </div>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><Link to="/" className="dropdown-item">Action</Link></li>
                                    <li><Link to="/" className="dropdown-item">Another action</Link></li>
                                    <li><Link to="/" className="dropdown-item">Something else here</Link></li>
                                </ul>
                            </div>
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

                    {/* <div className="d-flex flex-column mt-3">
                        <ul className="navbar-nav p-3">
                            <li className="nav-item mx-xl-2 mx-lg-2 mx-md-2 mx-sm-0 mx-0" style={{ fontSize: "17px" }}>
                                <NavLink to="/" style={({ isActive }) => ({ color: isActive ? "active" : null })} className="nav-link fw-bold">Baş sahypa</NavLink>
                            </li>
                            <li className="nav-item mx-xl-2 mx-lg-2 mx-md-2 mx-sm-0 mx-0" style={{ fontSize: "17px" }}>
                                <NavLink to="/otaglar" className="nav-link fw-bold">Otaglar</NavLink>
                            </li>
                            <li className="nav-item mx-xl-2 mx-lg-2 mx-md-2 mx-sm-0 mx-0" style={{ fontSize: "17px" }}>
                                <NavLink to="/biz-barada" className="nav-link fw-bold">Biz barada</NavLink>
                            </li>
                            <li className="nav-item mx-xl-2 mx-lg-2 mx-md-2 mx-sm-0 mx-0" style={{ fontSize: "17px" }}>
                                <NavLink to="/habarlasmak" className="nav-link fw-bold">Habarlaşmak</NavLink>
                            </li>
                            <li className="nav-item mx-xl-2 mx-lg-2 mx-md-2 mx-sm-0 mx-0" style={{ fontSize: "17px" }}>
                                <div style={{ cursor: "pointer" }} onClick={darkModeClick} className="nav-link border-0">
                                    {
                                        darkMode ?
                                            <FontAwesomeIcon icon={faSun} />
                                            :
                                            <FontAwesomeIcon icon={faMoon} />
                                    }
                                </div>
                            </li>
                        </ul>
                        <form className="d-flex position-absolute bottom-0 justify-content-center">
                            <Link to="/giris-etmek" className="btn btn-primary py-4 fw-bold" style={{ letterSpacing: "1px", paddingLeft: "102px", paddingRight: "103px" }} type="submit">Giriş</Link>
                        </form>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Navbar