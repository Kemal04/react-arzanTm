import { configureStore } from '@reduxjs/toolkit'
import bannerReducer from './slices/banner';
import usersReducer from './slices/users';
import discountsReducer from './slices/discount';
import categoriesReducer from './slices/category';

const reducer = {
    banner: bannerReducer,
    users: usersReducer,
    discounts: discountsReducer,
    categories: categoriesReducer,
}

const store = configureStore({
    reducer: reducer,
    devTools: true,
})

export default store;