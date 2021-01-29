import React from 'react';

import ButtonStyled from './styled';

const ButtonLog = ({ title = 'Login', onClick, color='green' }) => {

    return (
        <ButtonStyled.BtnSubmit color={ color } onClick={ onClick }>
           { title }
        </ButtonStyled.BtnSubmit>
    )
}

export default ButtonLog;