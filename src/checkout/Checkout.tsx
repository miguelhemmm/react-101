import { FC } from "react";
import { Destinations } from "../models/destination";

interface Props {
	destinations: Destinations[];
}

export const Checkout: FC<Props> = ({destinations}) => {


	return (
		<div>
			<div>
				Destinations:

				{destinations?.map((destination) => (
					<div>{destination.name}</div>
				))}
			</div>



			<div>
				Form:
			</div>
		</div>
	)
}