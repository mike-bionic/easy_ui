import React, {Component} from 'react'

import Navbar from '../Navbar'
import RandomCategory from '../RandomCategory'

import './App.css'
import ErrorButton from '../ErrorButton'
import ErrorIndicator from '../ErrorIndicator'
import ResourcePage from '../ResourcePage/ResourcePage'
import ErrorBoundry from '../ErrorBoundry'

import ItemList from '../ItemList'
import ItemDetails from '../ItemDetails'
import SapApiService from '../../services/SapApiService'
import Row from '../Row'


class App extends Component {
	sapApi = new SapApiService()
	
	state = {
		showRandomCategory: true
	}

	toggleRandomCategory = () => {
		this.setState((state) => {
			return {
				showRandomCategory: !state.showRandomCategory
			}
		})
	}

	render() {

		const categoryView = this.state
			.showRandomCategory	? <RandomCategory /> : null
		
		const {getResource, getCategory} = this.sapApi
		
		const resourceDetails = (
			<ItemDetails itemId={3} getData={getResource} />
		)
		const categoryDetails = (
			<ItemDetails itemId={4} getData={getCategory} />
		)
		
		return (
			<ErrorBoundry>
				<div className="App">
					<Navbar />
					<div className="container-fluid">
						<ErrorBoundry>
							<Row
								left={resourceDetails}
								right={categoryDetails} />
						</ErrorBoundry>

						{categoryView}

						<div className="row mb2 ButtonRow">
							<button
								className="btn btn-warning"
								onClick={this.toggleRandomCategory}>
								Toggle Category
							</button>
							<ErrorButton />
						</div>

						<ResourcePage />
					</div>
				</div>
			</ErrorBoundry>
		)
	}
}

export default App