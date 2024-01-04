import { useState } from "react"
import { FaSearch } from "react-icons/fa"

const SearchBar2 = ({setResults2}) => {
    const [input, setInput] = useState("")

    const fetchData = async (searchedValue) => {
        const response = await fetch("https://drhealthbackend.onrender.com/procedure")
        const data = await response.json()
        const results = data.data.filter((result) => {
            return searchedValue && 
            result && 
            result.name && 
            result.name.toLowerCase().includes(searchedValue)
        })
        setResults2(results)
    }

    const handleChange = async (value) => {
        setInput(value)
        await fetchData(value)
    }

    return (
        <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input className="search-input" placeholder="Search Procedures..." value={input} onChange={(event) => handleChange(event.target.value)} />
        </div>
    )
}

export default SearchBar2