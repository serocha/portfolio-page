import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Title from '../../Title/Title';

import './About.scss';

const about = (props) => {
	return (
		<section id='about'>
			<Title waypoint={props.waypoint} title='about' navID={1} />
			<Container className='aboutContainer'>
				<Row className='align-items-center'>
					<Col sm={3} md={6}><img className='img-responsive mypic' src='https://static.wixstatic.com/media/50bcfa_9df1f5b65f474355a0ce75a58cd28ddb~mv2.jpg'/></Col>
					<Col sm={9} md={6} className='aboutme'>
						<p>Here's some info about me. <br/>
						I did some stuff. <br/>
						Now I will do more stuff.</p>
					</Col>
				</Row>
			</Container>
	    </section>
	);
}

export default about;