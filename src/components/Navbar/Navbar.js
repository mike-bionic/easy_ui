/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react'

import './Navbar.css'


class Navbar extends Component {

	buttons = [
		{label: 'Products', name: 'products'},
		{label: 'Categories', name: 'categories'},
		{label: 'Sliders', name: 'sliders'},
	]
	
	render() {
		const buttons = this.buttons.map(({label, name}) => {
			return (
				<li key={name}>
					<a href="#">{label}</a>
				</li>
			)
		})
		return (
			<div className="Navbar d-flex">
				<h4>
					<a href="#">Al:Em shop</a>
				</h4>
				<ul className="d-flex">
					{buttons}
				</ul>
			</div>
		)
	}
}

export default Navbar