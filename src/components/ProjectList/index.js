import React, { useState } from 'react';

function ProjectList() {
    const [projects] = useState([
        {
            name: 'Golf-Buddy',
            description: 'A site so golfers can trak there golf scores',
            url: 'https://github.com/Jasonpsmith180/golf-buddy',
            github: 'https://bearded-leaf-21355.herokuapp.com/'
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
                    <p>An app for golfers to track there golf scores</p>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default ProjectList;