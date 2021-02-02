import React, { useEffect, useState } from 'react';
import CreateCategoryStyled from "./styled";
import Button from "../Button";
import api from "../../../../utils/api";
import routes from "../../../../constants/routes";
import queryString from "query-string";

export default function EditCreateCategory({ history }) {
    const [category, setCategory] = useState("");
    const [addressId, setAddressId] = useState();

    useEffect(() => {
        valueForInput();
    }, []);
    
    if (category === " ") {
        setCategory("");
    }
   
    const { id } = queryString.parse(history.location.search);
    
    const valueForInput = async() => {
        
        const allCategories = await (await api.user.getCategories()).data;
        
        const result = allCategories.find((obj) => obj.id == id);
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
    const sendCategory = async (category) => {
        id ? await api.user.editCategory(id, {title: category}) : await api.user.createCategory({ title: category });
        await history.push(routes.categories);
}
    return (
        <CreateCategoryStyled.Wrapper>
            {id && addressId === false && <h2>Category did not found</h2>}
            <CreateCategoryStyled.NameInput>
                Name of Category
                <CreateCategoryStyled.Input value={category} type="text" onChange={(e) => setCategory(e.target.value)}/>
            </CreateCategoryStyled.NameInput>
            <CreateCategoryStyled.WrapperBtn>
            <Button title={id ? "Edit" : "Create"} color="#24d133" onClick={() => sendCategory(category)}/>
            <Button title="Exit" color="#ff0000" onClick={() => history.push(routes.categories)} />
            </CreateCategoryStyled.WrapperBtn>
        </CreateCategoryStyled.Wrapper>
    )
}
