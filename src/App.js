import React, { Component } from 'react';

import Splash from './components/Layout/Sections/Splash/Splash';
import About from './components//Layout/Sections/About/About';
import Gallery from './components/Layout/Sections/Gallery/Gallery'

import './App.scss';

class App extends Component {

    waypoint (classStr, i) {
      let el = document.getElementsByClassName(classStr)[i];
          el.style.opacity = 1;
          el.style.transform = 'translateX(0)';
    }

    render() {
        return (
            <div className="App">
                <Splash />
                <About waypoint={this.waypoint} /> 
                <Gallery waypoint={this.waypoint} />
            </div>
        );
    }

}

export default App;
