import data from '../Json/Data.json'
import { useState } from "react"
import BoxItem from "./BoxItem"

export default function List({ location, adults, children }) {
    const [items, setItems] = useState(data)

    const countNoOfFilteredItems = (locationFilter, guestsFilter) => {
        let count = 0
        items.map((item) => {
            if (locationFilter && item?.city === locationFilter && item?.maxGuests >= guestsFilter) {
                count += 1
            } else if (!locationFilter && item?.maxGuests >= guestsFilter) {
                count += 1
            }
        })
        return count
    }


    const count = location ? countNoOfFilteredItems(location, adults + children) : countNoOfFilteredItems(null, adults + children)

    const list = location ? items.filter((item) => item?.city === location && adults + children <= item?.maxGuests) : items.filter((item) => adults + children <= item?.maxGuests)

    return (
        <>
            <div className="list_top">
                <h1>Chile</h1>
                <h2>{count}+ stays</h2>
            </div>
            <div className="list_top_section">
                {list.map((item, i) => (
                    <BoxItem item={item} key={i} />
                ))}
            </div>
        </>
    )
}
