import React, {Component} from 'react';
import './App.css';

export default class App extends Component
{
	constructor(props)
	{
		super(props);
	}
	
	render()
	{
		return (
			<div id="app">
				<h1>Heather <a href="https://twitter.com/mdrnpxls">(@mdrnpxls)</a> is really cute and I love her~{"<3"}</h1>
			</div>	
		);
	}
}