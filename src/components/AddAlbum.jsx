import React from 'react';
import './AddAlbum.css';

const AddAlbum = (props) => {
    return (
        <form className="addAlbum">
            <div className="artistDiv">
                <label className="artistBar">
                    Artist:
                </label>
                <input type="text" onChange={props.handleNewArtist} />
            </div>
            <div className="albumDiv">
                <label className="albumBar">
                    Album:
                </label>
                <input type="text" onChange={props.handleNewAlbum} />
            </div>
            <input type="submit" value="Submit" className="addButton" onClick={props.handleSubmit} />
        </form >
    );
}

export default AddAlbum;