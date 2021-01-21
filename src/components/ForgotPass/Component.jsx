import React from 'react';

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import routes from '../../constants/routes';

import LoginStyled from './styled.js';

const ForgotPass = () => {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <LoginStyled.MainBg>
            <LoginStyled.Form onSubmit={handleSubmit(onSubmit)}>
                <LoginStyled.Title>Forgot your Password?</LoginStyled.Title>

                <LoginStyled.Label>Enter your Email</LoginStyled.Label>
                    <LoginStyled.Input
                        type="text"
                        name="email"
                        placeholder="Enter your email"
                        ref={register({ required: true, minLength: 5 })} />
                    
                    {errors.email && errors.email.type === 'required' && <LoginStyled.Error>This field is required</LoginStyled.Error>}
                    {errors.email && errors.email.type === 'minLength' && <LoginStyled.Error>This field is required minLength of 5 symbols</LoginStyled.Error>}

                <LoginStyled.BtnSubmit type="submit" value="Enter" />
                <LoginStyled.LinkBlock>
                    <Link to={routes.registration} style={{ textDecoration: 'none' }}>
                        <LoginStyled.StyledLink>
                            Registration
                        </LoginStyled.StyledLink>
                    </Link>
                    <Link to={routes.login} style={{ textDecoration: 'none' }}>
                        <LoginStyled.StyledLink>
                            Login
                        </LoginStyled.StyledLink>
                    </Link>
                </LoginStyled.LinkBlock>

            </LoginStyled.Form>
        </LoginStyled.MainBg>
    )
}

export default ForgotPass;
