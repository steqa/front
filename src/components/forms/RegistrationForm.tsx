import {Input} from "../input/Input.tsx";
import {FC, useEffect, useState} from "react";
import {
	birthdayValidator,
	firstNameValidator,
	genderValidator,
	lastNameValidator,
	loginValidator,
	passwordRepeatValidator,
	passwordValidator
} from "../../utils/validators.ts";
import {useValidator} from "../../hooks/useValidator.ts";
import {InputErrors} from "../input-errors/InputErrors.tsx";
import {DropdownInput} from "../dropdown-input/DropdownInput.tsx";
import {DropdownInputOption} from "../dropdown-input/DropdownInputOption.tsx";
import classes from "./Form.module.css"
import {Button} from "../button/Button.tsx";
import {User} from "../../schemas/user.ts";

interface RegistrationFormProps {
	onSubmit?: (user: User) => void,
}

export const RegistrationForm: FC<RegistrationFormProps> = (
	{
		onSubmit,
	}
) => {
	const [btnIsActive, setBtnIsActive] = useState(false)

	const [login, setLogin, loginValid, loginEmpty, loginErrors] = useValidator<string>("", loginValidator)
	const [firstName, setFirstName, firstNameValid, firstNameEmpty, firstNameErrors] = useValidator<string>("", firstNameValidator)
	const [lastName, setLastName, lastNameValid, lastNameEmpty, lastNameErrors] = useValidator<string>("", lastNameValidator)
	const [gender, setGender, genderValid, genderEmpty, genderErrors] = useValidator<string>("", genderValidator)
	const [birthday, setBirthday, birthdayValid, birthdayEmpty, birthdayErrors] = useValidator<string>("", birthdayValidator)
	const [password, setPassword, passwordValid, passwordEmpty, passwordErrors] = useValidator<string>("", passwordValidator)
	const [passwordRepeat, setPasswordRepeat, passwordRepeatValid, passwordRepeatEmpty, passwordRepeatErrors, validatePasswordRepeat] = useValidator<string>("", passwordRepeatValidator, password)

	const onUpdate = () => {
		if (
			loginEmpty ||
			firstNameEmpty ||
			lastNameEmpty ||
			genderEmpty ||
			birthdayEmpty ||
			passwordEmpty ||
			passwordRepeatEmpty
		) {
			setBtnIsActive(false)
			return
		}

		if (
			(!loginEmpty && !loginValid) ||
			(!firstNameEmpty && !firstNameValid) ||
			(!lastNameEmpty && !lastNameValid) ||
			(!genderEmpty && !genderValid) ||
			(!birthdayEmpty && !birthdayValid) ||
			(!passwordEmpty && !passwordValid) ||
			(!passwordRepeatEmpty && !passwordRepeatValid)
		) {
			setBtnIsActive(false)
			return
		}

		setBtnIsActive(true)
	}

	const onSubmit_ = () => {
		if (
			loginValid &&
			firstNameValid &&
			lastNameValid &&
			genderValid &&
			birthdayValid &&
			passwordValid &&
			passwordValid
		) {
			if (onSubmit) {
				onSubmit({
					username: login,
					firstName: firstName,
					lastName: lastName,
					gender: gender,
					birthday: birthday
				})
			}
		}
	}

	useEffect(() => {
		onUpdate()
	});

	useEffect(() => {
		validatePasswordRepeat()
	}, [password]);

	return (
		<>
			<form action="" onSubmit={(e) => e.preventDefault()} className={classes.form}>
				<Input placeholder="Логин" value={login} setValue={setLogin}/>
				{loginErrors.length > 0 && (<InputErrors errors={loginErrors}/>)}

				<Input placeholder="Имя" value={firstName} setValue={setFirstName}/>
				{firstNameErrors.length > 0 && (<InputErrors errors={firstNameErrors}/>)}

				<Input placeholder="Фамилия" value={lastName} setValue={setLastName}/>
				{lastNameErrors.length > 0 && (<InputErrors errors={lastNameErrors}/>)}

				<DropdownInput placeholder={"Пол"} value={gender} setValue={setGender}>
					<DropdownInputOption value="Мужчина" label="Мужчина"/>
					<DropdownInputOption value="Женщина" label="Женщина"/>
				</DropdownInput>
				{genderErrors.length > 0 && (<InputErrors errors={genderErrors}/>)}

				<Input type="date" placeholder="Дата рождения" value={birthday} setValue={setBirthday}/>
				{birthdayErrors.length > 0 && (<InputErrors errors={birthdayErrors}/>)}

				<Input type="password" placeholder="Пароль" value={password} setValue={setPassword}/>
				{passwordErrors.length > 0 && (<InputErrors errors={passwordErrors}/>)}

				<Input type="password" placeholder="Повтор пароля" value={passwordRepeat} setValue={setPasswordRepeat}/>
				{passwordRepeatErrors.length > 0 && (<InputErrors errors={passwordRepeatErrors}/>)}

				{
					btnIsActive ?
						(<Button onClick={() => onSubmit_()}>Зарегистрироваться</Button>)
						:
						(<Button disabled>Зарегистрироваться</Button>)
				}
			</form>
		</>
	)
}