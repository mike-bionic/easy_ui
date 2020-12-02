import React, {Component} from 'react'

import SapApiService from '../../services/SapApiService'
import './RandomCategory.css'


class RandomCategory extends Component {

  state = {
    category: {}
  }

  sapApi = new SapApiService();

  constructor() {
    super();
    this.updateCategory();
  }

  onCategoryLoaded = (category) => {
    console.log(category)
    this.setState({category});
  }

  updateCategory() {
    const ResCatId = Math.floor(Math.random()*8) + 2
    this.sapApi
      .getCategory(ResCatId)
      .then(this.onCategoryLoaded)
  }

  render() {

    const { category: {
        ResCatId,
        ResCatName,
        ResCatDesc,
        ResCatVisibleIndex,
        CreatedDate,
        CategoryImage
      } 
    } = this.state
    console.log(this.state)
    return (
      <div className="RandomCategory jumbotron rounded">
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
  
      </div>
    )
  }
}

export default RandomCategory