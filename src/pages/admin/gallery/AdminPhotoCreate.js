import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import img_icon from '../../../assets/icons/img.svg'

const AdminPhotoCreate = () => {

    const { darkMode } = useContext(ThemeContext)

    const [webImage, setWebImage] = useState(null)

    const [appImage, setAppImage] = useState(null)

    const onImageChangeWeb = (event) => {
        if (event.target.files && event.target.files[0]) {
            setWebImage(URL.createObjectURL(event.target.files[0]));
        }
    }

    const onImageChangeApp = (event) => {
        if (event.target.files && event.target.files[0]) {
            setAppImage(URL.createObjectURL(event.target.files[0]));
        }
    }

    return (
        <>
            <div className='card border-0 shadow my-5'>
                <div className={`card-header p-3 ${darkMode ? "bg-dark-blue-footer text-white" : null}`}>
                    <div className='h5'>
                        <div>Photo Create</div>
                    </div>
                </div>
                <div className={`card-body h-auto ${darkMode ? "bg-dark-blue text-white" : ""}`}>
                    <div className='row align-items-center'>
                        <div className='col-xl-4 mb-4'>
                            {
                                webImage === null
                                    ?
                                    <>
                                        <label className='label text-center d-flex justify-content-center align-items-center flex-column' htmlFor="upload">
                                            <img src={img_icon} alt="" className='img-fluid mb-2' />
                                            <div className='text-green'>App surat goş</div>
                                        </label>

                                        <input type="file" name="banner_img" id="upload" hidden onChange={onImageChangeWeb} />
                                    </>
                                    :
                                    <>
                                        <img alt="" src={webImage} className='img-fluid' />
                                    </>
                            }
                        </div>
                        <div className='col-xl-8 mb-4'>
                            {
                                appImage === null
                                    ?
                                    <>
                                        <label className='label text-center d-flex justify-content-center align-items-center flex-column' htmlFor="upload">
                                            <img src={img_icon} alt="" className='img-fluid mb-2' />
                                            <div className='text-green'>Web surat goş</div>
                                        </label>

                                        <input type="file" name="banner_img" id="upload" hidden onChange={onImageChangeApp} />
                                    </>
                                    :
                                    <>
                                        <img alt="" src={appImage} className='img-fluid' />
                                    </>
                            }
                        </div>
                        <div className='col-xl-12 mb-4'>
                            <div className="input-group">
                                <span className="input-group-text bg-white justify-content-center" style={{ width: "100px" }} id="basic-addon1">Title</span>
                                <input name='title' className="form-control" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className='col-xl-12 mb-4'>
                            <div className="input-group">
                                <span className="input-group-text bg-white justify-content-center" style={{ width: "100px" }} id="basic-addon1">Note</span>
                                <textarea name='note' type="text" className="form-control" aria-describedby="basic-addon1" rows={4}></textarea>
                            </div>
                        </div>
                        <div className='col-xl-12'>
                            <div className="form-check form-switch ms-3">
                                <input name='isActive' className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Is Active</label>
                            </div>
                        </div>
                    </div>

                    <div className='col-xl-12 d-flex justify-content-center mt-5'>
                        <button className='btn btn-primary' style={{ backgroundColor: '#0500FF', padding: "10px 160px" }}>Apply</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminPhotoCreate