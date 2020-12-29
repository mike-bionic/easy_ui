import React, {Component} from 'react'

import './App.css'

import Navbar from '../Navbar'
import RandomCategory from '../RandomCategory'
import {ResourcePage, BrandPage, CategoryPage} from '../Pages'
import ErrorBoundry from '../ErrorBoundry'

import SapApiService, {MockSapApiService} from '../../services'
import {ApiServiceProvider} from '../ApiServiceContext'


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
					<div className="App">
						<Navbar onServiceChange={this.onServiceChange} />
						<div className="container-fluid">

							<RandomCategory />

							<ResourcePage />
							<BrandPage />
							<CategoryPage />

						</div>
					</div>
				</ApiServiceProvider>
			</ErrorBoundry>
		)
	}
}

export default App