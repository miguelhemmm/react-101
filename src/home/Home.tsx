import { FC, Fragment } from "react";
import { DestinationsPage } from "../destinations/Destinations";
import { Navigate, Route, Routes } from "react-router-dom";
import { Checkout } from "../checkout/Checkout";


export const Home: FC = () => {

	return (
		<Fragment>
			<Routes>
				<Route path="/destinations" element={<DestinationsPage/>}/>
				<Route path="/checkout" element={<Checkout destinations={[]}/>}/>
				<Route path="*" element={<Navigate to="/destinations" replace/>}/>
			</Routes>

		</Fragment>
	)
}