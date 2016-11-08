import React from 'react';

export default class extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {		
		return (
		<div id="weather-area">
			<div className="demo-card-square mdl-card mdl-shadow--2dp weather-card">
				<div className="mdl-card__supporting-text">
					<p className="weather-text center-text">{this.props.children}</p>
					<p className="weather-text center-text"></p>
					<p className="weather-text center-text"></p>
					
				</div>
			</div>
		
		</div>);
	}
}
		