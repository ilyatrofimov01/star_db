import React, {Component} from 'react'
import './people-page.css'
import ItemList from '../item-list'
import PersonDetails from '../person-details'
import ErrorIndicator from '../error-indicator'
import SwapiService from '../../services/swapi_service'

export default class PeoplePage extends Component{
    
    swapiService = new SwapiService;
    
    state = {
        selectedPerson: null,
        hasError: false
    }
    componentDidCatch(){
        this.setState({
            hasError: true
        })
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson : id
        })
    }

    render(){
        if(this.state.hasError){
            return(<ErrorIndicator/>);
                
        }
        else{
            return(
                <div className ="row mb2">
                    <div className = "col-md-6 p-3">
                        <ItemList 
                        onItemSelected = {this.onPersonSelected}
                        getData={this.swapiService.getAllPeople}
                        renderItem={({name,gender,birthYear}) => `${name} (${gender}, ${birthYear})`}
                        />
                    </div>
                    <div className = "col-md-6">
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>
            );
        }
        
    }
}

