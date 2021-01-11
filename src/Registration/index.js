import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import RegistrationStyled from "./styled";
import axios from "axios";
import BASE_URL from "../utils/api";
export default function Registration() {
  const { register, handleSubmit, errors, watch } = useForm();
  const onSubmit = (data) => {
    axios.post(BASE_URL, { data });
  };
  const password = useRef({});
  password.current = watch("password", "");
  console.log(password);
  return (
    <RegistrationStyled.WrapperForRegistration>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RegistrationStyled.Heading>Email</RegistrationStyled.Heading>
        <input
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
        <input
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

        <input
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
          <input type="submit" />
        </RegistrationStyled.WrapperForButton>
      </form>
    </RegistrationStyled.WrapperForRegistration>
  );
}
