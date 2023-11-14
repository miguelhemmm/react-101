import { FC } from 'react'
import { NavDiv } from './Appbar.styled'
import { NavItems } from '../models'

export const Appbar: FC = () => {


	const NAV_ITEMS: NavItems[] = [
		{value: 'home', label: 'Home', url: '/home' },
		{value: 'forms', label: 'forms', url: '/forms' },
		{value: 'requests', label: 'requests', url: '/request' }
	]


	return (
		<NavDiv>
			{NAV_ITEMS.map((item) => {
				return <div>{item.label}</div>
			})}

		</NavDiv>
	)
}