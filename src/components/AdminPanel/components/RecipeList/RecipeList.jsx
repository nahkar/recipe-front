import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getRecipes } from './../../../../store/recipe/actions';
import Loader from '../../../Loader';

import RecipeListStyled from './styled';

const RecipeList = () => {

    const { isLoading } = useSelector(state => ({
        recipes: state.category.recipes,
        isLoading: state.category.isLoading,
    }));
    const dispatch = useDispatch();

    // console.log(recipes);

    useEffect(() => {
        dispatch(getRecipes());
    }, [])

    return (
        <>
            {isLoading && <Loader/>}
            <RecipeListStyled.RecipeWrapper>
                <RecipeListStyled.RecipeTopInfo>
                    <RecipeListStyled.RecipeTopNumber>
                        №
                    </RecipeListStyled.RecipeTopNumber>
                    <RecipeListStyled.RecipeTopName>
                        Category
                    </RecipeListStyled.RecipeTopName>
                    <RecipeListStyled.RecipeTopAction>
                        Action
                    </RecipeListStyled.RecipeTopAction>
                </RecipeListStyled.RecipeTopInfo>

                {/* {recipes.map((recipe, index) => {
                    return (
                        <RecipeListStyled.RecipeList key={recipe.id}>
                            <RecipeListStyled.RecipeDataNumber>
                                {index + 1}
                            </RecipeListStyled.RecipeDataNumber>
                            <RecipeListStyled.RecipeDataName>
                                {recipe.title}
                            </RecipeListStyled.RecipeDataName>
                        </RecipeListStyled.RecipeList>
                        )
                    })
                } */}
            </RecipeListStyled.RecipeWrapper>
        </>
    )
}

export default RecipeList;
