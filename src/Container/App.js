import React, { Component } from 'react';
import CardL from '../Component/CardL';
import SearchBox from '../Component/SearchBox';
import Scroll from '../Component/Scroll.js';
import './App.css';

class App extends Component{
	constructor(){
		super();
		this.state={
			robots: [],
			searchfield: ''			
		}
	}
	
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users').then(response=>{return response.json();}).then(users=>this.setState({ robots:users }));
	}
	
	onSearchChange = (event) =>{
		this.setState({searchfield:event.target.value})
	}
	
	
	render() {
		const { robots, searchfield } = this.state;
		const filteredRobot = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return !robots.length ? <h1 className='tc'>LOADING</h1> : 
				(<div className='tc'>
				<h1 className='f1'>Robo Friends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardL robots={filteredRobot}/>
				</Scroll>
				</div> );
			
	}
}

export default App; 