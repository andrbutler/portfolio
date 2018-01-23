import React from 'react';
import './Info.css';

const info = () => {
    return (
        <div id='Info'>
            <div className='Info'>
                <div className='Bio'>
                    <h1> Hello! My name is Andrew Butler!</h1>
                    <h2> I am a self taught developer, with a current focus on front-end
                        web-development. I am always pursuing new chalenges and learning 
                        new skills. Hoping to work with people who give me the opportunity
                        to solve problems and irrevocably change the world.
                        When I'm not coding I enjoy hiking, running, 
                        brewing beer, drawing, cooking, and playing indie-games.
                    </h2>
                </div>
                <div className='Portrait' />
            </div>
            <div className='Skills'>
                    <ul className='Skill'><h1>Skills I'm currently profecient in:</h1>
                    <li>html</li>
                    <li>css</li>
                    <li>React</li>
                    <li>Node</li>
                    <li>express</li>
                    <li>bash</li>
                    <li>linux</li>
                    <li>Photoshop</li>
                    </ul>
                    <ul className='Skill'><h1>I'm learning and am excited to learn:</h1>
                    <li>React Native</li>
                    <li>Solidity</li>
                    <li>Sass</li>
                    <li>Machine Learning</li>
                    <li>Lisp</li>
                    <li>AWS </li>
                    <li>python</li>
                    </ul>
            </div>
        </div>
    );
};

export default info;
