import React from 'react'
import './Countries.css'

const Country = (props) => {
	const cLength = () => {
		let visits = parseInt(props.country.visits)
		return Math.ceil((visits * 3.6) + 20)
	}

	const background = props.country.color

	const style = {
		gridColumn: '1 /' + cLength(),
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