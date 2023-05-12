import React from 'react'

const PostAdd = () => {
    return (
        <>
            <div className='container mt-3'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='h3'>Post goşmak</div>
                </div>

                <div className='row justify-content-center g-0 mt-3'>
                    <div style={{ width: "60%" }}>
                        <div className='col-xl-12'>
                            <input type="file" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostAdd