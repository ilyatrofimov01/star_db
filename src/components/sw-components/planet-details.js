import React from "react"
import ItemDetails,{ Record } from "../item-details"
import {withSwapiService} from '../hoc-helpers/with-swapi-service';

const PlanetDetails = ({itemId,swapiService}) =>{

    const {getPlanet,getPlanetImage}= swapiService
    return(
        <ItemDetails
            itemId ={itemId}
            getData = {getPlanet}
            getImageUrl={getPlanetImage}
        >
            <Record field="population" label="Population"/>
            <Record field="rotationPeriod" label="RotationPeriod"/>
            <Record field="diameter" label="Diameter"/>
            
        </ItemDetails>
        
    )
}
export  default withSwapiService(PlanetDetails)