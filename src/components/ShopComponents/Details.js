import React from 'react'

import ItemDetails, {Record} from '../ItemDetails'
import {ApiServiceConsumer} from '../ApiServiceContext'

const ResourceDetails = ({itemId}) => {
	return(
		<ApiServiceConsumer >
			{
				({getResource}) => {
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
			}
		</ApiServiceConsumer>
	)
}

const CategoryDetails = ({itemId}) => {
	return(
		<ApiServiceConsumer >
			{
				({getCategory}) => {
					return (
						<ItemDetails
							itemId={itemId}
							getData={getCategory} >
							<Record field='description' label='Description' />
							<Record field='visibleIndex' label='Visible index' />
							<Record field='createdDate' label='Date' />
						</ItemDetails>
					)
				}
			}
		</ApiServiceConsumer>
	)
}

const BrandDetails = ({itemId}) => {
	return(
		<ApiServiceConsumer >
			{
				({getBrand}) => {
					return (
						<ItemDetails
							itemId={itemId}
							getData={getBrand} >
							<Record field='description' label='Description' />
							<Record field='link' label='Link' />
						</ItemDetails>
					)
				}
			}
		</ApiServiceConsumer>
	)
}

export {
	ResourceDetails,
	CategoryDetails,
	BrandDetails
}