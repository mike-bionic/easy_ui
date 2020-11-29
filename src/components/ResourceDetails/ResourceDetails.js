import React from 'react'

import './ResourceDetails.css'
import ResourceImage from '../Assets/resource.jpg'

const ResourceDetails = () => {
	return (
		<div className="ResourceDetails card">
			<img src={ResourceImage} alt="Resource Item" className="ResourceImage" />
			<div className="card-body">
				<h4>Some cool car</h4>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<span className="term">lorem</span>
						<span>211</span>
					</li>
					<li className="list-group-item">
						<span className="term">lorem</span>
						<span>211</span>
					</li>
					<li className="list-group-item">
						<span className="term">lorem</span>
						<span>211</span>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default ResourceDetails