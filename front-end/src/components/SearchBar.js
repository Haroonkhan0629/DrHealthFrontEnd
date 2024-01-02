import { useState, useEffect } from "react"
import { FaSearch } from "react-icons/fa"
import "./SearchBar.css"

const SearchBar = ({setResults}) => {
    const [input, setInput] = useState("")

    const fetchData = async (searchedValue) => {
        const response = await fetch("http://localhost:4000/people/")
        const data = await response.json()
        const results = data.data.filter((result) => {
            return searchedValue && 
            result && 
            result.name && 
            result.name.toLowerCase().includes(searchedValue)
        })
        setResults(results)
    }

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }

    return (
        <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input placeholder="Search..." value={input} onChange={(event) => handleChange(event.target.value)} />
        </div>
    )
}

export default SearchBar