import React from 'react'
import Ship from './Ship'
import './Ships.css'

const Ships = (props) => {
	return (
		<div className="ships">
			{props.ships.map(data => {
				return <Ship ship={data} />
			})}
		</div>
	)
}

export default Ships