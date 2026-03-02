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
      description: "Sustainable shopping web application",
      image: "/images/projects/eco-scan.png",
      details: `<div class="project-description">
          <h4>🌱 EcoScan – Sustainable Shopping Web App</h4>
          <p>
            EcoScan is a full-featured web application designed to encourage sustainable shopping and responsible consumption. Built with <strong>PHP, JavaScript, and MySQL</strong>, it empowers users to manage shopping lists, track purchases, and earn badges for eco-friendly actions—all within a modern, mobile-friendly interface.
          </p>
          <h4>✨ Key Features</h4>
          <ul>
            <li>User registration, login, and profile management</li>
            <li>Create and manage shopping lists with real-time updates</li>
            <li>Scan products and track purchase history</li>
            <li>Earn badges and view rankings based on sustainable actions</li>
            <li>Interactive admin dashboard for managing products, stores, and users</li>
            <li>Data visualization with charts for spending, savings, and sustainability metrics</li>
            <li>Responsive design for seamless use on desktop and mobile</li>
          </ul>
          <h4>🛠️ Technical Highlights</h4>
          <ul>
            <li>PHP backend with modular scripts and secure database access (MySQLi)</li>
            <li>JavaScript-powered dynamic UI and charting (Chart.js)</li>
            <li>Organized MVC-inspired structure with reusable components</li>
            <li>Clean, maintainable code with PHPDoc and inline documentation</li>
            <li>Custom CSS and Bootstrap for a polished, accessible user experience</li>
          </ul>
          <h4>🎯 Why It Stands Out</h4>
          <p>
            EcoScan is more than a shopping tool—it’s a gamified platform that motivates users to make greener choices. The app demonstrates your ability to design and implement a real-world, database-driven web solution with a focus on usability, performance, and sustainability. Perfect for showcasing your skills in full-stack web development, user experience, and modern coding practices.
          </p>
          <p>
            <a href="https://github.com/multimccp00/Eco-Scan" target="_blank" rel="noopener noreferrer">Source code on GitHub</a>
          </p>
        </div>`
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
      description: "Referee earnings tracker desktop application",
      image: "/images/projects/referee-accounting.png",
      details: `<div class="project-description">
          <h4>🏐 Referee Earnings Tracker – Desktop Application</h4>
          <p>
            A lightweight Python/Tkinter utility that helps referees record and review their game payments. Data is saved locally in JSON files (with optional SQLite/MySQL/Postgres support) and organised by season, making it easy to keep track of earnings over time.
          </p>
          <h4>✨ Key Features</h4>
          <ul>
            <li>Add &amp; edit game entries with date, location, payments (transport, food, game), status, etc.</li>
            <li>Season‑based organisation – switch between years, create new seasons on the fly.</li>
            <li>Summaries &amp; stats display total earnings, outstanding amounts and game count.</li>
            <li>Search, sort and filter within the table; click column headers for ascending/descending order.</li>
            <li>Convenient date picker with calendar popup (tkcalendar or custom fallback).</li>
            <li>CRUD operations with confirmation prompts; move games between seasons or delete them.</li>
            <li>Backend flexibility – JSON files by default, with automatic import/migration if a database connection is provided.</li>
            <li>Portable packaging support (PyInstaller) writes data beside the executable for easy distribution.</li>
            <li>Database connection tester and graceful fall‑backs when the remote store is unavailable.</li>
          </ul>
          <h4>🛠️ Technical Highlights</h4>
          <ul>
            <li>Built purely with Python 3 and Tkinter/ttk for a native cross‑platform GUI.</li>
            <li>DataManager module abstracts storage – handles JSON, SQLite, and remote DBs with deduplication and export.</li>
            <li>Robust error handling and user feedback (warnings, info dialogs, backend status label).</li>
            <li>Modular design: main.py drives UI; data_manager.py encapsulates persistence logic.</li>
            <li>Uses environment variables or an optional private db_connection.py for secure credentials.</li>
            <li>Clean, well‑documented code with type hints and comments; easy to extend or maintain.</li>
            <li>Supports parcelled deployment, making it suitable for offline use by individual referees.</li>
          </ul>
          <h4>🎯 Why It Stands Out</h4>
          <p>
            This project demonstrates the ability to build a polished desktop tool from scratch, blending GUI design with flexible data storage. It showcases thoughtful UX (searchable/sortable tables, seasonal views, date pickers), resilient backend logic (automatic JSON‑to‑DB migration), and a focus on real‑world workflows. It’s an excellent portfolio piece for anyone highlighting Python desktop development, data management, and user‑centred design.
          </p>
          <p>
            <a href="https://github.com/multimccp00/Accounting-Referee" target="_blank" rel="noopener noreferrer">Source code on GitHub</a>
          </p>
        </div>`
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
