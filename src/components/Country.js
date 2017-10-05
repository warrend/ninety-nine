import React from 'react'
import './Countries.css'

const Country = (props) => {
	const percentage = () => {
		const width = Math.floor((props.country.visits / 23) * 100)
		return width < 15 ? 15 : width 
	}

	const background = props.country.color

	const style = {
		gridColumn: '1 /' + percentage(),
		background: background,
		marginBottom: '1em',
		alignSelf: 'center',
		padding: '20px 20px 20px 0'
	}

	const { name, visits } = props.country

	return (
		<div style={style}><p>{name} {visits}</p></div>
	)
}

export default Country