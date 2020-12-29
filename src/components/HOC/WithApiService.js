import React from 'react'
import {ApiServiceConsumer} from '../ApiServiceContext'

const withApiService = (Wrapped) => {
	return (props) => {
		return (
			<ApiServiceConsumer>
				{
					(sapApi) => {
						return (
							<Wrapped {...props} sapApi={sapApi} />
						)
					}
				}
			</ApiServiceConsumer>
		)
	}
}

export default withApiService