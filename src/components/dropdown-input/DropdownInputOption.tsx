import classes from "./DropdownInput.module.css";
import {FC} from "react";

export interface DropdownInputOptionProps {
	label: string,
	value: string,
	onSelect?: (value: string) => void,
}

export const DropdownInputOption: FC<DropdownInputOptionProps> = (
	{
		label,
		value,
		onSelect = () => {
		}
	}
) => {
	return (
		<span
			className={classes.element}
			onClick={() => {
				onSelect(value)
			}}
		>
			{label}
		</span>
	)
}