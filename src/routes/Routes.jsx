import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from '../constants/routes';
import Main from '../components/Main';
import Login from '../components/Login';


const Routes = () => {
    
    return (
        <BrowserRouter>
            <Switch>
                <Route path={routes.login} component={ Login }/>
                <Route exact path={routes.main} component={ Main }/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
