import React from "react"
import ItemDetails,{ Record } from "../item-details"
import SwapiService from './../../services/swapi_service';

const swapiService = new SwapiService();
const {getPerson, getPlanet, getStarship, getPersonImage, getStarshipImage, getPlanetImage} = swapiService;

const PersonDetails = ({itemId}) =>{
    return(
        <ItemDetails
            itemId ={itemId}
            getData = {getPerson}
            getImageUrl={getPersonImage}
        >
            <Record field="gender" label="Gender"/>
            <Record field="eyeColor" label="Eye Color"/>
            
        </ItemDetails>
    );
}

const PlanetDetails = ({itemId}) =>{
    return(
        <ItemDetails
                itemId ={itemId}
                getData = {getPlanet}
                getImageUrl={getPersonImage}
            >
                <Record field="population" label="Population"/>
                <Record field="rotationPeriod" label="RotationPeriod"/>
                <Record field="diameter" label="Diameter"/>
                
        </ItemDetails>
    )
}

const StarshipDetails = ({itemId}) =>{
    return(
        <ItemDetails
                itemId ={itemId}
                getData = {getStarship}
                getImageUrl={getStarshipImage}
            >
                <Record field="model" label="Model"/>
                <Record field="length" label="Length"/>
                <Record field="cost_in_credits" label="Cost"/>

            </ItemDetails>
    );
}

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}