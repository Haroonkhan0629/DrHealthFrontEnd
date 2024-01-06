import { Link } from "react-router-dom";
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import SearchResults2 from '../components/SearchResults2';
import SearchBar2 from '../components/SearchBar2';
import { useState } from "react"

const Header = () => {
    const [results, setResults] = useState([])
    const [results2, setResults2] = useState([])

    return (
        <ul className="navigation media">
            <li classname="nav media"><Link to="/home" className="navlink media-txt">Home</Link></li>
            <li classname="nav media"><Link to="/illness" className="navlink media-txt">Illnesses</Link></li>
            <li classname="nav media"><Link to="/procedure" className="navlink media-txt">Procedures</Link></li>
            <li classname="nav media search-bar-container">
                <SearchBar setResults={setResults} />
                <SearchResults results={results} />
            </li>
            <li classname="navheader media"><h1 className="navlinkheader media-txt">Dr. Health</h1></li>
            <li classname="nav media search-bar-container">
                <SearchBar2 setResults2={setResults2} />
                <SearchResults2 results2={results2} />
            </li>
            <li classname="nav media"><Link to="/auth/login" className="navlink media-txt">Login</Link></li>
            <li classname="nav media"><Link to="/auth/register" className="navlink media-txt">Register</Link></li>
            <li classname="nav media"><Link to="/about" className="navlink media-txt">About</Link></li>
        </ul>
    )
}

export default Header
