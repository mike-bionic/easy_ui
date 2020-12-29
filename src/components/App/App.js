import React, {Component} from 'react'

import Navbar from '../Navbar'
import RandomCategory from '../RandomCategory'

import './App.css'
import ErrorButton from '../ErrorButton'
import ResourcePage from '../ResourcePage'
import ErrorBoundry from '../ErrorBoundry'

import SapApiService, {MockSapApiService} from '../../services'
import {ApiServiceProvider} from '../ApiServiceContext'
import { CategoryDetails, BrandDetails, BrandList } from '../ShopComponents'

import ItemDetails, {Record} from '../ItemDetails'
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
			<ItemDetails itemId={3} getData={getResource}>
				<Record field='category' label='Category' />
				<Record field='price' label='Price' />
				<Record field='barcode' label='Barcode' />
			</ItemDetails>
		)
		const categoryDetails = (
			<ItemDetails itemId={3} getData={getCategory}>
				<Record field='visibleIndex' label='Visible Index' />
				<Record field='createdDate' label='Date' />
				<Record field='description' label='Description' />
			</ItemDetails>
		)

		return (
			<ErrorBoundry>
				<ApiServiceProvider value={this.sapApi} >
					<div className="App">
						<Navbar />
						<div className="container-fluid">
							<CategoryDetails itemId={5} />
							<BrandDetails itemId={1} />
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
							<BrandList />
						</div>
					</div>
				</ApiServiceProvider>
			</ErrorBoundry>
		)
	}
}

export default App