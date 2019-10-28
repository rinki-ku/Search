import React from 'react';
import './style.css'

const SearchCardTemplate = ({id, name, address}) => {
    return (
        <li>
            <span>{id}</span>
            <span>{name}</span>
            <span>{address}</span>
        </li>
    )
}

export default SearchCardTemplate