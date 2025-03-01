export const loginValidator = (value: string) => {
	const errors = []
	if (!value || value.length < 0) return []
	if (value.length < 5) errors.push("Минимальная длина логина 5 символов.")
	if (value.length > 255) errors.push("Максимальная длина логина 255 символов.")
	if (!/^[a-z]+$/.test(value)) errors.push("Логин должен состоять из латинских букв в нижнем регистре.")
	return errors
}

export const firstNameValidator = (value: string) => {
	const errors = []
	if (!value || value.length < 0) return []
	if (value.length < 2) errors.push("Минимальная длина имени 2 символа.")
	if (value.length > 100) errors.push("Максимальная длина имени 100 символов.")
	if (!/^[а-яА-ЯёЁ]+$/.test(value)) errors.push("Имя может состоять только из букв русского алфавита.")
	if (!/^[А-ЯЁ]+/.test(value)) errors.push("Имя должно начинаться с большой буквы.")
	return errors
}

export const lastNameValidator = (value: string) => {
	const errors = []
	if (!value || value.length < 0) return []
	if (value.length < 2) errors.push("Минимальная длина фамилии 2 символа.")
	if (value.length > 100) errors.push("Максимальная длина фамилии 100 символов.")
	if (!/^[а-яА-ЯёЁ]+$/.test(value)) errors.push("Фамилия может состоять только из букв русского алфавита.")
	if (!/^[А-ЯЁ]+/.test(value)) errors.push("Фамилия должно начинаться с большой буквы.")
	return errors
}

export const genderValidator = (value: string) => {
	if (!value || value.length < 1) return []
	return []
}

export const birthdayValidator = (value: string) => {
	const errors = []

	if (!value || value.length < 1) return []

	const valueDate = new Date(value);
	const today = new Date();

	const age = today.getFullYear() - valueDate.getFullYear();
	const birthdayThisYear = new Date(today.getFullYear(), valueDate.getMonth(), valueDate.getDate());

	if (age < 18 || (age === 18 && today < birthdayThisYear)) errors.push("Вы должны быть старше 18 лет.");
	if (age > 100) errors.push("Вы должны быть не старше 100 лет.");

	return errors
}

export const passwordValidator = (value: string) => {
	const errors = []
	if (!value || value.length < 1) return []
	if (value.length < 5) errors.push("Минимальная длина пароля 5 символов.")
	if (value.length > 255) errors.push("Максимальная длина пароля 255 символов.")
	if (!/[a-zA-Z]/.test(value)) errors.push("Пароль должен содержать хотя бы одну латинскую букву.")
	if (!/[0-9]/.test(value)) errors.push("Пароль должен содержать хотя бы одну цифру.")
	if (!/[!@#$%^&*()\-_+=]/.test(value)) errors.push("Пароль должен содержать хотя бы один специальный символ (!@#$%^&*()-_=+).")
	return errors
}

export const passwordRepeatValidator = (value: string, password?: string) => {
	const errors = []
	if (!value || value.length < 1) return []
	if (value != password) errors.push("Пароли не совпадают.")
	return errors
}
