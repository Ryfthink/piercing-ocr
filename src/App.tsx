import * as React from 'react';

import './App.css';
import 'antd/dist/antd.css'

import logo from './logo.svg';
import Avatar from "./Avatar";

class App extends React.Component {

	public render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
				</header>
				<Avatar/>
			</div>
		);
	}
}

export default App;
