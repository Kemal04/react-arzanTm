import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList, faEye, faPenAlt, faPlus, faTrashAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from '../../../context/ThemeContext'
import search from '../../../assets/icons/search.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteDiscount, getAllDiscounts } from '../../../redux/slices/discount'

const AdminDiscounts = () => {

    const { darkMode } = useContext(ThemeContext)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { discounts } = useSelector(state => state.discounts)

    console.log(discounts);

    useEffect(() => {
        dispatch(getAllDiscounts())
    }, [dispatch])

    const handleDelete = async (id) => {
        dispatch(deleteDiscount(id))
        navigate("/admin/discounts")
    }

    return (
        <>
            <div className='card border-0 shadow my-5'>
                <div className={`card-header border-0 pb-1 p-3 ${darkMode ? "bg-dark-blue-footer text-white" : "bg-white"}`}>
                    <div className='row align-items-center justify-content-between'>
                        <div className='col-xl-12 col-lg-12 col-md-12 col-12 mb-4'>
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
                                    <Link to="/admin/discount-create" className='btn btn-primary btn-sm rounded-3' style={{ fontSize: "14px", width: "140px", backgroundColor: "#000AFF" }}><FontAwesomeIcon icon={faPlus} /> Add Discount</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-12'>
                            <div className='row'>
                                <div className='col-xl-4'>
                                    <Link to='/admin/discounts' className='d-flex align-items-center justify-content-center py-1 px-2 rounded-2 small fw-bold text-white text-decoration-none' style={{ border: "1px solid #7280FF", backgroundColor: "#000AFF" }}>
                                        <FontAwesomeIcon icon={faUserCircle} className='me-1' />
                                        Client posts
                                    </Link>
                                </div>
                                <div className='col-xl-5'>
                                    <Link to='/admin/discounts' className='d-flex align-items-center justify-content-center py-1 px-2 rounded-2 small fw-bold text-white text-decoration-none' style={{ border: "1px solid #7280FF", backgroundColor: "#000AFF" }}>
                                        <FontAwesomeIcon icon={faClipboardList} className='me-1' />
                                        Moderator posts
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-12'>
                            <div className='row justify-content-end g-3'>
                                <div className='col-xl-8 col-lg-3 col-md-3 col-6'>
                                    <div className="input-group">
                                        <input className="form-control form-control-sm ps-5 fw-bold" type="text" placeholder="Search..." style={{ background: `url(${search}) no-repeat left`, backgroundPositionX: "20px" }} aria-describedby="basic-addon1" />
                                        <span className="input-group-text py-0 bg-white" id="basic-addon1">Search</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={`card-body p-3 ${darkMode ? "bg-dark-blue text-white" : ""}`}>
                    <table className="table align-middle border">
                        <thead>
                            <tr className="bg-light" style={{ fontSize: "12px" }}>
                                <th className='border' scope="col">#</th>
                                <th className='border' scope="col">Image</th>
                                <th className='border' scope="col">Title</th>
                                <th className='border' scope="col">Price</th>
                                <th className='border' scope="col">Discount</th>
                                <th className='border' scope="col">Phone Number</th>
                                <th className='border' scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                discounts.slice().sort((a, b) => (a.id < b.id) ? 1 : -1).map((discount, index) => (
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td><img src={discount.discount_img} alt="" style={{ width: "40px" }} /></td>
                                        <th>{discount.title}</th>
                                        <th className={discount.discount_price ? "text-decoration-line-through" : null}>{discount.price}</th>
                                        <th>{discount.discount_price}</th>
                                        <th>+993 {discount.phone_num}</th>
                                        <th>
                                            <div className='d-flex align-items-center justify-content-between'>
                                                <Link to={`/admin/discount/${discount.id}`} className='text-decoration-none'><FontAwesomeIcon icon={faEye} className='text-primary' /></Link>
                                                <Link to={`/admin/discount-edit/${discount.id}`} className='text-decoration-none'><FontAwesomeIcon icon={faPenAlt} className='text-green' /></Link>
                                                <FontAwesomeIcon icon={faTrashAlt} className='text-danger' style={{ cursor: "pointer" }} onClick={() => handleDelete(discount.id)} />
                                            </div>
                                        </th>
                                    </tr>

                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default AdminDiscounts