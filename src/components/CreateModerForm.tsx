import React from 'react';
import MyButton from "./UI/button/MyButton";
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import {useUsers} from "../hooks/useUsers";

interface CreateGroupProps {
    create: () => void;
}


const CreateModerForm = ({create}: CreateGroupProps) => {

    const animatedComponents = makeAnimated();
    const [options, optionsError] = useUsers();

    return (
        <form onSubmit={create} className={"create__event__form"}>
            <h4>Добавление модератора</h4>
            <br/>{optionsError
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

            <MyButton className={"create__event__button"}>Добавить модератора(ов)</MyButton>
        </form>
    );
};

export default CreateModerForm;