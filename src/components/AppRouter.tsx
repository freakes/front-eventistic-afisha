import React, {useState} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Navbar from "./UI/navbar/Navbar";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import RegistrationPage from "../pages/RegistrationPage";
import Cookies from 'universal-cookie';


// console.log(cookies.get('myCat'));


const AppRouter = () => {
    // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

    const routes = [
        {path: '/registration', component: <RegistrationPage/>, exact: true},
        {path: '/', component: <MainPage/>, exact: true},
        {path: '', component: <MainPage/>, exact: true},
        {path: '/login', component: <LoginPage/>, exact: true},
    ]

    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                {routes.map(route =>
                    <Route
                        element={route.component}
                        path={route.path}
                    />
                )}
            </Routes>
        </BrowserRouter>

    );
};

export default AppRouter;