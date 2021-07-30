import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet'
import ErrorIndicator  from'../error-indicator';
import ErrorBoundry from '../error-boundry';  
import { SwapiServiceProvider } from '../swapi-service-context';
import SwapiService from '../../services/swapi_service';
import './app.css'
import { PeoplePage, PlanetsPage, StarshipsPage,SecretPage,LoginPage } from '../pages';

import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import StarshipDetails from '../sw-components/starship-details';


 export default class App extends Component  {


    state = {
        hasError: false,
        swapiService: new SwapiService(),
        isLoggedIn: false
    }
    
    onLoggin = () =>{
        this.setState({
            isLoggedIn:true
        })
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
        const {isLoggedIn}= this.state;

        if(this.state.hasError){
            return(<ErrorIndicator/>)
        }

        else{
            
            return(
            <ErrorBoundry>
                <SwapiServiceProvider value = {this.state.swapiService}>
                    <Router>
                        <div className = "app">
                                <Header onServiceChange = {this.onServiceChange} />
                                <RandomPlanet updateInterval ={3500}/>

                                <Switch>
                                    <Route path='/' render={()=><h2>Welcome to StarDB</h2>} exact={true}/>

                                    <Route path='/people/:id?' component={PeoplePage}/>

                                    <Route path='/planets' component={PlanetsPage}/>

                                    <Route path='/starships' component={StarshipsPage} exact/>
                                    <Route path='/starships/:id' render={({match})=> {
                                        const {id} = match.params
                                    return <StarshipDetails itemId={id}/>
                                    }}/>

                                    <Route path="/login" render= {()=>{
                                        return <LoginPage
                                            isLoggedIn={isLoggedIn}
                                            onLoggin={this.onLoggin}
                                        />
                                        }}/>
                                    <Route path="/secret" render= {()=>{
                                        return <SecretPage 
                                            isLoggedIn={isLoggedIn}/>
                                    }}/>

                                    <Route render={()=> <h2>Page not Found</h2>} />
                                </Switch>
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
            )
        }
    
    }
}
