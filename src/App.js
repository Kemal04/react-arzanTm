import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter as Router, Outlet, Route, Routes } from 'react-router-dom'
import axios from 'axios'

import { Foto, FotoRead, Home, Offical, OfficalExpired, OfficalFollow, OfficalSelf, PostAdd, Profile, ProfileBloked, ProfileWallet, TopList, Video } from './pages/interface'

import { AdminNavbar, AdminSidebar, Footer, Navbar, ScrollToTop } from './components'

import { Admin, AdminAppBannerCreate, AdminAppBanners, AdminCategories, AdminDiscountCreate, AdminDiscountEdit, AdminDiscounts, AdminOffical, AdminTopUsers, AdminUserCreate, AdminUserEdit, AdminUsers, AdminWebBannerCreate, AdminWebBannerEdit, AdminWebBanners } from './pages/admin'

import ThemeContextProvider, { ThemeContext } from './context/ThemeContext'

//TOAST
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

//CONTEXT
import { AuthContext } from './context/AuthContext'

//.ENV
import Api_Address from './env'

const App = () => {


    const [authState, setAuthState] = useState({
        name: "",
        email: "",
        id: 0,
        status: false,
        role: "User",
    });

    useEffect(() => {
        axios.get(`${Api_Address}/api/v1/auth/current_user`, {
            headers: {
                accessToken: localStorage.getItem("accessToken"),
            },
        })
            .then((res) => {
                if (!res.data.error) {
                    setAuthState({
                        name: res.data.name,
                        email: res.data.email,
                        id: res.data.id,
                        status: true,
                        role: res.data.role,
                    });
                } else {
                    setAuthState({ ...authState, status: false, role: "User" });
                }
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <ThemeContextProvider>
                <AuthContext.Provider value={{ authState, setAuthState }}>
                    <Router>
                        <ScrollToTop />
                        <ToastContainer />
                        <Routes>

                            <Route path='/' element={<HomeLayout />} >
                                <Route path='/' element={<Home />} />

                                <Route path='/foto' element={<Foto />} />
                                <Route path='/foto/arzanTm' element={<FotoRead />} />

                                <Route path='/video' element={<Video />} />

                                <Route path='/top-list' element={<TopList />} />

                                {
                                    authState.role === 'User' && (
                                        <>
                                            <Route path='/profile' element={<Profile />} />
                                            <Route path='/profile/wallet' element={<ProfileWallet />} />
                                            <Route path='/profile/bloked' element={<ProfileBloked />} />
                                            <Route path='/post-gosmak' element={<PostAdd />} />
                                        </>
                                    )
                                }

                                {
                                    authState.role === "Offical" && (
                                        <>
                                            <Route path='/offical' element={<Offical />} />
                                            <Route path='/offical/follow' element={<OfficalFollow />} />
                                            <Route path='/offical/expired' element={<OfficalExpired />} />
                                            <Route path='/offical/self' element={<OfficalSelf />} />
                                            <Route path='/post-gosmak' element={<PostAdd />} />
                                        </>
                                    )
                                }

                            </Route>

                            <Route path='/admin' element={<AdminLayout />} >
                                <Route path='' element={<Admin />} />

                                <Route path='categories' element={<AdminCategories />} />

                                <Route path='offical/users' element={<AdminOffical />} />
                                <Route path='users' element={<AdminUsers />} />
                                <Route path='top-users' element={<AdminTopUsers />} />
                                <Route path='user-create' element={<AdminUserCreate />} />
                                <Route path='user-edit/:userId' element={<AdminUserEdit />} />

                                <Route path='web/banners' element={<AdminWebBanners />} />
                                <Route path='web/banner-create' element={<AdminWebBannerCreate />} />
                                <Route path='web/banner-edit/:bannerId' element={<AdminWebBannerEdit />} />

                                <Route path='discounts' element={<AdminDiscounts />} />
                                <Route path='discount-create' element={<AdminDiscountCreate />} />
                                <Route path='discount-edit/:discountId' element={<AdminDiscountEdit />} />

                                <Route path='app/banners' element={<AdminAppBanners />} />
                                <Route path='app/banner-create' element={<AdminAppBannerCreate />} />
                            </Route>

                        </Routes>
                    </Router>
                </AuthContext.Provider>
            </ThemeContextProvider>
        </>
    )
}

const HomeLayout = () => {
    return (
        <>
            <Navbar />

            <Outlet />

            <Footer />
        </>
    );
};

const AdminLayout = () => {

    const { darkMode } = useContext(ThemeContext)

    return (
        <div className={`${darkMode ? "bg-dark" : "bg-main"}`}>
            <AdminNavbar />
            <div className="container">
                <div className="row">
                    <nav id='sidebarMenu' className="col-xl-2 col-lg-2 col-md-2 d-md-block position-fixed collapse" style={darkMode ? { backgroundColor: "#212529", zIndex: "100" } : { backgroundColor: "#edf2f9", zIndex: "100" }}>
                        <AdminSidebar />
                    </nav>

                    <main className="col-xl-9 col-lg-9 col-md-9 ms-sm-auto px-md-4">
                        <Outlet />
                    </main>
                </div>
            </div >
        </div >
    );
};

export default App