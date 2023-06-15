import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
    discounts: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
};

export const getAllDiscounts = createAsyncThunk(
    "discounts/getAll",
    async () => {
        const { data } = await axios.get(`https://it.net.tm/arzanapi/api/v1/discount`)
        return data.discounts
    }
);

export const createDiscount = createAsyncThunk(
    "discount/create",
    async (formData) => {
        await axios.post(`https://it.net.tm/arzanapi/api/v1/discount/create`, formData, {
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

export const updateDiscount = createAsyncThunk(
    "discount/update",
    async ({ formData, discountId }) => {
        await axios.post(`https://it.net.tm/arzanapi/api/v1/discount/edit/${discountId}`, formData, {
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


export const deleteDiscount = createAsyncThunk(
    "discount/delete",
    async (id) => {
        const { data } = await axios.delete(`https://it.net.tm/arzanapi/api/v1/discount/delete/${id}`, {
            headers: {
                accessToken: localStorage.getItem("accessToken"),
            },
        })
        toast.success(data.success)
        return id
    }
);

const discountSlice = createSlice({
    name: "discount",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllDiscounts.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getAllDiscounts.fulfilled, (state, action) => {
            state.isLoading = false
            state.discounts = action.payload
        })
        builder.addCase(getAllDiscounts.rejected, (state, action) => {
            state.isError = true
        })


        builder.addCase(createDiscount.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(createDiscount.fulfilled, (state, action) => {
            state.isSuccess = true
        })
        builder.addCase(createDiscount.rejected, (state, action) => {
            state.isError = true
        })


        builder.addCase(updateDiscount.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(updateDiscount.fulfilled, (state, action) => {
            state.isLoading = false
        })
        builder.addCase(updateDiscount.rejected, (state, action) => {
            state.isError = true
        })


        builder.addCase(deleteDiscount.fulfilled, (state, action) => {
            const newList = state.discounts.filter((x) => x.id !== action.payload)
            state.discounts = newList
        })
    },
});

const { reducer } = discountSlice;
export default reducer;