import React, { useContext } from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { Home } from './pages/interface'
import { AdminNavbar, AdminSidebar, Footer, Navbar } from './components'
import { Admin } from './pages/admin'
import { ThemeContext } from './context/ThemeContext'

const App = () => {

    const { darkMode } = useContext(ThemeContext)

    return (
        <>
                <BrowserRouter>
                    <Routes>

                        <Route path='/' element={<HomeLayout />} >
                            <Route path='/' element={<Home />} />
                        </Route>

                        <Route path='/admin' element={<AdminLayout darkMode={darkMode} />} >
                            <Route path='' element={<Admin />} />
                        </Route>

                    </Routes>
                </BrowserRouter>
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

const AdminLayout = ({ darkMode }) => {
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