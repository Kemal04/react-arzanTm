import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import Api_Address1 from '../../env1';
import { toast } from 'react-toastify';

const initialState = {
    user: "",
    token: "",
    status: false,
    isLoading: false,
    isError: false
}

export const authRegisterUser = createAsyncThunk(
    'register',
    async (body) => {
        await axios.post(`${Api_Address1}/sign_up`, body)
            .then((res) => {
                toast.success("Registered")
                return res.data
            }).catch((err) => {
                toast.success("Error Register")
            })
    }
)

export const authLoginUser = createAsyncThunk(
    'login',
    async (body) => {
        await axios.post(`${Api_Address1}/checkactivate`, body)
            .then((res) => {
                toast.success("Logined")
                return res.data
            }).catch((err) => {
                toast.success("Error Login")
            })
    }
)

const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        addToken: (state, action) => {
            state.token = localStorage.getItem('token')
        },
        addUser: (state, action) => {
            state.user = localStorage.getItem('user')
        },
        logout: (state, action) => {
            state.token = null
            localStorage.clear()
        }
    },
    extraReducers: (builder) => {

        //Register
        builder.addCase(authRegisterUser.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(authRegisterUser.fulfilled, (state) => {
            state.isLoading = false
            state.status = true
        })
        builder.addCase(authRegisterUser.rejected, (state) => {
            state.isError = true
        })

        //Login
        builder.addCase(authLoginUser.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(authLoginUser.fulfilled, (state, { payload: { token, status } }) => {
            state.isLoading = false
            state.status = status
            state.token = token

            localStorage.setItem("status", status)
            localStorage.setItem("token", token)
        })
        builder.addCase(authLoginUser.rejected, (state) => {
            state.isError = true
        })
    },
});

export const { addToken, addUser, logout } = auth.actions

export default auth.reducer