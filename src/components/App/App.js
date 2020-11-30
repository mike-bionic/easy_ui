import React from 'react'

import Navbar from '../Navbar'
import ResourceList from '../ResourceList'
import ResourceDetails from '../ResourceDetails'
import RandomCategory from '../RandomCategory'
import './App.css'

const App = () => {
	return (
		<div className="App">
			<Navbar />
			<div className="container-fluid">
				<RandomCategory />
				<div className="row mb2">
					<div className="col-md-6">
						<ResourceList />
					</div>
					<div className="col-md-6">
						<ResourceDetails />
					</div>
				</div>
			</div>
		</div>
	)
}

export default App