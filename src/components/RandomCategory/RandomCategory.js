import React, {Component} from 'react'

import SapApiService from '../../services/SapApiService'
import Spinner from '../Spinner'
import ErrorIndicator from '../ErrorIndicator'
import './RandomCategory.css'


class RandomCategory extends Component {

  state = {
    category: {},
    loading: true,
    error: false
  }

  sapApi = new SapApiService();

  constructor() {
    super();
    this.updateCategory();
    setInterval(this.updateCategory,2500)
  }

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    })
  }

  onCategoryLoaded = (category) => {
    console.log(category)
    this.setState({
      category,
      loading: false
    });
  }

  updateCategory = () => {
    const ResCatId = Math.floor(Math.random()*8) + 2
    this.sapApi
      .getCategory(ResCatId)
      .then(this.onCategoryLoaded)
      .catch(this.onError)
  }

  render() {
    const {category, loading, error} = this.state

    const errorView = error ? <ErrorIndicator /> : null
    const spinner = loading ? <Spinner /> : null
    const categoryView = !(loading || error) ? <CategoryView category={category} /> : null
    
    return (
      <div className="RandomCategory jumbotron rounded">
        {spinner}
        {categoryView}
        {errorView}
      </div>
    )
  }
}

const CategoryView = ({category}) => {

  const {
    ResCatId,
    ResCatName,
    ResCatDesc,
    ResCatVisibleIndex,
    CreatedDate,
    CategoryImage
  } = category


  return (
    <React.Fragment>
      <img 
          src={CategoryImage}
          alt="Category" 
          className="CategoryImage" />
      <div>
        <h4>{ResCatName}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Description</span>
            <span>{ResCatDesc}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Visible index</span>
            <span>{ResCatVisibleIndex}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Date</span>
            <span>{CreatedDate}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}

export default RandomCategory