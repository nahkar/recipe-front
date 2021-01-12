import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import RegistrationStyled from "./styled";
import { useDispatch } from "react-redux";
import api from "../../utils/api";
import {
  postSuccess,
  postRequest,
  postError,
} from "../../store/registration/action";

export default function Registration() {
  const { register, handleSubmit, errors, watch } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    const postData = {
      email: data.email,
      password: data.password,
    };
    console.log("============>>>>>>>>>>>>>>>>>>", postData);
    api.registration.postRequest(postData);
    // dispatch(
    //   (dispatch) => dispatch(postRequest()),
    //   api.registration
    //     .postRequest(postData)
    //     .then((postData) => {
    //       dispatch(postSuccess(postData));
    //     })
    //     .catch((err) => dispatch(postError(err)))
    // );
  };
  const password = useRef({});
  password.current = watch("password", "");
  console.log(password);
  return (
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
        <RegistrationStyled.Heading>Repeat password</RegistrationStyled.Heading>
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
  );
}
