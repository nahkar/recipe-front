import React from 'react';
import { useForm } from 'react-hook-form';

import LoginStyled from './styled';

const Login = () => {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <LoginStyled.MainBg>
            <LoginStyled.Form onSubmit={handleSubmit(onSubmit)}>
                <LoginStyled.Title>Entrance</LoginStyled.Title>

                <LoginStyled.Label>Login</LoginStyled.Label>
                <LoginStyled.Input
                    type="text"
                    name="userEmail"
                    placeholder="Enter your email"
                    ref={register({ required: true, minLength: 5 })} />
                
                {errors.userEmail && errors.userEmail.type === 'required' && <LoginStyled.Error>This field is required</LoginStyled.Error>}
                {errors.userEmail && errors.userEmail.type === 'minLength' && <LoginStyled.Error>This field is required minLength of 5 symbols</LoginStyled.Error>}

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
        </LoginStyled.MainBg>
    )
}

export default Login;
