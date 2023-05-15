import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import img_icon from '../../../assets/icons/img.svg'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import Api_Address from '../../../env'

const AdminWebBannerEdit = () => {

    const { darkMode } = useContext(ThemeContext)

    const [image, setImage] = useState(null)

    const uploadPicture = (e) => {
        setImg({
            picturePreview: URL.createObjectURL(e.target.files[0]),
            pictureAsFile: e.target.files[0],
        });
    };

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
        uploadPicture()
    }

    const { bannerId } = useParams()
    const navigate = useNavigate()

    const [img, setImg] = useState('')
    const [banner, setBanner] = useState({
        title: "",
        url: "",
        priorty: "",
        note: "",
        start_date: "",
        end_date: "",
        pageId: "",
        welayat: "",
        img: "",
        type: "web",
        checked: "1",
    })

    const handleChange = (e) => {
        setBanner((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    useEffect(() => {
        axios.get(`${Api_Address}/api/v1/banner/edit/${bannerId}`, {
            headers: {
                accessToken: localStorage.getItem("accessToken"),
            },
        }).then((res) => {
            setBanner(res.data.banner)
            setImg(res.data.banner.banner_img)
        }).catch((res) => {
            toast.error(res.response.data.error)
        })

    }, [bannerId])

    const handleClick = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('banner_img', img.pictureAsFile === undefined ? img : img.pictureAsFile)
        formData.append('title', banner.title)
        formData.append('url', banner.url)
        formData.append('priorty', banner.priorty)
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
        else if (!banner.priorty) {
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
            await axios.post(`${Api_Address}/api/v1/banner/edit/${bannerId}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    accessToken: localStorage.getItem("accessToken"),
                },
            }).then((res) => {
                toast.success(res.data.success)
                navigate("/admin/web/banners")
            }).catch((res) => {
                toast.error(res.response.data.error)
            })
        }
    }

    const [pages, setPages] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`${Api_Address}/api/v1/page`, {
                headers: {
                    accessToken: localStorage.getItem("accessToken"),
                }
            }).then((res) => {
                setPages(res.data.pages)
            })
        }
        fetchData()
    }, [])

    return (
        <>
            <div className='card border-0 shadow my-5'>
                <div className={`card-header p-3 ${darkMode ? "bg-dark-blue-footer text-white" : null}`}>
                    <div className='h5'>
                        <div>Web Banner Create</div>
                    </div>
                </div>
                <div className={`card-body h-auto ${darkMode ? "bg-dark-blue text-white" : ""}`}>
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

                                        <input type="file" name="banner_img" id="upload" hidden onChange={onImageChange} />
                                    </>
                                    :
                                    <>
                                        <img alt="" src={image} className='img-fluid' />
                                    </>
                            }
                        </div>
                        <div className='col-xl-6 mb-4'>
                            <div className="input-group">
                                <span className="input-group-text bg-white justify-content-center" style={{ width: "100px" }} id="basic-addon1">Start Date</span>
                                <input value={banner.start_date} name='start_date' onChange={handleChange} type="date" className="form-control" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className='col-xl-6 mb-4'>
                            <div className="input-group">
                                <span className="input-group-text bg-white justify-content-center" style={{ width: "100px" }} id="basic-addon1">End Date</span>
                                <input value={banner.end_date} name='end_date' onChange={handleChange} type="date" className="form-control" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className='col-xl-12 mb-4'>
                            <div className="input-group">
                                <span className="input-group-text bg-white justify-content-center" style={{ width: "100px" }} id="basic-addon1">Title</span>
                                <input value={banner.title} name='title' onChange={handleChange} className="form-control" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className='col-xl-12 mb-4'>
                            <div className="input-group">
                                <span className="input-group-text bg-white justify-content-center" style={{ width: "100px" }} id="basic-addon1">Url</span>
                                <input value={banner.url} name='url' onChange={handleChange} type="text" className="form-control" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className='col-xl-12 mb-4'>
                            <div className="input-group">
                                <span className="input-group-text bg-white justify-content-center" style={{ width: "100px" }} id="basic-addon1">Priorty</span>
                                <input value={banner.priorty} name='priorty' onChange={handleChange} type="text" className="form-control" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className='col-xl-12 mb-4'>
                            <div className="input-group">
                                <span className="input-group-text bg-white justify-content-center" style={{ width: "100px" }} id="basic-addon1">Note</span>
                                <textarea value={banner.note} name='note' onChange={handleChange} type="text" className="form-control" aria-describedby="basic-addon1" rows={4}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-xl-3'>
                            <select name='welayat' className="form-select form-select-sm" onChange={handleChange}>
                                <option value={banner.welayat} defaultValue>{banner.welayat}</option>
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
                                <option value={banner.pageId} defaultValue>{banner.pageId}</option>
                                {pages.map((page, index) => (
                                    <option key={index} value={page.id}>{page.name}</option>
                                ))}
                            </select>
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

export default AdminWebBannerEdit