import React from 'react';
import 'whatwg-fetch'; // A Fetch polyfill
import "./css/main.css";

import WeatherCard from './WeatherCard.jsx';
import SearchCity from './SearchCity.jsx';

// We will be fetching weather data with a city name. For more information visit:
// http://openweathermap.org/current ('By city name' is the first option)
// Use the Fetch api to make your calls : https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// Familiarize yourself with React's lifecycle methods : https://facebook.github.io/react/docs/react-component.html
const url = 'http://api.openweathermap.org/data/2.5/weather?q=';
// Put your key after the '='
const key = '&APPID=b62329f20ced5d617d6c352f035eb96d';
const searchCity = url +"seattle"+key;
export default class extends React.Component {
    constructor(props) {
        super(props);

		this.state = {}
    }
	
	componentDidMount(){
		fetch(searchCity)
			.then(response => response.json())
			.then(data => console.log(data))
			.then(data => this.setState({weather: data}))
	}

	
	
	// This function is for part 2. It looks at the state property for Fahrenheit (which you will have to define)
	// and converts the initial temperature from Kelvin to either Fahrenheit or Celsius. 
	// Returns the value with no decimal points.
	// 
	// convert(temp) {
	// 	if (this.state.fahrenheit) {
	// 		return (temp * (9 / 5) - 459.67).toFixed(0);
	// 	} else {
	// 		return (temp -  273.15).toFixed(0);
	// 	}
	// }

    render() {    	
		
		var weather;
		if(this.state.weather){
			weather = this.state.weather.results;
		}

        return (
        	<div>
	        	<h1 className="center-text">Current Weather</h1>

	        	<SearchCity />
	        	<WeatherCard />
				<main>
					{this.props.children}
				</main>
	        </div>
	
        );
    }
}
