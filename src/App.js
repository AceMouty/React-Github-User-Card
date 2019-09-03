import React from 'react';
import axios from 'axios';
import './App.scss';
import './index.css'

// Import Components
import Header from './components/Header/Header'
import MainCard from './components/Main Card/MainCard'
import SubCard from './components/Sub Card/SubCard'

class App extends React.Component{

	constructor(){
		super();
		this.state = {
			user: "",
			userData: {},
			followersUrl: "",
			followers: []
		}
	}

	// Do something when the component mounts
	componentDidMount() {
		// Make call to the api to get the user info
		axios(`https://api.github.com/users/AceMouty`)
		.then(res => {
			console.log(res.data)
			this.setState({
				...this.state, 
				userData: res.data,
				followersUrl: res.data.followers_url
			})
		})
		.then(() => {

			// Make another axios call for the users and set the data to state
			axios(this.state.followersUrl)
			.then(res => {
				console.log(res.data)
				this.setState({...this.state, followers: res.data})
			})
			// End 2nd Axios call
		})
		.catch(err => console.log(err))
	}
 
	render() {
			return (
			<div className="app-container">
				<div className="app">
					{/* App Header */}
					<Header />
					
					{/* Search for a Github user */}
					<form className="search-form">
						<input 
							type="text" 
							/>
							<button>Seaerch</button>
					</form>

					{/* Card For The User Searched */}
					<MainCard user={this.state.userData}/>

					{/* Fllowers Cards */}
					<div className="subCard-container">
						
						{/* Loop through and render all the followers */}
						{this.state.followers.map(follower => {
							return <SubCard key={follower.id} follower={follower}/>
						})}
					</div>
				</div>
			</div>
		);
	}
	
}

export default App;
