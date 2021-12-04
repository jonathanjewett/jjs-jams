import React from 'react';
import './Results.css';

const Results = (props) => {
    return (
        <div className="results">
            <table className="artists">
                <thead>
                    <tr>
                        <th>
                            Artists
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Dance Gavin Dance
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className="albums">
                <thead>
                    <tr>
                        <th>
                            Albums
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Downtown Battle Mountain 2
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Results;