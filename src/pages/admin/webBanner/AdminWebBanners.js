import React, { useContext, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faMobileAlt, faPenAlt, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from '../../../context/ThemeContext'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBanner, getAllBanners } from '../../../redux/slices/banner'

const AdminWebBanners = () => {
    
    const { darkMode } = useContext(ThemeContext)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { banners } = useSelector(state => state.banner)

    useEffect(() => {
        dispatch(getAllBanners())
    }, [dispatch])

    const handleDelete = async (id) => {
        dispatch(deleteBanner(id))
        navigate("/admin/web/banners")
    }

    return (
        <>
            <div className='card border-0 shadow my-5'>
                <div className={`card-header border-0 pb-1 p-3 ${darkMode ? "bg-dark-blue-footer text-white" : "bg-white"}`}>
                    <div className='row align-items-center justify-content-between'>
                        <div className='col-xl-12 col-lg-12 col-md-12 col-12'>
                            <div className='row'>
                                <div className='col-xl-auto'>
                                    <button className='btn btn-green btn-sm rounded-3' style={{ fontSize: "10px", width: "103px" }}>Ashgabat</button>
                                </div>
                                <div className='col-xl-auto'>
                                    <button className='btn btn-outline-green btn-sm rounded-3' style={{ fontSize: "10px", width: "103px" }}>Ahal</button>
                                </div>
                                <div className='col-xl-auto'>
                                    <button className='btn btn-outline-green btn-sm rounded-3' style={{ fontSize: "10px", width: "103px" }}>Mary</button>
                                </div>
                                <div className='col-xl-auto'>
                                    <button className='btn btn-outline-green btn-sm rounded-3' style={{ fontSize: "10px", width: "103px" }}>Dashoguz</button>
                                </div>
                                <div className='col-xl-auto'>
                                    <button className='btn btn-outline-green btn-sm rounded-3' style={{ fontSize: "10px", width: "103px" }}>Balkan</button>
                                </div>
                                <div className='col-xl-auto ms-auto'>
                                    <Link to="/admin/web/banner-create" className='btn btn-primary btn-sm rounded-3' style={{ fontSize: "14px", width: "140px", backgroundColor: "#000AFF" }}><FontAwesomeIcon icon={faPlus} /> Add Banner</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-12 mt-5'>
                            <div className='d-flex justify-content-center align-items-center'>
                                <Link to="/admin/web/banners" className='text-white px-3 py-2 small text-decoration-none rounded-2 me-4' style={{ backgroundColor: "#000AFF" }}>
                                    <FontAwesomeIcon icon={faGlobe} className='me-2' />
                                    Web Banner
                                </Link>
                                <Link to="/admin/app/banners" className='text-dark px-3 py-2 small text-decoration-none rounded-2 ms-4' style={{ border: "1px solid #000AFF" }}>
                                    <FontAwesomeIcon icon={faMobileAlt} className='me-2' />
                                    App Banner
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`card-body p-3 ${darkMode ? "bg-dark-blue text-white" : ""}`}>
                    <div className='row align-items-center'>
                        {

                            banners.slice().sort((a, b) => (a.id < b.id) ? 1 : -1).map((banner, index) =>
                                banner.type === "Web"
                                    ?
                                    <div className='col-xl-4 mb-3' key={index}>
                                        <div className="card">
                                            <img src={banner.banner_img} alt="" className='img-fluid' />
                                            <div className="card-body small p-2">
                                                <div className='fw-bold mb-2'>Numbering: <span className='fw-normal'>{banner.priority}</span></div>
                                                <div className='fw-bold mb-2'>Duration: <span className='fw-normal'>{banner.start_date}-{banner.end_date}</span></div>
                                                <div className='fw-bold mb-2'>Page: <span className='fw-normal'>{banner.pageId}</span></div>
                                                <div className='fw-bold mb-2'>Is active: <span className='fw-normal'>{banner.checked}</span></div>
                                                <div className='d-flex align-items-center justify-content-between'>
                                                    <button onClick={() => handleDelete(banner.id)} className='btn btn-danger btn-sm px-2'><FontAwesomeIcon icon={faTrashAlt} className='me-1' />Delete</button>
                                                    <Link to='/admin' className='btn btn-primary btn-sm px-3' style={{ backgroundColor: "#000AFF" }}><FontAwesomeIcon icon={faPenAlt} /> Edit</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    null
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminWebBanners