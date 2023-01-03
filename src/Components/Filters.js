import "./../Styles/Filters.css"
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai"
import { useState } from "react"

export default function Filters({ showFilters, setShowFilters, setLocation, adults, setAdults, children, setChildren, location }) {

    const [showLocation, setShowLocation] = useState(true)

    return (

        <>
            {showFilters && <>

                <div className="desktopFilters">

                    <div className="desktopFilters_top">

                        <div className="desktopFilters_top_location">
                            <h2 onClick={() => setShowLocation(true)} >Location</h2>
                            <span onClick={() => setShowLocation(true)} >{location ? `${location}` : "Add location"}</span>
                        </div>

                        <div className="desktopFilters_top_guests">
                            <h2 onClick={() => setShowLocation(false)} >Guests</h2>
                            <span onClick={() => setShowLocation(false)} >{adults + children === 0 ? "Add guests" : `${adults + children}`}</span>
                        </div>

                        <div className="desktopFilters_top_search">
                            <button onClick={() => setShowFilters(false)} ><AiOutlineSearch />  Search</button>
                        </div>

                    </div>

                    <div className="desktopFilters_bottom">

                        <div className="desktopFilters_bottom_location" style={{ display: showLocation && "block", visibility: !showLocation && "hidden" }} >
                            <ul>
                                <li onClick={() => setLocation("Santiago")} >Santiago , Chile</li>
                                <li onClick={() => setLocation("Valparaiso")} >Valparaiso , Chile</li>
                            </ul>
                        </div>

                        <div className="desktopFilters_bottom_guests" style={{ display: !showLocation && "block", visibility: showLocation && "hidden" }} >

                            <div className="desktopFilters_bottom_guests_adult"  >
                                <h2>Adults</h2>
                                <span>Ages 13 or above</span>
                                <div className="desktopFilters_bottom_guests_adult_editBox">
                                    <button onClick={() => adults > 0 && setAdults((prevAults) => prevAults - 1)} >-</button>
                                    <span>{adults}</span>
                                    <button onClick={() => setAdults((prevAults) => prevAults + 1)} >+</button>
                                </div>
                            </div>

                            <div className="desktopFilters_bottom_guests_children">
                                <h2>Children</h2>
                                <span>Ages 2-12</span>
                                <div className="desktopFilters_bottom_guests_children_editBox">
                                    <button onClick={() => children > 0 && setChildren((prevChildren) => prevChildren - 1)} >-</button>
                                    <span>{children}</span>
                                    <button onClick={() => setChildren((prevChildren) => prevChildren + 1)} >+</button>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>



                <div className="mobileFilters">

                    <div className="mobileFilters_heading">
                        <h2>Edit your search</h2>
                        <AiOutlineClose onClick={() => setShowFilters(false)} />
                    </div>

                    <div className="mobileFilters_top">
                        <div className="mobileFilters_top_location">
                            <h2 onClick={() => setShowLocation(true)} >Location</h2>
                            <span onClick={() => setShowLocation(true)} >{location ? `${location}` : "Add location"}</span>
                        </div>

                        <div className="mobileFilters_top_guests">
                            <h2 onClick={() => setShowLocation(false)} >Guests</h2>
                            <span onClick={() => setShowLocation(false)} >{adults + children === 0 ? "Add guests" : `${adults + children}`}</span>
                        </div>
                    </div>

                    <div className="mobileFilters_bottom">

                        <div className="mobileFilters_bottom_location" style={{ display: showLocation ? "block" : "none" }} >
                            <ul>
                                <li onClick={() => setLocation("Helsinki")} >Helsinki , Finland</li>
                                <li onClick={() => setLocation("Turku")} >Turku , Finland</li>
                                <li onClick={() => setLocation("Vaasa")} >Vaasa , Finland</li>
                                <li onClick={() => setLocation("Oulu")} >Oulu , Finland</li>
                            </ul>
                        </div>

                        <div className="mobileFilters_bottom_guests" style={{ display: !showLocation ? "flex" : "none" }} >

                            <div className="mobileFilters_bottom_guests_adult"  >
                                <h2>Adults</h2>
                                <span>Ages 13 or above</span>
                                <div className="mobileFilters_bottom_guests_adult_editBox">
                                    <button onClick={() => adults > 0 && setAdults((prevAults) => prevAults - 1)} >-</button>
                                    <span>{adults}</span>
                                    <button onClick={() => setAdults((prevAults) => prevAults + 1)} >+</button>
                                </div>
                            </div>

                            <div className="mobileFilters_bottom_guests_children">
                                <h2>Children</h2>
                                <span>Ages 2-12</span>
                                <div className="mobileFilters_bottom_guests_children_editBox">
                                    <button onClick={() => children > 0 && setChildren((prevChildren) => prevChildren - 1)} >-</button>
                                    <span>{children}</span>
                                    <button onClick={() => setChildren((prevChildren) => prevChildren + 1)} >+</button>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>



            </>}
        </>

    )
}
