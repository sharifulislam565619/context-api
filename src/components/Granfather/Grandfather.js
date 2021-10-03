import React from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

const Grandfather = (props) => {
    const { house } = props
    return (
        <div>
            <h2>Grandfather</h2>
            <p>{props.children}</p>
            <p>House: {house}</p>
            <div className="flex-display">
                <Father house={house} ></Father>
                <Uncle house={house} ></Uncle>
                <Aunty house={house}></Aunty>
            </div>
        </div>
    );
};

export default Grandfather;



