import React from 'react';

import { Switch, Route } from 'react-router-dom';

import routes from '../constants/routes';

import Main from './../components/Main/Component';

const RoutesMain = () => {
    return (
        <Switch>
            <Route exact path={routes.webHome} component={ Main }/>
        </Switch>
    )
}

export default RoutesMain;
