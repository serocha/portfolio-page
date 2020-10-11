import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Title from '../../Waypoints/Title';

import './Contact.scss';

const contact = (props) => (
	<section id='contact'>
		<div className='contact-main'>
			<div className='contact-lead' />
			<Title titleWP={props.titleWP} title='say hello' navID={4} />

			<form className='form'>
				<p>Want to work together? Have a question for me?</p>

				<Row>
					<Col xs={12}>
						<input type='text' 
							id='name' 
							name='name' 
							size='20' 
							placeholder=' your name'
							required />
					</Col>
					<Col xs={12}>
						<input type='email' 
							id='email' 
							name='email' 
							size='37' 
							placeholder=' your email'
							required />
					</Col>
					<Col xs={12}>
						<textarea
							id='message' 
							name='message'
							rows={5}
							wrap='hard'
							maxLength={500}
							placeholder=' your message'
							required />
					</Col>
					<Col xs={12}>
						<input type='submit'
							className='submit-button'
						/>
					</Col>
				</Row>
			</form>
		</div>
	</section>
);

export default contact;