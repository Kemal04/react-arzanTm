import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { updateDiscount } from '../../../redux/slices/discount';
import img_icon from '../../../assets/icons/img.svg'
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

const AdminDiscountEdit = () => {

    const { darkMode } = useContext(ThemeContext)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { discountId } = useParams()

    const [img, setImg] = useState('')
    const [isRecomended, setIsRecomended] = useState(true);
    const [isPinned, setIsPinned] = useState(false);
    const [publishDiscount, setPublishDiscount] = useState(false);
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
        subcategoryId: "4",
        checked: "1",
        img: "",
    })

    //IMG
    const [image, setImage] = useState(null)
    const onImageChange = (e) => {
        setImg({
            picturePreview: URL.createObjectURL(e.target.files[0]),
            pictureAsFile: e.target.files[0],
        });
        if (e.target.files && e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]));
        }
    }

    const handleChange = (e) => {
        setDiscount((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    useEffect(() => {
        axios.get(`https://it.net.tm/arzanapi/api/v1/discount/edit/${discountId}`, {
            headers: {
                accessToken: localStorage.getItem("accessToken"),
            },
        }).then((res) => {
            setDiscount(res.data.discount)
            setImg(res.data.discount.discount_img)
        }).catch((res) => {
            toast.error(res.response.data.error)
        })

    }, [navigate, discountId])

    const handleClick = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('discount_img', img.pictureAsFile === undefined ? img : img.pictureAsFile)
        console.log(img.pictureAsFile);
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
        formData.append('checked', discount.checked)

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
            dispatch(updateDiscount({ formData, discountId }))
            navigate("/admin/discounts")
        }
    }

    console.log(discount);

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
                            <>
                                <img src={img} alt="" className='img-fluid text-center d-block' />
                            </>
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
                                <input value={discount.title} name='title' onChange={handleChange} className="form-control" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className='col-xl-12 mb-4'>
                            <div className="input-group">
                                <span className="input-group-text bg-white justify-content-center" style={{ width: "100px" }} id="basic-addon1">Description</span>
                                <textarea value={discount.description} name='description' onChange={handleChange} type="text" className="form-control" aria-describedby="basic-addon1" rows={4}></textarea>
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
                            <select value={discount.subcategoryId} name='subcategoryId' className="form-select form-select-sm" onChange={handleChange}>
                                <option defaultValue>Select Subcategory</option>
                                {/* {subcategories.map((subcategory, index) => (
                                    <option key={index} value={subcategory.id}>{subcategory.name}</option>
                                ))} */}
                            </select>
                        </div>
                        <div className='col-xl-6 mb-4'>
                            <div className="input-group">
                                <span className="input-group-text bg-white justify-content-center" style={{ width: "100px" }} id="basic-addon1">Price</span>
                                <input value={discount.price} name='price' onChange={handleChange} type="number" className="form-control" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className='col-xl-6 mb-4'>
                            <div className="input-group">
                                <span className="input-group-text bg-white justify-content-center" style={{ width: "120px" }} id="basic-addon1">Discount Price</span>
                                <input value={discount.discount_price} name='discount_price' onChange={handleChange} type="number" className="form-control" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className='col-xl-12 mb-4'>
                            <div className="input-group">
                                <span className="input-group-text bg-white justify-content-center" style={{ width: "100px" }} id="basic-addon1">Phone</span>
                                <input value={discount.phone_num} name='phone_num' onChange={handleChange} type="number" className="form-control" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className='col-xl-6 mb-4'>
                            <div className="input-group">
                                <span className="input-group-text bg-white justify-content-center" style={{ width: "100px" }} id="basic-addon1">Start Date</span>
                                <input value={discount.start_date} name='start_date' onChange={handleChange} type="date" className="form-control" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className='col-xl-6 mb-4'>
                            <div className="input-group">
                                <span className="input-group-text bg-white justify-content-center" style={{ width: "100px" }} id="basic-addon1">End Date</span>
                                <input value={discount.end_date} name='end_date' onChange={handleChange} type="date" className="form-control" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className='col-xl-12 mb-4'>
                            <div className="input-group">
                                <span className="input-group-text bg-white justify-content-center" style={{ width: "100px" }} id="basic-addon1">Hashtags</span>
                                <input value={discount.hashtags} name='hashtags' onChange={handleChange} type="text" className="form-control" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-xl-3'>
                            <select value={discount.welayat} name='welayat' className="form-select form-select-sm" onChange={handleChange}>
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
                                <input value={isRecomended} name='isRecomended' onChange={(e) => setIsRecomended(e.target.checked)} checked={isRecomended} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Is Recommended</label>
                            </div>
                            <div className="form-check form-switch">
                                <input value={isPinned} name='isPinned' onChange={(e) => setIsPinned(e.target.checked)} checked={isPinned} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Is Pinned</label>
                            </div>
                            <div className="form-check form-switch">
                                <input value={publishDiscount} name='publishDiscount' onChange={(e) => setPublishDiscount(e.target.checked)} checked={publishDiscount} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
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

export default AdminDiscountEdit