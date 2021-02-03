import React, { useEffect, useState } from 'react';
import CreateCategoryStyled from "./styled";
import Button from "../Button";
import api from "../../../../utils/api";
import routes from "../../../../constants/routes";
import queryString from "query-string";
import Input from "../Input"
export default function EditCreateCategory({ history }) {
    const MAX_LENGTH = 20;
    const [category, setCategory] = useState("");
    const [addressId, setAddressId] = useState();
    const [show, setShow] = useState(false);
    useEffect(() => {
        valueForInput();
    },[]);

   
    const valueForInput = async() => {
        
        const allCategories = await (await api.user.getCategories()).data;
        const result = allCategories.find((obj) => +obj.id === +id);
        if (result) {
            const title = await api.user.getCategory(id);
            setCategory(title.data.title);
        } 
        if (result) {
            setAddressId(true)
        } else {
            setAddressId(false);
        };
    }
    
    const { id } = queryString.parse(history.location.search);
    
    const sendCategory = async (category) => {
        if (category) {
            id ? await api.user.editCategory(id, {title: category.trim()}) : await api.user.createCategory({ title: category.trim() });
            await history.push(routes.categories);
        } else {
            setShow(true)
        }

    }
    return (
        <CreateCategoryStyled.Wrapper>
            {id && addressId === false && <h2>Category did not found</h2>}
            <CreateCategoryStyled.NameInput>
                Name of Category
                 <Input margin="30px" isError={category.length >= MAX_LENGTH} type="text" maxLength={MAX_LENGTH} value={category} onChange={(e) => setCategory(e.target.value)}/>
                
                {category.length >= 20 && <CreateCategoryStyled.WarningMessage>Сategory must have a maximum of 20 characters </CreateCategoryStyled.WarningMessage>}
                {show && category.length === 0 && <CreateCategoryStyled.WarningMessage>Enter category name</CreateCategoryStyled.WarningMessage>}
                
            </CreateCategoryStyled.NameInput>
            <CreateCategoryStyled.WrapperBtn>
            <Button title={id ? "Edit" : "Create"} color="#24d133" onClick={() => sendCategory(category)}/>
            <Button title="Exit" color="#ff0000" onClick={() => history.push(routes.categories)} />
            </CreateCategoryStyled.WrapperBtn>
        </CreateCategoryStyled.Wrapper>
    )
}
