/* eslint-disable jsx-a11y/anchor-is-valid */
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
				<li className="nav-item" key={name}>
					<a className="nav-link" >{label}</a>
				</li>
			)
		})
		return (
			<div className="Header d-flex">
				<div>
					<h3>
						<a href="#">Gije-sky</a>
					</h3>
					<p>Asman yyldyz sanly harytlar</p>
				</div>
				<ul className="d-flex">
					{buttons}
				</ul>
			</div>
		)
	}
}

export default Header