import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet'
import ErrorIndicator  from'../error-indicator';
import PeoplePage from '../people-page';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css'
import SwapiService from '../../services/swapi_service';

 export default class App extends Component  {

    swapiService = new SwapiService();

    state = {
        hasError: false
    }
    componentDidCatch(){
        this.setState({hasError:true})
    }

   

    render(){
        if(this.state.hasError){
            return(<ErrorIndicator/>)
        }

        else{
            return(
            <div className = "app">
                <Header />
                <RandomPlanet />
                <PeoplePage />

                <div className ="row mb2">
                    <div className = "col-md-6 p-3">
                        <ItemList 
                            onItemSelected = {this.onPersonSelected}
                            getData={this.swapiService.getAllPlanets}
                            renderItem={(item) => (<span>{item.name}<button>!</button></span>)}
                        />
                    </div>
                    <div className = "col-md-6">
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>

                <div className ="row mb2">
                    <div className = "col-md-6 p-3">
                        <ItemList 
                            onItemSelected = {this.onPersonSelected}
                            getData={this.swapiService.getAllStarships}
                            renderItem={(item) => item.name}
                        />
                    </div>
                    <div className = "col-md-6">
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>
    
            </div>
            )
        }
    
    }
}
