import React, {Component} from 'react'

import Navbar from '../Navbar'
import ItemList from '../ItemList'
import ItemDetails from '../ItemDetails'
import RandomCategory from '../RandomCategory'

import './App.css'

class App extends Component {
	
	state = {
		showRandomCategory: true,
		selectedResource: null
	}

	toggleRandomCategory = () => {
		this.setState((state) => {
			return {
				showRandomCategory: !state.showRandomCategory
			}
		})
	}
	
	onResourceSelected = (ResId) => {
		this.setState({
			selectedResource: ResId
		})
	}

	render() {

		const categoryView = this.state
			.showRandomCategory	? <RandomCategory /> : null
		return (
			<div className="App">
				<Navbar />
				<div className="container-fluid">
					{categoryView}

					<button
						className="btn btn-warning"
						onClick={this.toggleRandomCategory}>
						Toggle Category
					</button>

					<div className="row mb2">
						<div className="col-md-6">
							<ItemList onItemSelected={this.onResourceSelected} />
						</div>
						<div className="col-md-6">
							<ItemDetails resourceId={this.state.selectedResource} />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default App