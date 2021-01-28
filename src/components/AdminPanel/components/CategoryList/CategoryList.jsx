import React, { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getCategories } from '../../../../store/category/actions';
import Loader from '../../../Loader';

import CategoryListStyled from './styled';
import AddBtn from "../AddCategoriesOrRecipes/AddBtn"
import api from "../../../../utils/api"
const CategoryList = () => {

    const { isLoading, category } = useSelector(state => ({
        category: state.category.category,
        isLoading: state.category.isLoading,
    }));

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getCategories());
    }, [])

    
    return (
        <>
           
            {isLoading && <Loader/>}
            <CategoryListStyled.CategoryWrapper>
            <AddBtn api={api.user.createCategory} dispatch={() => dispatch(getCategories()) }/>
                
                <CategoryListStyled.CategoryTopInfo>
                    <CategoryListStyled.CategoryTopNumber>
                        №
                    </CategoryListStyled.CategoryTopNumber>
                    <CategoryListStyled.CategoryTopName>
                        Category
                    </CategoryListStyled.CategoryTopName>
                    <CategoryListStyled.CategoryTopAction>
                        Action
                    </CategoryListStyled.CategoryTopAction>
                </CategoryListStyled.CategoryTopInfo>

                {category.map((category, index) => {
                    return (
                        <CategoryListStyled.CategoryList key={category.id}>
                            <CategoryListStyled.CategoryDataNumber>
                                {index + 1}
                            </CategoryListStyled.CategoryDataNumber>
                            <CategoryListStyled.CategoryDataName>
                                {category.title}
                            </CategoryListStyled.CategoryDataName>
                        </CategoryListStyled.CategoryList>
                        )
                    })
                }
            </CategoryListStyled.CategoryWrapper>
        </>
    )
}

export default CategoryList;
