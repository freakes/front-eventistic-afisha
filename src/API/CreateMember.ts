import EventService from "./EventService"
import Cookies from "universal-cookie";
import MainPage from "../pages/MainPage";

interface CreateNewEventProps {
    eventPhases: {beginning: string,
        ending: string, phase_name: string, phase_description: string}[];
    eventName: {eventName: string};
    eventDescription: {eventDescription: string};
    eventDate: {eventDate: string};
}

export default class CreateMember {

    static createNewEvent = ({eventName, eventPhases, eventDescription, eventDate}: CreateNewEventProps) => {
        const cookies = new Cookies();
        if (eventDate !== undefined) {
            const response = EventService.newEvent(eventName.eventName, eventDate.eventDate, eventDescription.eventDescription, eventPhases);
            response.then(value => {
                if (value.data === 'success') {
                    window.location.reload(); // ПОМЕНЯТЬ!!!
                }
            })
        }

    }
    static createNewGroup = () => {

    }
    static createNewModer = () => {

    }
}
