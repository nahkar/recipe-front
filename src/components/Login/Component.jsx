import React from 'react';
import { useEffect, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getUserLogin } from '../../store/user/actions';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import routes from './../../constants/routes';
import Loader from '../Loader/index';

import LoginStyled from './styled';

const Login = ({ history }) => {

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const { isLoading } = useSelector(state => ({
        data: state.user.data,
        isLoading: state.user.isLoading,
    }))

    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(getUserLogin(data, history));
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
                    ref={register({ required: true, minLength: 5 }), inputRef} />
                
                {errors.email && errors.email.type === 'required' && <LoginStyled.Error>This field is required</LoginStyled.Error>}
                {errors.email && errors.email.type === 'minLength' && <LoginStyled.Error>This field is required minLength of 5 symbols</LoginStyled.Error>}

                <LoginStyled.Label>Password</LoginStyled.Label>
                <LoginStyled.Input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    ref={register({ required: true, minLength: 5 })} />
                
                {errors.password && errors.password.type === 'required' && <LoginStyled.Error>This field is required</LoginStyled.Error>}
                {errors.password && errors.password.type === 'minLength' && <LoginStyled.Error>This field is required minLength of 5 symbols</LoginStyled.Error>}

                <LoginStyled.BtnSubmit type="submit" value="Enter" />
                <Link to={routes.registration}>
                     <LoginStyled.LinkReg>Registration</LoginStyled.LinkReg>
                </Link>
                
                <Link to={routes.forgotPass}>
                     <LoginStyled.LinkForgot>Forgot your password?</LoginStyled.LinkForgot>
                </Link>

            </LoginStyled.Form>
            {isLoading && <Loader/>}
        </LoginStyled.MainBg>
    )
}

export default Login;
