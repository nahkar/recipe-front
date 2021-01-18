import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import routes from '../constants/routes';
import Main from '../components/Main';
import Login from '../components/Login';
import PrivateRoute from '../components/PrivateRoute';
import PublicRoute from '../components/PublicRoute';
import Registration from "../components/Registration";
import NotFound from '../components/NotFound';
import ForgotPass from './../components/ForgotPass';

const Routes = () => {
    
    return (
        <BrowserRouter>
            <Switch>
                <PublicRoute path={routes.registration} component={ Registration }/>
                <PublicRoute path={routes.login} component={Login} />
                <PublicRoute path={routes.forgotPass} component={ForgotPass} />
                <PrivateRoute exact path={routes.main} component={Main} />
                <PublicRoute path={routes.notFound} component={ NotFound }/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
