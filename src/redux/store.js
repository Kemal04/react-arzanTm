import { configureStore } from '@reduxjs/toolkit'
import bannerReducer from './slices/banner';
import usersReducer from './slices/users';

const reducer = {
    banner: bannerReducer,
    users: usersReducer,
}

const store = configureStore({
    reducer: reducer,
    devTools: true,
})

export default store;