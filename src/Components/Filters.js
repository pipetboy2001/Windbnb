import "../Styles/Filters.css";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export default function Filters({ showFilters, setShowFilters, setLocation, adults, setAdults, children, setChildren, location }) {
    const [showLocation, setShowLocation] = useState(true);

    return (
        <div>
            {showFilters &&

                <div className={`filters ${showFilters ? "show" : ""}`}>
                    <div>
                        <div onClick={() => setShowLocation(true)}>
                            <h2 >ubicación</h2>
                            <span>
                                {location ? `${location}` : "Añadir ubicación"}
                            </span>
                        </div>
                        <div className={`filters__options ${showLocation ? "show" : ""}`}>
                            <ul >
                                <li onClick={() => setLocation("Santiago")}>
                                    Santiago, Chile
                                </li>
                                <li onClick={() => setLocation("Valparaiso")}>
                                    Valparaiso, Chile
                                </li>
                                <li onClick={() => setLocation("Osorno")}>
                                    Osorno, Chile
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div onClick={() => setShowLocation(false)}>
                            <h2 >Huéspedes</h2>
                            <span>
                                {adults + children === 0 ? "añadir huéspedes" : `${adults + children}`}
                            </span>
                        </div>
                        <div
                            className={`filters__options ${showLocation ? "" : "show"
                                }`}
                        >
                            <div >
                                <h2 >Adultos</h2>
                                <span >Mayores de 13 años</span>
                                <div >
                                    <button
                                        className="filters__button"
                                        onClick={() =>
                                            adults > 0 && setAdults((prevAdults) => prevAdults - 1)
                                        }
                                    >
                                        -
                                    </button>
                                    <span>{adults}</span>
                                    <button
                                        className="filters__button"
                                        onClick={() => setAdults((prevAdults) => prevAdults + 1)}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <div >
                                <h2 >Niños</h2>
                                <span >Edades 2-12</span>
                                <div >
                                    <button
                                        className="filters__button"
                                        onClick={() =>children > 0 && setChildren((prevChildren) => prevChildren - 1)}>
                                    </button>
                                    <span>{children}</span>
                                    <button
                                        className="filters__button"
                                        onClick={() => setChildren((prevChildren) => prevChildren + 1)}
                                    >+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div >
                        <h2 >Edita tu búsqueda</h2>
                        <div >
                            <button
                                className="filters__button"
                                onClick={() => setShowFilters(false)}>
                                <AiOutlineSearch /> Buscar
                            </button>
                        </div>
                        <AiOutlineClose
                            className="filters__close"
                            onClick={() => setShowFilters(false)}
                        />
                    </div>
                </div>
            }
        </div>
    )
}








