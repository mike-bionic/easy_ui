import React from 'react'
import { withRouter } from 'react-router-dom'

import './Pages.css'

import ErrorBoundry from '../ErrorBoundry'
import {ResourceList} from '../ShopComponents'

const ResourcePage = ({ history }) => {
	return (
		<ErrorBoundry>
			<ResourceList
				onItemSelected={(id) => {
					history.push(`${id}`)
				}} />
		</ErrorBoundry>
	)
}

export default withRouter(ResourcePage)