import React from 'react'
import Input from "./styled"
export default function InputComponent(props) {
    return (
        <Input margin={props.margin} isError={props.isError} onChange={props.onChange}
            maxLength={props.maxLength} value={ props.value}/>
    )
}
