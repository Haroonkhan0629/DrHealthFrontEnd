import React from "react"
import { Link } from "react-router-dom";

const SearchResult = ({ result }) => {
    return (
        <div className="result">
            <Link to={`/illness/${result._id}`} className="result-link"><div>{result.name}</div></Link>
        </div>
    )
}

export default SearchResult