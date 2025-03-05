import {FC, ReactNode} from "react";
import classes from "./Button.module.css";

interface ButtonProps {
	disabled?: boolean,
	children: ReactNode,
}

export const Button: FC<ButtonProps> = (
	{
		disabled = false,
		children,
	}
) => {
	return (
		<button disabled={disabled} className={classes.button}>{children}</button>
	);
};
