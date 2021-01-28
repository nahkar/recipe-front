import React, { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getCategories } from '../../../../store/category/actions';
import Loader from '../../../Loader';

import AddBtn from "../AddCategoriesOrRecipes/AddBtn"
import api from "../../../../utils/api"

import CategoryStyled from './styled';

const CategoryList = () => {

    const { isLoading, category } = useSelector(state => ({
        category: state.category.category,
        isLoading: state.category.isLoading,
    }));

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getCategories());
        console.log('Category', category);
    }, [])

    
    return (
        <>
        {isLoading && <Loader />}
        
        <CategoryStyled.Wrapper>
            <AddBtn api={api.user.createCategory} dispatch={() => dispatch(getCategories()) }/>
            <CategoryStyled.Table >
                <CategoryStyled.Body>
                    <CategoryStyled.Header>
                        <CategoryStyled.ColumnName>Number</CategoryStyled.ColumnName>
                        <CategoryStyled.ColumnName>Category</CategoryStyled.ColumnName>
                        <CategoryStyled.ColumnName></CategoryStyled.ColumnName>
                        <CategoryStyled.ColumnName></CategoryStyled.ColumnName>
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
                                <CategoryStyled.Content></CategoryStyled.Content>
                                <CategoryStyled.Content></CategoryStyled.Content>
                                <CategoryStyled.Content>
                                <CategoryStyled.DeleteBtn>Deleate</CategoryStyled.DeleteBtn>
                                <CategoryStyled.EditBtn>Edit</CategoryStyled.EditBtn>
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
