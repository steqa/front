import {createBrowserRouter, Navigate} from "react-router-dom";
import {PRegistration} from "../pages/Registration/PRegistration.tsx";


export const Router = createBrowserRouter([
	{
		path: "/registration",
		element: (<PRegistration/>)
	},
	{
		path: "/",
		element: (<Navigate to="/registration" replace={true}/>)
	},
])
