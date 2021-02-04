import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Multiselect } from 'multiselect-react-dropdown';

import { getCategories } from './../../../../../../store/category/actions';
import { createRecipe } from './../../../../../../store/recipe/actions';
import routes from './../../../../../../constants/routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import CreateStyled from './styled';

const CreateRecipe = ({history}) => {

    const [select, setSelect] = useState();

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
            userId: 1,
            title: data.title,
            body: data.description,
            categoryIds: select.map(item => item.id),
        }

        generateRecipe(dataRecipe);
        console.log('dataRecipe',dataRecipe);
        history.push(routes.recipes);
    }

    const { register, handleSubmit } = useForm();

    const selectHandler = (value) => {
        setSelect(value);
    }

    console.log(select);

    return (
        <CreateStyled.CreateWrapper>
            <CreateStyled.Header>
            <p>Create Your Own Recipe</p>
            </CreateStyled.Header>
            <CreateStyled.MainPage>

                <CreateStyled.CategoryBlock>
                    <CreateStyled.CategoryTitle>
                        Post in category:
                    </CreateStyled.CategoryTitle>

                    <Multiselect options={category} displayValue='title' placeholder="Select category" required onSelect={selectHandler}/>
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
