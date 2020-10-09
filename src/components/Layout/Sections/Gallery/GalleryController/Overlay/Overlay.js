import React from 'react';

import './Overlay.scss';

const overlay = (props) => {
	return (
		<div className='container1' onClick={props.click}>
			<div className='overlay'>
				<div className='text'>{props.title}</div>
				<div className='desc'>{props.desc}</div>
			</div>
			{props.children}
		</div>
	);
}

export default overlay