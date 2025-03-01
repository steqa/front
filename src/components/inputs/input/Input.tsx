import {ChangeEvent, FC} from "react";

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
	return (
		<input
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={(e: ChangeEvent<HTMLInputElement>) => {
				setValue(e.target.value)
			}}
		/>
	);
};
