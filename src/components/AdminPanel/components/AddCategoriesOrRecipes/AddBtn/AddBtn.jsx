import React,{useState} from 'react'
import ModalWindow from "../ModalWindow"
import AddBtn from "./styled"
export default function CreateBtn(props) {
    const [show, setShow] = useState(false);
    return (
        <div>
            {show === true && <ModalWindow
             api={props.api} dispatch={props.dispatch} setShow={setShow}/>}
            <AddBtn onClick={()=>setShow(true)}>Add new</AddBtn>
        </div>
    )
}
