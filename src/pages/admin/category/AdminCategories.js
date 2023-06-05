import React, { useEffect } from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCategory, getAllCategories } from '../../../redux/slices/category'

const AdminCategories = () => {

    const { darkMode } = useContext(ThemeContext)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { categories } = useSelector(state => state.categories)

    useEffect(() => {
        dispatch(getAllCategories())
    }, [dispatch])

    const handleDelete = async (id) => {
        dispatch(deleteCategory(id))
        navigate("/admin/users")
    }

    console.log(categories);

    return (
        <div>{categories}</div>
    )
}

export default AdminCategories