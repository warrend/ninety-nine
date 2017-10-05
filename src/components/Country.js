import React from 'react'
import './Country.css'

const Country = (props) => {
	const percentage = () => {
		const width = Math.floor((props.country.visits / 22) * 100)
		return width < 15 ? 15 : width 
	}

	const background = props.country.color

	const style = {
		gridColumn: '1 /' + percentage(),
		background: background,
		marginBottom: '1em',
		alignSelf: 'center',
		border: '1px solid #222',
		padding: '20px 0 20px 5px'
	}

	const { name, visits } = props.country

	return (
		<div style={style}><p>{name} <span>{visits}</span></p></div>
	)
}

export default Country