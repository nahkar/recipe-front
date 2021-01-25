import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getCategories } from '../../../../store/category/actions';
import Loader from '../../../Loader';

import CategoryListStyled from './styled';

const CategoryList = () => {

    const { isLoading, category } = useSelector(state => ({
        category: state.category.category,
        isLoading: state.category.isLoading,
    }));
    const dispatch = useDispatch();

    console.log(category);

    useEffect(() => {
        dispatch(getCategories());
    }, [])

    return (
        <>
            {isLoading && <Loader/>}
            <CategoryListStyled.CategoryWrapper>
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
