import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import img_icon from '../../../assets/icons/img.svg'

const AdminAppCategoryCreate = () => {

    const { darkMode } = useContext(ThemeContext)

    const [image, setImage] = useState(null)

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    }

    return (
        <>
            <div className='card border-0 shadow my-5'>
                <div className={`card-header p-3 ${darkMode ? "bg-dark-blue-footer text-white" : null}`}>
                    <div className='h5'>
                        <div>App Category Create</div>
                    </div>
                </div>
                <div className={`card-body h-auto ${darkMode ? "bg-dark-blue text-white" : ""}`}>
                    <div className='row align-items-center'>
                        <div className='col-xl-12 mb-4'>
                            <div className='w-50'>
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
                        </div>
                        <div className='col-xl-6 mb-4'>
                            <div className="input-group">
                                <span className="input-group-text bg-white justify-content-center" style={{ width: "100px" }} id="basic-addon1">Title</span>
                                <input name='title' className="form-control" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className='col-xl-6 mb-4'>
                            <div className="input-group">
                                <span className="input-group-text bg-white justify-content-center" style={{ width: "100px" }} id="basic-addon1">Priority</span>
                                <input name='priority' type="text" className="form-control" aria-describedby="basic-addon1" />
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

export default AdminAppCategoryCreate