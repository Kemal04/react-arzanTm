import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import img_icon from '../../../assets/icons/img.svg'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { creatBanner } from '../../../redux/slices/banner'

const AdminAppBannerCreate = () => {

    //CONSTS
    const dispatch = useDispatch()
    const navigate = useNavigate()

    //DARK MODE
    const { darkMode } = useContext(ThemeContext)

    //IMAGE SAVE
    const [image, setImage] = useState(null)

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
        setImg(event.target.files[0])
    }

    //DATAS
    const [img, setImg] = useState('')
    const [banner, setBanner] = useState({
        title: "",
        url: "",
        priority: "",
        note: "",
        start_date: "",
        end_date: "",
        pageId: 1,
        welayat: "",
        type: "App",
        checked: "1"
    })

    const handleChange = (e) => {
        setBanner((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleClick = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('banner_img', img)
        formData.append('title', banner.title)
        formData.append('url', banner.url)
        formData.append('priority', banner.priority)
        formData.append('note', banner.note)
        formData.append('start_date', banner.start_date)
        formData.append('end_date', banner.end_date)
        formData.append('pageId', banner.pageId)
        formData.append('welayat', banner.welayat)
        formData.append('type', banner.type)
        formData.append('checked', banner.checked)

        if (!img) {
            toast.error("Surat yok")
        }
        else if (!banner.start_date) {
            toast.error("Giriş wagty giriziň")
        }
        else if (!banner.start_date) {
            toast.error("Çykyş wagty giriziň")
        }
        else if (!banner.title) {
            toast.error("Title giriziň")
        }
        else if (!banner.url) {
            toast.error("Url giriziň")
        }
        else if (!banner.priority) {
            toast.error("Priority giriziň")
        }
        else if (!banner.note) {
            toast.error("Note giriziň")
        }
        else if (!banner.welayat) {
            toast.error("Welaýat saýlaň")
        }
        else if (!banner.pageId) {
            toast.error("Page saýlaň")
        }
        else {
            dispatch(creatBanner(formData))
            navigate("/admin/app/banners")
        }
    }

    return (
        <>
            <div className='card border-0 shadow my-5'>
                <div className={`card-header p-3 ${darkMode ? "bg-dark-blue-footer text-white" : null}`}>
                    <div className='h5'>
                        <div>App Banner Create</div>
                    </div>
                </div>
                <form encType="multipart/form-data" className={`card-body h-auto ${darkMode ? "bg-dark-blue text-white" : ""}`}>
                    <div className='row align-items-center'>
                        <div className='col-xl-6 mb-4'>
                            {
                                image === null
                                    ?
                                    <>
                                        <label className='label text-center d-flex justify-content-center align-items-center flex-column' htmlFor="upload">
                                            <img src={img_icon} alt="" className='img-fluid mb-2' />
                                            <div className='text-green'>Surat goş</div>
                                        </label>

                                        <input type="file" name="banner_img" id="upload" hidden onChange={onImageChange} />
                                    </>
                                    :
                                    <>
                                        <img alt="" src={image} className='img-fluid' />
                                    </>
                            }
                        </div>
                        <div className='col-xl-6 mb-4'>
                            <div className="input-group mb-5">
                                <span className="input-group-text bg-white justify-content-center" style={{ width: "100px" }} id="basic-addon1">Start Date</span>
                                <input name='start_date' onChange={handleChange} type="date" className="form-control" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mt-5">
                                <span className="input-group-text bg-white justify-content-center" style={{ width: "100px" }} id="basic-addon1">End Date</span>
                                <input name='end_date' onChange={handleChange} type="date" className="form-control" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className='col-xl-12 mb-4'>
                            <div className="input-group">
                                <span className="input-group-text bg-white justify-content-center" style={{ width: "100px" }} id="basic-addon1">Title</span>
                                <input name='title' onChange={handleChange} className="form-control" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className='col-xl-12 mb-4'>
                            <div className="input-group">
                                <span className="input-group-text bg-white justify-content-center" style={{ width: "100px" }} id="basic-addon1">Url</span>
                                <input name='url' onChange={handleChange} type="text" className="form-control" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className='col-xl-12 mb-4'>
                            <div className="input-group">
                                <span className="input-group-text bg-white justify-content-center" style={{ width: "100px" }} id="basic-addon1">Priority</span>
                                <input name='priority' onChange={handleChange} type="number" className="form-control" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className='col-xl-12 mb-4'>
                            <div className="input-group">
                                <span className="input-group-text bg-white justify-content-center" style={{ width: "100px" }} id="basic-addon1">Note</span>
                                <textarea name='note' onChange={handleChange} type="text" className="form-control" aria-describedby="basic-addon1" rows={4}></textarea>
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
                        <div className='col-xl-3 ms-auto'>
                            <select name='pageId' className="form-select form-select-sm" onChange={handleChange}>
                                <option defaultValue>Pages</option>
                                {/* {pages.map((page, index) => (
                                    <option key={index} value={page.id}>{page.name}</option>
                                ))} */}
                            </select>
                        </div>

                        <div className='col-xl-12 d-flex justify-content-center mt-5'>
                            <button onClick={handleClick} className='btn btn-primary' style={{ backgroundColor: '#0500FF', padding: "10px 160px" }}>Apply</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AdminAppBannerCreate