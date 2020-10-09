import React, { Fragment } from 'react';
import { Waypoint } from 'react-waypoint';

const title = (props) => {

	return (
		<Fragment>
			<Waypoint
				onLeave={ () => props.waypoint('title', props.navID-1) }
				topOffset='75%' >
				<div id={props.navID.toString()} className='text-center title'> {props.title} </div>
			</Waypoint>
			<Waypoint
				onLeave = { () => props.waypoint('underline', props.navID-1) } 
				topOffset='50%'>
				<div className='underline'> </div>
			</Waypoint>
	    </Fragment>
	);
}

export default title;