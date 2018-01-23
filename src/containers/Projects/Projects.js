import React, { Component } from 'react';
import projectList from './ProjectList';
import Project from '../../components/Project/Project';

class Projects extends Component {

    render () {
        const projects = projectList.map((x) =>  {
            return (
                <Project
                 key={x.name}
                 name={x.name}
                 description={x.description}
                 img={x.image}
                 views={x.views}
                 link={x.link}
                 />
            );
        });
        return (
            <div className='Projects'>
                {projects}
            </div>
        );
    }
}

export default Projects;
