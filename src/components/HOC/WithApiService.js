import React from 'react'
import {ApiServiceConsumer} from '../ApiServiceContext'

const withApiService = (Wrapped, mapMethodsToProps) => {
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