import React from 'react';

import Title from '../../Title/Title';
import GalleryController from './GalleryController/GalleryController';


import './Gallery.scss';

const gallery = (props) => {
	return (
		<section id='gallery'>
			<Title waypoint={props.waypoint} title='gallery' navID={2} />
			<GalleryController/>
	    </section>
	);
}

export default gallery;