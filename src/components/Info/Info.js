import React from 'react';
import './Info.css';

const info = () => {
    return (
        <div id='Info'>
            <div className='Info'>
                <div className='Bio'>
                    <h1> Hello! My name is Andrew Butler!</h1>
                    <h2> I am a recently graduated developer, with a skill set that includes java programing, full stack, and frontend
                        web-development. I am always pursuing new challenges and learning 
                        new skills, and Hope to work with people who will give me the opportunity
                        to solve problems and irrevocably change the world.
                        When I'm not coding I enjoy hiking, running, 
                        brewing beer, cooking, and playing indie-games.
                    </h2>
                </div>
                <div className='Portrait' />
            </div>
            <div className='Skills'>
                    <ul className='Skill'><h1>Skills I'm currently proficient in:</h1>
                    <li>Java</li>
                    <li>Spring Boot</li>
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>React</li>
                    <li>Vue</li>
                    <li>Node</li>
                    <li>Python</li>
                    <li>bash</li>
                    <li>linux</li>
                    <li>Photoshop</li>
                    </ul>
            </div>
        </div>
    );
};

export default info;
