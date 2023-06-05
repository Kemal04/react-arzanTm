import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import Api_Address from "../../env";

const initialState = {
    categories: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
};

export const getAllCategories = createAsyncThunk(
    "categories/getAll",
    async () => {
        const { data } = await axios.get(`${Api_Address}/categories/sel/1/15/desc`)
        debugger
        return data
    }
);

export const creatCategory = createAsyncThunk(
    "category/create",
    async (formData) => {
        debugger
        await axios.post(`${Api_Address}/api/v1/category/create`, formData, {
            headers: {
                accessToken: localStorage.getItem("accessToken"),
            },
        }).then((res) => {
            toast.success(res.data.success)
        }).catch((res) => {
            toast.error(res.response.data.error)
        });
    }
);

export const updateCategory = createAsyncThunk(
    "category/update",
    async (category) => {
        await axios.post(`${Api_Address}/api/category/edit/${category.id}`, category, {
            headers: {
                accessToken: localStorage.getItem("accessToken"),
            },
        })
            .then((res) => {
                toast.success(res.data.success)
            }).catch((res) => {
                toast.error(res.response.data.error)
            });
    }
);


export const deleteCategory = createAsyncThunk(
    "category/delete",
    async (id) => {
        const { data } = await axios.delete(`${Api_Address}/api/v1/category/delete/${id}`, {
            headers: {
                accessToken: localStorage.getItem("accessToken"),
            },
        })
        toast.success(data.success)
        return id
    }
);

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllCategories.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getAllCategories.fulfilled, (state, action) => {
            state.isLoading = false
            state.categories = action.payload
        })
        builder.addCase(getAllCategories.rejected, (state, action) => {
            state.isError = true
        })


        builder.addCase(creatCategory.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(creatCategory.fulfilled, (state, action) => {
            state.isSuccess = true
        })
        builder.addCase(creatCategory.rejected, (state, action) => {
            state.isError = true
        })


        builder.addCase(updateCategory.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(updateCategory.fulfilled, (state, action) => {
            state.isLoading = false
        })
        builder.addCase(updateCategory.rejected, (state, action) => {
            state.isError = true
        })


        builder.addCase(deleteCategory.fulfilled, (state, action) => {
            const newList = state.categories.filter((x) => x.id !== action.payload)
            state.categories = newList
        })
    },
});

const { reducer } = categorySlice;
export default reducer;