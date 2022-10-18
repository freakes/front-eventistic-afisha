import React, {useState} from 'react';
import EventService from "../API/EventService";
import '../styles/RegisterPage.css'
import {Link, useNavigate} from "react-router-dom";
import Cookies from "universal-cookie";

interface LogProps {

}

const LoginPage = () => {
    const [loginData, setLoginData] = useState<{ email: string, password: string }>({email: '', password: ''});

    const navigate = useNavigate();
    const cookies = new Cookies();
    console.log(cookies.get('isLogin'));

    const login = (e: SubmitEvent) => {
        e.preventDefault();
        const response = EventService.login(loginData.email, loginData.password);
        response.then((value) => {
            if (value === "success") {
                cookies.set('isLogin', true, { path: '/' });
                cookies.set('isLogin', true, { path: '' });
                cookies.set('isLogin', true, { path: '/login' });
                navigate("/")
            } else {
                console.log(value)
                alert("Ошибка авторизации, проверьте логин и пароль на правильность!");
                navigate("/login")
            }
        })

    }
    return (
        //@ts-ignore
        <form onSubmit={login} className="login">
            <h3>Eventistic</h3>
            <input onChange={(e) => setLoginData({...loginData, email: e.target.value})} type="email"
                   placeholder="Email"/>
            <input onChange={(e) => setLoginData({...loginData, password: e.target.value})} type="password"
                   placeholder="Password"/>
            <button type={"submit"}>LOG IN</button>
            <Link to={"/registration"}>Ещё не зарегестрированы?</Link>
        </form>
    );
}
export default LoginPage;
