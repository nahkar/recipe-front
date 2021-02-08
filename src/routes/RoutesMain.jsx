import React from 'react';

import { Route } from 'react-router-dom';

import routes from '../constants/routes';

import Main from './../components/Main/Component';

const RoutesMain = () => {
    return (
        <>
            <Route exact path={routes.webHome} component={ Main }/>
        </>
    )
}

export default RoutesMain;
