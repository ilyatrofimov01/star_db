import React from 'react';
import withData from '../hoc-helpers/with-data';
import './item-list.css';
import SwapiService from './../../services/swapi_service';

 const ItemList = (props) => {

  const {data, onItemSelected, children: renderLabel} = props;
    const items = data.map((item) => {
      const {id} = item
      const label = renderLabel(item)

      return (
        <li className="list-group-item"
            key={id}
            onClick={() => onItemSelected(id)}>
          {label}
        </li>
      );
    });;

    return (
        <ul className ="list-group">
            {items}
        </ul>
    )
    }



const swapiService = new SwapiService()
const {getAllPeople} = swapiService

export default withData(ItemList, getAllPeople);