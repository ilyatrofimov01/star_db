import React from 'react'
import Row from '../Row'
import PersonDetails from '../sw-components/person-details';
import { PersonList } from '../sw-components';
import { withRouter } from 'react-router-dom';

const PeoplePage = ({history,match}) =>  {

    const  {id} = match.params;
    return (      
        <Row 
        left ={<PersonList onItemSelected ={(itemId)=> history.push(itemId)}/>}
        right = {<PersonDetails itemId = {id}/>}
        />
    )
}
export default withRouter(PeoplePage)