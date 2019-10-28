import React from 'react';
import './style.css';

const input = ({type, _handleChange}) => {
    return(
        <>
        <input 
            type={type}
            onChange={_handleChange}
        />
        </>
    )
}

export default input;