import React, {useState} from 'react';
import '../styles/RegisterPage.css'
import EventService from "../API/EventService";
import {Link, useNavigate} from "react-router-dom";

interface RegProps {

}

const RegistrationPage = () => {

    const [registerData, setRegisterData] = useState<{email: string, password: string}>({email: '', password: ''});
    const navigate = useNavigate();
    const register = (e: SubmitEvent) => {
        e.preventDefault();
        const response = EventService.registration(registerData.email, registerData.password);
        response.then((value) => {
            if (value === "Success") {
                navigate("/login")
            } else {
                alert("Ошибка регистрации, пожалуйста, попробуйте позже");
                navigate("/registration")
            }
        })
    }
    return (
        //@ts-ignore
        <form onSubmit={register} className="login">
            <h3>Eventistic</h3>
            <input onChange={(e) => setRegisterData({...registerData, email: e.target.value})} type="email" placeholder="Email"/>
            <input onChange={(e) => setRegisterData({...registerData, password: e.target.value})} type="password" placeholder="Password"/>
            <button type={"submit"}>SIGN UP</button>
            <Link to={"/login"}>Уже зарегестрированы?</Link>
        </form>
    );
};

export default RegistrationPage;