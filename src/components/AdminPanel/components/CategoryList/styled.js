import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkButton = styled(Link)``;
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 20px;
	font-size: 18px;
	background-color: #ccc;
`;
const ButtonWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const CategoryStyled = {
	Wrapper,
	ButtonWrapper,
	LinkButton,
};

export default CategoryStyled;
