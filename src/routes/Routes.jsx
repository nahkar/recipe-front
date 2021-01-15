import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from '../constants/routes';
import Main from '../components/Main';
import Login from '../components/Login';
import PrivateRoute from '../components/PrivateRoute/index'
import Registration from "../components/Registration/index"
import Header from "../components/Header"
const Routes = () => {
    
    return (
        <BrowserRouter>
            <Switch>
                <Route path={routes.registration} component={ Registration }/>
                <Route path={routes.login} component={Login} />
                <Route path={routes.header} component={Header} />
                <PrivateRoute exact path={routes.main} component={ Main }/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
