import React, {useState} from 'react'
import CreateCategory from "./styled"


export default function Modalwindow(props) {
    const createCategory = async (value) => {
        await props.api({ title: value });
        await props.setShow(false);
        await props.dispatch();
    }
    const [value, setValue] = useState()
    return (
        <div>
            <CreateCategory.Overlay onClick={() => props.setShow(false)}></CreateCategory.Overlay>
            <CreateCategory.ModalWrapper>
                <CreateCategory.Category>Write a category</CreateCategory.Category>
                <CreateCategory.WriteCategory type="text" onChange={ (e) => setValue(e.target.value) }/>
                <CreateCategory.BtnWrapper>
                <CreateCategory.ChangeBtn onClick={() => createCategory(value)}>Change</CreateCategory.ChangeBtn>
                <CreateCategory.CloseBtn onClick={() => props.setShow(false)} >Close</CreateCategory.CloseBtn>
                </CreateCategory.BtnWrapper>
            </CreateCategory.ModalWrapper>
        </div>
    )
}
