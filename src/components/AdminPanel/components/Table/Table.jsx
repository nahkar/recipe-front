import React from "react";
import TableStyled from "./styled";

export default function TableComponent({ names, items, editBtn, deleteBtn }) {
	return (
		<TableStyled.Table>
			<TableStyled.Body>
				<TableStyled.Header>
					{names.map((name) => (
						<TableStyled.ColumnName>{name}</TableStyled.ColumnName>
					))}
					{editBtn && <TableStyled.ColumnName>Edit</TableStyled.ColumnName>}
					{deleteBtn && <TableStyled.ColumnName>Delete</TableStyled.ColumnName>}
				</TableStyled.Header>
				{items.map((item) => {
					return (
						<TableStyled.List key={item.id}>
							{names.map((name) => {
								console.log(item);
								const objKeysLowerCase = JSON.parse(JSON.stringify(item).toLowerCase());
								return <td>{objKeysLowerCase[name.toLowerCase().replace(/ /g, '')]}</td>;
							})}
							{editBtn && (
								<TableStyled.ContentName>
									{editBtn(item.id)}
								</TableStyled.ContentName>
							)}
							{deleteBtn && (
								<TableStyled.ContentName>
									{deleteBtn(item.id)}
								</TableStyled.ContentName>
							)}
						</TableStyled.List>
					);
				})}
			</TableStyled.Body>
		</TableStyled.Table>
	);
}
