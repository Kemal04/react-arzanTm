import React, { useContext } from 'react'
import { BrowserRouter as Router, Outlet, Route, Routes } from 'react-router-dom'

import { Foto, FotoRead, Home, NoticeCreate, NoticeRead, Notices, Notifications, Offical, OfficalExpired, OfficalFollow, OfficalSelf, PostAdd, Profile, ProfileBloked, ProfileWallet, TopList, Video } from './pages/interface'

import { AdminNavbar, AdminSidebar, Footer, Navbar, ScrollToTop } from './components'

import { Admin, AdminAppBannerCreate, AdminAppBanners, AdminAppCategory, AdminAppCategoryCreate, AdminDiscountCreate, AdminDiscountEdit, AdminDiscounts, AdminOffical, AdminPhoto, AdminPhotoCreate, AdminTopUsers, AdminUserCreate, AdminUserEdit, AdminUsers, AdminVideo, AdminVideoCreate, AdminWebBannerCreate, AdminWebBannerEdit, AdminWebBanners, AdminWebCategory, AdminWebCategoryCreate } from './pages/admin'

import ThemeContextProvider, { ThemeContext } from './context/ThemeContext'

//TOAST
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { NotificationRead } from './pages/interface'

const App = () => {

    return (
        <>
            <ThemeContextProvider>
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

                            <Route path='/profile' element={<Profile />} />
                            <Route path='/profile/wallet' element={<ProfileWallet />} />
                            <Route path='/profile/bloked' element={<ProfileBloked />} />

                            <Route path='/offical' element={<Offical />} />
                            <Route path='/offical/follow' element={<OfficalFollow />} />
                            <Route path='/offical/expired' element={<OfficalExpired />} />
                            <Route path='/offical/self' element={<OfficalSelf />} />

                            <Route path='/post-gosmak' element={<PostAdd />} />

                            <Route path='/bildirisler' element={<Notifications />} />
                            <Route path='/bildiris/:notificationId' element={<NotificationRead />} />

                            <Route path='/habarnamalar' element={<Notices />} />
                            <Route path='/habarnama/:noticeId' element={<NoticeRead />} />
                            <Route path='/habarnama-gos' element={<NoticeCreate />} />
                        </Route>

                        <Route path='/admin' element={<AdminLayout />} >
                            <Route path='' element={<Admin />} />

                            <Route path='offical/users' element={<AdminOffical />} />
                            <Route path='users' element={<AdminUsers />} />
                            <Route path='top-users' element={<AdminTopUsers />} />
                            <Route path='user-create' element={<AdminUserCreate />} />
                            <Route path='user-edit/:userId' element={<AdminUserEdit />} />

                            <Route path='discounts' element={<AdminDiscounts />} />
                            <Route path='discount-create' element={<AdminDiscountCreate />} />
                            <Route path='discount-edit/:discountId' element={<AdminDiscountEdit />} />
                            
                            <Route path='gallery/photo' element={<AdminPhoto />} />
                            <Route path='gallery/photo-create' element={<AdminPhotoCreate />} />
                            <Route path='gallery/video' element={<AdminVideo />} />
                            <Route path='gallery/video-create' element={<AdminVideoCreate />} />

                            {/* WEB */}
                            <Route path='web/banners' element={<AdminWebBanners />} />
                            <Route path='web/banner-create' element={<AdminWebBannerCreate />} />
                            <Route path='web/banner-edit/:bannerId' element={<AdminWebBannerEdit />} />

                            <Route path='web/categories' element={<AdminWebCategory />} />
                            <Route path='web/category-create' element={<AdminWebCategoryCreate />} />

                            {/* APP */}
                            <Route path='app/banners' element={<AdminAppBanners />} />
                            <Route path='app/banner-create' element={<AdminAppBannerCreate />} />

                            <Route path='app/categories' element={<AdminAppCategory />} />
                            <Route path='app/category-create' element={<AdminAppCategoryCreate />} />
                        </Route>

                    </Routes>
                </Router>
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