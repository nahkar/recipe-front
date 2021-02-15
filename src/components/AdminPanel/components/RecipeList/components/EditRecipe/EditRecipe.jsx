import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
// import queryString from 'query-string';

import { useForm, Controller } from 'react-hook-form';
import { Multiselect } from 'multiselect-react-dropdown';

import { getCurrentRecipe, clearSingleRecipe, editRecipe } from './../../../../../../store/recipe/actions';
import { getCategories } from '../../../../../../store/category/actions';
import routes from './../../../../../../constants/routes';

import EditStyled from './styled';

const EditRecipe = (props, history) => { 

    const [recipe, setRecipe] = useState(null);
    const [categoryCurrent, setCategory] = useState(null);

    const dispatch = useDispatch();

    const generateRecipe = (id, data) => dispatch(editRecipe(id, data));

    const { category, singleRecipe, userId  } = useSelector(state => ({
        category: state.category.category,
        singleRecipe: state.recipe.singleRecipe,
        userId: state.user.userId,
    }));

    const [selectedValues, setSelectedValues] = useState([]);

    useEffect(() => {
        if(singleRecipe.categories){
            setSelectedValues([...singleRecipe.categories])
        }
    }, [singleRecipe.categories])

    const multiSelectHandler = (data) => {
        setSelectedValues([...data])
    };

    const multiSelectRemoveHandler = (data) => {
        setSelectedValues([...data])
    }
    
    // const { id } = queryString.parse(history.location.search)
    const { id } = props.match.params;

    const { register, handleSubmit, control, setValue } = useForm();
    const getRecipe = (id) => dispatch(getCurrentRecipe(id));

    useEffect(() => {

        const getCategory = () => dispatch(getCategories());
        getCategory();

        getRecipe(id);

        return () => {
            console.log('UNMOUNT');
            dispatch(clearSingleRecipe())
        };
    }, []);  

    useEffect(() => {
        if(singleRecipe) {
            setValue('title', singleRecipe.title);
            setValue('description', singleRecipe.body);
        }
    }, [singleRecipe]);

    const onSubmit = (data) => {

        const dataRecipe = {
            userId: String(userId),
            title: data.title,
            body: data.description,
            categoryIds: selectedValues.map(category => category.id)
        }
        console.log('dataRecipe', dataRecipe);
        generateRecipe(id, dataRecipe);
        // history.push(routes.recipes);
    }
 
    return (
       
           (singleRecipe.id && category.length) ? <>
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
                        <Multiselect
                            ref={register({required: true})}
                            options={category} 
                            displayValue='title' 
                            placeholder="Select category"
                            onSelect={ multiSelectHandler }
                            onRemove={multiSelectRemoveHandler}
                            selectedValues={selectedValues}
                            />

                        <EditStyled.Label>Write steps to prepare your dish</EditStyled.Label>
                        <EditStyled.RecipeDescription rows="5" name="description" ref={register({required: true})}/>

                        <EditStyled.Button type="submit" value="Edit your recipe"/>
                    </EditStyled.Form>
                   
                </EditStyled.RecipeBlock>
            </EditStyled.MainPage>
        </EditStyled.EditWrapper></>: <p>Loading ....</p>
       
    )
}

export default EditRecipe;