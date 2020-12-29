import React from 'react'

import ItemDetails, {Record} from '../ItemDetails'
import {withApiService} from '../HOC'

const ResourceDetails = ({itemId, sapApi}) => {
	const {getResource} = sapApi
	return (
		<ItemDetails
			itemId={itemId}
			getData={getResource} >
			<Record field='category' label='Category' />
			<Record field='price' label='Price' />
			<Record field='barcode' label='Barcode' />
		</ItemDetails>
	)
}

export default withApiService(ResourceDetails)