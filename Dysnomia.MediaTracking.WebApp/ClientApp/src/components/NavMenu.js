import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
	static displayName = NavMenu.name;

	constructor (props) {
		super(props);

		this.toggleNavbar = this.toggleNavbar.bind(this);
		this.state = {
			collapsed: true
		};
	}

	toggleNavbar () {
		this.setState({
			collapsed: !this.state.collapsed
		});
	}

	render () {
		return (
			<header>
				<div>
					<Link to="/">Dysnomia.MediaTracking.WebApp</Link>
					<button onClick={this.toggleNavbar} className="mr-2" />
					<div>
						<ul>
							<Link to="/">Home</Link>
							<Link to="/counter">Counter</Link>
							<Link to="/fetch-data">Fetch data</Link>
						</ul>
					</div>
				</div>
			</header>
		);
	}
}
