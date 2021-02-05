import React from "react";
import ButtonStyled from "./styled";
export default function Button(props) {
  return (
    <ButtonStyled.Button onClick={props.onClick} color={props.color}>
      {props.title}
    </ButtonStyled.Button>
  );
}
