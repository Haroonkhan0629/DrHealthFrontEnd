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
        <ul className="navigation">
            <li classname="nav"><Link to="/home" className="navlink">Home</Link></li>
            <li classname="nav"><Link to="/illness" className="navlink">Illnesses</Link></li>
            <li classname="nav"><Link to="/procedure" className="navlink">Procedures</Link></li>
            <li classname="nav search-bar-container">
                <SearchBar setResults={setResults} />
                <SearchResults results={results} />
            </li>
            <li classname="navheader"><h1 className="navlinkheader">Dr. Health</h1></li>
            <li classname="nav search-bar-container">
                <SearchBar2 setResults2={setResults2} />
                <SearchResults2 results2={results2} />
            </li>
            <li classname="nav"><Link to="/auth/login" className="navlink">Login</Link></li>
            <li classname="nav"><Link to="/auth/register" className="navlink">Register</Link></li>
            <li classname="nav"><Link to="/about" className="navlink">About</Link></li>
        </ul>
    )
}

export default Header