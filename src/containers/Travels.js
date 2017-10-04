import React, {Component} from 'react'
// import Countries from '../components/Countries'
import data from '../data/log.json'

class Travels extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			countries: data,
		}
	}

	render() {
		return (
			<div>
				<h1>Hi</h1>
				{this.state.countries.map(data => {
					return <p>{data.last_name}</p>
				})}
			</div>
		)
	}
}

export default Travels