import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Title from '../../Waypoints/Title';
import PopIn from '../../Waypoints/PopIn';

import './About.scss';

const about = (props) => (
	<section id='about'>
		<Title titleWP={props.titleWP} title='about' navID={1} />
		<Container className='aboutContainer'>
			<Row className='align-items-center'>
				<PopIn targetid='about-img-pop' offset='50%'>
					<Col id='about-img-pop' className='pop-in' sm={3} md={6}><img className='img-responsive mypic' src='https://static.wixstatic.com/media/50bcfa_9df1f5b65f474355a0ce75a58cd28ddb~mv2.jpg'/></Col>
				</PopIn>
				<PopIn targetid='about-pop' offset='25%'>
					<Col id='about-pop' sm={9} md={6} className='pop-in aboutme' style={{animationDelay: '.25s'}}>
						<p>Here's some info about me. <br/>
						I did some stuff. <br/>
						Now I will do more stuff.</p>
					</Col>
				</PopIn>
			</Row>

		</Container>
    </section>
);

export default about;