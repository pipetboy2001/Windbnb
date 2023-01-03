import data from '../Json/Data.json'
import { useState } from "react"
import BoxItem from "./BoxItem"

export default function List({ location, adults, children }) {

    const [items, setItems] = useState(data)

    const countNoOfFilteredItems = () => {
        let count = 0
        items.map((item) => {
            if (item?.city === location && item?.maxGuests >= adults + children) {
                return count += 1
            }
        })
        return count;
    }


    const countNoOfGuestFilteredItems = () => {
        let count2 = 0
        items.map((item) => {
            if (item?.maxGuests >= adults + children) {
                return count2 += 1
            }
        })
        return count2;
    }

    return (
        <>
            <div className="list_top">
                <h1>Finland</h1>
                <h2>{location ? countNoOfFilteredItems() : countNoOfGuestFilteredItems()}+ stays</h2>
            </div>



            {location ? <div className="list_top_section">
                {items.map((item, i) => {
                    if (item?.city === location && adults + children <= item?.maxGuests) {
                        return <BoxItem item={item} key={i} />
                    }
                })}
            </div> : <div className="list_top_section">
                {items.map((item, i) => {
                    if (adults + children <= item?.maxGuests) {
                        return <BoxItem item={item} key={i} />
                    }
                })}
            </div>}
        </>
    )
}
