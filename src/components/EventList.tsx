import React from 'react';
import EventItem from "./EventItem";
import loginPage from "../pages/LoginPage";

interface EventListProps {
    eventsList: {id: number, event_name: string, description: string, date_of_event: string, phases: [], groups: []}[];
    deleteEventById: (id: number) => void
}

const EventList = ({eventsList, deleteEventById}: EventListProps) => {
    console.log(eventsList)
    return (
        <div className="event__list">
            {eventsList.map((e) => (
                <EventItem
                    key={e.id}
                    id={e.id}
                    deleteEventById={deleteEventById}
                    itemName={e.event_name}
                    itemDate={e.date_of_event}
                    // challengers={e.groups}
                    description={e.description}
                />
            ))}
        </div>
    );
};

export default EventList;