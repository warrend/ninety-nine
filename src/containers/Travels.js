import React, {Component} from 'react'
import Countries from '../components/Countries'
import Ships from '../components/Ships'
import data from '../data/log.json'

class Travels extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			countries: data.countries,
			ships: data.ships
		}
	}

	render() {
		return (
			<div>
				<h1>Hi</h1>
				<Countries countries={this.state.countries} />
				<Ships ships={this.state.ships} />
			</div>
		)
	}
}

export default Travels