import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
            I am a bay area native that gradutated from UC DAVIS with a Bachelor's in Biological Sciences.
            Although I intended to be on the pre-med route, the COVId-19 Pandemic hit and stalled my plans.
            During that time, I realized the importance of technology and how much it was impacting the world.
            I realized that, yes medicine does change lives, but technology can also change lives as well. And so
            my journey into coding in hopes that someday I too can change the world. Contact me if interested in
            my work.
        </p>
      </div>
    </section>
  );
}

export default About;
