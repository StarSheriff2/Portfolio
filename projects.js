'use strict';

var _React = React,
    useState = _React.useState;


var Project = function Project(_ref) {
  var projectID = _ref.projectID;


  return React.createElement(
    "section",
    { className: "project-section p-4 container-md", "data-aos": "fade-right", "data-aos-duration": "1000" },
    React.createElement(
      "div",
      { className: "row" },
      React.createElement(
        "div",
        { className: "col-md me-md-3 d-md-grid align-content-center" },
        React.createElement(
          "div",
          { className: "screenshot-div-frame screenshot-div-frame-7-bg-color mb-3 mb-md-0" },
          React.createElement("div", { className: "project-screenshot-div-container project-screenshot-7-background" })
        )
      ),
      React.createElement(
        "div",
        { className: "project-info-wrapper col-md d-md-flex flex-column align-items-start mt-md-2" },
        React.createElement("a", { href: "#", className: "project-md-stretched-link d-none d-md-block stretched-link", "data-bs-toggle": "modal",
          "data-bs-target": "#project7" }),
        React.createElement(
          "h3",
          null,
          "Project # " + projectID + ": Expert Class React Component"
        ),
        React.createElement(
          "ul",
          { className: "d-flex flex-wrap mb-md-4" },
          React.createElement(
            "li",
            null,
            React.createElement(
              "span",
              { className: "caption caption-bold" },
              "Web App"
            )
          ),
          React.createElement(
            "li",
            { className: "neutral-bullet-point mx-2" },
            "\u2022"
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "span",
              { className: "caption" },
              "Full-Stack Dev"
            )
          ),
          React.createElement(
            "li",
            { className: "neutral-bullet-point mx-2" },
            "\u2022"
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "span",
              { className: "caption" },
              "2021"
            )
          )
        ),
        React.createElement(
          "p",
          { className: "project-section-para" },
          "This app allows users to sign up for a class taught by experts and gurus. The backend is a RoR RESTful API hosted in Heroku, and a frontend React app hosted in Netlify. I used Redux toolkit to handle the global state."
        ),
        React.createElement(
          "ul",
          { className: "d-flex flex-wrap" },
          React.createElement(
            "li",
            { className: "project-tag ms-0" },
            "ruby on rails"
          ),
          React.createElement(
            "li",
            { className: "project-tag" },
            "react - redux"
          ),
          React.createElement(
            "li",
            { className: "project-tag" },
            "html - css - javascript"
          ),
          React.createElement(
            "li",
            { className: "project-tag" },
            "styled components"
          )
        ),
        React.createElement(
          "button",
          { type: "button", "data-bs-toggle": "modal", "data-bs-target": "#project7" },
          "See Project"
        )
      )
    ),
    React.createElement(
      "div",
      { className: "modal fade", id: "project7", tabIndex: "-1", "aria-labelledby": "project6", "aria-hidden": "true" },
      React.createElement(
        "div",
        { className: "modal-dialog modal-dialog-centered" },
        React.createElement(
          "div",
          { className: "modal-content" },
          React.createElement(
            "div",
            { className: "modal-header pb-md-0" },
            React.createElement(
              "h3",
              { className: "modal-title", id: "expert-class" },
              "Expert Class"
            ),
            React.createElement("button", { type: "button", className: "btn-close me-2", "data-bs-dismiss": "modal", "aria-label": "Close" })
          ),
          React.createElement(
            "ul",
            { className: "d-flex flex-wrap px-3 mb-md-2" },
            React.createElement(
              "li",
              null,
              React.createElement(
                "span",
                { className: "caption caption-bold" },
                "Booking App"
              )
            ),
            React.createElement(
              "li",
              { className: "neutral-bullet-point mx-2" },
              "\u2022"
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "span",
                { className: "caption" },
                "Full-Stack Dev"
              )
            ),
            React.createElement(
              "li",
              { className: "neutral-bullet-point mx-2" },
              "\u2022"
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "span",
                { className: "caption" },
                "2021"
              )
            )
          ),
          React.createElement(
            "div",
            { className: "modal-body" },
            React.createElement(
              "div",
              { className: "screenshot-div-frame screenshot-div-frame-7-bg-color" },
              React.createElement("div", { className: "project-screenshot-div-container project-screenshot-7-background" })
            )
          ),
          React.createElement(
            "div",
            { className: "modal-footer pt-0 pb-3" },
            React.createElement(
              "div",
              { className: "container-fluid-md w-100" },
              React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                  "div",
                  { className: "modal-footer-project-description col-md-8" },
                  React.createElement(
                    "p",
                    { className: "project-section-para mt-0" },
                    "In this app, users can register an account to book classes with experts in different topics from all over the world. Users can create new classes, delete them and view them. They can also reserve a class or view all their current reservations. I built this project with a group of developers using Github's Kanban board.",
                    React.createElement("br", null),
                    React.createElement("br", null),
                    "We built the backend with ",
                    React.createElement(
                      "strong",
                      null,
                      "Ruby on Rails"
                    ),
                    ", ",
                    React.createElement(
                      "strong",
                      null,
                      "PostgreSQL"
                    ),
                    " for the database, ",
                    React.createElement(
                      "strong",
                      null,
                      "ReactJS"
                    ),
                    " for the frontend, and ",
                    React.createElement(
                      "strong",
                      null,
                      "Redux"
                    ),
                    " for the global state management. React was bootstrapped with ",
                    React.createElement(
                      "i",
                      null,
                      React.createElement(
                        "a",
                        { rel: "noopener noreferrer", href: "https://github.com/facebook/create-react-app",
                          target: "_blank" },
                        "create-react-app"
                      )
                    ),
                    ".",
                    React.createElement("br", null),
                    React.createElement("br", null),
                    "The front-end design was inspired by a ",
                    React.createElement(
                      "a",
                      { rel: "noopener noreferrer",
                        href: "https://www.behance.net/gallery/26425031/Vespa-Responsive-Redesign" },
                      "project"
                    ),
                    " from ",
                    React.createElement(
                      "strong",
                      null,
                      React.createElement(
                        "i",
                        null,
                        React.createElement(
                          "a",
                          { rel: "noopener noreferrer", href: "https://www.behance.net/muratk",
                            target: "_blank" },
                          "Murat Korkmaz"
                        )
                      )
                    ),
                    ", whose project is licenced under ",
                    React.createElement(
                      "i",
                      null,
                      "The Creative Commons"
                    ),
                    " license.",
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement(
                      "a",
                      { href: "https://youtu.be/A_j1AwwM6Ao", target: "_blank", rel: "noopener noreferrer" },
                      "\uD83C\uDFA5 Watch a ",
                      React.createElement(
                        "strong",
                        null,
                        "video presentation"
                      ),
                      " of this project here."
                    )
                  )
                ),
                React.createElement(
                  "div",
                  { className: "col-md-4" },
                  React.createElement(
                    "ul",
                    { className: "d-flex flex-wrap" },
                    React.createElement(
                      "li",
                      { className: "project-tag ms-0" },
                      "ruby on rails"
                    ),
                    React.createElement(
                      "li",
                      { className: "project-tag ms-0" },
                      "react"
                    ),
                    React.createElement(
                      "li",
                      { className: "project-tag" },
                      "redux"
                    ),
                    React.createElement(
                      "li",
                      { className: "project-tag" },
                      "styled components"
                    ),
                    React.createElement(
                      "li",
                      { className: "project-tag" },
                      "sass"
                    ),
                    React.createElement(
                      "li",
                      { className: "project-tag" },
                      "html"
                    ),
                    React.createElement(
                      "li",
                      { className: "project-tag" },
                      "css"
                    ),
                    React.createElement(
                      "li",
                      { className: "project-tag" },
                      "javascript"
                    ),
                    React.createElement(
                      "li",
                      { className: "project-tag" },
                      "session cookies"
                    ),
                    React.createElement(
                      "li",
                      { className: "project-tag" },
                      "github workflow"
                    ),
                    React.createElement(
                      "li",
                      { className: "project-tag" },
                      "private routes"
                    ),
                    React.createElement(
                      "li",
                      { className: "project-tag" },
                      "react router dom"
                    ),
                    React.createElement(
                      "li",
                      { className: "project-tag" },
                      "cloudinary"
                    ),
                    React.createElement(
                      "li",
                      { className: "project-tag" },
                      "redux toolkit"
                    ),
                    React.createElement(
                      "li",
                      { className: "project-tag" },
                      "kanban board"
                    ),
                    React.createElement(
                      "li",
                      { className: "project-tag" },
                      "heroku"
                    ),
                    React.createElement(
                      "li",
                      { className: "project-tag" },
                      "netlify"
                    ),
                    React.createElement(
                      "li",
                      { className: "project-tag" },
                      "npm"
                    ),
                    React.createElement(
                      "li",
                      { className: "project-tag" },
                      "react-bootstrap"
                    ),
                    React.createElement(
                      "li",
                      { className: "project-tag" },
                      "swiper"
                    ),
                    React.createElement(
                      "li",
                      { className: "project-tag" },
                      "rspec"
                    ),
                    React.createElement(
                      "li",
                      { className: "project-tag" },
                      "factory bot gem"
                    ),
                    React.createElement(
                      "li",
                      { className: "project-tag" },
                      "faker gem"
                    ),
                    React.createElement(
                      "li",
                      { className: "project-tag" },
                      "axios"
                    ),
                    React.createElement(
                      "li",
                      { className: "project-tag" },
                      "ESlint"
                    ),
                    React.createElement(
                      "li",
                      { className: "project-tag" },
                      "vs code"
                    )
                  ),
                  React.createElement("hr", { className: "mt-3 mb-4 w-100" }),
                  React.createElement(
                    "div",
                    { className: "modal-footer-buttons-wrapper w-100 d-flex mt-4" },
                    React.createElement(
                      "button",
                      { type: "button", className: "w-100 modal-button my-0 me-1 py-md-2",
                        onClick: function onClick() {
                          return window.open("https://expert-class-frontend-v2.netlify.app", "_blank");
                        },
                        value: "See live" },
                      "See live ",
                      React.createElement("i", { className: "ps-2 fas fa-external-link-alt" })
                    ),
                    React.createElement(
                      "button",
                      { type: "button", className: "w-100 modal-button my-0 ms-1 py-md-2",
                        onClick: function onClick() {
                          return window.open("https://github.com/StarSheriff2/expert-class", "_blank");
                        },
                        value: "See Source" },
                      "See Source ",
                      React.createElement("i", { className: "ps-2 fab fa-github" })
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  );
};

var Projects = function Projects() {
  return React.createElement(Project, { projectID: 1 });
};

var domContainer = document.querySelector('#project-container');
ReactDOM.render(React.createElement(Projects, null), domContainer);

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