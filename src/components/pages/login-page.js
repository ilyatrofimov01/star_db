import React from 'react';
import { Redirect } from 'react-router-dom';

const LoginPage =({isLoggedIn,onLoggin}) => {
    if(isLoggedIn){
        return <Redirect to="/"/>
    }
     return (
         <div className ="jumbotron">
             <p>Loggin by botton to se secret Page</p>
             <button
             className="btn btn-primary"
             onClick ={onLoggin}> Loggin </button>
         </div>
     )
}
export default LoginPage ;