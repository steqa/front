import {ChangeEvent, FC, useState} from "react";
import classes from "./Input.module.css";

interface InputProps {
	type?: string,
	placeholder: string,
	value: string,
	setValue: (value: string) => void,
}

export const Input: FC<InputProps> = (
	{
		type = "text",
		placeholder,
		value,
		setValue,
	}
) => {
	const [errors, setErrors] = useState<string[]>([]);

	const validate = (e: ChangeEvent<HTMLInputElement>) => {
		const newErrors: string[] = [];
		const inputValue = e.target.value

		if (!inputValue.trim()) {
			newErrors.push("Поле не может быть пустым.");
		} else {
			if (inputValue.trim().length < 3) {
				newErrors.push("Минимальная длина поля 3 символа.")
			}
		}


		setErrors(newErrors);
	};

	return (
		<div className={classes.inputGroup}>
			<input
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={(e: ChangeEvent<HTMLInputElement>) => {
					setValue(e.target.nodeValue!)
					validate(e)
				}}
			/>
			<div className={classes.error}>
				{errors.map((error, index) => (
					<span key={index}>{error}</span>
				))}
			</div>
		</div>
	);
};
