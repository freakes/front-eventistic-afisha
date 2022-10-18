import axios from "axios";

export default class PostService {

    static async newEvent(event_name: string, date_of_event: string, description: string, phases: {beginning: string,
        ending: string, phase_name: string, phase_description: string}[]) {
        const response = await axios({method: 'post', url: `http://localhost:8080/events/create`,
        headers: {}, data: {event_name: event_name, description: description, phases: phases}})
        return response
    }

    static async redactEvent() {
        const response = await axios.put('', )
        return response
    }

    static async getEvents() {
        const response = await axios.get('http://localhost:8080/events')
        return response
    }
    static async getUsers() {
        const response = await axios.get('http://localhost:8080/users')
        return response
    }

    static async deleteEvent(eventId: number) {
        const response = await axios.delete(`http://localhost:8080/events/delete/${eventId}`, )
        return response
    }

    static async registration(login: string, password: string) {
        const response = await axios({method: 'post', url: 'http://localhost:8080/users/registration',
        headers: {}, data: {login: login, password: password}})
        return response.data
    }

    static async login(login: string, password: string) {
        const response = await axios({method: 'post', url: 'http://localhost:8080/users/authorization',
            headers: {}, data: {login: login, password: password}})
        return response.data
    }

    static async changeRole() {
        const response = await axios.put('', )
        return response
    }

    static async deleteUser() {
        const response = await axios.delete('', )
        return response
    }

    static async createGroup() {
        const response = await axios.get('')
        return response
    }

    static async redactGroup() {
        const response = await axios.put('', )
        return response
    }
}