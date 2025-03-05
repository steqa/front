import {RegistrationForm} from "../../components/forms/RegistrationForm.tsx";
import pageClasses from "../Page.module.css"
import classes from "./Registration.module.css"
import {useContext} from "react";
import {UserContext} from "../../context/UserContext.tsx";
import {useNavigate} from "react-router-dom";

export const PRegistration = () => {
	const {setUserContext} = useContext(UserContext);
	const navigate = useNavigate();

	return (
		<div className={pageClasses.pageContainer}>
			<div className={classes.content}>
				<h1>Регистрация</h1>
				<div className={classes.formContainer}>
					<RegistrationForm
						onSubmit={(user) => {
							setUserContext(user);
							navigate("/me");
						}}
					/>
				</div>
			</div>
		</div>
	)
}