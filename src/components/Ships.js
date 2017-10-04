import React from 'react'
import Ship from './Ship'

const Ships = (props) => {
	return (
		<div>
			{props.ships.map(data => {
				return <Ship ship={data} />
			})}
		</div>
	)
}

export default Ships