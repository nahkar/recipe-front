import React from 'react';
import { Link } from 'react-router-dom';

import ButtonStyled from './styled';
import { withTheme } from 'styled-components'

const Button = () => {

    return (
        <ButtonStyled.Button>
            <h3>Hello</h3>
            <ButtonStyled.Link>Submit</ButtonStyled.Link>
                   {/* <div class="button-item">
                        <h3>Button Two</h3>
                        <a href="" class="btn-2">Add To Cart</a>
                        </div> */}
           
            </ButtonStyled.Button>
    )
}

export default withTheme(Button);