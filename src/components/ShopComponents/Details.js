import React from 'react'

import ItemDetails, {Record} from '../ItemDetails'
import SapApiService from '../../services'

const sapApi = new SapApiService()

const {
  getResource,
  getCategory,
  getSlider
} = sapApi

const ResourceDetails = () => {}

const CategoryDetails = () => {}

const SliderDetails = () => {}

export {
  ResourceDetails,
  CategoryDetails,
  SliderDetails
}