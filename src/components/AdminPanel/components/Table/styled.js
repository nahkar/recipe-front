import styled from "styled-components";
const Table = styled.table`
	align-self: center;
	width: 500px;
	border-spacing: 0px;
	padding: 10px;
	background-color: #fff;
	box-shadow: 0 -5px 10px rgba(119, 119, 119, 0.829);
`;

const Header = styled.tr`
	background-color: #cccccc;
`;

const List = styled.tr``;

const ColumnName = styled.th`
	padding: 10px;
	text-align: left;
`;

const ContentName = styled.td``;

const UserName = styled.span`
	padding-left: 10px;
`;

const Body = styled.tbody``;

const TableStyled = {
	Table,
	ColumnName,
	Header,
	List,
	ContentName,
	UserName,
	Body,
};

export default TableStyled;
