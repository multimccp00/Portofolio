import React, { useState, useEffect } from "react";

const skills = [
  { skill: "React", level: 75 },
  { skill: "Node.js", level: 55 },
  { skill: "JavaScript", level: 95 },
  { skill: "HTML & CSS", level: 90 },
  { skill: "BootStrap", level: 80 },
  { skill: "C#", level: 80 },
  { skill: "PHP", level: 85 },
  { skill: "Java", level: 50 },
  { skill: "Python", level: 65 },
  { skill: "Flask", level: 55 },
  { skill: "Linux", level: 15 },
];

const tools = [
  { tool: "VS Code", level: 80, logo: "/images/logos/Visual_Studio_Code.webp" },
  { tool: "PyCharm", level: 65, logo: "/images/logos/PyCharm.png" },
  { tool: "Figma", level: 70, logo: "/images/logos/Figma.webp" },
  { tool: "MySQL Workbench", level: 50, logo: "/images/logos/mysqlworkbench.webp" },
  { tool: "Github", level: 40, logo: "/images/logos/github.png" },
  { tool: "Unity", level: 80, logo: "/images/logos/Unity.webp" },
  { tool: "Blender", level: 67, logo: "/images/logos/blender.webp" },
  { tool: "PHPMyAdmin", level: 65, logo: "/images/logos/PhpMyAdmin.png" },
  { tool: "Lightroom", level: 95, logo: "/images/logos/Lightroom.png" },
  { tool: "Photoshop", level: 75, logo: "/images/logos/Photoshop.png" },  
  { tool: "Premiere", level: 45, logo: "/images/logos/Premiere.png" },
  { tool: "Teams", level: 90, logo: "/images/logos/Teams.png" },
  { tool: "Docker", level: 65, logo: "/images/logos/docker.svg" },
  { tool: "WordPress", level: 80, logo: "/images/logos/wordpress.svg" },
  { tool: "HubSpot", level: 70, logo: "/images/logos/hubspot.svg" },
];

export default function Resume() {
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    // trigger animation after component mounts
    const timer = setTimeout(() => setAnimateSkills(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="resume">
      <h2>Resume</h2>
      <section>
        <h3>Education</h3>
        <ul>
          <li>
            <strong>Multimedia and Communication Technologies </strong> <em>University of Aveiro</em> - Completed
          </li>
          <li>
            <strong>Electronic Engineering (3 years) </strong> <em>University of Aveiro</em> - Completed 3 years of study
          </li>
          <li>
            <strong>Complete C# Unity Game Developer 2D</strong>  <em>Udemy</em> - Completed the course to learn Unity game development, focusing on C# and 2D game creation.
          </li>
          <li>
            <strong>100 Days of Code: The Complete Python Pro Bootcamp</strong>  <em>Udemy</em> - Completed a course focused on automation, web development (Flask), APIs, data handling, and object-oriented programming.
          </li>
        </ul>
      </section>

      <section>
        <h3>Achievements</h3>
        <ul>          
          <li><strong>Aveiro Jovem Criador</strong> - First Prize and Honors in Photography for 3 consecutive years (2018, 2019, 2020).</li>
          <li><strong>Magazine Txi</strong> - Article about me.</li>
          <li><strong>Photography Exhibitions</strong> - <em>Café Concerto</em> and <em>Centro de Interpretativo da Cogula</em>.</li>
          <li><strong>Karate</strong> - Red Belt.</li>
          <li><strong>MID - Made In Deca</strong> - First Prize in Sound (2024).</li>
        </ul>
      </section>

      <section>
        <h3>Experience</h3>
        <ul>
          <li><strong>Junior Web Developer at Kaizen Institute</strong> - <em>2025</em> - Hired to design and build the company's new corporate website using WordPress, PHP and Docker, delivering it to production. Also oversaw the company's AI initiatives (primarily Claude-based) and single-handedly built an internal AI web app featuring assistants for translation, document handling, company-knowledge search, and marketing support.</li>
          <li> <strong>Part-Time Worker at Worten </strong> - <em> Aveiro, 2022 </em> - Worked part-time at Worten, gaining valuable customer service experience, managing inventory, and assisting in the sales process.</li>
          <li><strong>Handball Referee</strong> - Certified handball referee with experience at various levels.</li>
          <li><strong>Karate</strong> - Volunteered in a non-licensed capacity, acting as a senior student (senpai) to assist in classes teaching other students</li>          
        </ul>
      </section>

      <section>
        <h3>Skills</h3>
        <div className="skills">
          {skills.map(({ skill, level }) => (
            <div className="skill-bar fade-in" key={skill}>
              <label>{skill}</label>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: animateSkills ? `${level}%` : "0%" }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section>
        <h3>Tools</h3>
        <div className="card-grid">
          {tools.map(({ tool, level, logo }) => (
            <div className="card fade-in" key={tool}>
              <div className="card-logo">
                <img src={`${process.env.PUBLIC_URL}${logo}`} alt={tool} />
              </div>
              <h3>{tool}</h3>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}