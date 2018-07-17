import React, { Component } from 'react';
import axios from 'axios';
import Video from '../Video/Video';
import { Route, Switch } from 'react-router-dom';

class Youtube extends Component {
	render()
	{
		return (
				<div>
					<Switch>
						<Route path = '/' exact component = {Video} />
					</Switch>
				</div>
		);
	}
}

export default Youtube;