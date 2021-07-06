import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet'
import ErrorIndicator  from'../error-indicator';
import PeoplePage from '../people-page';
import Row from '../Row';
import ItemDetails from '../item-details'
import ErrorBoundry from '../error-boundry';  


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

        const personDetails = (<ItemDetails itemId ={11}/>);
        const starshipDetails = (<ItemDetails itemId ={5}/>)

        if(this.state.hasError){
            return(<ErrorIndicator/>)
        }

        else{
            return(
            <ErrorBoundry>
                <div className = "app">
                    <Header />

                    {/* <RandomPlanet />
                    <PeoplePage />   */}

                    <Row left={personDetails}
                        right ={starshipDetails}
                    />
        
                </div>
            </ErrorBoundry>
            )
        }
    
    }
}
