
export default class SwapiService {
    _apiBase = `https://swapi.dev/api/`
    
    async getResoure(url){
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok){
            throw new Error (`Could not fetch${url}, recived ${res.status}`)
        }
    return await res.json();
    }


    async getAllPeople (){
       const res = await this.getResoure(`people/`)
       return res.results.map(this._transformPeople);  
    }
    async getPerson(id){
        const person = await this.getResoure(`people/${id}`);
        return this._transformPeople(person);
    }


    async getAllPlanets (){
        const res = await this.getResoure(`planets/`)
        return res.results.map(this._transformPlanet)  
     }
    async getPlanet(id){
        const planet = await this.getResoure(`planets/${id}`);
        return this._transformPlanet(planet);
    }



    async getAllStarships (){
        const res = await this.getResoure(`starships/`)
        return res.results.map(this._transformStarship)  
     }
    async getStarship(id){
        const starship = await this.getResoure(`starships/${id}`);
        return this._transformStarship(starship);
    }




    _extractId(item){
        const idRegExp = /\/([0-9]*)\/$/;
        return  item.url.match(idRegExp)[1];
    }


    _transformPlanet(planet) {

        return{
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }
    _transformPeople(person){
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear : person.birth_year,
            eyeColor: person.eye_color
        }
    }
    _transformStarship(starship){
        return{
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity,
        }
    }

}
