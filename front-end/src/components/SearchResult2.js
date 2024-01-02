import React from "react"
import { Link } from "react-router-dom";

const SearchResult2 = ({ result2 }) => {
    return (
        <div className="result" >
            <Link to={`/procedure/${result2._id}`}className="result-link"><div>{result2.name}</div></Link>
        </div>
    )
}

export default SearchResult2