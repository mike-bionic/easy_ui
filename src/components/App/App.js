import React, {Component} from 'react'

import Navbar from '../Navbar'
import RandomCategory from '../RandomCategory'

import './App.css'
import ErrorButton from '../ErrorButton'
import ErrorIndicator from '../ErrorIndicator'
import ResourcePage from '../ResourcePage/ResourcePage'

import ItemList from '../ItemList'
import ItemDetails from '../ItemDetails'
import SapApiService from '../../services/SapApiService'


class App extends Component {
	sapApi = new SapApiService()
	
	state = {
		showRandomCategory: true,
		hasError: false
	}

	toggleRandomCategory = () => {
		this.setState((state) => {
			return {
				showRandomCategory: !state.showRandomCategory
			}
		})
	}

	componentDidCatch() {
		console.log("error occured")
		this.setState({hasError: true})
	}

	render() {
		if (this.state.hasError) {
			return <ErrorIndicator />
		}
		const categoryView = this.state
			.showRandomCategory	? <RandomCategory /> : null
		return (
			<div className="App">
				<Navbar />
				<div className="container-fluid">
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
		)
	}
}

export default App