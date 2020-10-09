import React from 'react';

import styles from './Button.module.scss';

const button = (props) => (
	<button onClick={props.clicked}>{props.children}</button>
)

export default button;