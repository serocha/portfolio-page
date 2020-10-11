import React, { Component } from 'react';

import Splash from './components/Layout/Sections/Splash/Splash';
import About from './components//Layout/Sections/About/About';
import Gallery from './components/Layout/Sections/Gallery/Gallery';
import Masks from './components/Layout/Sections/Masks/Masks';
import Contact from './components/Layout/Sections/Contact/Contact';

import './App.scss';

class App extends Component {

    titleWP (classStr, i) {
      let el = document.getElementsByClassName(classStr)[i];
          el.style.opacity = 1;
          el.style.transform = 'translateX(0)';
    }

    render() {
        return (
            <div className="App">
                <Splash />
                <About titleWP={this.titleWP} /> 
                <Gallery titleWP={this.titleWP} />
                <Masks titleWP={this.titleWP} />
                <Contact titleWP={this.titleWP} />
            </div>
        );
    }

}

export default App;
