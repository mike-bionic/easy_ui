import React, {Component} from 'react'

import './Header.css'


class Header extends Component {

	buttons = [
		{label: 'Products', name: 'products'},
		{label: 'Categories', name: 'categories'},
		{label: 'Sliders', name: 'sliders'},
	]
	
	render() {
		const buttons = this.buttons.map(({label, name}) => {
			return (
				<li key={name}>
					<a>{label}</a>
				</li>
			)
		})
		return (
			<nav className="navbar Header">
				<a className="navbar-brand">eCommerce</a>
				<div className="Header">
					<ul className="navbar-nav justify-content-center">
						{buttons}
					</ul>
				</div>
			</nav>
		)
	}
}

export default Header