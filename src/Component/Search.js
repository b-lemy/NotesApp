import React from "react";
import {MdSearch} from "react-icons/md";

const Search =({handleSearch}) => {

    const handler = (e) => {
        handleSearch(e.target.value)
    }


    return(
        <div className="Search">
            <MdSearch size="1.3em"/>
            <input type="text"
                   onChange={handler}
                   className="input"
                   placeholder="Enter what to search" />
        </div>
    )
}
export default Search