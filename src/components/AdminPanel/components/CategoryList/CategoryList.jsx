import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getCategories } from "../../../../store/category/actions";
import Loader from "../../../Loader";

import api from "../../../../utils/api";

import CategoryStyled from "./styled";
import Button from "../Button";
import routes from "../../../../constants/routes";
import Table from "../Table";
const CategoryList = ({ history }) => {
	const { isLoading, category } = useSelector((state) => ({
		category: state.category.category,
		isLoading: state.category.isLoading,
	}));

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCategories());
		const getCategory = () => dispatch(getCategories());
		getCategory();
	}, [dispatch]);

	const deleteCategory = async (id) => {
		await api.user.deleteCategory(id);
		dispatch(getCategories());
	};
	const editBtnHandler = (id) => {
		history.push(`${routes.categoriesEdit}?id=${id}`);
	};
	const EditButtonGen = (id) => {
		return (
			<Button title="Edit" color="#24d133" onClick={() => editBtnHandler(id)} />
		);
	};
	const DeleteButtonGen = (id) => {
		return (
			<Button
				title="Delete"
				color="#ff0000"
				onClick={() => deleteCategory(id)}
			/>
		);
	};
	return (
		<>
			{isLoading && <Loader />}
			<CategoryStyled.Wrapper>
				<CategoryStyled.ButtonWrapper>
					<CategoryStyled.LinkButton to={routes.categoriesCreate}>
						<Button title="Add category" color="#24d133" />
					</CategoryStyled.LinkButton>
				</CategoryStyled.ButtonWrapper>

				<Table
					items={category}
					names={["Id", "Title"]}
					editBtn={EditButtonGen}
					deleteBtn={DeleteButtonGen}
				/>
			</CategoryStyled.Wrapper>
		</>
	);
};

export default CategoryList;
