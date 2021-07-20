import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet'
import ErrorIndicator  from'../error-indicator';
import ErrorBoundry from '../error-boundry';  
import './app.css'
import SwapiService from '../../services/swapi_service';
import { 
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
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
                <div className = "app">
                    <Header />

                <PersonDetails itemId = {11}/>
                <PlanetDetails itemId = {5}/>
                <StarshipDetails itemId = {9}/>
                <PersonList>
                    {({name}) => <span>{name}</span>}
                </PersonList> 
                <StarshipList>
                    {({name}) => <span>{name}</span>}
                </StarshipList> 
                <PlanetList>
                    {({name}) => <span>{name}</span>}
                </PlanetList> 

                
                    {/* <RandomPlanet />
                    <PeoplePage />   */}

        
                </div>
            </ErrorBoundry>
            )
        }
    
    }
}
