import {createBrowserRouter, Navigate} from "react-router-dom";
import {PRegistration} from "../pages/Registration/PRegistration.tsx";
import {PHome} from "../pages/Home/PHome.tsx";


export const Router = createBrowserRouter([
	{
		path: "/me",
		element: (<PHome/>)
	},
	{
		path: "/registration",
		element: (<PRegistration/>)
	},
	{
		path: "/",
		element: (<Navigate to="/registration" replace={true}/>)
	},
])
