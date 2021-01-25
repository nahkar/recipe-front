import React from 'react'
import Edit from "./styled"
export default function EditComponent(props) {
    return (
        <>
            <Edit.Overlay onClick={() => props.setShow(false)}></Edit.Overlay>
            <Edit.ModalWrapper>
                <Edit.ChangeName>Change role</Edit.ChangeName>
                <Edit.ChangeRole>
                    <Edit.Role>User</Edit.Role>
                    <Edit.Role>Writer</Edit.Role>
                    <Edit.Role>Admin</Edit.Role>
                </Edit.ChangeRole>
                <Edit.BtnWrapper>
                <Edit.ChangeBtn>Change</Edit.ChangeBtn>
                <Edit.CloseBtn onClick={() => props.setShow(false)} >Close</Edit.CloseBtn>
                </Edit.BtnWrapper>
            </Edit.ModalWrapper>
            </>
    )
}
