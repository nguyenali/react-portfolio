import React from 'react';
import defaultPhoto from '../../assets/images/defaultPhoto.JPG';


function About() {
    return (
        <div id="content">
            <div class="container">
                <div class="about">
                    <div class="about-author">
                        <img className="defaultPhoto" src={defaultPhoto} alt="Me at an event" ></img>
                    </div>
                    <h3 class="post-title">About Me</h3>
                    <div class="post-content">
                        <p>
                        I am a bay area native that gradutated from UC DAVIS with a Bachelor's in Biological Sciences.
                        Although I intended to be on the pre-med route, the COVId-19 Pandemic hit and stalled my plans.
                        During that time, I realized the importance of technology and how much it was impacting the world.
                        I realized that, yes medicine does change lives, but technology can also impact lives as well. And so
                        my journey into coding began in hopes that someday I too can change the world. Contact me if interested in
                        my work.

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;