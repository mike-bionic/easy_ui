/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react'

import './Navbar.css'


const Navbar = ({onServiceChange}) => {

	const buttons_list = [
		{label: 'Products', name: 'products'},
		{label: 'Categories', name: 'categories'},
		{label: 'Brands', name: 'brands'},
	]

	const buttons = buttons_list.map(({label, name}) => {
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
			<button
				onClick={onServiceChange}
				className="btn btn-primary btn-sm">
					Change service
			</button>
		</div>
	)
}

export default Navbar