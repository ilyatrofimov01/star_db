import React from 'react';
import './item-list.css';

const ItemList = () => {
    return (
        <ul className ="list-group">
            <li className ="list-group-item" >
                Luke Skywalker
            </li>
            <li className ="list-group-item" >
                Darth Vaider
            </li>
            <li className ="list-group-item" >
                R2-D2.
            </li>
        </ul>
    )

}
export default ItemList;