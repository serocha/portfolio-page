import React from 'react';

import Title from '../../Waypoints/Title';
import GalleryController from './GalleryController/GalleryController';


import './Gallery.scss';

const gallery = (props) => {
	return (
		<section id='gallery'>
			<Title titleWP={props.titleWP} title='gallery' navID={2} />
			<GalleryController/>
	    </section>
	);
}

export default gallery;