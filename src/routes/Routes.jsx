import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from '../constants/routes';
import Main from '../components/Main';
import Login from '../components/Login';
import PrivateRoute from '../components/PrivateRoute/index'
import Registration from "../components/Registration/index"

const Routes = () => {
    
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={routes.registration} component={ Registration }/>
                <Route path={routes.login} component={Login} />
                <PrivateRoute exact path={routes.main} component={ Main }/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
