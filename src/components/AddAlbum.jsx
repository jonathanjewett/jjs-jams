import React from 'react';
import './AddAlbum.css';

const AddAlbum = (props) => {
    return (
        <form className="addAlbum">
            <label>
                Artist:
                <input type="text"/>
            </label>
            <label>
                Album: 
                <input type="text"/>
            </label>
            <input type="submit" value="Submit"/>
        </form>
    );
}

export default AddAlbum;