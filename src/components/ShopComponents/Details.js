import React from 'react'

import ItemDetails, {Record} from '../ItemDetails'
import SapApiService from '../../services'

const sapApi = new SapApiService()

const {
	getResource,
	getCategory,
	getBrand
} = sapApi

const ResourceDetails = ({itemId}) => {
	return(
		<ItemDetails
			itemId={itemId}
			getData={getResource} >
			<Record field='category' label='Category' />
			<Record field='price' label='Price' />
			<Record field='barcode' label='Barcode' />
		</ItemDetails>
	)
}

const CategoryDetails = ({itemId}) => {
	return(
		<ItemDetails
			itemId={itemId}
			getData={getCategory} >
			<Record field='description' label='Description' />
			<Record field='visibleIndex' label='Visible index' />
			<Record field='createdDate' label='Date' />
		</ItemDetails>
	)
}

const BrandDetails = ({itemId}) => {
	return(
		<ItemDetails
			itemId={itemId}
			getData={getBrand} >
			<Record field='description' label='Description' />
			<Record field='link' label='Link' />
		</ItemDetails>
	)
}

export {
	ResourceDetails,
	CategoryDetails,
	BrandDetails
}