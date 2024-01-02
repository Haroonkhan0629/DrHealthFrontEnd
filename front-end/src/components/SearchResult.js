import React from "react"
import "./SearchResult.css"

const SearchResult = ({result}) => {
    return <div className="result" onClick={(event) => alert(`you clicked on ${result.name}`)}>{result.name}</div>
}

export default SearchResult