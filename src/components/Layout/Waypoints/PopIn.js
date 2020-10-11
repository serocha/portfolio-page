import React from 'react';
import { Waypoint } from 'react-waypoint';

const popIn = (props) => {

	return (
		<Waypoint
			onEnter={ () => document.getElementById(props.targetid).classList.add('pop-in-start') }
			bottomOffset={props.offset} >
				{props.children}
		</Waypoint>
	);
}

export default popIn;