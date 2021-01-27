import React, { useState } from 'react'
import Edit from "./styled"
import api from "../../../../../../utils/api"
export default function EditComponent(props) {
    const [role, setRole] = useState("user");
    const changeUser = (userRole) => {
        api.user.changeUser(props.user.id, {...props.user, role: userRole })
        console.log({...props.user, role: userRole})
    };
    return (
        <>
            <Edit.Overlay onClick={() => props.setShow(false)}></Edit.Overlay>
            <Edit.ModalWrapper>
                <Edit.ChangeName>Change role</Edit.ChangeName>
                <Edit.ChangeRole onChange={(event) => setRole(event.target.value)}>

                    <Edit.Role key={1} value={"user"}>User</Edit.Role>
                    <Edit.Role key={2} value={"writer"}>Writer</Edit.Role>
                    <Edit.Role key={3} value={"admin"}>Admin</Edit.Role>

                </Edit.ChangeRole>
                <Edit.BtnWrapper>
                <Edit.ChangeBtn onClick={() => changeUser(role)}>Change</Edit.ChangeBtn>
                <Edit.CloseBtn onClick={() => props.setShow(false)} >Close</Edit.CloseBtn>
                </Edit.BtnWrapper>
            </Edit.ModalWrapper>
            </>
    )
}
