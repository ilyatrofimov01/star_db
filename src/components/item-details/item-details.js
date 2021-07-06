import React, { Component } from 'react';
import SwapiService from '../../services/swapi_service';

import './item-details.css'

export default class ItemDetails extends Component {

    swapiService = new SwapiService();

    state={
        item: null,
    }

    componentDidMount(){
        this.updateItem();
    }

    componentDidUpdate(prevProps){
        if (this.props.itemId !== prevProps.itemId){
            this.updateItem()
        }
    }
 
    updateItem = () =>{
        const {itemId}  = this.props
        if (!itemId ){
            return
        }

        this.swapiService.getPerson(itemId).then((item)=>{
            this.setState({
                item
            })
        })
    }
    
    render(){
        if (!this.state.item ){
            return (
                <div className='did-not-selected'>
                    <span>
                        Choose Your Character from list 
                    </span>
                    <span className='left-arrow'>
                        &larr;
                    </span>
                </div>
            )
        }

        const {id, name, gender, birthYear, eyeColor} = this.state.item

        return(
            <div className = "item-details card">
                <img className ="item-image" src= {`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}  alt = "item" />
                <div className = "card-body">
                    <h4> {name} </h4>
                    <ul className = "list-group list-group-flush"> 
                        <li className = "list-group-item">
                            <span className ="term ">Gender </span>
                            <span> {gender} </span>
                        </li>
                        <li className = "list-group-item">
                            <span className ="term ">Birth Year </span>
                            <span> {birthYear} </span>
                        </li>
                        <li className = "list-group-item">
                            <span  className ="term ">Eye color </span>
                            <span> {eyeColor} </span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    
    }
    
}
