import React, { useState } from 'react';
import Project from '../Project';

function Portfolio() {
    const [projects] = useState([
        {
            name: 'Work Day Scheduler',
            desciption: 'Work day planner',
            link: 'https://nguyenali.github.io/Work-Day-Scheduler/',
            github: 'https://github.com/nguyenali/Work-Day-Scheduler'
        },
        {
            name: 'Password Generator',
            description: 'Generator for new passwords',
            link: 'https://nguyenali.github.io/Password-Generator/',
            github: 'https://github.com/nguyenali/Password-Generator'
        },
        {
            name: 'Budget Tracker',
            description: 'Interactive budget tracker',
            link: 'https://stormy-chamber-41832.herokuapp.com/',
            github: 'https://github.com/nguyenali/budget-accounter'
        },
        {
            name: 'Weather Dashboard',
            description: 'Weather forecast for an inputted city',
            link: 'https://nguyenali.github.io/Weather-Dashboard/',
            github: 'https://github.com/nguyenali/Weather-Dashboard'
        },
        {
            name: 'Code Quiz',
            description: 'Test your javscript knowledge',
            link: 'https://nguyenali.github.io/Code-Quiz/',
            github: 'https://github.com/nguyenali/Code-Quiz'
        },
        {
            name: 'Note Taker',
            description: 'Write and store notes using remote storage',
            link: 'https://nguyenali.github.io/Code-Quiz/',
            github: 'https://github.com/nguyenali/Code-Quiz'
        },
    ])

    return (
        <div id="content">
            <div class="post-container">
                <div class="post">
                    <div class="post-author">
                        <h1>Portfolio</h1>
                    </div>
                    
                    <div>
                        {projects.map((project, i) => (
                            <Project
                                project={project}
                                i={i}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;