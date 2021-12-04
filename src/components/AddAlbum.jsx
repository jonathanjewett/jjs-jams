import React from 'react';
import './AddAlbum.css';

const AddAlbum = (props) => {
    return (
        <form className="addAlbum">
            <label>
                Artist:
                <input type="text" onChange={props.handleNewArtist}/>
            </label>
            <label>
                Album: 
                <input type="text" onChange={props.handleNewAlbum}/>
            </label>
            <input type="submit" value="Submit" onClick={props.handleSubmit}/>
        </form>
    );
}

export default AddAlbum;