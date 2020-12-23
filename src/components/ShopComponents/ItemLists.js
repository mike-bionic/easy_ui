import React from 'react'

import ItemList from '../ItemList'
import {withData} from '../HOC'
import SapApiService from '../../services'

const sapApi = new SapApiService

const {
  getResources,
  getCategories,
  getSliders
} = sapApi

const ResourceList = withData(ItemList, getResources)

const CategoryList = withData(ItemList, getCategories)

const SliderList = withData(ItemList, getSliders)

export {
  ResourceList,
  CategoryList,
  SliderList
}