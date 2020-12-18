import React, {useState} from 'react';
import Project from '../Project';

const PhotoList = ({currentCategory}) => {

  const [photos] = useState([
    {
      name: 'projects',
      description: 'Run Buddy',
      link: "https://nguyenali.github.io/run-buddy/",
      github:"https://github.com/nguyenali/run-buddy",
      id: 0
    },
    { name: 'projects', description: 'Work-Day-Planner',
      link: "https://nguyenali.github.io/Work-Day-Scheduler/",
      github: "https://github.com/nguyenali/Work-Day-Scheduler",
       id: 1},
    { name: 'projects', description: 'Weather Dashboard, Web API', 
      link:"https://stormy-chamber-41832.herokuapp.com/",
      github: "https://github.com/nguyenali/budget-accounter",
      id: 2 },
    { name: 'projects', description: 'Tech This Out - Tech blog, MVC', id: 3 },
    {
      name: 'projects',
      description: 'SmollTalk - Community Forum, ORM & MVC',
      id: 4
    },
    { name: 'projects', description: 'Budge-It - Budget tracker, PWA', id: 5 },
    { name: 'photography', description: 'Nature encounters while camping in Bodega Bay - 35mm', id: 0 },
    {
      name: 'photography',
      description: 'Lovers in 35mm', id: 1
    },
    { name: 'photography', description: 'Bustling streets of Tokyo at night', id:2 },
    { name: 'photography', description: 'Tokyo traffic at night', id: 3 },
    { name: 'photography', description: 'Daytime Tokyo traffic', id: 4 },
    { name: 'photography', description: 'Coastal getaway', id: 5}
  ]);

    //selects the photos matching the category selected
    const currentPhotos = photos.filter((photo) => photo.name === currentCategory);
    console.log(currentCategory);
    //renders each photo from the category
    return (
    <div>
        {currentPhotos.map((image) => (
          <Project name={image.name}
            description={image.description}
            link={image.link}
            github={image.github}
            id={image.id}/>
        ))}
    </div>
    )
}

export default PhotoList;