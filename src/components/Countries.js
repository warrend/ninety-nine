import React from 'react'
import Country from './Country'

const Countries = (props) => {
	return (
		<div>
			{props.countries.map(data => {
				return <Country country={data} />
			})}
		</div>
	)
}

export default Countries