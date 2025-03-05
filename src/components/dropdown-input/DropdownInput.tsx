import classes from "./DropdownInput.module.css";
import {Children, cloneElement, Dispatch, FC, ReactElement, SetStateAction, useState} from "react";
import {DropdownInputOptionProps} from "./DropdownInputOption.tsx";


interface DropdownInputProps {
	placeholder: string,
	value: string,
	setValue: Dispatch<SetStateAction<string>>,
	children: ReactElement<DropdownInputOptionProps>[],
}

export const DropdownInput: FC<DropdownInputProps> = (
	{
		placeholder,
		setValue,
		children
	}
) => {
	const [isOpen, setIsOpen] = useState(false)

	const [label, setLabel] = useState('')

	const getLabelClasses = () => {
		const result = [classes.label]
		if (label) result.push(classes.bright)
		if (isOpen) result.push(classes.focus)
		return result.join(' ')
	}

	const getContentClasses = () => {
		const result = [classes.content]
		if (isOpen) result.push(classes.open)
		return result.join(' ')
	}

	return (
		<div className={classes.input}>
			<div
				className={getLabelClasses()}
				onClick={() => setIsOpen(!isOpen)}
			>
				{label || placeholder}
			</div>
			<div className={getContentClasses()}>
				{Children.map(children, (child) => (
					cloneElement(child, {
						onSelect: (value) => {
							setValue(value)
							setLabel(child.props.label)
							setIsOpen(false)
						}
					})
				))}
			</div>
		</div>
	)
}