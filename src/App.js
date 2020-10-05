import React, { Component } from 'react';
import './App.scss';

import Splash from './components/Splash/Splash';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery'

class App extends Component {

    state = {
      imgSet: 'all',
      imgs: [
          {id: 1, theme: 'pets', title: 'Esme', desc: 'acrylic on canvas', src: 'https://static.wixstatic.com/media/50bcfa_0db4c5148e564ece9250ad0c88f28bc7~mv2_d_2287_2943_s_2.jpg'},
          {id: 2, theme: 'other', title: 'Untitled', desc: 'collage on mixed media paper', src: 'https://static.wixstatic.com/media/50bcfa_dda62a3cd7fd4ad1aad98b126d573ce7~mv2_d_1836_2434_s_2.jpg'},
          {id: 3, theme: 'pets', title: 'Zeke (Potato) Rosko', desc: 'acrylic on canvas', src: 'https://static.wixstatic.com/media/50bcfa_b11192f57566454abef443464cc9fa3f~mv2_d_2371_3086_s_2.jpg'},
          {id: 4, theme: 'other', title: 'Rodents', desc: 'oil on masonite', src: 'https://static.wixstatic.com/media/50bcfa_7a96481eea0643388b90520810636de0~mv2.jpg'},
          {id: 5, theme: 'pets', title: 'Max', desc: 'acrylic on canvas', src: 'https://static.wixstatic.com/media/50bcfa_9310ca482b8b47f0a04ad9fd338c43bf~mv2_d_1403_1874_s_2.jpg'},
          {id: 6, theme: 'other', title: 'The way out', desc: 'oil on masonite', src: 'https://static.wixstatic.com/media/50bcfa_bc57a3e1e2ef44fea23a6f45efecb4f0~mv2.jpg'},
          {id: 7, theme: 'pets', title: 'Doggo', desc: 'acrylic on canvas', src: 'https://static.wixstatic.com/media/50bcfa_3a9a08800de64e30b9696511d386cbf3~mv2_d_1653_2178_s_2.jpg'},
          {id: 8, theme: 'other', title: 'Vend', desc: 'fabric', src: 'https://static.wixstatic.com/media/50bcfa_a19521ffb17d43d493365f61393e5102~mv2_d_2553_3606_s_4_2.jpg'},
          {id: 9, theme: 'pets', title: 'Percy', desc: 'acrylic on mixed media paper', src: 'https://static.wixstatic.com/media/50bcfa_a19521ffb17d43d493365f61393e5102~mv2_d_2553_3606_s_4_2.jpg'},
          {id: 10, theme: 'other', title: 'Take a Nap', desc: 'paper, yarn, and cloth', src: 'https://static.wixstatic.com/media/50bcfa_a68246259ed548e1b84fb1a7c523c893~mv2_d_3648_2736_s_4_2.jpg'},
          {id: 11, theme: 'pets', title: 'The Fanciest Cat', desc: 'acrylic on canvas', src: 'https://static.wixstatic.com/media/50bcfa_5c3f832f7c994108b5dae23a92f88b17~mv2_d_1588_2046_s_2.jpeg'},
          {id: 12, theme: 'other', title: 'Little Women', desc: 'oil on masonite', src: 'https://static.wixstatic.com/media/50bcfa_0f4930b4f23a4103977c8d14e71e02b3~mv2_d_1500_1482_s_2.jpg'}
      ]}

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
