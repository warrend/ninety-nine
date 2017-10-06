import React from 'react'
import './Intro.css'
import james from '../images/james.jpg';

const Intro = () => {
	const style = {
		fontSize: '125%',
		lineHeight: '1.5',
		marginTop: '1em'
	}
	return (
		<div>
			<h1>Ninety-Nine Times</h1>
			<img src={james} alt="James Gracie" />
			<h2>About</h2>
			<p style={style}>When my parent's basement flooded during Christmas, we found my grandfather's meticulously kept travel logs of every trip he took during his lifetime. He organized the trips by date, method of travel, and countries & cities visited. My grandfather traveled extensively throughout South America, the Caribbean, and many other parts of the world.</p>
			<p style={style}>During his lifetime, my grandpa, James Gracie, left the country 99 times, traveled to 80 different countries, took 48 ships, and spent 1,223 days at sea. This is an infographic application of his travels. Listed below are all of the countries he traveled and the number of times he went there. Please note that some of the countries listed below are no longer sovereign regions.</p>
		</div>
	)
}

export default Intro