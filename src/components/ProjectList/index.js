import React, { useState } from 'react';

function ProjectList() {
    const [projects] = useState([
        {
            name: 'Runbuddy',
            description: 'A site for runners to connect with trainers to improve their runs',
            url: 'https://Wampastomp99.github.io/run-buddy/',
            github: 'https://github.com/Wampastomp99/run-buddy'
        },

    ]);

    return (
        <div>
            <div>
                {projects.map((project, i) => (
                    <a href={project.github} target="_blank" rel="noreferrer">
                    <img
                        src={require(`../../assets/images/runbuddy.jpg`)}
                        alt={project.name}
                        
                        key={project.name}
                    />
                    <p>an app for running</p>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default ProjectList;