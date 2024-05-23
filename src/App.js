import React from "react";
import { SocialIcon } from "react-social-icons";
import data from "./data.json";
import "./App.css";

function AboutSection() {
  return (
    <div id="about" className="fullpage">
      <h3>About</h3>
      <p>{data.sections[0].items[0].content}</p>
    </div>
  );
}

function SkillsSection() {
  return (
    <div id="skills" className="fullpage">
      <h3>Skills</h3>
      <div>
        {data.sections[1].items.map((item, index) => (
          <div className="column">
            <div key={index} className="card">
              <img src={item.content.image} alt={item.content.title} />
              <h4>{item.content.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="navigation">
      <a href="#" className="nav-link">
        <span>Danial</span>
      </a>
      <div>
        <a href="#about" className="nav-link">
          <span>About</span>
        </a>
        <a href="#skills" className="nav-link">
          <span>Skills</span>
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="fullpage">
        <h1 className="title">{data.title}</h1>
        <div>
          <h2 className="subtitle">{data.subtitle}</h2>
        </div>
        <div>
          {Object.keys(data.links).map((key) => {
            return <SocialIcon url={data.links[key]} />;
          })}
        </div>
      </div>
      <AboutSection />
      <SkillsSection />
    </div>
  );
}

export default App;
