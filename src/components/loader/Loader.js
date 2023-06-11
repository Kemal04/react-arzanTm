import React, { useEffect, useState } from 'react'

const Loader = () => {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    return (
        <div>Loader</div>
    )
}

export default Loader