import React, {Component} from 'react'

// import './ErrorButton.css'

class ErrorButton extends Component {

  state = {
    renderError: false
  }

  render() {
    console.log('render')
    if (this.state.renderError){
      this.foo.bar = 0
    }
    return (
      <button
        className="ErrorButton btn btn-danger btn-lg"
        onClick={() => this.setState({renderError: true})}>
        Throw Error
      </button>
    )
  }
}

export default ErrorButton