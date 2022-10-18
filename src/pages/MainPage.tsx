import React from 'react';
import '../styles/App.css';
import EventService from "../API/EventService";
import 'bootstrap/dist/css/bootstrap.min.css';
import EventList from "../components/EventList";
import {Container, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useFetching} from "../hooks/useFetching";
import {useNavigate} from "react-router-dom";
import Cookies from "universal-cookie";

interface MainPageProps {

}

const MainPage = () => {
    const navigate = useNavigate();
    const [events, setEvents] = useState<[]>([]);
    const cookies = new Cookies();

    const [fetchEvents, isEventsLoading, eventError] = useFetching(async () => {
        const response = await EventService.getEvents();
        setEvents(response.data);
    });

    useEffect(() => {
        //@ts-ignore
        fetchEvents();
    }, []);

    if (cookies.get('eventWasCreated') === true) {
        console.log(123)
        //@ts-ignore
        fetchEvents();
        //@ts-ignore
        fetchEvents();
        //@ts-ignore
        fetchEvents();
    }

    const deleteEventById = (id: number) => {
        const response = EventService.deleteEvent(id);
        response.then(value => {
            console.log(value.status)
        })        //@ts-ignore
        fetchEvents();
        //@ts-ignore
        fetchEvents();
        //@ts-ignore
        fetchEvents();
    }

    console.log(cookies.get('isLogin'));

    if (cookies.get('isLogin')) {
    return (
        <div className="App">
            <Container>
                <Row>
                    {eventError &&
                        <h1>Произошла ошибка(</h1>
                    }
                    {isEventsLoading
                        ? <h1>Идёт загрузка...</h1>
                        : <EventList deleteEventById={deleteEventById} eventsList={events}/>
                    }
                </Row>
            </Container>
        </div>
)} else {
        return (
            // @ts-ignore
            <div>
            <h5>Требуется авторизация!</h5>
            {navigate("/login")}
        </div>
    )}}

export default MainPage;