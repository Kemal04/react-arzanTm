import { faHome, faListAlt, faPhotoFilm, faTags, faUsers, faVideo, faWallet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext'

const AdminSidebar = () => {

    const { darkMode } = useContext(ThemeContext)

    return (
        <div>
            {/* NAVBAR BOLUMINDE BUTTON GIDIPDIR */}
            <div className="position-sticky pt-3" style={{ height: "calc(100vh - 48px)" }}>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <NavLink to="/admin" className={`nav-link d-flex align-items-center ${darkMode ? "text-white" : "text-dark"}`}>
                            <FontAwesomeIcon icon={faHome} className="align-text-bottom me-2" />
                            Dashboard
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/admin/users" className={`nav-link d-flex align-items-center ${darkMode ? "text-white" : "text-dark"}`}>
                            <FontAwesomeIcon icon={faUsers} className="align-text-bottom me-2" />
                            Users
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/admin/web/banners" className={`nav-link d-flex align-items-center ${darkMode ? "text-white" : "text-dark"}`}>
                            <FontAwesomeIcon icon={faPhotoFilm} className="align-text-bottom me-2" />
                            Banner
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/admin/discounts" className={`nav-link d-flex align-items-center ${darkMode ? "text-white" : "text-dark"}`}>
                            <FontAwesomeIcon icon={faTags} className="align-text-bottom me-2" />
                            Discount
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/admin/app/categories" className={`nav-link d-flex align-items-center ${darkMode ? "text-white" : "text-dark"}`}>
                            <FontAwesomeIcon icon={faListAlt} className="align-text-bottom me-2" />
                            Categories
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/admin/gallery/video" className={`nav-link d-flex align-items-center ${darkMode ? "text-white" : "text-dark"}`}>
                            <FontAwesomeIcon icon={faPhotoFilm} className="align-text-bottom me-2" />
                            Gallery
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/admin/payment" className={`nav-link d-flex align-items-center ${darkMode ? "text-white" : "text-dark"}`}>
                            <FontAwesomeIcon icon={faWallet} className="align-text-bottom me-2" />
                            Payment
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AdminSidebar