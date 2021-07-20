import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet'
import ErrorIndicator  from'../error-indicator';
import ErrorBoundry from '../error-boundry';  
import './app.css'
import { SwapiServiceProvider } from '../swapi-service-context';
import PersonDetails from '../sw-components/person-details'
import PlanetDetails from '../sw-components/planet-details';
import StarshipDetails from '../sw-components/starship-details'


import SwapiService from '../../services/swapi_service';

import { 
    PersonList,
    PlanetList,
    StarshipList, 
} from '../sw-components';


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
            <ErrorBoundry>
                <SwapiServiceProvider value = {this.swapiService}>
                    <div className = "app">
                        <Header />

                    <StarshipDetails itemId = {9}/>
                    <PersonDetails itemId = {11}/>
                    <PlanetDetails itemId = {5}/>
                    

                    <PersonList/>
                    <StarshipList/>
                    <PlanetList/> 

                    
                        {/* <RandomPlanet />
                        <PeoplePage />   */}
 
            
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
            )
        }
    
    }
}
