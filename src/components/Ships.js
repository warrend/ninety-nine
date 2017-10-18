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
				{props.ships.map((data, key) => {
					return <Ship key={key} ship={data} />
				})}
			</div>
			<small>&copy;{year()} | warrend555@gmail.com</small>
		</div>
	)
}

export default Ships