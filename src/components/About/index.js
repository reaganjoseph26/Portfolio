import React from 'react';

function About() {
    return (
        <div className="container">
             <div id="about-card" className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src="../../assets/images/reagan.jpg" alt="Reagan."/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">About Me</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe temporibus at facere aut reprehenderit. Odit laborum voluptatum laboriosam amet nihil blanditiis voluptate nostrum consequatur, quidem cumque veritatis fugit autem sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores qui necessitatibus a odit nisi accusantium perferendis autem voluptates illo nulla ipsam ducimus tempora possimus ullam quasi ipsa, nemo officiis dignissimos!</p>
                    </div>
                  </div>
              </div>
              </div>
            {/* { props.renderedComponent === "About" ? (<>About Me is selected</>) : (<>About me not selected</>) } */}
        </div>
    );
}

export default About;