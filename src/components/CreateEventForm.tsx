import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";
import MyButton from "./UI/button/MyButton";
import CreateMember from "../API/CreateMember";

interface CreateEventProps {

}

const CreateEventForm = () => {

    const [inputs, setInputs] = useState<number[]>([0]);
    const [eventName, setEventName] = useState<{eventName: string}>({eventName: ''});
    const [eventDescription, setEventDescription] = useState<{eventDescription: string}>({eventDescription: ''});
    const [eventDate, setEventDate] = useState<{eventDate: string}>({eventDate: ''});
    const [eventPhases, setEventPhases] = useState<{beginning: string,
        ending: string, phase_name: string, phase_description: string}[]>([{beginning: '',
        ending: '', phase_name: '', phase_description: ''}, {beginning: '',
        ending: '', phase_name: '', phase_description: ''}, {beginning: '',
        ending: '', phase_name: '', phase_description: ''}]);


    const showPhaseInputs = (numberOfPhases: number) => {
        if (numberOfPhases > inputs.length) {
            for (let i = 0; i<=numberOfPhases - 1; i++) {
                setInputs([...inputs, i])
            }
        } else {
            while (numberOfPhases !== 2 ?inputs.length !== 0 : inputs.length !== 1) {
                // @ts-ignore
                setInputs([inputs.shift()])
            }
            for (let i = 0; i <= numberOfPhases; i++) {
                setInputs([...inputs, i])
            }
        }
    }

    const callCreate = (e: SubmitEvent) => {
        e.preventDefault()
        CreateMember.createNewEvent({eventName, eventDescription, eventDate, eventPhases})

    }



    return (
        //@ts-ignore
        <form onSubmit={callCreate} className={"create__event__form"}>
            <h4>Создание события</h4>
            <MyInput onChange={(e) => setEventName({eventName: (e.target as HTMLTextAreaElement).value})}
                     className={"event_name_input"} placeholder={"Название события"}/>
            <br/>
            <MyInput onChange={(e) => setEventDescription({eventDescription:
                (e.target as HTMLTextAreaElement).value})} className={"create__event__description_input"}
                     placeholder={"Описание"}/>
            <br/>
            <MyInput onChange={(e) => setEventDate({eventDate: (e.target as HTMLTextAreaElement).value})}
                     className={"event_date_input"} placeholder={"Дата события"}/>
            <br/>
            <label htmlFor="phases">Этапы события</label>
            <MySelect
                onChange={(e) => showPhaseInputs(parseInt(e))}
                name={"phases"}
                defaultValue={"Этапы события"}
                options={[
                    {value: '1', name: '1'},
                    {value: '2', name: '2'},
                    {value: '3', name: '3'},
                ]}
            />

            {inputs.length
            ?
                inputs.map((n) => (
                    <div key={n}>
                        <hr/>
                        <hr/>
                        <MyInput onChange={(e) => {eventPhases[n] = {...eventPhases[n], phase_name:
                            (e.target as HTMLTextAreaElement).value}}} className={"event_name_input"} placeholder={"Название этапа"}/>
                        <MyInput onChange={(e) => {eventPhases[n] = {...eventPhases[n], phase_description:
                            (e.target as HTMLTextAreaElement).value}}} className={"event_name_input"} placeholder={"Описание этапа"}/>
                        <MyInput onChange={(e) => {eventPhases[n] = {...eventPhases[n], beginning:
                            (e.target as HTMLTextAreaElement).value}}} className={"event_date_input"} placeholder={"Дата начала этапа"}/>
                        <MyInput onChange={(e) => {eventPhases[n] = {...eventPhases[n], ending:
                            (e.target as HTMLTextAreaElement).value}}} className={"event_date_input"} placeholder={"Дата окончания этапа"}/>
                    </div>
                ))
                : <br/>}
            <br/>

            <MyButton className={"create__event__button"}>Создать событие</MyButton>
        </form>
    );
};

export default CreateEventForm;