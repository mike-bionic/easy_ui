import React from 'react'
import {Link} from 'react-router-dom'

import './Navbar.css'


const Navbar = ({onServiceChange}) => {

	return (
		<div className="Navbar d-flex">
			<h4>
				<Link to="/">Al:Em shop</Link>
			</h4>
			<ul className="d-flex">
				<li>
					<Link to="/products/">Products</Link>
				</li>
				<li>
					<Link to="/categories/">Categories</Link>
				</li>
				<li>
					<Link to="/brands/">Brands</Link>
				</li>
				<li>
					<Link to="/login">Login</Link>
				</li>
				<li>
					<Link to="/secret">Secret</Link>
				</li>
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