import React, { useState } from 'react';
import CreateCategoryStyled from "./styled";
import Button from "../Button";
import api from "../../../../utils/api";
import routes from "../../../../constants/routes";


export default function Createcategory({history}, id) {
    console.log(id);
    const [category, setCategory] = useState();
    const sendCategory = async (category ) => {
        await api.user.createCategory({ title: category });
        await history.push(routes.categories);
}
    return (
        <CreateCategoryStyled.Wrapper>
            <CreateCategoryStyled.NameInput>
                Name of Category
                <CreateCategoryStyled.Input type="text" onChange={(e) => setCategory(e.target.value)}/>
            </CreateCategoryStyled.NameInput>
            <CreateCategoryStyled.WrapperBtn>

            <Button title="Create" color="#24d133" onClick={() => sendCategory(category)}/>
            <Button title="Exit" color="#ff0000" onClick={() => history.push(routes.categories)} />
            </CreateCategoryStyled.WrapperBtn>
        </CreateCategoryStyled.Wrapper>
    )
}
