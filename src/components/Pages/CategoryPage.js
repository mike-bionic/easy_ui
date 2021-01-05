import React from 'react'
import { withRouter } from 'react-router-dom'

import './Pages.css'

import Row from '../Row'
import ErrorBoundry from '../ErrorBoundry'
import {CategoryDetails,CategoryList} from '../ShopComponents'

const CategoryPage = ({history, match}) => {
	const {id} = match.params

	const itemList = (
		<CategoryList	onItemSelected={(id) => {
			history.push(`${id}`)
		}} />
	)

	const itemDetails = (
		<ErrorBoundry>
			<CategoryDetails itemId={id} />
		</ErrorBoundry>
	)

	return (
		<ErrorBoundry>
			<Row left={itemList} right={itemDetails} />
		</ErrorBoundry>
	)
}

export default withRouter(CategoryPage)