import React from 'react'
import './Ship.css'

const Ship = (props) => {
	const sw = window.screen.width
	const percentage = () => {
		if (sw > 415) {
			return Math.floor((props.ship.year - 1892) - 25)
		} else {
			return parseInt(props.ship.year, 10) - 1872
		}
	}

	const style = {
		gridColumn: '1 /' + percentage(),
		background: '#009a49',
		marginBottom: '1em',
		alignSelf: 'center',
		padding: '20px 20px 20px 0'
	}

	const { name, year } = props.ship
	return (
		<div style={style}>{name} {year}</div>
	)
}

export default Ship