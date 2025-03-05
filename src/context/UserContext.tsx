import {User} from "../schemas/user.ts";
import {createContext} from "react";

interface UserContextType {
	user: User;
	setUserContext: (user: User) => void;
}

export const UserContext = createContext<UserContextType>({
	user: {
		username: "",
		firstName: "",
		lastName: "",
		gender: "",
		birthday: "",
	},
	setUserContext: () => {
	}
})