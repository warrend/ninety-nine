import React from 'react'
import Ship from './Ship'
import './Ships.css'

const Ships = (props) => {
	const year = () => {
		let today = new Date();
		return today.getFullYear();
	}
	return (
		<div>
			<div className="ships">
				{props.ships.map(data => {
					return <Ship ship={data} />
				})}
			</div>
			<small>&copy;{year()}</small>
		</div>
	)
}

export default Ships