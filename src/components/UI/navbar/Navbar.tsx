import React, {useState} from 'react';
import {Container} from "react-bootstrap";
import MyButton from "../button/MyButton";
import MyModal from "../modal/MyModal";
import CreateEventForm from "../../CreateEventForm";
import {useNavigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/src/dropdown.js';
import CreateGroupForm from "../../CreateGroupForm";
import CreateModerForm from "../../CreateModerForm";
import CreateMember from "../../../API/CreateMember";
import Cookies from "universal-cookie";

interface NavProps {

}

const Navbar = () => {
    const [modalEvent, setModalEvent] = useState<boolean>(false);
    const [modalGroup, setModalGroup] = useState<boolean>(false);
    const [modalModer, setModalModer] = useState<boolean>(false);
    const navigate = useNavigate();
    const cookies  = new Cookies();

    return (
        <header>
            <MyModal visible={modalEvent} setVisible={setModalEvent}>
                <CreateEventForm/>
            </MyModal>
            <MyModal visible={modalGroup} setVisible={setModalGroup}>
                <CreateGroupForm create={CreateMember.createNewGroup}/>
            </MyModal>
            <MyModal visible={modalModer} setVisible={setModalModer}>
                <CreateModerForm create={CreateMember.createNewModer}/>
            </MyModal>
            <Container>

                {cookies.get('isLogin')
                    ?
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                Меню
                            </button>
                            <ul className="dropdown-menu">
                                <li><MyButton onClick={() => setModalEvent(true)} className={"create_event_show_button"}>
                                    Создать событие</MyButton></li>
                                <li><MyButton onClick={() => setModalGroup(true)} className={"create_event_show_button"}>
                                    Создать группу</MyButton></li>
                                <li><MyButton onClick={() => setModalModer(true)} className={"create_event_show_button"}>
                                    Добавить модератора</MyButton></li>
                            </ul>
                        </div>
                    :<div></div>
                }
                <div className="logo">
                    eventistic
                </div>
                {cookies.get('isLogin') ?
                <div onClick={
                    (e) => {
                        cookies.set('isLogin', false, { path: '/' });
                        cookies.set('isLogin', false, { path: '' });
                        cookies.set('isLogin', false, { path: '/login' });
                        navigate("/login")
                    }
                } className="logout" >
                    <img src="https://www.svgrepo.com/show/423724/exit.svg" alt="logout"/>
                </div>
                : <div></div>
                }
            </Container>
        </header>
    );
};

export default Navbar;