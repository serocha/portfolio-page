import React from 'react';
import { Waypoint } from 'react-waypoint';

import './About.scss';

const about = (props) => {
	return (
		<section id='about'>
			<Waypoint 
				onLeave={ () => props.waypoint('title', 0)}
				topOffset='75%' >
		      		<div id='1' className='text-center title'> about </div>
		    </Waypoint>

		    <Waypoint
		    	onLeave={ () => props.waypoint('underline', 0)}
				topOffset='50%' >
		      		<div className='underline' > </div>
		    </Waypoint>
	    </section>
	);
}

export default about;