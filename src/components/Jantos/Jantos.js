import React, { useContext } from 'react';
import { RingContext } from '../../App';

const Jantos = () => {
    const [ornaments, house] = useContext(RingContext)

    return (
        <div>
            <h2>Jantos</h2>
            <p>House: {house}</p>
            <p>{ornaments}</p>
        </div>
    );
};

export default Jantos;