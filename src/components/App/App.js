import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css'

import Navbar from '../Navbar'
import RandomCategory from '../RandomCategory'
import {ResourcePage, BrandPage, CategoryPage} from '../Pages'
import ErrorBoundry from '../ErrorBoundry'

import SapApiService, {MockSapApiService} from '../../services'
import {ApiServiceProvider} from '../ApiServiceContext'
import { ResourceDetails } from '../ShopComponents'


class App extends Component {
	
	state = {
		sapApi: new SapApiService()
	}

	onServiceChange = () => {
		this.setState(({sapApi}) => {
			const Service = sapApi instanceof SapApiService ? 
				MockSapApiService : SapApiService
			console.log("switched to ", Service.name)
			return {
				sapApi: new Service()
			}
		})
	}

	render() {
		return (
			<ErrorBoundry>
				<ApiServiceProvider value={this.state.sapApi} >
					<Router>

						<div className="App">
							<Navbar onServiceChange={this.onServiceChange} />
							<div className="container-fluid">

								<RandomCategory />
								<Route path="/" exact render={() => <h2>Welcome to Al:Em shop</h2>} />
								<Route path="/products" exact component={ResourcePage} />
								<Route path="/products/:id"
									render={({match}) => {
										const {id} = match.params
										return <ResourceDetails itemId={id} />
									}} />

								<Route path="/categories" component={CategoryPage} />
								<Route path="/brands" component={BrandPage} />

							</div>
						</div>

					</Router>
				</ApiServiceProvider>
			</ErrorBoundry>
		)
	}
}

export default App