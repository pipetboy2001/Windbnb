import "../Styles/Header.css"
import { AiOutlineSearch } from "react-icons/ai"

export default function Header({ setShowFilters, location, adults, children }) {


    return (

        <header className="desktopHeader" >

            <img src="https://sangeetha-jula-windbnb.netlify.app/static/media/logo.beef9462a899fe60cb52edfd446e26ef.svg" />

            <div className="desktopHeader_search">

                <h2 onClick={() => setShowFilters(true)} className="desktopHeader_search_location">{location ? `${location}` : "Add location"}</h2>

                <h2 onClick={() => setShowFilters(true)} className="desktopHeader_search_guests">{adults + children === 0 ? "Add guests" : `${adults + children}`}</h2>

                <AiOutlineSearch onClick={() => setShowFilters(true)} />

            </div>

        </header>

    )
}
