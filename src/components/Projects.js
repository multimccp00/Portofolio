import React, { useState } from "react";
import "../App.css";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Carjockey",
      description: "Website to help those looking for a new car",
      image: "/images/carjockey/preview.png",
      details: `
        <div class="project-description">
        <h4>Carjockey - A Comprehensive Car Listing Platform</h4>
        <p>
          <strong>Carjockey</strong> is a dynamic web application that I built from scratch, leveraging both front-end and back-end technologies. The core functionality of the platform revolves around a robust backend server built using <strong>Node.js</strong> and <strong>Express</strong>. This server handles multiple API requests, serving as the backbone for user interactions with the platform.
        </p>
        <h4>Key Features:</h4>
            <ul>
              <li><strong>car prices</strong> - Users search cars, to see the median price of that model.</li>
              <li><strong>images</strong> - View photos about the model you search for in a grid view.</li>
              <li><strong>video</strong> - View review videos about the model grid view.</li>
              <li><strong>Backend Integration</strong> - Built with **Node.js** and **MySQL** for full-stack management of car data.</li>
            </ul>
      </div>
      `
    },
    {
      id: 2,
      title: "Diecast Car Collection Project",
      description: "Manage and display a collection of diecast cars",
      image: "/images/dieCast/Screenshot 2025-05-23 162627.png",
      details:  `
        <div class="project-description">
        <h4>Diecast Car Collection Project</h4>
        <p>
          This project lets you manage and display a collection of diecast cars. Users can add, view, update, and delete cars in their collection. The application is built with a **React** frontend and an **Express** backend, using a **MySQL** database to store car data.
        </p>
        <h4>Key Features:</h4>
            <ul>
              <li><strong>Add Cars</strong> - Users can add new diecast cars with details like model, brand, color, year, and more.</li>
              <li><strong>View and Manage</strong> - View cars in a list or grid view. Edit and delete entries easily.</li>
              <li><strong>Filter & Sort</strong> - Cars can be filtered by attributes such as brand, model, and condition.</li>
              <li><strong>Backend Integration</strong> - Built with **Node.js** and **MySQL** for full-stack management of car data.</li>
            </ul>
      </div>
      `,
    },
    {
      id: 3,
      title: "Aureum Plaza",
      description: "PC Game",
      image: "/images/AureumPlaza/PPLg8D.png",
      details: `
        <div class="project-description">
          <h4>Aureum Plaza (DEMO)</h4>
          <p>
            Top-down pixel-art adventure set in a city where Mr. João sets out to complete
            a photo album left by his late wife. Explore, talk to people, and play a
            collection of minigames while the project continues development.
          </p>

          <h4>Key Features:</h4>
          <ul>
            <li><strong>Story Hook</strong> — Help Mr. João finish a cherished photo album.</li>
            <li><strong>Explore & Interact</strong> — Roam the city, chat with NPCs, and discover short minigames. </li>
            <li><strong>Pixel-Art, Top-Down</strong> — Cozy visual style with a classic overhead perspective. </li>
            <li><strong>Platform</strong> — Windows (downloadable demo, ~57 MB). </li>
            <li><strong>Status & Language</strong> — Prototype; Portuguese (Portugal). </li>
          </ul>
        </div>
      `,
    },
    {
      id: 4,
      title: "Eco Scan",
      description: "(Details coming soon)",
      image: "/images/projects/eco-scan.png",
      details: `<div class="project-description"><h4>Eco Scan</h4><p>More information will be added shortly.</p></div>`
    },
    {
      id: 5,
      title: "DupFree",
      description: "Duplicate file finder utility built with .NET/WPF",
      // use the custom icon saved under public/images/dupfree
      image: "/images/dupfree/2160x2160.png",
      details: `<div class="project-description">
            <h4>📦 DupFree – Duplicate File Finder (WPF Desktop Application)</h4>
            <p>
              DupFree is a polished Windows desktop utility built with <strong>.NET/WPF</strong> that helps users regain control of their storage by locating and managing duplicate files on their system. It blends a modern MVVM architecture with a responsive UI to make a potentially tedious task fast, safe and even enjoyable.
            </p>
            <h4>🔍 Key Features</h4>
            <ul>
              <li>Recursive folder scanning with configurable filters (by size, date, extension).</li>
              <li>Content-based comparison using checksums to detect true duplicates.</li>
              <li>Interactive results view with preview thumbnails, file paths, and sizes.</li>
              <li>Batch operations include delete, move, or open duplicates directly from the interface.</li>
              <li>Extensible architecture: modular services and view‑models make adding new scan strategies or storage back‑ends easy.</li>
              <li>Robust error handling and responsive UI using async/await and progress reporting.</li>
            </ul>
            <h4>🛠️ Technical Highlights</h4>
            <ul>
              <li>C# &amp; WPF MVVM pattern – separation of concerns with ViewModel classes like <code>FileItemViewModel</code>.</li>
              <li>Utilizes .NET 7 (or later) and embraces modern async programming for I/O-bound work.</li>
              <li>Clean project structure with clearly organized Views, Models, and Services.</li>
              <li>Includes thorough documentation in markdown (ARCHITECTURE.md, DEVELOPMENT.md) demonstrating attention to maintainability.</li>
              <li>Tested components and thoughtful exception logging for reliability.</li>
            </ul>
            <h4>🎯 Why It Stands Out</h4>
            <p>
              DupFree isn’t just a utility; it’s a demonstration of your ability to design a desktop application from the ground up—with user experience, performance, and extensibility all in mind. It’s perfect for a portfolio to showcase real‑world problem solving, architectural discipline, and polished UI development.
            </p>
            <p>
              The app is published on the <a href="https://apps.microsoft.com/detail/9PCT8RNQCB23?hl=en-us&gl=PT&ocid=pdpshare" target="_blank" rel="noopener noreferrer">Microsoft Store</a> and the source code (with portable release builds) is available on <a href="https://github.com/multimccp00/DupFree" target="_blank" rel="noopener noreferrer">GitHub</a>.
            </p>
          </div>`
    },
    {
      id: 6,
      title: "Referee Accounting",
      description: "(Details coming soon)",
      image: "/images/projects/referee-accounting.png",
      details: `<div class="project-description"><h4>Referee Accounting</h4><p>More information will be added shortly.</p></div>`
    },
  ];

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section className="projects">
      <h2>My Projects</h2>

      {/* Conditionally Render Project Cards */}
      {!selectedProject && (
        <div className="project-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card fade-in"
              onClick={() => handleCardClick(project)}
            >
              <div className="image-container">
                <img src={`${process.env.PUBLIC_URL}${project.image}`} alt={project.title} />
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Detailed View */}
      {selectedProject && (
        <div className="project-details">
          <div className="details-header">
            <h3>{selectedProject.title}</h3>
            <button className="close-btn" onClick={handleCloseDetails}>
              Close
            </button>
          </div>
          <div className="details-content" dangerouslySetInnerHTML={{ __html: selectedProject.details }} />
        </div>
      )}
    </section>
  );
};

export default Projects;
