import React, { Children, Component } from 'react';
import SwapiService from '../../services/swapi_service';

import './item-details.css'

const Record = ({item, field, label}) =>{
   return( 
        <li className = "list-group-item">
            <span className ="term ">{label}</span>
            <span> {item [field]} </span>
        </li>)
}


export {Record};

export default class ItemDetails extends Component {

    swapiService = new SwapiService();

    state={
        item: null,
        image: null
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
        const {itemId, getData, getImageUrl}  = this.props
        if (!itemId ){
            return
        }

        getData(itemId).then((item)=>{
            this.setState({
                item,
                image: getImageUrl(item)
            })
        })
    }
    
    render(){
        const {item, image} = this.state
        if (!item ){
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

        const { name } = this.state.item

        return(
            <div className = "item-details card">
                <img className ="item-image" src= {image}  alt = "item" />
                <div className = "card-body">
                    <h4> {name} </h4>
                    <ul className = "list-group list-group-flush"> 
                       {
                        React.Children.map(this.props.children , (child) =>{
                            return React.cloneElement(child, {item} );
                        })
                       }
                    </ul>
                </div>
            </div>
        );
    
    }
    
}
