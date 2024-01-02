import React from "react"
import SearchResult2 from "./SearchResult2"

const SearchResults = ({ results2 }) => {
    return (
        <div className="results">
            {
                results2.map((result2, id2) => {
                    return <SearchResult2 result2={result2} key2={id2}/>
                })
            }
        </div>
    )
}

export default SearchResults