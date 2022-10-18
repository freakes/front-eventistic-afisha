import React, {useEffect, useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";
import MyButton from "./UI/button/MyButton";
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import {useNavigate} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import EventService from "../API/EventService";
import {log} from "util";
import {useUsers} from "../hooks/useUsers";

interface CreateGroupProps {
    create: () => void;
}


const CreateGroupForm = ({create}: CreateGroupProps) => {
    const animatedComponents = makeAnimated();

    const [options, eventError] = useUsers();


    return (
        <form onSubmit={create} className={"create__event__form"}>
            <h4>Создание группы</h4>
            <MyInput className={"event_name_input"} placeholder={"Название группы"}/>
            <br/>
            <MyInput className={"create__event__description_input"} placeholder={"Описание"}/>
            <hr/>
            <br/>{eventError
            ? <div>Ошибка загрузки пользователей!</div>
            :
            <Select
                onChange={(e) => console.log(e)}
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti={true}
                name={"phases"}
                defaultValue={"Этапы события"}
                //@ts-ignore
                options={options}
            />}
            <br/>


            <MyButton className={"create__event__button"}>Создать группу</MyButton>
        </form>
    );
};

export default CreateGroupForm;