import React, { useEffect, useState } from 'react'
import AdminHeader from "./styled"
import { useDispatch } from 'react-redux';
import { userLogOut } from '../../../../store/user/actions';
import moment from "moment"
import { imgForLogOutBtn } from "../../../../assets/img/img"
export default function AdminHeaderComponent({ history }) {
    const [email, setEmail] = useState();
    useEffect(() => {
        const accessToken = localStorage.getItem('access_token');
        if (accessToken) {
                setEmail(JSON.parse(atob(accessToken.split(".")[1])).email);
        }

    },[])
    const dispatch = useDispatch();
    
    const logout = (refreshToken) => dispatch(userLogOut({ refreshToken, history }));

      const logOutHandler = () => {
          logout(localStorage.getItem('refresh_token'));
    }

    return (
        <AdminHeader.Wrapper>
            <AdminHeader.Time>{moment().format('llll')}</AdminHeader.Time>
            <AdminHeader.LogoutWrapper>
                <AdminHeader.Email>Hello, {email} </AdminHeader.Email>
                <AdminHeader.LogoutBtn onClick={logOutHandler}>
                    <AdminHeader.LogOutImg src={imgForLogOutBtn} width="20px"></AdminHeader.LogOutImg>
                    <AdminHeader.LogOutBtnName>Logout</AdminHeader.LogOutBtnName>
                    </AdminHeader.LogoutBtn>
            </AdminHeader.LogoutWrapper>
        </AdminHeader.Wrapper>
    )
}
