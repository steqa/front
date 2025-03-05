import pageClasses from "../Page.module.css"
import classes from "./Home.module.css"
import {useContext} from "react";
import {UserContext} from "../../context/UserContext.tsx";

export const PHome = () => {
	const {user} = useContext(UserContext);

	return (
		<div className={pageClasses.pageContainer}>
			<div className={classes.content}>
				<h1>Добро пожаловать, {user.firstName}!</h1>
				<div className={classes.infoContainer}>
					<p><strong>ЛОГИН:</strong> {user.username}</p>
					<p><strong>ИМЯ:</strong> {user.firstName}</p>
					<p><strong>ФАМИЛИЯ:</strong> {user.lastName}</p>
					<p><strong>ПОЛ:</strong> {user.gender}</p>
					<p><strong>ДАТА РОЖДЕНИЯ:</strong> {user.birthday}</p>
				</div>
			</div>
		</div>
	)
}