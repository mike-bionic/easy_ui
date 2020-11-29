import React from 'react'

import './ResourceList.css'
import ResourceImage from '../Assets/resource.jpg'


const ResourceList = () => {
	return (
		<div>
			<div className="row d-flex">
				<div className="col UICard">
					<div className="row">
						<div className="col-4">
							<img src={ResourceImage} alt="Resource Item" className="CardImage" />
						</div>
						<div className="col-6">
							<h5 className="CardTitle">Some cool car</h5>
							<ul className="CardList">
								<li>lorem</li>
								<li>ipsum</li>
								<li>dolor</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ResourceList