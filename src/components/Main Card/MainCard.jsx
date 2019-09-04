import React from 'react';

import './mainCard.scss'

function MainCard(props) {
	return(
		<div className="mainCard-container">
			<div className="mainCard-img-container">
				{/* Gihub user Image */}
				<img 
					src={props.user.avatar_url} 
					alt="Imager Of A User" 
					className="mainCard-img"
				/>
			</div>
			<div className="mainCard-text">
				<h2>{props.user.name}</h2>
				<h3>{props.user.location}</h3>
				<p>Following: {props.user.following}</p>
				<p>Followers: {props.user.followers}</p>
				<a href={props.user.html_url} target="_blank">
					<i className="fab fa-github-square fa-5x"></i>
				</a>
			</div>
		</div>
	)
}

export default MainCard;