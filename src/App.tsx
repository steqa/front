import {RouterProvider} from "react-router-dom";
import {Router} from "./routers/Router.tsx";
import {UserContext} from "./context/UserContext.tsx";
import {useState} from "react";
import {User} from "./schemas/user.ts";

export const App = () => {
	const [user, setUser] = useState<User>({
		username: "",
		firstName: "",
		lastName: "",
		gender: "",
		birthday: "",
	});

	return (
		<UserContext.Provider value={{
			user,
			setUserContext: (user: User) => {
				setUser(user)
			}
		}}>
			<RouterProvider router={Router}/>
		</UserContext.Provider>
	)
}
