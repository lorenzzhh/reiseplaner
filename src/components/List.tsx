import '../App.css'
import {FormData} from "./typed"
import {useEffect, useState} from "react";
import {useRef} from 'react';

type ListProps = {
    data: FormData
}


function List({data}: ListProps) {

    const [allItems, setAllItems] = useState<Array<string>>([])

    const [countryUrl, setCountryUrl] = useState("https://flagcdn.com/h40/de.png")


    useEffect(() => {
        generateItems()
        setCountryUrl("https://flagcdn.com/h40/" + data.countryCode.toLowerCase() + ".png")

    }, [data]);


    function generateItems() {

        const arrayBefore = [];

        const countUnderwear = Math.ceil((data.countDays + 1) * (data.hygieneLevel / 3))
        arrayBefore.push(countUnderwear + "x Unterhosen")
        arrayBefore.push(countUnderwear + "x Socken")

        const countTshirts = Math.ceil(countUnderwear / 2)
        arrayBefore.push(countTshirts + "x T-Shirts")


        switch (data.holydayType) {
            case "strand":
                arrayBefore.push("Badehose")
                arrayBefore.push("Sonnencreme")
                break;
            case "berge":
                arrayBefore.push("Wanderschuhe")
                break;
            case "natur":
                arrayBefore.push("Trackingschuhe")
                break;
        }


        arrayBefore.push("Neccesaire/Hygieneartikel")
        arrayBefore.push("Ladekabel")
        arrayBefore.push("Jacke")
        arrayBefore.push("Wasserflasche")

        setAllItems(arrayBefore)
    }


    const divRef = useRef(null);

/*    const downloadContentAsPDF = () => {
        /!*const content = divRef.current;*!/
        const pdf = new jsPDF();

        // Füge Titel hinzu
        pdf.setFontSize(16);
        pdf.text('Packliste', 10, 10);

       /!* // Füge den Inhalt aus dem Div hinzu
        pdf.setFontSize(12)
        pdf.text(content.innerText, 10, 20);*!/

        pdf.save('packliste.pdf'); // Speichere das PDF mit dem angegebenen Namen
    };*/


    return (
        <>
            <div className={"list"}>
                <h1 style={{backgroundImage: "url(" + countryUrl + ")", height: "2.4rem"}}></h1>

                <div ref={divRef}>
                    {allItems.map(item =>
                        <label key={item}>
                            <input type={"checkbox"}
                            />
                            {item}
                        </label>
                    )}
                </div>


            </div>

            {/*<button onClick={downloadContentAsPDF}>Packliste herunterladen</button>*/}

        </>
    )
}

export default List
