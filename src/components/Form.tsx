import {FormEvent, useEffect, useState} from 'react'
import '../App.css'
import {FormData} from "./typed"
import List from "./List.tsx";


function Form() {

    const [data, setData] = useState<FormData>({
        gender: "mann",
        hygieneLevel: 3,
        countDays: 1,
        holydayType: "Strand"
    });


    const [hygieneText, setHygieneText] = useState<string>("");


    function sendForm(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log("Formular abgeschickt")
    }

    useEffect(() => {


        switch (data.hygieneLevel) {
            case 1:
                setHygieneText("Unhygienisch💩")
                break;
            case 2:
                setHygieneText("Eher unhygienisch🦨")
                break;
            case 3:
                setHygieneText("Hygienisch🪥")
                break;
            case 4:
                setHygieneText("Gut hygienisch😉")
                break;
            case 5:
                setHygieneText("Übertrieben hygienisch🫧")
                break;
            default:
                setHygieneText("")
                break;
        }

    }, [data.hygieneLevel]);


    function GanzForm() {
        return (
            <>

                <h1>Form</h1>

                <form onSubmit={(event) => sendForm(event)}>


                    <label>Wähle dein Geschlecht:
                        <select name="gender" value={data.gender}
                                onChange={(event) => setData((prev) => ({
                                    ...prev,
                                    gender: event.target.value
                                }))}>
                            <option value="mann">Mann</option>
                            <option value="frau">Frau</option>
                            <option value="divers">Divers</option>
                        </select>
                    </label>


                    <label>Dein Hygienelevel
                        <input type={"range"} min={"1"} max={"5"} value={data.hygieneLevel}
                               onChange={(event) => setData((prev) => ({
                                   ...prev,
                                   hygieneLevel: parseInt(event.target.value)
                               }))} className="slider"/>
                    </label>
                    <p>{hygieneText}</p>


                    <label>Wie viele Tage?
                        <input type={"number"} min={"1"} value={data.countDays}
                               onChange={(event) => setData((prev) => ({
                                   ...prev,
                                   countDays: parseInt(event.target.value)
                               }))}/>
                    </label>


                    <label>Wo sind deine Ferien?
                        <select name="holydayType" value={data.holydayType}
                                onChange={(event) => setData((prev) => ({
                                    ...prev,
                                    holydayType: event.target.value
                                }))}>
                            <option value="strand">Strand</option>
                            <option value="berge">Berge</option>
                            <option value="natur">Natur</option>
                        </select>
                    </label>


                    <input type="submit" value={"Packliste generieren"}/>


                </form>

            </>


        )
    }


    return (
        <>
            <GanzForm/>


            <List data={data}/>


        </>
    )
}

export default Form
