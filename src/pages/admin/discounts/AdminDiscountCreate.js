import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import Api_Address from '../../../env'
import { createDiscount } from '../../../redux/slices/discount'
import img_icon from '../../../assets/icons/img.svg'

const AdminDiscountCreate = () => {

    const { darkMode } = useContext(ThemeContext)

    const [image, setImage] = useState(null)

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
        setImg(event.target.files[0])
    }

    const [isRecomended, setIsRecomended] = useState(true);
    const [isPinned, setIsPinned] = useState(false);
    const [publishDiscount, setPublishDiscount] = useState(false);

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [img, setImg] = useState('')
    const [discount, setDiscount] = useState({
        title: "",
        description: "",
        price: "",
        discount_price: "",
        phone_num: "",
        hashtags: "",
        start_date: "",
        end_date: "",
        isRecomended: "",
        isPinned: "",
        publishDiscount: "",
        welayat: "",
        subcategoryId: "",
        checked: "1",
    })

    const handleChange = (e) => {
        setDiscount((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleClick = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('discount_img', img)
        formData.append('title', discount.title)
        formData.append('description', discount.description)
        formData.append('price', discount.price)
        formData.append('discount_price', discount.discount_price)
        formData.append('phone_num', discount.phone_num)
        formData.append('hashtags', discount.hashtags)
        formData.append('start_date', discount.start_date)
        formData.append('end_date', discount.end_date)
        formData.append('isRecomended', isRecomended)
        formData.append('isPinned', isPinned)
        formData.append('publishDiscount', publishDiscount)
        formData.append('welayat', discount.welayat)
        formData.append('subcategoryId', discount.subcategoryId)

        if (!img) {
            toast.error("Surat yok")
        }
        else if (!discount.title) {
            toast.error("Title giriziň")
        }
        else if (!discount.description) {
            toast.error("Description giriziň")
        }
        else if (!discount.subcategoryId) {
            toast.error("Sub Category giriziň")
        }
        else if (!discount.price) {
            toast.error("Price giriziň")
        }
        else if (!discount.discount_price) {
            toast.error("Discount Price giriziň")
        }
        else if (!discount.phone_num) {
            toast.error("Phone number giriziň")
        }
        else if (!discount.start_date) {
            toast.error("Giriş wagty giriziň")
        }
        else if (!discount.end_date) {
            toast.error("Çykyş wagty giriziň")
        }
        else if (!discount.hashtags) {
            toast.error("Hashtags giriziň")
        }
        else if (!discount.welayat) {
            toast.error("Welaýat saýlaň")
        }
        else if (!isRecomended) {
            toast.error("isRecomended giriziň")
        }
        else if (!isPinned) {
            toast.error("isPinned saýlaň")
        }
        else if (!publishDiscount) {
            toast.error("publishDiscount saýlaň")
        }
        else {
            dispatch(createDiscount(formData))
            navigate("/admin/discounts")
        }
    }

    const [subcategories, setSubcategories] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`${Api_Address}/api/v1/discount/create`, {
                headers: {
                    accessToken: localStorage.getItem("accessToken"),
                }
            }).then((res) => {
                setSubcategories(res.data.subcategory)
            })
        }
        fetchData()
    }, [])

    return (
        <>
            <div className='card border-0 shadow my-5'>
                <div className={`card-header p-3 ${darkMode ? "bg-dark-blue-footer text-white" : null}`}>
                    <div className='h5'>
                        <div>Web Discount Create</div>
                    </div>
                </div>
                <div className={`card-body p-5 h-auto ${darkMode ? "bg-dark-blue text-white" : ""}`}>
                    <div className='row'>
                        <div className='col-xl-12 mb-4'>
                            {
                                image === null
                                    ?
                                    <>
                                        <label className='label text-center d-flex justify-content-center align-items-center flex-column' htmlFor="upload">
                                            <img src={img_icon} alt="" className='img-fluid mb-2' />
                                            <div className='text-green'>Surat goş</div>
                                        </label>

                                        <input type="file" name="discount_img" id="upload" hidden onChange={onImageChange} />
                                    </>
                                    :
                                    <>
                                        <img alt="" src={image} className='img-fluid' />
                                    </>
                            }
                        </div>
                        <div className='col-xl-12 mb-4'>
                            <div className="input-group">
                                <span className="input-group-text bg-white justify-content-center" style={{ width: "100px" }} id="basic-addon1">Title</span>
                                <input name='title' onChange={handleChange} className="form-control" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className='col-xl-12 mb-4'>
                            <div className="input-group">
                                <span className="input-group-text bg-white justify-content-center" style={{ width: "100px" }} id="basic-addon1">Description</span>
                                <textarea name='description' onChange={handleChange} type="text" className="form-control" aria-describedby="basic-addon1" rows={4}></textarea>
                            </div>
                        </div>
                        <div className='col-xl-6 mb-4'>
                            <select name='categoryId' className="form-select form-select-sm" disabled>
                                <option defaultValue>Select Category</option>
                                <option value="Ashgabat">Ashgabat</option>
                                <option value="Ahal">Ahal</option>
                                <option value="Mary">Mary</option>
                                <option value="Lebap">Lebap</option>
                                <option value="Dashoguz">Dashoguz</option>
                                <option value="Balkan">Balkan</option>
                            </select>
                        </div>
                        <div className='col-xl-6 mb-4'>
                            <select name='subcategoryId' className="form-select form-select-sm" onChange={handleChange}>
                                <option defaultValue>Select Subcategory</option>
                                {subcategories.map((subcategory, index) => (
                                    <option key={index} value={subcategory.id}>{subcategory.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className='col-xl-6 mb-4'>
                            <div className="input-group">
                                <span className="input-group-text bg-white justify-content-center" style={{ width: "100px" }} id="basic-addon1">Price</span>
                                <input name='price' onChange={handleChange} type="number" className="form-control" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className='col-xl-6 mb-4'>
                            <div className="input-group">
                                <span className="input-group-text bg-white justify-content-center" style={{ width: "120px" }} id="basic-addon1">Discount Price</span>
                                <input name='discount_price' onChange={handleChange} type="number" className="form-control" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className='col-xl-12 mb-4'>
                            <div className="input-group">
                                <span className="input-group-text bg-white justify-content-center" style={{ width: "100px" }} id="basic-addon1">Phone</span>
                                <input name='phone_num' onChange={handleChange} type="number" className="form-control" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className='col-xl-6 mb-4'>
                            <div className="input-group">
                                <span className="input-group-text bg-white justify-content-center" style={{ width: "100px" }} id="basic-addon1">Start Date</span>
                                <input name='start_date' onChange={handleChange} type="date" className="form-control" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className='col-xl-6 mb-4'>
                            <div className="input-group">
                                <span className="input-group-text bg-white justify-content-center" style={{ width: "100px" }} id="basic-addon1">End Date</span>
                                <input name='end_date' onChange={handleChange} type="date" className="form-control" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className='col-xl-12 mb-4'>
                            <div className="input-group">
                                <span className="input-group-text bg-white justify-content-center" style={{ width: "100px" }} id="basic-addon1">Hashtags</span>
                                <input name='hashtags' onChange={handleChange} type="text" className="form-control" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-xl-3'>
                            <select name='welayat' className="form-select form-select-sm" onChange={handleChange}>
                                <option defaultValue>Welayats</option>
                                <option value="Ashgabat">Ashgabat</option>
                                <option value="Ahal">Ahal</option>
                                <option value="Mary">Mary</option>
                                <option value="Lebap">Lebap</option>
                                <option value="Dashoguz">Dashoguz</option>
                                <option value="Balkan">Balkan</option>
                            </select>
                        </div>
                        <div className='col-xl-7 ms-auto d-flex align-items-center justify-content-between'>
                            <div className="form-check form-switch">
                                <input name='isRecomended' onChange={(e) => setIsRecomended(e.target.checked)} checked={isRecomended} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Is Recommended</label>
                            </div>
                            <div className="form-check form-switch">
                                <input name='isPinned' onChange={(e) => setIsPinned(e.target.checked)} checked={isPinned} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Is Pinned</label>
                            </div>
                            <div className="form-check form-switch">
                                <input name='publishDiscount' onChange={(e) => setPublishDiscount(e.target.checked)} checked={publishDiscount} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Publish Discount</label>
                            </div>
                        </div>

                        <div className='col-xl-12 d-flex justify-content-center mt-5'>
                            <button onClick={handleClick} className='btn btn-primary' style={{ backgroundColor: '#0500FF', padding: "10px 160px" }}>Apply</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminDiscountCreate