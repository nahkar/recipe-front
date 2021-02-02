import React from 'react';
import ButtonStyled from "./styled";

const Button = (props) => {

    return (
        <>
        <ButtonStyled.Button onClick={props.onClick} color={props.color}>{props.title}</ButtonStyled.Button>
        </>
    )
}

export default Button;