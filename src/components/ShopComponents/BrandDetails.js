import React from 'react'

import ItemDetails, {Record} from '../ItemDetails'
import {withApiService} from '../HOC'

const BrandDetails = ({itemId, sapApi}) => {
	const {getBrand} = sapApi
	return (
		<ItemDetails
			itemId={itemId}
			getData={getBrand} >
			<Record field='description' label='Description' />
			<Record field='link' label='Link' />
		</ItemDetails>
	)
}

export default withApiService(BrandDetails)