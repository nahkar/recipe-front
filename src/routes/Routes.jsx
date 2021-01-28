import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PublicRoute from '../components/PublicRoute';
import PrivateRoute from '../components/PrivateRoute';

import Main from './../components/Main/index';
import Login from '../components/Login';
import Registration from "../components/Registration/index";
import AdminPanel from "../components/AdminPanel";
import NotFound from '../components/NotFound';
import ForgotPass from './../components/ForgotPass';

import RoutesMain from './RoutesMain';
import RoutesAdmin from './RoutesAdmin';
import RoutesLogin from './RoutesLogin';

import routes from '../constants/routes';

const Routes = () => {
    
    return (
        <BrowserRouter>
            <Switch>
                <RoutesAdmin />
                <RoutesLogin/>
                <RoutesMain/>
                <PublicRoute path={routes.forgotPass} component={ForgotPass} />
                <Route path={routes.notFound} component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
