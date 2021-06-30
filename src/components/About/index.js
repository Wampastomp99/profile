import React from 'react';

import profileImage from '../../assets/profile/profile.png'

function About() {
    return (
        <section className="my-5">
            <img  src={profileImage} style={{ width: '800px' }} alt="profile" class="center"/>
            
            <p>Hi my name is Michael Oreilly i am a fullstack web developer.
                i love to fish and play golf. I also strive to further my understanding
                of web development and all its tecnologies. When im not infront of a lake 
                or on the greens of the course im at my computer coding. </p>
                <p>Feel free to take a loot at my github or email me below thank you</p>
            
        </section>
    );
}

export default About;