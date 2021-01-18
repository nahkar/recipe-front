import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import PublicRoute from '../components/PublicRoute';
import PrivateRoute from '../components/PrivateRoute';

import Main from '../components/Main';
import Login from '../components/Login';
import Registration from "../components/Registration/index"
import AdminPanel from "../components/AdminPanel"
import NotFound from '../components/NotFound';
import ForgotPass from './../components/ForgotPass';

import routes from '../constants/routes';

const Routes = () => {
    
    return (
        <BrowserRouter>
            <Switch>
                <PublicRoute path={routes.registration} component={ Registration }/>
                <PublicRoute path={routes.login} component={Login} />
                <PublicRoute path={routes.forgotPass} component={ForgotPass} />
                <PrivateRoute exact path={routes.main} component={Main} />
                <PublicRoute path={routes.notFound} component={NotFound} />
                <PrivateRoute path={routes.adminpanel} component={AdminPanel} />
                
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
