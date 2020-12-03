import React from 'react'

import './ErrorIndicator.css'
import ErrorImage from './alert-octagon.svg'

const ErrorIndicator = () => {
  return (
    <div className="ErrorIndicator">
      <img src={ErrorImage} alt="error" />
      <span>
        Something went wrong!
      </span>
      <span>
        Try reloading the page or contact the support
      </span>
    </div>
  )
}

export default ErrorIndicator