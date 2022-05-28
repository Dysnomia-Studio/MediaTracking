import React, { Component } from 'react';
import { NavMenu } from './NavMenu';
import {
	Routes,
} from 'react-router-dom';

export class Layout extends Component {
	static displayName = Layout.name;

	render () {
		return (
			<div>
				<NavMenu />
				<div>
					<Routes>
						{this.props.children}
					</Routes>
				</div>
			</div>
		);
	}
}
