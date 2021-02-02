import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getRecipes } from './../../../../store/recipe/actions';
import Loader from '../../../Loader';
import routes from '../../../../constants/routes';

import { ButtonCreate } from '../../../../shared/Button';
import Button from '../Button';

import RecipeStyled from './styled';

const RecipeList = ({history}) => {

    const { isLoading, recipes } = useSelector(state => ({
        recipes: state.recipe.recipes,
        isLoading: state.recipe.isLoading,
    }));

    const dispatch = useDispatch();

    useEffect(() => {
        const getRecipesData = () => dispatch(getRecipes());
        getRecipesData();
    }, [dispatch])

    return (
        <>
            {isLoading && <Loader />}
            <RecipeStyled.Wrapper>
                <RecipeStyled.ButtonWrapper>
                <ButtonCreate title="Add recipe" color="#24d133" onClick={() => history.push(routes.recipeCreate)}/>
                </RecipeStyled.ButtonWrapper>
            <RecipeStyled.Table >
                <RecipeStyled.Body>
                    <RecipeStyled.Header>
                        <RecipeStyled.ColumnName>Number</RecipeStyled.ColumnName>
                        <RecipeStyled.ColumnName>Title</RecipeStyled.ColumnName>
                        <RecipeStyled.ColumnName>Description</RecipeStyled.ColumnName>
                        <RecipeStyled.ColumnName>Image</RecipeStyled.ColumnName>
                        <RecipeStyled.ColumnName>Actions</RecipeStyled.ColumnName>
                    </RecipeStyled.Header>

                {recipes.map((recipe, index) => {
                        
                    return (
                        <RecipeStyled.List key={ recipe.id }>
                            <RecipeStyled.Content>{ index+1 }</RecipeStyled.Content>
                            <RecipeStyled.ContentName>
                                <RecipeStyled.UserImg/>
                                <RecipeStyled.UserName>{ recipe.title}</RecipeStyled.UserName>
                            </RecipeStyled.ContentName>
                            <RecipeStyled.Content>
                                <Button title="Edit" color="#24d133"/>
                                <Button title="Delete" color="#ff0000"/>
                            </RecipeStyled.Content>
                        </RecipeStyled.List>)
                    })}

        </RecipeStyled.Body>
      </RecipeStyled.Table>
      </RecipeStyled.Wrapper>
        </>
    )
}

export default RecipeList;
