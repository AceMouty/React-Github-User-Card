import React from 'react'

import './subCard.scss'

function SubCard(props) {
	
	return(
		<div className="subCard-container">
			<div className="subCard-img-container">
				<img src={props.follower.avatar_url} alt="A user avatar"/>
			</div>
			<h2>{props.follower.login}</h2>
		</div>
	)
}

export default SubCard