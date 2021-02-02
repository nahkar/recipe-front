import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { getCategories } from './../../../../../../store/category/actions';
import { createRecipe } from './../../../../../../store/recipe/actions';
import routes from './../../../../../../constants/routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import CreateStyled from './styled';

const CreateRecipe = ({history}) => {

    const {isLoading, category  } = useSelector(state => ({
        isLoading: state.category.isLoading,
        category: state.category.category,
    }));

    const dispatch = useDispatch();
    const generateRecipe = (data, history) => dispatch(createRecipe(data, history));

    useEffect(() => {
        const getCategory = () => dispatch(getCategories());
        getCategory();
    }, [dispatch]);

    
    const onSubmit = (data) => {
        const dataRecipe = {
            title: data.title,
            body: data.description,
            img: data.file, 
        }
        generateRecipe(dataRecipe);
        console.log(dataRecipe);
        history.push(routes.recipes);

    }

    const { register, handleSubmit } = useForm();

    return (
        <CreateStyled.CreateWrapper>
            <CreateStyled.Header>
            <p>Create Your Own Recipe</p>
            </CreateStyled.Header>
            <CreateStyled.MainPage>

                <CreateStyled.CategoryBlock>
                    <CreateStyled.CategoryTitle>
                        Post in categories:
                    </CreateStyled.CategoryTitle>

                    {category.map((category) => {
                        return (
                            <CreateStyled.ListItem key={category.id}>
                                <CreateStyled.Checkbox type="checkbox"/>
                                {category.title}
                            </CreateStyled.ListItem>
                            )
                    })}
                </CreateStyled.CategoryBlock>

                <CreateStyled.RecipeBlock>
                    <CreateStyled.Form onSubmit={handleSubmit(onSubmit)}>

                        <CreateStyled.Label>Name of your recipe</CreateStyled.Label>
                         <CreateStyled.RecipeInput 
                            type="text"
                            name="title"
                            placeholder="name of your recipe"
                            ref={register({required: true})}/>

                        <CreateStyled.Label>Add image</CreateStyled.Label>
                        <CreateStyled.ChooseFile type="file" name="file" placeholder="Add image"/>

                        <CreateStyled.Label>Write steps to prepare your dish</CreateStyled.Label>
                        <CreateStyled.RecipeDescription rows="7" name="description" ref={register({required: true})}/>

                        <CreateStyled.Button type="submit" value="Publish your recipe"/>
                    </CreateStyled.Form>
                   
                </CreateStyled.RecipeBlock>
            </CreateStyled.MainPage>
        </CreateStyled.CreateWrapper>
    )
}

export default CreateRecipe;
