import { FC } from 'react'
import { NavDiv } from './Appbar.styled'
import { NavItems } from '../models'
import "./navbar.css"

export const Appbar: FC = () => {


	
	

	
	
	

	const NAV_ITEMS: NavItems[] = [
		
		{value: 'home', label: 'Home', url: '/home' },
		{value: 'products', label: 'Products', url: '/products' },
		{value: 'pricing', label: 'Pricing', url: '/pricing' },
		{value: 'company', label: 'Company', url: '/company' }
		
	]
	
	
	
	

	


	return (
		<NavDiv>
			{NAV_ITEMS.map((item) => {
				return <div>{item.label}</div>
			})}
			
		</NavDiv>
	)
}