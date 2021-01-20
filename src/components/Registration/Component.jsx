import React, { useRef } from 'react';

import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { userRegistration } from '../../store/user/actions';
import Loader from '../Loader';
import routes from './../../constants/routes';
import { MIN_LENGTH } from './../../constants/form';

import RegistrationStyled from './styled';

export default function Registration({ history }) {

  const loading = useSelector((state) => state.user.isLoading);

  const { register, handleSubmit, errors, watch } = useForm();

  const dispatch = useDispatch();

  const registration = (registerData, history) => dispatch(userRegistration({registerData, history}));

  const onSubmit = (data) => {
    const registerData = {
      email: data.email,
      password: data.password,
    };
    registration(registerData, history);
  };

  const password = useRef({});
  password.current = watch('password', '');

  return (
    <>
      {loading && <Loader />}
        <RegistrationStyled.WrapperForRegistration>
          <RegistrationStyled.Form onSubmit={handleSubmit(onSubmit)}>
            <RegistrationStyled.Title>Register new user</RegistrationStyled.Title>
          <RegistrationStyled.Heading>Email</RegistrationStyled.Heading>
            <RegistrationStyled.Input
              type="text"
              name="email"
              id=""
              ref={register({ required: true, minLength: MIN_LENGTH, maxLength: 100 })}
            />

            {errors.email && (<RegistrationStyled.Error>Email must have at least { MIN_LENGTH } characters</RegistrationStyled.Error>
            )}
            <RegistrationStyled.Heading>Password</RegistrationStyled.Heading>
            <RegistrationStyled.Input
              name="password"
              type="password"
              ref={register({ required: 'You must specify a password', minLength: {
                value: MIN_LENGTH,
                message: `Password must have at least ${ MIN_LENGTH } characters`,
              },
            })}
            />

            {errors.password && ( <RegistrationStyled.Error>{errors.password.message}</RegistrationStyled.Error>
          )}
            <RegistrationStyled.Heading>
            Repeat password
            </RegistrationStyled.Heading>
            <RegistrationStyled.Input
            name="password_repeat"
            type="password"
            ref={register({
              validate: (value) =>
                value === password.current || 'The passwords do not match',
            })}
            />
            {errors.password_repeat && (
            <RegistrationStyled.Error>
              {errors.password_repeat.message}
            </RegistrationStyled.Error>
          )}
            <RegistrationStyled.WrapperForButton>
            <RegistrationStyled.BtnSubmit type="submit" value="Create User" />
            
          </RegistrationStyled.WrapperForButton>

          <Link to={routes.login} style={{ textDecoration: 'none' }}>
              <RegistrationStyled.LinkReg>If you have registered before, you can LOGIN</RegistrationStyled.LinkReg>
          </Link>
          
        </RegistrationStyled.Form>
      </RegistrationStyled.WrapperForRegistration>
    </>
  );
}
