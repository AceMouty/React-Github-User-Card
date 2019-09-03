import React from 'react'

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