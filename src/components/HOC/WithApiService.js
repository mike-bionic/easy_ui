import React from 'react'
import {ApiServiceConsumer} from '../ApiServiceContext'

const withApiService = (mapMethodsToProps) => (Wrapped) => {
	return (props) => {
		return (
			<ApiServiceConsumer>
				{
					(sapApi) => {
						const serviceProps = mapMethodsToProps(sapApi)
						return (
							<Wrapped {...props} {...serviceProps} />
						)
					}
				}
			</ApiServiceConsumer>
		)
	}
}

export default withApiService