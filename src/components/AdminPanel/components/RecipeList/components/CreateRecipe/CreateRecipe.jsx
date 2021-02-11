import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { Multiselect } from 'multiselect-react-dropdown';

import { getCategories } from './../../../../../../store/category/actions';
import { createRecipe } from './../../../../../../store/recipe/actions';
import routes from './../../../../../../constants/routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import CreateStyled from './styled';

const CreateRecipe = ({history}) => {

    const { category, userId  } = useSelector(state => ({
        category: state.category.category,
        userId: state.user.userId,
    }));

    const dispatch = useDispatch();
    const generateRecipe = (data, history) => dispatch(createRecipe(data, history));

    useEffect(() => {
        const getCategory = () => dispatch(getCategories());
        getCategory();
    }, [dispatch]);
    
    const onSubmit = (data) => {
        const dataRecipe = {
            userId: String(userId),
            title: data.title,
            body: data.description,
            categoryIds: data.multiselect.map(item => item.id),
        }

        generateRecipe(dataRecipe, history);
        history.push(routes.recipes);
    }

    const { register, handleSubmit, control } = useForm();

    return (
        <CreateStyled.CreateWrapper>

            <CreateStyled.Header>
                <p>Create Your Own Recipe</p>
            </CreateStyled.Header>

            <CreateStyled.MainPage>

                <CreateStyled.RecipeBlock>
                    <CreateStyled.Form onSubmit={handleSubmit(onSubmit)}>

                        <CreateStyled.Label>Name of your recipe</CreateStyled.Label>
                         <CreateStyled.RecipeInput 
                            type="text"
                            name="title"
                            placeholder="name of your recipe"
                            ref={register({required: true})}/>

                        <CreateStyled.Label>Add image</CreateStyled.Label>
                        <CreateStyled.RecipeInput 
                            type="text"
                            name="image"
                            placeholder="add image of your dish"
                            ref={register({required: true})}/>

                        <CreateStyled.Label>Add category</CreateStyled.Label>
                        <Controller
                            control={control}
                            name="multiselect"
                            render={((
                                { onChange }
                            ) => (
                            <Multiselect
                            options={category} 
                            displayValue='title' 
                            placeholder="Select category"
                            onSelect={onChange}
                            />
                            ))}
                        />
                        <CreateStyled.Label>Write steps to prepare your dish</CreateStyled.Label>
                        <CreateStyled.RecipeDescription rows="5" name="description" ref={register({required: true})}/>

                        <CreateStyled.Button type="submit" value="Publish your recipe"/>
                    </CreateStyled.Form>
                   
                </CreateStyled.RecipeBlock>
            </CreateStyled.MainPage>
        </CreateStyled.CreateWrapper>
    )
}

export default CreateRecipe;
