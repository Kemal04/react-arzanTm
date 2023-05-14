import { faHome, faPhotoFilm, faUsers, faVideo } from '@fortawesome/free-solid-svg-icons'
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
                        <NavLink to="/admin/offical/users" className={`nav-link d-flex align-items-center ${darkMode ? "text-white" : "text-dark"}`}>
                            <FontAwesomeIcon icon={faUsers} className="align-text-bottom me-2" />
                            Official user
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/admin/web/banners" className={`nav-link d-flex align-items-center ${darkMode ? "text-white" : "text-dark"}`}>
                            <FontAwesomeIcon icon={faPhotoFilm} className="align-text-bottom me-2" />
                            Banner
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/admin/vidoes" className={`nav-link d-flex align-items-center ${darkMode ? "text-white" : "text-dark"}`}>
                            <FontAwesomeIcon icon={faVideo} className="align-text-bottom me-2" />
                            Video
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AdminSidebar