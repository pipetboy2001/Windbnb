import '../Styles/Filters.css'
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai"
import { useState } from "react"

export default function Filters({ showFilters, setShowFilters, setLocation, adults, setAdults, children, setChildren, location }) {
    const [showLocation, setShowLocation] = useState(true)
    return (
        <>
            {showFilters && (
                <div className="filters">
                                        <div>
                        <div>
                            <h2 onClick={() => setShowLocation(true)} >Location</h2>
                            <span onClick={() => setShowLocation(true)} >{location ? `${location}` : "Add location"}</span>
                        </div>

                        <div style={{ display: showLocation && "block", visibility: !showLocation && "hidden" }} >
                            <ul>
                                <li onClick={() => setLocation("Santiago")} >Santiago , Chile</li>
                                <li onClick={() => setLocation("Valparaiso")} >Valparaiso , Chile</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        
                        <div>
                            <h2 onClick={() => setShowLocation(false)} >Guests</h2>
                            <span onClick={() => setShowLocation(false)} >{adults + children === 0 ? "Add guests" : `${adults + children}`}</span>
                        </div>

                        <div style={{ display: !showLocation && "block", visibility: showLocation && "hidden" }} >
                            <div>
                                <h2>Adults</h2>
                                <span>Ages 13 or above</span>
                                <div>
                                    <button onClick={() => adults > 0 && setAdults((prevAults) => prevAults - 1)} >-</button>
                                    <span>{adults}</span>
                                    <button onClick={() => setAdults((prevAults) => prevAults + 1)} >+</button>
                                </div>
                            </div>

                            <div>
                                <h2>Children</h2>
                                <span>Ages 2-12</span>
                                <div>
                                    <button onClick={() => children > 0 && setChildren((prevChildren) => prevChildren - 1)} >-</button>
                                    <span>{children}</span>
                                    <button onClick={() => setChildren((prevChildren) => prevChildren + 1)} >+</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2>Edit your search</h2>
                        <div >
                            <button onClick={() => setShowFilters(false)} ><AiOutlineSearch />  Search</button>
                        </div>
                        <AiOutlineClose onClick={() => setShowFilters(false)} />
                    </div>
                </div>
            )}
        </>
    )
}

