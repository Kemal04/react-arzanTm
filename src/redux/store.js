import { configureStore } from '@reduxjs/toolkit'
import bannerReducer from './slices/banner';

const reducer = {
    banner: bannerReducer,
}

const store = configureStore({
    reducer: reducer,
    devTools: true,
})

export default store;