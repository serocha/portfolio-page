import React from 'react';
import './Splash.scss';

const splash = () => (
	<section id='home' className='container-fluid'>
      <div className='no-gutters center'>
        <div id='hi' className='fadeup'>
          hi
        </div>
        <div className='fadeleft'>
          my name is
        </div>
        <div id='name' className='fadeup' style = { {paddingLeft: '5vw', animationDelay: '1.25s'} }>
          Melissa
        </div>
        <div className='faderight' style={ {paddingLeft: '10vw'} }>
          and I like to paint
        </div>
      </div>
    </section>
);

export default splash;