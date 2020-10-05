import React from 'react';
import { Waypoint } from 'react-waypoint';

import './Gallery.scss';

const gallery = (props) => {

	return (
		<section id='gallery'>
			<Waypoint
				onLeave={ () => props.waypoint('title', 1) }
				topOffset='75%' >
				<div id='2' className='text-center title'> gallery </div>
			</Waypoint>
			<Waypoint
				onLeave = { () => props.waypoint('underline', 1) } 
				topOffset='50%'>
				<div className='underline'> </div>
			</Waypoint>
			
	    </section>
	);
}

export default gallery;