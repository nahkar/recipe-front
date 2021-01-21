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
            {isLoggedIn ? 
            
            <Link to={ '/adminpanel' }>
                <NotFoundStyled.StyledLink>
                        Admin Panel
                </NotFoundStyled.StyledLink>
            </Link> :
            <Link to={ routes.login }>
                <NotFoundStyled.StyledLink>
                        Login
                </NotFoundStyled.StyledLink>
            </Link>
            }

            <h1>Not Found</h1>
        </div>
    )
}

export default NotFound;
