import { useState } from "react"
import { FaSearch } from "react-icons/fa"

const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState("")

    const fetchData = async (searchedValue) => {
        const response = await fetch("https://drhealthbackend.onrender.com/illness")
        const data = await response.json()
        const results = data.data.filter((result) => {
            return searchedValue && 
            result && 
            result.name && 
            result.name.toLowerCase().includes(searchedValue)
        })
        setResults(results)
    }

    const handleChange = async (value) => {
        setInput(value)
        fetchData(value)
    }

    return (
        <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input className="search-input" placeholder="Search Illnesses..." value={input} onChange={(event) => handleChange(event.target.value)} />
        </div>
    )
}

export default SearchBar