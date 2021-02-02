import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../store/user/actions';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import Loader from '../Loader';
import routes from './../../constants/routes';

import { ButtonLog } from '../../shared/Button';

import LoginStyled from './styled';
import { MIN_LENGTH } from './../../constants/form';

const Login = ({ history }) => {

    const { isLoading } = useSelector(state => ({
        data: state.user.data,
        isLoading: state.user.isLoading,
    }))

    const dispatch = useDispatch();

    const login = (data, history) => dispatch(userLogin({ data, history }));

    const onSubmit = (data) => {
        login(data, history);
    }
    
    const { register, handleSubmit, errors } = useForm();

    return (
        <LoginStyled.MainBg>
            <LoginStyled.Form onSubmit={handleSubmit(onSubmit)}>
                <LoginStyled.Title>Entrance</LoginStyled.Title>
                
                <LoginStyled.Label>Login</LoginStyled.Label>
                    <LoginStyled.Input
                        type="text"
                        name="email"
                        placeholder="Enter your email"
                        ref={register({ required: true, minLength: MIN_LENGTH })} />
                    
                    {errors.email && errors.email.type === 'required' && <LoginStyled.Error>This field is required</LoginStyled.Error>}
                    {errors.email && errors.email.type === 'minLength' && <LoginStyled.Error>This field is required minLength of { MIN_LENGTH } symbols</LoginStyled.Error>}

                <LoginStyled.Label>Password</LoginStyled.Label>
                <LoginStyled.Input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    ref={register({ required: true, minLength: MIN_LENGTH })} />
                
                {errors.password && errors.password.type === 'required' && <LoginStyled.Error>This field is required</LoginStyled.Error>}
                {errors.password && errors.password.type === 'minLength' && <LoginStyled.Error>This field is required minLength of { MIN_LENGTH } symbols</LoginStyled.Error>}

                {/* <LoginStyled.BtnSubmit type="submit" value="Enter" /> */}

                <ButtonLog title="Login" color="green" type="submit"/>
                    
                
                <Link to={routes.registration} style={{ textDecoration: 'none' }}>
                     <LoginStyled.LinkReg>Registration</LoginStyled.LinkReg>
                </Link>
                
                <Link to={routes.forgotPass} style={{ textDecoration: 'none' }}>
                     <LoginStyled.LinkForgot>Forgot your password?</LoginStyled.LinkForgot>
                </Link>

            </LoginStyled.Form>
            {isLoading && <Loader/>}
        </LoginStyled.MainBg>
    )
}

export default Login;
