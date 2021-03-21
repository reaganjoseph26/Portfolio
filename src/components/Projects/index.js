import React from 'react';


function Projects() {
    return (
            <div id="projects" className="row align-items-start">
                <div className="col-12">
                </div>
                
                <div className="col-6">
                  <h3>Movie Hunt</h3>
                  <p>Movie Hunt is a web application dedicated to movie lovers. Users are able to search the site for any movie they wish as well as save the movie. The Movie Database API provides the data for the site. For more information on the technologies used, the process it took to create the application, and my collaborators, visit the repositiory here:  <a className="project-a" href="https://github.com/reaganjoseph26/Movie-Hunt.git">Movie Hunt Repo.</a></p>
                </div>
                <div className="col-6">      
                  <a href="https://reaganjoseph26.github.io/Movie-Hunt/"><img className="project-img" src={require(`../../assets/images/movie-hunt.jpg`).default} alt="Movie Hunt"/></a>
                </div>

                <div className="col-6">
                  <h3>Creepy Ventures</h3>
                  <p>Creepventures is a social media based blog system that allows users, once they register, to make posts and add locations of haunted locations that reflect on the map on the home page. Once logged in, they are able to make comments and favorite posts on their dashboard. They are able to edit and delete their own posts and interact with other users on the posts through the comments.For more information on the technologies used, the process it took to create the application, and my collaborators, visit the repositiory here:  <a className="project-a" href="https://github.com/reaganjoseph26/creepy-ventures">Creepy Ventures Repo.</a></p>
                </div>
                <div className="col-6">      
                  <a href=" https://peaceful-stream-83088.herokuapp.com/"><img className="project-img" src={require(`../../assets/images/dashboard.jpg`).default} alt="Creepy Ventures"/></a>
                </div>

                <div className="col-6">
                  <h3>Budget Tracker</h3>
                  <p>Budget Tracker is a project to manage your funds by budgeting your transactions. It is a progressive web application that functions while offline with the help of service workers and indexedDB.For more information on the technologies used, and the process it took to create the application, visit the repositiory here:  <a className="project-a" href="https://github.com/reaganjoseph26/creepy-ventures">Budget Tracker Repo.</a></p>
                </div>
                <div className="col-6">
                  <a href="https://stark-forest-55745.herokuapp.com/"><img className="project-img" src={require(`../../assets/images/Screenshot.jpg`).default} alt="Taskmaster-pro"/></a>
                </div>

                <div className="col-6">
                  <h3>Team Profile Generator</h3>
                  <p> This command line application generates a HTML page that provides summaries for different employee types using user input from the command line. For more information on the technologies used, and the process it took to create the application, visit the repositiory here:  <a className="project-a" href="https://github.com/reaganjoseph26/Team-Profile-Generator">Team Profile Generator Repo.</a></p>
                </div>
                <div className="col-6">
                  <a href="https://www.youtube.com/watch?v=Ct6hzEAVkug"><img className="project-img" src={require(`../../assets/images/browser-screenshot.jpg`).default} alt="Team Profile Generator"/></a>
                </div>

                <div className="col-6">
                  <h3>Weather Dashboard</h3>
                  <p> Weather Dashboard is a weather application that grabs the current and five day weather forecast information for any applicable city name using a server side api. For more information on the technologies used, and the process it took to create the application, visit the repositiory here:  <a className="project-a" href="https://github.com/reaganjoseph26/weather-dashboard">Weather Dashboard Repo.</a></p>
                </div>
                <div className="col-6">
                  <a href="https://reaganjoseph26.github.io/weather-dashboard/"><img className="project-img" src={require(`../../assets/images/Screenshot2.jpg`).default} alt="Weather Dashboard"/></a>
                </div>

                <div className="col-6">
                  <h3>Read Me Generator</h3>
                  <p> Read Me Generator is a command line application to generate a high quality readme using node.js. For more information on the technologies used, and the process it took to create the application, visit the repositiory here:  <a className="project-a" href="https://github.com/reaganjoseph26/README-GENERATOR">Read Me Generator Repo.</a></p>
                </div>
                <div className="col-6">
                  <a href="https://www.youtube.com/watch?v=H2rqVItqEDU"><img className="project-img" src={require(`../../assets/images/terminalexample.jpg`).default} alt="Read Me Generator"/></a>
                </div>

            </div>
        
    );
}

export default Projects;