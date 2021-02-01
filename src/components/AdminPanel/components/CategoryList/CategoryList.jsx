import React, { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getCategories } from '../../../../store/category/actions';
import Loader from '../../../Loader';

import api from "../../../../utils/api"

import CategoryStyled from './styled';
import Button from "../Button"
const CategoryList = (history) => {

    const { isLoading, category } = useSelector(state => ({
        category: state.category.category,
        isLoading: state.category.isLoading,
    }));

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getCategories());
        console.log('Category', category);
    }, [])

    const deleteCategory = async(id) => {
        await api.user.deleteCategory(id);
        dispatch(getCategories());
        
    }

    return (
        <>
        {isLoading && <Loader />}
            <CategoryStyled.Wrapper>
                    <CategoryStyled.ButtonWrapper>
                    <Button title="Add category" color="#24d133" onClick={() => history.push("/admin/categories/creature")}/>
                    </CategoryStyled.ButtonWrapper>
            <CategoryStyled.Table >
                <CategoryStyled.Body>
                    <CategoryStyled.Header>
                        <CategoryStyled.ColumnName>Number</CategoryStyled.ColumnName>
                        <CategoryStyled.ColumnName>Category</CategoryStyled.ColumnName>
                        <CategoryStyled.ColumnName></CategoryStyled.ColumnName>
                    </CategoryStyled.Header>

                {category.map((category, index) => {
                        
                    return (
                        <CategoryStyled.List key={ category.id }>
                            <CategoryStyled.Content>{ index+1 }</CategoryStyled.Content>
                                <CategoryStyled.ContentName>
                                    <CategoryStyled.UserImg/>
                                    <CategoryStyled.UserName>{ category.title}</CategoryStyled.UserName>
                                </CategoryStyled.ContentName>
                                <CategoryStyled.Content>
                               <Button title="Edit" color="#24d133"/>
                               <Button title="Delete" color="#ff0000" onClick={()=> deleteCategory(category.id)}/>
                            </CategoryStyled.Content>
                        </CategoryStyled.List>)
                    })}
        </CategoryStyled.Body>
      </CategoryStyled.Table>
      </CategoryStyled.Wrapper>
        </>
    )
}

export default CategoryList;
