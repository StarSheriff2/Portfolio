'use strict';
const { useState } = React;

const Project = ({projectID}) => {


  return (
    <section className="project-section p-4 container-md" data-aos="fade-right" data-aos-duration="1000">
      <div className="row">
        <div className="col-md me-md-3 d-md-grid align-content-center">
          <div className="screenshot-div-frame screenshot-div-frame-7-bg-color mb-3 mb-md-0">
            <div className="project-screenshot-div-container project-screenshot-7-background">
            </div>
          </div>
        </div>
        <div className="project-info-wrapper col-md d-md-flex flex-column align-items-start mt-md-2">
          <a href="#" className="project-md-stretched-link d-none d-md-block stretched-link" data-bs-toggle="modal"
            data-bs-target="#project7"></a>
          <h3>{`Project # ${projectID}: Expert Class React Component`}</h3>
          <ul className="d-flex flex-wrap mb-md-4">
            <li><span className="caption caption-bold">Web App</span></li>
            <li className="neutral-bullet-point mx-2">•</li>
            <li><span className="caption">Full-Stack Dev</span></li>
            <li className="neutral-bullet-point mx-2">•</li>
            <li><span className="caption">2021</span></li>
          </ul>
          <p className="project-section-para">This app allows users to sign up for a class taught by experts and gurus.
            The backend is a RoR RESTful API hosted in Heroku, and a frontend React app hosted in Netlify. I used Redux toolkit
            to handle the global state.
          </p>
          <ul className="d-flex flex-wrap">
            <li className="project-tag ms-0">ruby on rails</li>
            <li className="project-tag">react - redux</li>
            <li className="project-tag">html - css - javascript</li>
            <li className="project-tag">styled components</li>
          </ul>
          <button type="button" data-bs-toggle="modal" data-bs-target="#project7">See Project</button>
        </div>
      </div>

      <div className="modal fade" id="project7" tabIndex="-1" aria-labelledby="project6" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header pb-md-0">
              <h3 className="modal-title" id="expert-class">Expert Class</h3>
              <button type="button" className="btn-close me-2" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <ul className="d-flex flex-wrap px-3 mb-md-2">
              <li><span className="caption caption-bold">Booking App</span></li>
              <li className="neutral-bullet-point mx-2">•</li>
              <li><span className="caption">Full-Stack Dev</span></li>
              <li className="neutral-bullet-point mx-2">•</li>
              <li><span className="caption">2021</span></li>
            </ul>
            <div className="modal-body">
              <div className="screenshot-div-frame screenshot-div-frame-7-bg-color">
                <div className="project-screenshot-div-container project-screenshot-7-background">
                </div>
              </div>
            </div>
            <div className="modal-footer pt-0 pb-3">
              <div className="container-fluid-md w-100">
                <div className="row">
                  <div className="modal-footer-project-description col-md-8">
                    <p className="project-section-para mt-0">In this app, users can register an account to book classes
                      with experts
                      in different topics from all over the world.
                      Users can create new classes, delete them and view them. They can also reserve a class or view
                      all their current reservations.
                      I built this project with a group of developers using Github's Kanban board.<br></br><br></br>

                      We built the backend with <strong>Ruby on Rails</strong>, <strong>PostgreSQL</strong> for the database, <strong>ReactJS</strong> for
                      the frontend, and <strong>Redux</strong> for the global state management. React was bootstrapped
                      with <i>
                        <a rel="noopener noreferrer" href="https://github.com/facebook/create-react-app"
                          target='_blank'>create-react-app</a></i>.<br></br><br></br>
                      The front-end design was inspired by a <a rel="noopener noreferrer"
                        href="https://www.behance.net/gallery/26425031/Vespa-Responsive-Redesign">
                        project</a> from <strong><i><a rel="noopener noreferrer" href="https://www.behance.net/muratk"
                            target='_blank'>Murat Korkmaz</a></i></strong>,
                      whose project is licenced under <i>The Creative Commons</i> license.<br></br><br></br>
                      <a href="https://youtu.be/A_j1AwwM6Ao" target="_blank" rel="noopener noreferrer">
                        🎥 Watch a <strong>video presentation</strong> of this project here.</a>
                    </p>
                  </div>
                  <div className="col-md-4">
                    <ul className="d-flex flex-wrap">
                      <li className="project-tag ms-0">ruby on rails</li>
                      <li className="project-tag ms-0">react</li>
                      <li className="project-tag">redux</li>
                      <li className="project-tag">styled components</li>
                      <li className="project-tag">sass</li>
                      <li className="project-tag">html</li>
                      <li className="project-tag">css</li>
                      <li className="project-tag">javascript</li>
                      <li className="project-tag">session cookies</li>
                      <li className="project-tag">github workflow</li>
                      <li className="project-tag">private routes</li>
                      <li className="project-tag">react router dom</li>
                      <li className="project-tag">cloudinary</li>
                      <li className="project-tag">redux toolkit</li>
                      <li className="project-tag">kanban board</li>
                      <li className="project-tag">heroku</li>
                      <li className="project-tag">netlify</li>
                      <li className="project-tag">npm</li>
                      <li className="project-tag">react-bootstrap</li>
                      <li className="project-tag">swiper</li>
                      <li className="project-tag">rspec</li>
                      <li className="project-tag">factory bot gem</li>
                      <li className="project-tag">faker gem</li>
                      <li className="project-tag">axios</li>
                      <li className="project-tag">ESlint</li>
                      <li className="project-tag">vs code</li>
                    </ul>
                    <hr className="mt-3 mb-4 w-100"></hr>
                    <div className="modal-footer-buttons-wrapper w-100 d-flex mt-4">
                      <button type="button" className="w-100 modal-button my-0 me-1 py-md-2"
                        onClick={()=> window.open("https://expert-class-frontend-v2.netlify.app", "_blank")}
                        value="See live">See
                        live <i className="ps-2 fas fa-external-link-alt"></i></button>
                      <button type="button" className="w-100 modal-button my-0 ms-1 py-md-2"
                        onClick={()=> window.open("https://github.com/StarSheriff2/expert-class", "_blank")}
                        value="See Source">See
                        Source <i className="ps-2 fab fa-github"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (

      <Project projectID={1} />

  );
};

let domContainer = document.querySelector('#project-container');
ReactDOM.render(<Projects />, domContainer);

// document.querySelectorAll('.project_container')
//   .forEach(domContainer => {
//     // Read the project ID from a data-* attribute.
//     // const projectID = parseInt(domContainer.dataset.projectid, 10);
//     ReactDOM.render(<Project />, domContainer);
//     // ReactDOM.render(
//     //   e(Project, { projectID: projectID }),
//     //   domContainer
//     // );
//   });

