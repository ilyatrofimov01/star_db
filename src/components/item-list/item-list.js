import React, { Component } from 'react';
import SwapiService from '../../services/swapi_service';
import Spiner from '../spiner';
import './item-list.css';

export default class ItemList extends Component{
  


    state = {
        itemList:[],
        loading: true
    }

    componentDidMount() {

      const { getData }= this.props;
      
        getData().then((itemList) => {
              this.setState({
                itemList,
                loading:false
              });
          });
      }

    renderItems(arr) {
        return arr.map((item) => {
          const {id} = item
          const label = this.props.renderItem(item)
          return (
            <li className="list-group-item"
                key={id}
                onClick={() => this.props.onItemSelected(id)}>
              {label}
            </li>
          );
        });
      }

    render(){

        const {itemList,loading} =  this.state;
        
        

        if (loading){
            return <Spiner/>
        }

        const items = this.renderItems(itemList);

        return (
            <ul className ="list-group">
                {items}
            </ul>
        )
    }
}