import React, {Component} from 'react'
import './people-page.css'
import ItemList from '../item-list'
import ItemDetails from '../item-details'
import ErrorIndicator from '../error-indicator'
import SwapiService from '../../services/swapi_service'
import Row from '../Row';
import ErrorBoundry from '../error-boundry/error-boundry'


export default class PeoplePage extends Component{
    
    swapiService = new SwapiService;
    
    state = {
        selectedPerson: null,
        hasError: false
    }


    onPersonSelected = (selectedPerson) => {
        this.setState({
            selectedPerson 
        })
    }
   
    render(){ 
        const itemList = (
            <ItemList 
                onItemSelected = {this.onPersonSelected}
                getData={this.swapiService.getAllPeople}>

             {(i) => (
                `${i.name} (${i.birthYear})`
            )}
            </ItemList>

        );

        const personDetails = (
            <ErrorBoundry>
                <ItemDetails itemId={this.state.selectedPerson}/>
            </ErrorBoundry>
        );

        if(this.state.hasError){
            return(<ErrorIndicator/>);
                
        }
        else{
            return(
                <ErrorBoundry>
                    <Row left={itemList} right={personDetails}/>
                </ErrorBoundry>
            );
        }
        
    }
}

