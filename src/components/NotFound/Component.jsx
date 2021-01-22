import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import routes from '../../constants/routes';

import NotFoundStyled from './styled';

const NotFound = () => {

    const { isLoggedIn } = useSelector(state => ({ isLoggedIn: state.user.isLoggedIn }));
    console.log(isLoggedIn);

    return (
        <NotFoundStyled.MainBg>
            <NotFoundStyled.MainBlock>
                <h2>Page Not Found</h2>
                <p>
                    Looks like you've followed a broken link or entered a URL that doesn't exist on this site.
                </p>

                {isLoggedIn ? 
            
            <NotFoundStyled.StyledLink to={ routes.admin }>
                        Back to Admin panel
            </NotFoundStyled.StyledLink> :
            <NotFoundStyled.StyledLink to={ routes.login }>
                        Back to Login
            </NotFoundStyled.StyledLink>
                }
                <hr/>
            </NotFoundStyled.MainBlock>                     
        </NotFoundStyled.MainBg>
    )
}

export default NotFound;
