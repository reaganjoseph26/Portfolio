import React from 'react';

function About() {
    return (
        <div className="container">
             <div id="about-card" className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={require(`../../assets/images/reagan.jpg`).default} alt="Reagan."/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <p className="card-text">Hello, my name is Reagan Joseph and I am a full-stack web developer with based in Orlando, Florida. I am great with people as I have a background in customer service. I also have great problem solving skills as I graduated with my Bachelor's Degree in Political Science. I am focused on striving to continue my knowledge and skills as a web developer. On top of my technial and customer service skills, I am hard-working, driven, and a fast learner. I believe in that value of one to an organization/company never stops at who they are in that moment, but who they contunously strive to be. I stive to be the best version of my self, the best daughter, the best co-worker, and the best in my field.</p>
                    </div>
                  </div>
              </div>
              </div>
            {/* { props.renderedComponent === "About" ? (<>About Me is selected</>) : (<>About me not selected</>) } */}
        </div>
    );
}

export default About;