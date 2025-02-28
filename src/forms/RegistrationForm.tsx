import {DropdownInput} from "../inputs/dropdown-input/DropdownInput.tsx";
import {DropdownInputOption} from "../inputs/dropdown-input/DropdownInputOption.tsx";
import {Input} from "../inputs/input/Input.tsx";
import {useState} from "react";


export const RegistrationForm = () => {
	const [login, setLogin] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [gender, setGender] = useState("");
	const [birthday, setBirthday] = useState("");
	const [password, setPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");

	return (
		<>
			<form action="">
				<Input placeholder="Логин" value={login} setValue={setLogin}/>
				<Input placeholder="Имя" value={firstName} setValue={setFirstName}/>
				<Input placeholder="Фамилия" value={lastName} setValue={setLastName}/>
				<DropdownInput placeholder={"Пол"} value={gender} setValue={setGender}>
					<DropdownInputOption value="М" label="Мужской"/>
					<DropdownInputOption value="Ж" label="Женский"/>
				</DropdownInput>
				<Input type="date" placeholder="Дата рождения" value={birthday} setValue={setBirthday}/>
				<Input type="password" placeholder="Пароль" value={password} setValue={setPassword}/>
				<Input type="password" placeholder="Повтор пароля" value={repeatPassword} setValue={setRepeatPassword}/>
				<button>Зарегистрироваться</button>
			</form>
		</>
	)
}