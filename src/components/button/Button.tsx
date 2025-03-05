import {FC, ReactNode} from "react";
import classes from "./Button.module.css";

interface ButtonProps {
	disabled?: boolean,
	onClick?: () => void,
	children: ReactNode,
}

export const Button: FC<ButtonProps> = (
	{
		disabled = false,
		onClick,
		children,
	}
) => {
	return (
		<button disabled={disabled} onClick={onClick} className={classes.button}>{children}</button>
	);
};
