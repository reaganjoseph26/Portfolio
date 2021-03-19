import React from 'react';

function About() {
    return (
        <div class="container">
             <div id="about-card" class="card mb-3">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="" alt="An image of Reagan."/>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">About Me</h5>
                      <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe temporibus at facere aut reprehenderit. Odit laborum voluptatum laboriosam amet nihil blanditiis voluptate nostrum consequatur, quidem cumque veritatis fugit autem sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores qui necessitatibus a odit nisi accusantium perferendis autem voluptates illo nulla ipsam ducimus tempora possimus ullam quasi ipsa, nemo officiis dignissimos!</p>
                    </div>
                  </div>
              </div>
              </div>
            {/* { props.renderedComponent === "About" ? (<>About Me is selected</>) : (<>About me not selected</>) } */}
        </div>
    );
}

export default About;