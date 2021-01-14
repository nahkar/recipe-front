import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import RegistrationStyled from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../store/registration/action";
import Loader from "../animations/Loader";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
export default function Registration({ history }) {
  const loading = useSelector((state) => state.registration.loading);
  const { register, handleSubmit, errors, watch } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    const postData = {
      email: data.email,
      password: data.password,
    };
    dispatch(createUser(postData, history));
  };
  const password = useRef({});
  password.current = watch("password", "");

  return (
    <>
      {loading && <Loader />}
      <ToastContainer />
      <RegistrationStyled.WrapperForRegistration>
        <form onSubmit={handleSubmit(onSubmit)}>
          <RegistrationStyled.Heading>Email</RegistrationStyled.Heading>
          <RegistrationStyled.Input
            type="text"
            name="email"
            id=""
            ref={register({ required: true, minLength: 5, maxLength: 100 })}
          />

          {errors.email && (
            <RegistrationStyled.Error>
              Email must have at least 5 characters
            </RegistrationStyled.Error>
          )}
          <RegistrationStyled.Heading>Password</RegistrationStyled.Heading>
          <RegistrationStyled.Input
            name="password"
            type="password"
            ref={register({
              required: "You must specify a password",
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
              },
            })}
          />

          {errors.password && (
            <RegistrationStyled.Error>
              {errors.password.message}
            </RegistrationStyled.Error>
          )}
          <RegistrationStyled.Heading>
            Repeat password
          </RegistrationStyled.Heading>
          <RegistrationStyled.Input
            name="password_repeat"
            type="password"
            ref={register({
              validate: (value) =>
                value === password.current || "The passwords do not match",
            })}
          />

          {errors.password_repeat && (
            <RegistrationStyled.Error>
              {errors.password_repeat.message}
            </RegistrationStyled.Error>
          )}
          <RegistrationStyled.WrapperForButton>
            <RegistrationStyled.BtnSubmit type="submit" />
          </RegistrationStyled.WrapperForButton>
        </form>
      </RegistrationStyled.WrapperForRegistration>
    </>
  );
}
