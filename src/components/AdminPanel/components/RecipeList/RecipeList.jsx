import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import moment from 'moment';

import { getRecipes } from './../../../../store/recipe/actions';
import Loader from '../../../Loader';
import routes from '../../../../constants/routes';

import { getCategories } from './../../../../store/category/actions';
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
        const getCategoryData = () => dispatch(getCategories());
        const getRecipesData = () => dispatch(getRecipes());
        getRecipesData();
        getCategoryData();
    }, [dispatch])

    return (
        <>
            {isLoading && <Loader />}
            <RecipeStyled.Wrapper>
                    <RecipeStyled.ButtonWrapper>
                    <ButtonCreate title="Add new recipe" color="#24d133" onClick={() => history.push(routes.recipeCreate)}/>
                    </RecipeStyled.ButtonWrapper>
            <RecipeStyled.Table >
                <RecipeStyled.Body>
                    <RecipeStyled.Header>
                        <RecipeStyled.ColumnName>№</RecipeStyled.ColumnName>
                        <RecipeStyled.ColumnName>Title</RecipeStyled.ColumnName>
                        <RecipeStyled.ColumnName>Descriprion</RecipeStyled.ColumnName>
                        <RecipeStyled.ColumnName>Created At</RecipeStyled.ColumnName>
                        <RecipeStyled.ColumnName>Actions</RecipeStyled.ColumnName>
                    </RecipeStyled.Header>

                {recipes.map((recipe, index ) => {
                    return (
                        <RecipeStyled.List key={ recipe.id }>
                            <RecipeStyled.Content>{ index+1 }</RecipeStyled.Content>
                            <RecipeStyled.ContentName>
                                {/* <RecipeStyled.UserImg>{ recipe.img }</RecipeStyled.UserImg> */}
                                <RecipeStyled.UserName>{ recipe.title}</RecipeStyled.UserName>
                            </RecipeStyled.ContentName>

                            <RecipeStyled.Content>{ recipe.body }</RecipeStyled.Content>
                            <RecipeStyled.Content>{ moment(recipe.createdAt).format('DD/MM/YYYY') }</RecipeStyled.Content>
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
