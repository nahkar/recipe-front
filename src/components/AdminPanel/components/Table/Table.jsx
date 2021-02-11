import React from 'react';
import TableStyled from './styled';

export default function TableComponent({ names, items, editBtn, deleteBtn }) {
  return (
    <TableStyled.Table>
      <TableStyled.Body>
        <TableStyled.Header>
          {names.map((name) => {
            return (
              <TableStyled.ColumnName key={name}>{name}</TableStyled.ColumnName>
            );
          })}
          {editBtn && <TableStyled.ColumnName>Edit</TableStyled.ColumnName>}
          {deleteBtn && <TableStyled.ColumnName>Delete</TableStyled.ColumnName>}
        </TableStyled.Header>
        {items.map((item, i) => {
          return (
            <TableStyled.List key={item.id}>
              {names.map((name, index) => {
                const objKeysLowerCase = JSON.parse(
                  JSON.stringify(item).toLowerCase()
                );
                return (
                  <td key={index}>
                    {objKeysLowerCase[name.toLowerCase().replace(/ /g, '')]}
                  </td>
                );
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
