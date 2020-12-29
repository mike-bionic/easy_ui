import React from 'react'

import ItemList from '../ItemList'
import {withData, withApiService} from '../HOC'


const withChildFunction = (Wrapped, fn) => {
	return(props) => {
		return(
			<Wrapped {...props}>
				{fn}
			</Wrapped>
		)
	}
}

const renderName = ({name}) => <span>{name}</span>
const renderNameAndPrice = ({name, price}) => <span>{name} | {price} TMT</span>

const mapResourceMethodsToProps = (sapApi) => {
	return {
		getData: sapApi.getResources
	}
}
 
const mapBrandMethodsToProps = (sapApi) => {
	return {
		getData: sapApi.getBrands
	}
}

const mapCategoryMethodsToProps = (sapApi) => {
	return {
		getData: sapApi.getCategories
	}
}


const ResourceList = withApiService(
	withData(
		withChildFunction(ItemList, renderNameAndPrice)),
		mapResourceMethodsToProps)

const CategoryList = withApiService(
	withData(
		withChildFunction(ItemList, renderName)),
		mapCategoryMethodsToProps)

const BrandList = withApiService(
	withData(
		withChildFunction(ItemList, renderName)),
		mapBrandMethodsToProps)

export {
	ResourceList,
	CategoryList,
	BrandList
}