import React from 'react';


function Projects() {
    return (
            <div id="projects" className="row align-items-start">
                <div className="col-12">
                    <h2 id="projects">Projects</h2>
                </div>
                <div className="col-6">
                  <h3>Run Buddy</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus esse aspernatur animi, veritatis saepe deleniti aliquid a, quidem officiis quod unde laboriosam iste aperiam ratione illo. Quos voluptate autem aperiam!</p>
                </div>
                <div className="col-6">
                    <a href="https://reaganjoseph26.github.io/run-buddy/"><img src={require(`../../assets/images/runbuddy.jpg`).default} alt="RUN BUDDY"/></a>
                </div>

                <div className="col-6">
                  <h3>Movie Hunt</h3>
                  <p>Movie Hunt is a web application dedicated to movie lovers. Users are able to search the site for any movie they wish as well as save the movie. The Movie Database API provides the data for the site. For more informoation on the technologices used, the process it ook to create the application, and my collaborators, visist the repositiory here:  <a href="https://github.com/reaganjoseph26/Movie-Hunt.git">Movie Hunt Repo.</a></p>
                </div>
                <div className="col-6">      
                  <a href="https://reaganjoseph26.github.io/Movie-Hunt/"><img src={require(`../../assets/images/movie-hunt.jpg`).default} alt="Movie Hunt"/></a>
                </div>

                <div className="col-6">
                  <h3>Taskmaster Pro</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quo, ad voluptates, voluptatum cumque praesentium eum culpa vitae facere, quis ut harum? Deserunt voluptatem omnis repudiandae aliquam tenetur ex nam.</p>
                </div>
                <div className="col-6">
                  <a href="https://reaganjoseph26.github.io/taskmaster-pro/"><img src={require(`../../assets/images/taskmaster-pro.jpg`).default} alt="Taskmaster-pro"/></a>
                </div>

                <div className="col-6">
                  <h3>Work-Day Scheduler</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, iste atque. Earum aliquid recusandae perferendis numquam quod autem aut rem consectetur nulla possimus? Consequatur soluta, voluptates quisquam beatae placeat illo?</p>
                </div>
                <div className="col-6"> 
                <a href="https://reaganjoseph26.github.io/Work-Day-Scheduler-/"><img src={require(`../../assets/images/work-day-sched.jpg`).default} alt="Work-Day Scheduler"/></a>
                </div>
            </div>
        
    );
}

export default Projects;