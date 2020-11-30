import React, {Component} from 'react'

import SapApiService from '../../services/SapApiService'
import './RandomCategory.css'


class RandomCategory extends Component {

  state = {
    ResCatName: null,
    IsMain: false,
    ResCatVisibleIndex: 0,
    CreatedDate: null
  }

  sapApi = new SapApiService();

  constructor() {
      super();
      this.updateCategory();
  }
  updateCategory() {
    this.sapApi
      .getCategory(4)
      .then((category) => {
        this.setState({
          ResCatName: category.data.ResCatName,
          IsMain: category.data.IsMain,
          ResCatVisibleIndex: category.data.ResCatVisibleIndex,
          CreatedDate: category.data.CreatedDate,
          CategoryImage: category.data.ResCatIconFilePath
        })
      })
    }
    
    
  render() {

    const { 
      ResCatName,
      IsMain,
      ResCatVisibleIndex,
      CreatedDate,
      CategoryImage} = this.state
      
    return (
      <div className="RandomCategory jumbotron rounded">
        <img 
          src={`http://192.168.1.102:5000${CategoryImage}`}
          alt="Category" 
          className="CategoryImage" />
        <div>
          <h4>{ResCatName}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Is main</span>
              <span>{IsMain}</span>
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