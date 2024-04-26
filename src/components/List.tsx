import '../App.css'
import {FormData} from "./typed"
import {useEffect, useState} from "react";

type ListProps = {
    data: FormData
}


function List({data}: ListProps) {

    const [allItems, setAllItems] = useState<Array<string>>([])


    useEffect(() => {
        generateItems()
    }, []);

    function generateItems() {
        setAllItems(["Unterhose", "Socken"])
    }

    return (
        <>
            <h1>Packliste</h1>

            {allItems.map(item =>

                <label>
                    <input type={"checkbox"}
                    />
                    {item}
                </label>
            )}

        </>
    )
}

export default List
