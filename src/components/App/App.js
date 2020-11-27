import React from 'react'

import Header from '../Header'
import ResourceList from '../ResourceList'
import './App.css'

const App = () => {
	return (
		<div className="App">
			<Header />
			<div className="container-fluid">
				<ResourceList />
			</div>
		</div>
	)
}

export default App