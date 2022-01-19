'use strict';
const { useState } = React;

function Project() {

  return (
    <section class="project-section p-4 container-md" data-aos="fade-right" data-aos-duration="1000">
      <div class="row">
        <div class="col-md me-md-3 d-md-grid align-content-center">
          <div class="screenshot-div-frame screenshot-div-frame-7-bg-color mb-3 mb-md-0">
            <div class="project-screenshot-div-container project-screenshot-7-background">
            </div>
          </div>
        </div>
        <div class="project-info-wrapper col-md d-md-flex flex-column align-items-start mt-md-2">
          <a href="#" class="project-md-stretched-link d-none d-md-block stretched-link" data-bs-toggle="modal"
            data-bs-target="#project7"></a>
          <h3>Expert Class React Component</h3>
          <ul class="d-flex flex-wrap mb-md-4">
            <li><span class="caption caption-bold">Web App</span></li>
            <li class="neutral-bullet-point mx-2">•</li>
            <li><span class="caption">Full-Stack Dev</span></li>
            <li class="neutral-bullet-point mx-2">•</li>
            <li><span class="caption">2021</span></li>
          </ul>
          <p class="project-section-para">This app allows users to sign up for a class taught by experts and gurus.
            The backend is a RoR RESTful API hosted in Heroku, and a frontend React app hosted in Netlify. I used Redux toolkit
            to handle the global state.
          </p>
          <ul class="d-flex flex-wrap">
            <li class="project-tag ms-0">ruby on rails</li>
            <li class="project-tag">react - redux</li>
            <li class="project-tag">html - css - javascript</li>
            <li class="project-tag">styled components</li>
          </ul>
          <button type="button" data-bs-toggle="modal" data-bs-target="#project7">See Project</button>
        </div>
      </div>

      <div class="modal fade" id="project7" tabindex="-1" aria-labelledby="project6" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header pb-md-0">
              <h3 class="modal-title" id="expert-class">Expert Class</h3>
              <button type="button" class="btn-close me-2" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <ul class="d-flex flex-wrap px-3 mb-md-2">
              <li><span class="caption caption-bold">Booking App</span></li>
              <li class="neutral-bullet-point mx-2">•</li>
              <li><span class="caption">Full-Stack Dev</span></li>
              <li class="neutral-bullet-point mx-2">•</li>
              <li><span class="caption">2021</span></li>
            </ul>
            <div class="modal-body">
              <div class="screenshot-div-frame screenshot-div-frame-7-bg-color">
                <div class="project-screenshot-div-container project-screenshot-7-background">
                </div>
              </div>
            </div>
            <div class="modal-footer pt-0 pb-3">
              <div class="container-fluid-md w-100">
                <div class="row">
                  <div class="modal-footer-project-description col-md-8">
                    <p class="project-section-para mt-0">In this app, users can register an account to book classes
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
                  <div class="col-md-4">
                    <ul class="d-flex flex-wrap">
                      <li class="project-tag ms-0">ruby on rails</li>
                      <li class="project-tag ms-0">react</li>
                      <li class="project-tag">redux</li>
                      <li class="project-tag">styled components</li>
                      <li class="project-tag">sass</li>
                      <li class="project-tag">html</li>
                      <li class="project-tag">css</li>
                      <li class="project-tag">javascript</li>
                      <li class="project-tag">session cookies</li>
                      <li class="project-tag">github workflow</li>
                      <li class="project-tag">private routes</li>
                      <li class="project-tag">react router dom</li>
                      <li class="project-tag">cloudinary</li>
                      <li class="project-tag">redux toolkit</li>
                      <li class="project-tag">kanban board</li>
                      <li class="project-tag">heroku</li>
                      <li class="project-tag">netlify</li>
                      <li class="project-tag">npm</li>
                      <li class="project-tag">react-bootstrap</li>
                      <li class="project-tag">swiper</li>
                      <li class="project-tag">rspec</li>
                      <li class="project-tag">factory bot gem</li>
                      <li class="project-tag">faker gem</li>
                      <li class="project-tag">axios</li>
                      <li class="project-tag">ESlint</li>
                      <li class="project-tag">vs code</li>
                    </ul>
                    <hr class="mt-3 mb-4 w-100"></hr>
                    <div class="modal-footer-buttons-wrapper w-100 d-flex mt-4">
                      <button type="button" class="w-100 modal-button my-0 me-1 py-md-2"
                        onclick="window.open('https://expert-class-frontend-v2.netlify.app')" value="See live">See
                        live <i class="ps-2 fas fa-external-link-alt"></i></button>
                      <button type="button" class="w-100 modal-button my-0 ms-1 py-md-2"
                        onclick="window.open('https://github.com/StarSheriff2/expert-class')" value="See Source">See
                        Source <i class="ps-2 fab fa-github"></i></button>
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

let domContainer = document.querySelector('#project-container');
ReactDOM.render(<Project />, domContainer);

{/* <section class="project-section p-4 container-md" data-aos="fade-right" data-aos-duration="1000">
      <div class="row">
        <div class="col-md me-md-3 d-md-grid align-content-center">
          <div class="screenshot-div-frame screenshot-div-frame-7-bg-color mb-3 mb-md-0">
            <div class="project-screenshot-div-container project-screenshot-7-background">
            </div>
          </div>
        </div>
        <div class="project-info-wrapper col-md d-md-flex flex-column align-items-start mt-md-2">
          <a href="#" class="project-md-stretched-link d-none d-md-block stretched-link" data-bs-toggle="modal"
            data-bs-target="#project7"></a>
          <h3>Expert Class</h3>
          <ul class="d-flex flex-wrap mb-md-4">
            <li><span class="caption caption-bold">Web App</span></li>
            <li class="neutral-bullet-point mx-2">•</li>
            <li><span class="caption">Full-Stack Dev</span></li>
            <li class="neutral-bullet-point mx-2">•</li>
            <li><span class="caption">2021</span></li>
          </ul>
          <p class="project-section-para">This app allows users to sign up for a class taught by experts and gurus.
            The backend is a RoR RESTful API hosted in Heroku, and a frontend React app hosted in Netlify. I used Redux toolkit
            to handle the global state.
          </p>
          <ul class="d-flex flex-wrap">
            <li class="project-tag ms-0">ruby on rails</li>
            <li class="project-tag">react - redux</li>
            <li class="project-tag">html - css - javascript</li>
            <li class="project-tag">styled components</li>
          </ul>
          <!-- Button trigger modal -->
          <button type="button" data-bs-toggle="modal" data-bs-target="#project7">See Project</button>
        </div>
      </div>

      <!-- Modal -->
      <div class="modal fade" id="project7" tabindex="-1" aria-labelledby="project6" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header pb-md-0">
              <h3 class="modal-title" id="expert-class">Expert Class</h3>
              <button type="button" class="btn-close me-2" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <ul class="d-flex flex-wrap px-3 mb-md-2">
              <li><span class="caption caption-bold">Booking App</span></li>
              <li class="neutral-bullet-point mx-2">•</li>
              <li><span class="caption">Full-Stack Dev</span></li>
              <li class="neutral-bullet-point mx-2">•</li>
              <li><span class="caption">2021</span></li>
            </ul>
            <div class="modal-body">
              <div class="screenshot-div-frame screenshot-div-frame-7-bg-color">
                <div class="project-screenshot-div-container project-screenshot-7-background">
                </div>
              </div>
            </div>
            <div class="modal-footer pt-0 pb-3">
              <div class="container-fluid-md w-100">
                <div class="row">
                  <div class="modal-footer-project-description col-md-8">
                    <p class="project-section-para mt-0">In this app, users can register an account to book classes
                      with experts
                      in different topics from all over the world.
                      Users can create new classes, delete them and view them. They can also reserve a class or view
                      all their current reservations.
                      I built this project with a group of developers using Github's Kanban board.<br><br>

                      We built the backend with <strong>Ruby on Rails</strong>, <strong>PostgreSQL</strong> for the database, <strong>ReactJS</strong> for
                      the frontend, and <strong>Redux</strong> for the global state management. React was bootstrapped
                      with <i>
                        <a rel="noopener noreferrer" href="https://github.com/facebook/create-react-app"
                          target='_blank'>create-react-app</a></i>.<br><br>
                      The front-end design was inspired by a <a rel="noopener noreferrer"
                        href="https://www.behance.net/gallery/26425031/Vespa-Responsive-Redesign">
                        project</a> from <strong><i><a rel="noopener noreferrer" href="https://www.behance.net/muratk"
                            target='_blank'>Murat Korkmaz</a></i></strong>,
                      whose project is licenced under <i>The Creative Commons</i> license.<br><br>
                      <a href="https://youtu.be/A_j1AwwM6Ao" target="_blank" rel="noopener noreferrer">
                        🎥 Watch a <strong>video presentation</strong> of this project here.</a>
                    </p>
                  </div>
                  <div class="col-md-4">
                    <ul class="d-flex flex-wrap">
                      <li class="project-tag ms-0">ruby on rails</li>
                      <li class="project-tag ms-0">react</li>
                      <li class="project-tag">redux</li>
                      <li class="project-tag">styled components</li>
                      <li class="project-tag">sass</li>
                      <li class="project-tag">html</li>
                      <li class="project-tag">css</li>
                      <li class="project-tag">javascript</li>
                      <li class="project-tag">session cookies</li>
                      <li class="project-tag">github workflow</li>
                      <li class="project-tag">private routes</li>
                      <li class="project-tag">react router dom</li>
                      <li class="project-tag">cloudinary</li>
                      <li class="project-tag">redux toolkit</li>
                      <li class="project-tag">kanban board</li>
                      <li class="project-tag">heroku</li>
                      <li class="project-tag">netlify</li>
                      <li class="project-tag">npm</li>
                      <li class="project-tag">react-bootstrap</li>
                      <li class="project-tag">swiper</li>
                      <li class="project-tag">rspec</li>
                      <li class="project-tag">factory bot gem</li>
                      <li class="project-tag">faker gem</li>
                      <li class="project-tag">axios</li>
                      <li class="project-tag">ESlint</li>
                      <li class="project-tag">vs code</li>
                    </ul>
                    <hr class="mt-3 mb-4 w-100">
                    <div class="modal-footer-buttons-wrapper w-100 d-flex mt-4">
                      <button type="button" class="w-100 modal-button my-0 me-1 py-md-2"
                        onclick="window.open('https://expert-class-frontend-v2.netlify.app')" value="See live">See
                        live <i class="ps-2 fas fa-external-link-alt"></i></button>
                      <button type="button" class="w-100 modal-button my-0 ms-1 py-md-2"
                        onclick="window.open('https://github.com/StarSheriff2/expert-class')" value="See Source">See
                        Source <i class="ps-2 fab fa-github"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end -->
    </section> */}
