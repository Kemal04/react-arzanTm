import React from 'react'
import img from '../../../assets/icons/img.svg'

const PostAdd = () => {
    return (
        <>
            <div className='container mt-3'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='h3'>Post goşmak</div>
                </div>

                <div className='row justify-content-center g-0 mt-3'>
                    <div style={{ width: "70%" }}>
                        <div className='col-xl-12 mb-4'>
                            <input type="file" id="upload" hidden />
                            <label className='label text-center' htmlFor="upload">
                                <img src={img} alt="" className='img-fluid mb-2' />
                                <div className='text-green'>Surat goş</div>
                            </label>
                        </div>
                        <div className="col-xl-12 mb-4">
                            <input type="text" className="form-control" placeholder='Post ady' />
                        </div>
                        <div className='col-xl-12 mb-4'>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" placeholder='Doly maglumaty'></textarea>
                        </div>
                        <div className='col-xl-12 mb-4'>
                            <select className="form-select" disabled>
                                <option selected>Kategoriýa saýlaň</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col-xl-12 mb-4">
                            <input type="text" className="form-control" placeholder='Hash tag (#tag #tag2)' />
                        </div>
                        <div className='col-xl-12 mb-4'>
                            <div className='d-flex align-items-center'>
                                <input class="form-check-input me-2" type="checkbox" value="" style={{ width: "20px", height: "20px", borderRadius: "3px" }} />
                                <input type="text" className="form-control" placeholder='Telefon belgi' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostAdd