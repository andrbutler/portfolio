import React, { Component } from 'react';
import Backdrop from '../Backdrop/Backdrop';
import './Project.css';

class Project extends Component {
    state = {detail: false}

    render() {
        let project = (
            <div className='Project'>
                <img 
                 className='Thumb'
                 onClick={() => this.setState({detail: true})}
                 alt={this.props.name} 
                 src={this.props.img} 
                />
                <p className='Label' onClick={() => this.setState({detail: true})} >
                    {this.props.name}
                </p>
            </div>
        );

        if (this.state.detail) {
            let views = null;
            if (this.props.views){
                views = this.props.views.map((x, ind) => {
                    return <img 
                     alt='other view'key={ind} src={x} className='Alt' />
                });
            }

            project = (
                <div className='Project'>
                    <Backdrop />
                    <div className='Detail'>
                        <h1 className='Title'>{this.props.name}</h1>
                        <p 
                         className='Close' 
                         onClick={() => this.setState({detail: false})}
                        > close</p>
                        <a 
                         href={this.props.link} 
                         rel='noopener noreferrer'
                         target='_blank'>
                            <img 
                             className='DetailImg'
                             alt={this.props.name} 
                             src={this.props.img} 
                            />
                            <p >click to go to site</p>
                        </a>
                        <div className='Description'>
                            <p>{this.props.description}</p>
                        </div>
                        <div className='AltContainer'>
                            {
                                this.props.views
                                ? <h1 className='AltLabel' >Other Views</h1>
                                : null
                            }
                            {views}
                        </div>
                        
                    </div>
                </div>
            );
        }
        return (
            <div>
                {project}
            </div>
        );
    }
};

export default Project;
