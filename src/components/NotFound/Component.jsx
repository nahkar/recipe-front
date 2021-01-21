import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import routes from '../../constants/routes';

import NotFoundStyled from './styled';

const NotFound = () => {

    const { isLoggedIn } = useSelector(state => ({ isLoggedIn: state.user.isLoggedIn }));
    console.log(isLoggedIn);

    return (
        <div>
            

            <h1>Not Found go to {isLoggedIn ? 
            
            <Link to={ '/' }>
                        Admin Panel
            </Link> :
            <Link to={ routes.login }>
                        Login
            </Link>
            }</h1>
        </div>
    )
}

export default NotFound;
