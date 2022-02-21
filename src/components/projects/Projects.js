import React from "react";
import "../../App.css";
import Button from "../button/Button";
import { Container } from "./Projects.styled.js";

function Projects() {
  return (
    <Container id="projects">
      <p className="text-heading heading">Projects</p>

      <div className="grid">
        <div className="col">
          <div className="proj">
            <img
              src={require("../../assets/images/topkaminecraft.png")}
              alt="topkaminecraft.pl"
            />
            <p className="text-xl">Topkaminecraft</p>
            <hr />
            <p>
              Innovative and probably the best polish list of Minecraft server
              which was built in Angular 11 with bootstrap and Java backend.
            </p>
            <p style={{ width: "100%" }}>
              <a
                href="https://topkaminecraft.pl/"
                target={"_blank"}
                rel="noreferrer"
              >
                <Button
                  children={"Look it up"}
                  fontSize={"font-sm"}
                  buttonSize={"btn-sm"}
                />
              </a>
            </p>
          </div>
        </div>

        <div className="col">
          <div className="proj">
            <img
              src={require("../../assets/images/foodapp.png")}
              alt="food app"
            />
            <p className="text-xl">Fast food app</p>
            <hr />
            <p>
              Fully designed and made using React Native. It was created
              especially for the portfolio.
            </p>
            <p style={{ width: "100%" }}>
              <a
                href="https://github.com/pelakk/fastfoodApp-React-Native"
                target={"_blank"}
                rel="noreferrer"
              >
                <Button
                  children={"Look it up"}
                  fontSize={"font-sm"}
                  buttonSize={"btn-sm"}
                />
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="grid">
        <div className="col">
          <div className="proj">
            <img
              src={require("../../assets/images/todolist.png")}
              alt="todolist"
            />
            <p className="text-xl">Simple todo list for web </p>
            <hr />
            <p>
              Simple todo list with removable todos saving in the local storage.
            </p>
            <p style={{ width: "100%" }}>
              <a
                href="https://github.com/pelakk/todo-web"
                target={"_blank"}
                rel="noreferrer"
              >
                <Button
                  children={"Look it up"}
                  fontSize={"font-sm"}
                  buttonSize={"btn-sm"}
                />
              </a>
            </p>
          </div>
        </div>

        <div className="col">
          <div className="proj">
            <img
              src={require("../../assets/images/todoapp.png")}
              alt="todolist"
            />
            <p className="text-xl">Simple todo app</p>
            <hr />
            <p>
              Simple todo list with removable todos saving in the local storage.
            </p>
            <p style={{ width: "100%" }}>
              <a
                href="https://github.com/pelakk/simple-todo-mobile-app"
                target={"_blank"}
                rel="noreferrer"
              >
                <Button
                  children={"Look it up"}
                  fontSize={"font-sm"}
                  buttonSize={"btn-sm"}
                />
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="grid">
        <div className="col">
          <div className="proj">
            <img
              src={require("../../assets/images/weatherapp.png")}
              alt="weather app"
            />
            <p className="text-xl">Simple live weather app</p>
            <hr />
            <p>Made in React Native using free public API.</p>
            <p style={{ width: "100%" }}>
              <a
                href="https://github.com/pelakk/weather-app-react-native"
                target={"_blank"}
                rel="noreferrer"
              >
                <Button
                  children={"Look it up"}
                  fontSize={"font-sm"}
                  buttonSize={"btn-sm"}
                />
              </a>
            </p>
          </div>
        </div>

        <div className="col">
          <div className="proj">
            <img
              src={require("../../assets/images/portfolio.png")}
              alt="portfolio website"
            />
            <p className="text-xl">This portfolio website</p>
            <hr />
            <p>Made using React and plain CSS. Full code on my Github.</p>
            <p style={{ width: "100%" }}>
              <a
                href="https://github.com/pelakk/portfolio-files"
                target={"_blank"}
                rel="noreferrer"
              >
                <Button
                  children={"Look it up"}
                  fontSize={"font-sm"}
                  buttonSize={"btn-sm"}
                />
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="grid">
        <div className="col">
          <div className="proj">
            <img src={require("../../assets/images/blog.png")} alt="blog" />
            <p className="text-xl">Some simple blog page</p>
            <hr />
            <p>
              Frontend made with react, redux and tailwind, backend made using
              node.js, connected with firebase auth.
            </p>
            <p style={{ width: "100%" }}>
              <a
                href="http://blog.dawid-matuszynski.pl/"
                target={"_blank"}
                rel="noreferrer"
              >
                <Button
                  children={"Look it up"}
                  fontSize={"font-sm"}
                  buttonSize={"btn-sm"}
                />
              </a>
            </p>
          </div>
        </div>

        <div className="col">
          <div className="proj">
            <img
              src={require("../../assets/images/netflix.png")}
              alt="netflix"
            />
            <p className="text-xl">Netflix clone</p>
            <hr />
            <p>
              Made using React, redux and plain CSS, connected with firebase
              auth.
            </p>
            <p style={{ width: "100%" }}>
              <a
                href="https://github.com/pelakk/netflix-clone"
                target={"_blank"}
                rel="noreferrer"
              >
                <Button
                  children={"Look it up"}
                  fontSize={"font-sm"}
                  buttonSize={"btn-sm"}
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Projects;
