import React from "react";
import "./App.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function Avatar() {
  return (
    <>
      <img src="/msboffl.png" alt="Mareedu Saibabu" />
    </>
  );
}

function Intro() {
  return (
    <>
      <h1>Mareedu Saibabu</h1>
      <p>
        Full-stack web developer at Publicis Sapient. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </>
  );
}

function SkillSet() {
  return (
    <div className="skill-list">
      {/* <Skill skill="React" emoji="😍" bgColor="red" />
      <Skill skill="HTML5 + CSS3" emoji="🚀" bgColor="orange" />
      <Skill skill="JavaScript" emoji="✈️" bgColor="green" />
      <Skill skill="Node.js" emoji="💼" bgColor="blue" />
      <Skill skill="Next.js" emoji="🤩" bgColor="violet" />
      <Skill skill="Tailwind CSS" emoji="🤪" bgColor="#637081" /> 
      */}
      {skills.map((skill) => (
        <Skill skill={skill.skill} bgColor={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, bgColor, level }) {
  return (
    <>
      <button
        className="skill"
        style={{
          background: `${bgColor}`,
          color: "white",
          border: "none",
          padding: ".5rem",
        }}
      >
        <span>{skill}</span>
        <span>
          {level === "beginner" && "🚀"}
          {level === "intermediate" && "🤩"}
          {level === "advanced" && "🤪"}
        </span>
      </button>
    </>
  );
}

const App = () => {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillSet />
      </div>
    </div>
  );
};

export default App;
