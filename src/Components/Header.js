import "../Styles/Header.css"
import { AiOutlineSearch } from "react-icons/ai"

export default function Header({ setShowFilters, location, adults, children }) {
    const locationText = location ? `${location}` : "Add location"
    const guestsText = adults + children === 0 ? "Add guests" : `${adults + children}`

    return (
        <header className="Header">
            <img src="/" alt="Logo" />
            <div className="Header_search">
                <h2 onClick={() => setShowFilters(true)} className="desktopHeader_search_location">{locationText}</h2>
                <h2 onClick={() => setShowFilters(true)} className="desktopHeader_search_guests">{guestsText}</h2>
                <AiOutlineSearch onClick={() => setShowFilters(true)} />
            </div>
        </header>
    )
}
