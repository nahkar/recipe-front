import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../../store/user/actions";
import Loader from "../../../Loader";
import Table from "../Table";
import api from "../../../../utils/api";
import Button from "../Button";


export default function Users() {
	const { isLoading, users } = useSelector((state) => ({
		users: state.user.users,
		isLoading: state.user.isLoading,
	}));

	const dispatch = useDispatch();

	useEffect(() => {
		const getUsersList = () => dispatch(getUsers());
		getUsersList();
	}, [dispatch]);

	const deleteId = async (id) => {
		await api.user.deleteUser(id);
		dispatch(getUsers());
	};
  const deleteButtonGen = (id) => {
    return (
      <Button title="Delete"
      color="#ff0000"
      onClick={() => deleteId(id)}/>
    )
  }

	return (
		<>
			{isLoading && <Loader />}
			<Table items={users} names={["Id", "Email", "Role", "Created at", "Updated at"]} deleteBtn={deleteButtonGen} />
		</>
	);
}
