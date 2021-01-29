import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getRecipes } from './../../../../store/recipe/actions';
import Loader from '../../../Loader';

import RecipeListStyled from './styled';

import AddBtn from "../AddCategoriesOrRecipes/AddBtn";
import api from "../../../../utils/api"
const RecipeList = () => {

    const { isLoading } = useSelector(state => ({
        recipes: state.category.recipes,
        isLoading: state.category.isLoading,
    }));

    const dispatch = useDispatch();

    
    useEffect(() => {
        const getRecipesData = () => dispatch(getRecipes());
        getRecipesData();
    }, [dispatch])

    return (
        <>
            {isLoading && <Loader/>}
            <RecipeListStyled.RecipeWrapper>
            <AddBtn api={api.user.createRecipe} dispatch={() => dispatch(getRecipes()) }/>
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
