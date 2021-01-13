import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserLogin } from '../../store/login/actions';
import { useForm } from 'react-hook-form';
import { ToastContainer } from 'react-toastify';
import Animation from '../Animation/index';

import LoginStyled from './styled';


const Login = ({ history }) => {

    const { data, isLoading } = useSelector(state => ({
        data: state.login.data,
        isLoading: state.login.isLoading,
    }))
    
    console.log(isLoading);

    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(getUserLogin(data, history));
    }
    
    const { register, handleSubmit, errors } = useForm();

    return (
        <LoginStyled.MainBg>
            <LoginStyled.Form onSubmit={handleSubmit(onSubmit)}>
                <ToastContainer />
                <LoginStyled.Title>Entrance</LoginStyled.Title>

                <LoginStyled.Label>Login</LoginStyled.Label>
                <LoginStyled.Input
                    type="text"
                    name="email"
                    placeholder="Enter your email"
                    ref={register({ required: true, minLength: 5 })} />
                
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

                <LoginStyled.BtnSubmit type="submit" value="Enter"/>
            </LoginStyled.Form>
            {isLoading && <Animation/>}
        </LoginStyled.MainBg>
    )
}

export default Login;
