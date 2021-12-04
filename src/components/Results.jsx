import React from 'react';
import './Results.css';

const Results = (props) => {


    return (
        <div className="results">
            <table className="artists">
                <thead>
                    <tr>
                        <th>
                            {props.artist}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.albums.map((album) => 
                    <tr>
                        <td key={album.name}>{album.name}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default Results;