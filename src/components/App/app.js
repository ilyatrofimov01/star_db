import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet'
import ErrorIndicator  from'../error-indicator';
import ErrorBoundry from '../error-boundry';  
import { SwapiServiceProvider } from '../swapi-service-context';
import SwapiService from '../../services/swapi_service';
import './app.css'
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';


 export default class App extends Component  {


    state = {
        hasError: false,
        swapiService: new SwapiService(),
    }

    componentDidCatch(){
        this.setState({hasError:true})
    }

    onServiceChange = () => {
        this.setState(({swapiService}) => {
            const Service = swapiService instanceof SwapiService ? SwapiService : SwapiService;

            console.log('switched to ',Service.name)

            return {
                swapiService: new Service()
            }
        })
    }

    render(){

        if(this.state.hasError){
            return(<ErrorIndicator/>)
        }

        else{
            
            return(
            <ErrorBoundry>
                <SwapiServiceProvider value = {this.state.swapiService}>
                    <div className = "app">
                        <Header onServiceChange = {this.onServiceChange} />
                        <RandomPlanet updateInterval ={3500}/>

                        <PeoplePage/>
                        <PlanetsPage/>
                        <StarshipsPage/>
 
            
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
            )
        }
    
    }
}
