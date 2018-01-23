import React, { Component } from 'react';
import './reset.css';
import './App.css';
import Projects from './containers/Projects/Projects';
import Info from './components/Info/Info'
import fccLogo from './images/link_icons/freecodecamp.png'
import twitterLogo from './images/link_icons/Twitter.png'
import gitHubLogo from './images/link_icons/GitHub.png'
import linkdinLogo from './images/link_icons/linkdin.png'
import emailLogo from './images/link_icons/email.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className ='Header'>
            <a className='First' href='#Top'>Andrew Butler</a>
            <a className='Second' href='#Info'>info</a>
            <a href='#Projects'>projects</a>
            <a href='#Contact'>contact</a>
        </div>
        <Info id='Info'/>
        <h1 className='ProjectLabel' id='Projects'>Projects</h1>
        <Projects />
        <div className='Footer' id='Contact'>
            <a href='mailto:andrbutler@yahoo.com'>
                <img alt='andrbutler@yahoo.com' 
                 src={emailLogo}/>
            </a>
            <a href='https://freecodecamp.org/andrbutler' 
             rel='noopener noreferrer'
             target='_blank'>
                <img alt='Free Code Camp Profile' 
                 src={fccLogo}/>
            </a>
            <a href='https://github.com/andrbutler' 
             rel='noopener noreferrer'
             target='_blank'>
                <img alt='GitHub Profile' 
                 src={gitHubLogo}/>
            </a>
            <a href='https://twitter.com/andrbutler' 
             rel='noopener noreferrer'
             target='_blank'>
                <img alt='Twitter @andrbutler' 
                 src={twitterLogo}/>
            </a>
            <a href='https://linkedin.com/in/andrbutler' 
             rel='noopener noreferrer'
             target='_blank'>
                <img alt='Linkedin Profile' 
                 src={linkdinLogo}/>
            </a>
        </div>
      </div>
    );
  }
}

export default App;
