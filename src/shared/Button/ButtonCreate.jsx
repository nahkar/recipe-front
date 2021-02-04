import React from 'react';
import ButtonStyled from './styled';

const ButtonCreate = ({ title = 'Create', onClick, color='green' }) => {
    return (
        <ButtonStyled.BtnCreate color={ color } onClick={ onClick }>
            { title }
        </ButtonStyled.BtnCreate>
    )
}

export default ButtonCreate;
