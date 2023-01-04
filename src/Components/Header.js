import "../Styles/Header.css"
import { AiOutlineSearch } from "react-icons/ai"

export default function Header({ setShowFilters, location, adults, children }) {
    const locationText = location ? `${location}` : "Add location"
    const guestsText = adults + children === 0 ? "Add guests" : `${adults + children}`
    
    return (
        <header className="Header">
            {/* Icono */}
            <img className="Logo" src="https://raw.githubusercontent.com/pipetboy2001/Windbnb/c7754f256d8cbf5a8da7a08f33ab5939b20b18a0/public/Logo.svg" 
                onClick={() => {
                    window.location.href = '/'; 
                }}/>
            {/* Buscador */}
            <div className="Header_search">
                <h2 onClick={() => setShowFilters(true)} className="desktopHeader_search_location">{locationText}</h2>
                <h2 onClick={() => setShowFilters(true)} className="desktopHeader_search_guests">{guestsText}</h2>
                <AiOutlineSearch className="AiOutlineSearch" onClick={() => setShowFilters(true)} />
            </div>
        </header>
    )
}
