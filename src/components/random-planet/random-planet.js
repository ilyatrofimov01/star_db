import React, {Component} from 'react'; 
import './random-planet.css';
import SwapiService from '../../services/swapi_service';
import Spiner from '../spiner'
import ErrorIndicator from '../error-indicator';

export default class RandomPlanet extends Component {
    
     SwapiService = new SwapiService();


    state = {
        planet : {},
        loading: true,
        error: false
    };
    
    componentDidMount(){
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 3500);
        

    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }

    onPlanetLoaded = (planet) =>{
        this.setState({
            planet,
            loading : false
        });
    };

    onError = (err) =>{
        this.setState({
            error: true,
            loading: false

        })
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random()*15)+2;
        this.SwapiService
        .getPlanet(id)
            .then(this.onPlanetLoaded)
                .catch(this.onError);
    };

    render(){
        const {planet, loading, error } = this.state
        const hasData = !(loading || error)

        const errorMessage =  error ? <ErrorIndicator/> : null
        const spiner = loading  ? <Spiner/> : null;
        const content  = hasData ? <PlanetView planet = {planet} /> : null;

        return (
            <div className = "random-planet jumbotron rounded">
                {errorMessage}
                {spiner}
                {content}
            </div>
        );
    }
}


const PlanetView = ({planet}) => {

    const {id, name, population, rotationPeriod, diameter } = planet
    return (
        <React.Fragment>
            <img className="planet-image" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} 
                    alt ='ramdom planet img'/>
                <div>
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term"> Population </span>
                            <span>{population}</span>
                        </li>
                        
                        <li className="list-group-item">
                            <span className="term"> Rotation period </span>
                            <span>{rotationPeriod}</span>
                        </li>

                        <li className="list-group-item">
                            <span className="term"> Diameter </span>
                            <span>{diameter}</span>
                        </li>
                    </ul>
                    
                </div>
        </React.Fragment>
    )
}
