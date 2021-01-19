import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import routes from '../../constants/routes';

const PublicRoute = ({ ...rest }) => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);

    return isLoggedIn ? <Redirect to={routes.main} /> : <Route {...rest}/>
}

export default PublicRoute;
