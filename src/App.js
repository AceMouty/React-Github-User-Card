import React from 'react';
import './App.scss';
import './index.css'

// Import Components
import Header from './components/Header/Header'

class App extends React.Component{

	constructor(){
		super();
		this.state = {

		}
	}
 
	render() {
			return (
			<div className="app-container">
				<div className="app">
					<Header />
					<form className="search-form">
						<input 
							type="text" 
							/>
							<button>Seaerch</button>
					</form>
				</div>
			</div>
		);
	}
	
}

export default App;
