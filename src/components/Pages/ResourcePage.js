import React from 'react'
import { withRouter } from 'react-router-dom'

import './Pages.css'

import ErrorBoundry from '../ErrorBoundry'
import {ResourceList} from '../ShopComponents'

const ResourcePage = ({ history }) => {
	return (
		<ErrorBoundry>
			<ResourceList
				onItemSelected={(itemId) => {
					history.push(`/products/${itemId}`)
				}} />
		</ErrorBoundry>
	)
}

export default withRouter(ResourcePage)