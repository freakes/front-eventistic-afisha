import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import MyButton from "./UI/button/MyButton";
import {useFetching} from "../hooks/useFetching";
import EventService from "../API/EventService";

interface EventItemProps {
    itemName: string;
    itemDate: string;
    // challengers: string[];
    description: string;
    id: number
    deleteEventById: (id: number) => void
}

const EventItem = ({itemName, itemDate, description, id, deleteEventById}: EventItemProps) => {





    return (
            <div className="event__item ">
                <div className="event__item__name">
                    {itemName}
                </div>
                <div className="event__item__date">
                    {itemDate}
                </div>
                <div className={"redact__event__item__button"}>
                    <MyButton>редактировать</MyButton>
                </div>
                <hr/>
                <div className="event__item__description">
                    {description}
                </div>

                <hr/>
                <div className="event__item__challengers">
                    <MyButton onClick={(e) => deleteEventById(id)} className={"event__item__delete_btn"}>удалить</MyButton>
                </div>
            </div>

    );
};

export default EventItem;