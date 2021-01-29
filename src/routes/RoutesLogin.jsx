import React from 'react';

import { Switch } from 'react-router-dom';

import PublicRoute from './../components/PublicRoute/Component';
import Registration from './../components/Registration/Component';
import Login from './../components/Login/index';

import routes from '../constants/routes';

const RoutesLogin = () => {
    return (
        <Switch>
            <PublicRoute path={routes.registration} component={ Registration }/>
            <PublicRoute exact path={routes.login} component={Login} />
        </Switch>
    )
}

export default RoutesLogin;
