import React from 'react'
import { Redirect } from 'react-router-dom'


const LoginPage = ({ isLoggedIn }) => {
	if (isLoggedIn){
		return (
			<div className="jumbotron text-center">
				<h3>Secret page is open</h3>
			</div>
		)
	}
	return <Redirect to="/login" />
}

export default LoginPage