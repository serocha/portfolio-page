import React, {Fragment} from 'react';

import styles from './Modal.module.css';
import Backdrop from './Backdrop/Backdrop';

const modal = ( props ) => (
    <Fragment>
        <Backdrop show={props.show} />
		<div 
			onClick={props.clicked}
			className={styles.modal}
			style={ {
				transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
				opacity: props.show ? '1' : '0'
			} } >
			<img onClick={ props.clicked } className={styles.image} src={props.src}/>
		</div>
    </Fragment>
);

export default modal;