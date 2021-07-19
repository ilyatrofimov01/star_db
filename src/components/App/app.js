import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet'
import ErrorIndicator  from'../error-indicator';
import Row from '../Row';
import ItemDetails from '../item-details'
import ErrorBoundry from '../error-boundry';  
import './app.css'
import SwapiService from '../../services/swapi_service';
import { Record } from '../item-details/item-details';
import ItemList from './../item-list';

 export default class App extends Component  {

    swapiService = new SwapiService();

    state = {
        hasError: false
    }

    componentDidCatch(){
        this.setState({hasError:true})
    }



    render(){
        const {getPerson, getStarship, getPersonImage, getStarshipImage, getAllPeople, getAllStarships }=this.swapiService

        const personDetails = (
        <ItemDetails
            itemId ={12}
            getData = {getPerson}
            getImageUrl={getPersonImage}
        >
            <Record field="gender" label="Gender"/>
            <Record field="eyeColor" label="Eye Color"/>
            
        </ItemDetails>);
        
        const starshipDetails = (
        <ItemDetails
            itemId ={9}
            getData = {getStarship}
            getImageUrl={getStarshipImage}
        >
            <Record field="model" label="Model"/>
            <Record field="length" label="Length"/>
            <Record field="cost_in_credits" label="Cost"/>

        </ItemDetails>)

        if(this.state.hasError){
            return(<ErrorIndicator/>)
        }

        else{
            
            return(
            <ErrorBoundry>
                <div className = "app">
                    <Header />
                <ItemList
                    getData = {getAllPeople}
                    onItemSelected ={()=>{}}>

                    {({name}) => <span>{name}</span>}
                </ItemList>

                <ItemList
                    getData ={getAllStarships}
                    onItemSelected ={()=>{}}>
                    
                    {({name}) => <span>{name}</span>}
                </ItemList>
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
