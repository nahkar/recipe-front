import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
// import queryString from 'query-string';

import { useForm, Controller } from 'react-hook-form';
import { Multiselect } from 'multiselect-react-dropdown';

import EditStyled from './styled';

const EditRecipe = (props) => { 

    const [receipe, setRecipe] = useState(null);

    const { category, recipes  } = useSelector(state => ({
        category: state.category.category,
        recipes: state.recipe.recipes,
    }));
    
    // const { id } = queryString.parse(history.location.search)
    const { id } = props.match.params;

    const { register, handleSubmit, control, setValue } = useForm();

    useEffect(() => {
        const selectedRecipe = recipes.find(recipe => recipe.id === +id);
        setRecipe(selectedRecipe);        
    }, [id, recipes]);

    useEffect(() => {
        if(receipe) {
            setValue('title', receipe.title);
            setValue('description', receipe.body);
        }
    }, [receipe, setValue]);

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <EditStyled.EditWrapper>
            <EditStyled.Header>
                <p>Edit Your Recipe</p>
            </EditStyled.Header>

            <EditStyled.MainPage>

                <EditStyled.RecipeBlock>
                    <EditStyled.Form onSubmit={handleSubmit(onSubmit)}>

                        <EditStyled.Label>Name of your recipe</EditStyled.Label>
                        <EditStyled.RecipeInput 
                            type="text"
                            name="title"
                            placeholder="name of your recipe"
                            ref={register({required: true})}/>

                        <EditStyled.Label>Add image</EditStyled.Label>
                        <EditStyled.RecipeInput 
                            type="text"
                            name="image"
                            placeholder="add image of your dish"
                            ref={register({required: true})}/>

                        <EditStyled.Label>Add category</EditStyled.Label>
                        <Controller
                            control={control}
                            name="multiselect"
                            render={((
                                { onChange, value }
                            ) => (
                            <Multiselect
                            options={category} 
                            displayValue='title' 
                            placeholder="Select category"
                            onSelect={onChange}
                            selectedValues={[{id: 5, title: "coffe"}]}
                            />
                            ))}
                        />
                        <EditStyled.Label>Write steps to prepare your dish</EditStyled.Label>
                        <EditStyled.RecipeDescription rows="5" name="description" ref={register({required: true})}/>

                        <EditStyled.Button type="submit" value="Edit your recipe"/>
                    </EditStyled.Form>
                   
                </EditStyled.RecipeBlock>
            </EditStyled.MainPage>
        </EditStyled.EditWrapper>
    )
}

export default EditRecipe;