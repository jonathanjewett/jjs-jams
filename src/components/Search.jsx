import React from 'react';
import './Search.css';

const Search = (props) => {
    return (
        <form className="searchDiv">
            <input 
            className="searchBox" 
            type="text" 
            placeholder="Search Artist or Album"
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default Search;