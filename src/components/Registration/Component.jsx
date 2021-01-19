import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify';

import { userRegistration } from '../../store/user/actions';
import Loader from '../Loader';

import 'react-toastify/dist/ReactToastify.css';
import RegistrationStyled from './styled';

export default function Registration({ history }) {

  const loading = useSelector((state) => state.user.isLoading);

  const { register, handleSubmit, errors, watch } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const postData = {
      email: data.email,
      password: data.password,
    };
    dispatch(userRegistration(postData, history));
  };

  const password = useRef({});
  password.current = watch('password', '');

  return (
    <>
      {loading && <Loader />}
      <ToastContainer />
        <RegistrationStyled.WrapperForRegistration>
          <RegistrationStyled.Form onSubmit={handleSubmit(onSubmit)}>
            <RegistrationStyled.Title>Register new user</RegistrationStyled.Title>
            <RegistrationStyled.Heading>Email</RegistrationStyled.Heading>
            <RegistrationStyled.Input
              type="text"
              name="email"
              id=""
              ref={register({ required: true, minLength: 5, maxLength: 100 })}
            />

            {errors.email && (<RegistrationStyled.Error>Email must have at least 5 characters</RegistrationStyled.Error>
            )}
            <RegistrationStyled.Heading>Password</RegistrationStyled.Heading>
            <RegistrationStyled.Input
              name="password"
              type="password"
              ref={register({ required: 'You must specify a password', minLength: {
                value: 8,
                message: 'Password must have at least 8 characters',
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
        </RegistrationStyled.Form>
      </RegistrationStyled.WrapperForRegistration>
    </>
  );
}
