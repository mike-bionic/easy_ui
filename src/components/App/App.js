import React from 'react'

import Navbar from '../Navbar'
import ResourceList from '../ResourceList'
import './App.css'

const App = () => {
	return (
		<div className="App">
			<Navbar />
			<div className="container-fluid">
				<ResourceList />
			</div>
		</div>
	)
}

export default App