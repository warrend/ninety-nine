import React from 'react'
import Country from './Country'
import './Countries.css'

const Countries = (props) => {
	const sortedVisits = props.countries.sort((a, b) => {
		return b.visits - a.visits
	})

	return (
		<div className="countries">
			{sortedVisits.map(data => {
				return <Country country={data} />
			})}
		</div>
	)
}

export default Countries