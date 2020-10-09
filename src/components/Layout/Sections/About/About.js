import React from 'react';

import Title from '../../Title/Title';

import './About.scss';

const about = (props) => {
	return (
		<section id='about'>
			<Title waypoint={props.waypoint} title='about' navID={1} />
	    </section>
	);
}

export default about;