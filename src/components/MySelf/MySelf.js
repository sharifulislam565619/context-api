import React from 'react';
import Jantos from '../Jantos/Jantos';

const MySelf = (props) => {
    const { house } = props
    return (
        <div>
            <h2>My Self</h2>
            <p>House: {house}</p>
            <Jantos house={house}></Jantos>

        </div>
    );
};

export default MySelf;