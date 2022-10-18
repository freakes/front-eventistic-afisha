import {useEffect, useState} from "react";
import {useFetching} from "./useFetching";
import EventService from "../API/EventService";

export const useUsers = () => {
    const [options, setOptions] = useState<{value: string, label: string}[]>([]);
    let temp_arr: {value: string, label: string}[] = []
    const [fetchEvents, isEventsLoading, eventError] = useFetching(async () => {
        const response = await EventService.getUsers();

        console.log(response);
        response.data.map((user: {id: number, login: string, is_moderator: boolean, is_admin: boolean}) => {
            if (temp_arr.length !== response.data.length) {
                temp_arr.push({value: user.login, label: user.login});
            }
        })});

    useEffect(() => {
        console.log(temp_arr)
        //@ts-ignore
        fetchEvents();
        setOptions(temp_arr);
    }, [])
    return [options, eventError]
}