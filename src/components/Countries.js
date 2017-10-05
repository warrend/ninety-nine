import React from 'react'
import Country from './Country'
import './Countries.css'

const Countries = (props) => {
	return (
		<div className="countries">
			{props.countries.map(data => {
				return <Country country={data} />
			})}
		</div>
	)
}

export default Countries