import {RegistrationForm} from "../../components/forms/RegistrationForm.tsx";
import pageClasses from "../Page.module.css"
import classes from "./Registration.module.css"

export const PRegistration = () => {
	return (
		<div className={pageClasses.pageContainer}>
			<div className={classes.content}>
				<h1>Регистрация</h1>
				<div className={classes.formContainer}>
					<RegistrationForm/>
				</div>
			</div>
		</div>
	)
}