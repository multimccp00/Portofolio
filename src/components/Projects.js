import React, { useState } from "react";
import "../App.css";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 8,
      title: "Personae",
      description: "Self-hosted local AI workspace — assistants, translation & image generation",
      image: "/images/personae/hero-translator.png",
      details: `
        <div class="project-description">
          <h4>Personae — Local AI Workspace</h4>
          <p>
            A self-hosted AI workspace that runs entirely on your own Windows machine — chat with configurable assistants, generate images, and run a specialized English → European-Portuguese translator — with no cloud and no API keys.
          </p>
          <p>
            Cloud AI tools mean per-seat costs, data leaving the building, and no control over domain-specific output. Personae runs local models on your own hardware (zero marginal cost, nothing sent to a third party) and bakes in a Kaizen-consultancy translator that enforces European-Portuguese register and Lean/Kaizen terminology — things generic models get wrong (Brazilian forms, incorrect trademark casing, hallucinated content). It began as a fork of a character-chat app and was repurposed into a business assistant workspace.
          </p>

          <h4>What I Built</h4>
          <ul>
            <li><strong>Configurable assistants (personae)</strong> — each is a system prompt + greeting + per-assistant model, sampling and standing memories; five built in (Knowledge, Document Helper, Marketing, Prompt Architect, Article Translator).</li>
            <li><strong>pt-PT translator with a critic loop</strong> — chunk → first-pass translate → a second "critic" model reviews each pass → apply fixes → a meaning-fidelity gate guarding against meaning inversions, dropped sentences and non-Portuguese leakage.</li>
            <li><strong>Deterministic termbase enforcement</strong> — code-based (not model-dependent) Brazilian → European corrections, a Lean/Kaizen glossary and trademark casing, and euro-currency formatting; users highlight output to save corrections the translator learns from via embedding retrieval.</li>
            <li><strong>Per-assistant memory</strong> — an extract → judge → categorize → reconcile pipeline over recent messages, where new facts can supersede old ones, capped at 40 per assistant.</li>
            <li><strong>Image generation + vision tagging</strong> — plain-language requests turned into generation tags for a local ComfyUI backend; a vision model describes attached images.</li>
            <li><strong>File-based state store with concurrency safety</strong> — JSON on disk as the single source of truth, SHA-256 ETags for optimistic concurrency (409 on conflict), atomic writes and rotating backups.</li>
          </ul>

          <h4>Notable</h4>
          <ul>
            <li><strong>Backend security hardening</strong> — shared-token auth with constant-time compare, a CORS allowlist (never <code>*</code>), per-endpoint body-size caps checked before reading, an upload extension allowlist, path-traversal sanitization, and optimistic-concurrency versioning with backups + shape validation. Replaced a static file handler that had been exposing the whole directory (including chat data) with a strict allowlist.</li>
            <li><strong>Tests + CI</strong> — a stdlib-only test suite covering state versioning, path-traversal, the multipart parser, a full HTTP security matrix (auth/concurrency/size/CORS), XSS escaping and the translator's deterministic termbase and Portuguese/CJK guard; GitHub Actions byte-compiles both servers and runs the suite on every push.</li>
            <li><strong>Single-file installer</strong> — a build script embeds the whole app into one ~3.7 MB .bat the recipient double-clicks; it self-elevates and installs Python/Ollama/ComfyUI plus exactly the models the app uses, detecting GPU for CUDA-vs-CPU PyTorch.</li>
          </ul>

          <h4>Tech Stack</h4>
          <p>
            <strong>Backend:</strong> Python 3.11, standard library only (no Flask/FastAPI) — two http.server-based servers (state/model/translation API + static host).
            <strong>Frontend:</strong> a single ~8,500-line index.html, plain HTML/CSS/JS, no framework or build step; vendored browser libs (pdf.js, mammoth.js).
            <strong>State:</strong> file-based JSON on disk (no database); IndexedDB browser-side.
            <strong>AI:</strong> local models via Ollama (qwen2.5, gemma3, llava-llama3, nomic-embed-text) over plain HTTP — no cloud API, no vendor SDK; Hugging Face NLLB via transformers for translation; ComfyUI for images; optional Kohya SS for LoRA training.
            <strong>Runtime:</strong> local Windows app with a PowerShell/.bat launcher and winget installer; optional remote access over Tailscale.
          </p>
          <p>
            Solo developer — sole author. I built the assistant/persona system, the pt-PT translator pipeline and its critic/fidelity gate, the deterministic termbase enforcement, the memory pipeline, the file-based state store, the backend security hardening, the tests and the Windows installer. Pilot stage — functional, actively developed, and in real use at the workplace where it was deployed (per-machine local install, not a hosted service). Source on <a href="https://github.com/multimccp00/personae-workspace" target="_blank" rel="noopener noreferrer">GitHub</a>.
          </p>

          <div class="project-images">
            <img src="%PUBLIC_URL%/images/personae/hero-translator.png" alt="Personae pt-PT Article Translator mid-conversation" />
            <img src="%PUBLIC_URL%/images/personae/translator-profile.png" alt="Personae translator assistant profile panel" />
            <img src="%PUBLIC_URL%/images/personae/marketing-chat.png" alt="Personae Marketing Assistant writing ad headlines" />
            <img src="%PUBLIC_URL%/images/personae/knowledge-chat.png" alt="Personae Knowledge Assistant chat interface" />
            <img src="%PUBLIC_URL%/images/personae/library-skills.png" alt="Personae Library/Skills view with reusable presets" />
          </div>
        </div>
      `,
    },
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
      description: "2D pixel-art RPG designed for senior citizens",
      image: "/images/AureumPlaza/PPLg8D.png",
      details: `
        <div class="project-description">
          <h4>Aureum Plaza — A 2D Pixel-Art RPG for Active Aging</h4>
          <p>
            A single-player 2D pixel-art RPG designed for senior citizens, following João — a 68-year-old retired journalist in a fictional Lisbon-inspired city — as he explores the town, talks to NPCs, and plays classic mini-games to complete a photo album left by his late wife.
          </p>
          <p>
            Built as the final project for the <em>Projeto Multimédia</em> course in the Multimédia e Tecnologias da Comunicação degree at the University of Aveiro (2024/2025), under the "Transformar Narrativas sobre o Envelhecimento" initiative. The goal was to promote active aging: many seniors are cut off from digital games by usability barriers, so we designed an accessible, cognitively stimulating experience grounded in academic literature.
          </p>

          <h4>What We Built</h4>
          <ul>
            <li><strong>Explorable 2D top-down town</strong> — a Lisbon-inspired open world (central plaza, café, apartment, market, warehouse, riverside docks) with transitions between exterior and interior areas.</li>
            <li><strong>Story-driven quest & progression</strong> — completing tasks and mini-games unlocks photographs that progressively fill João's album and advance the narrative.</li>
            <li><strong>Four classic mini-games</strong> — Chess, Solitaire, Tetris ("Caixa em Queda") and Frogger ("Atravessa"), each chosen for a specific cognitive benefit and built as its own module.</li>
            <li><strong>Photo-album collectible system</strong> — a multi-page in-game album displaying photos unlocked through play.</li>
            <li><strong>Save/load system</strong> — progress persisted to JSON in Unity's local storage.</li>
            <li><strong>Accessibility-focused UI</strong> — large, high-contrast buttons with intuitive icons, plus mini-game tutorials added in direct response to user-testing feedback.</li>
          </ul>

          <h4>Notable</h4>
          <ul>
            <li><strong>Real user testing with the target audience</strong> — three sessions at the <em>Laboratório do Envelhecimento</em> in Ílhavo (9, 8 and 7 senior participants). We acted on feedback: added vegetation, resized an oversized building, slowed the cars in Frogger and pieces in Tetris, and added tutorials after seniors struggled with Chess/Solitaire rules.</li>
            <li><strong>Evidence-based accessibility design</strong> — every choice (top-down view, pixel art, no timers, Portuguese setting for familiarity, mini-game selection) is justified against cited academic literature on aging and game design.</li>
            <li><strong>An underexplored niche</strong> — a narrative game for seniors set in a faithfully Portuguese pixel-art city.</li>
          </ul>

          <h4>Tech Stack</h4>
          <p>Unity 2022.3.48f1 (LTS) · C# · Universal Render Pipeline (URP 2D) · Unity Input System · TextMesh Pro. Save data via JSON to local storage (no external database). Pixel art hand-made in Aseprite; music/SFX in BeepBox.</p>
          <p>
            Team of 3 (Miguel Campos, Miguel Tavares, Bernardo Silva). I worked as a <strong>programmer</strong>, learning Unity 2D during the project. AI (Copilot / ChatGPT) was used to help understand certain implementations and gather bibliographic references — not for art or design; all art was hand-made. It's a polished, publicly playable build rather than a fully finished product (some chess rules such as en passant, castling and checkmate detection remain unimplemented).
          </p>
          <p>
            Playable on <a href="https://macrt.itch.io/aureum-plaza" target="_blank" rel="noopener noreferrer">itch.io</a>; source on <a href="https://github.com/multimccp00/Aureum_Plaza" target="_blank" rel="noopener noreferrer">GitHub</a>.
          </p>

          <div class="project-images">
            <img src="%PUBLIC_URL%/images/AureumPlaza/cafe.png" alt="Café interior with NPCs in Aureum Plaza" />
            <img src="%PUBLIC_URL%/images/AureumPlaza/apartment.png" alt="João's apartment interior in Aureum Plaza" />
            <img src="%PUBLIC_URL%/images/AureumPlaza/solitaire.png" alt="Solitaire mini-game in Aureum Plaza" />
          </div>
        </div>
      `,
    },
    {
      id: 5,
      title: "DupFree",
      description: "Duplicate file finder utility built with .NET/WPF",
      // use the custom icon saved under public/images/dupfree
      image: "/images/dupfree/2160x2160.png",
      details: `<div class="project-description">
            <h4>DupFree – Duplicate File Finder (WPF Desktop Application)</h4>
            <p>
              DupFree is a polished Windows desktop utility built with <strong>.NET/WPF</strong> that helps users regain control of their storage by locating and managing duplicate files on their system. It blends a modern MVVM architecture with a responsive UI to make a potentially tedious task fast, safe and even enjoyable.
            </p>
            <h4>Key Features</h4>
            <ul>
              <li>Recursive folder scanning with configurable filters (by size, date, extension).</li>
              <li>Content-based comparison using checksums to detect true duplicates.</li>
              <li>Interactive results view with preview thumbnails, file paths, and sizes.</li>
              <li>Batch operations include delete, move, or open duplicates directly from the interface.</li>
              <li>Extensible architecture: modular services and view‑models make adding new scan strategies or storage back‑ends easy.</li>
              <li>Robust error handling and responsive UI using async/await and progress reporting.</li>
            </ul>
            <h4>Technical Highlights</h4>
            <ul>
              <li>C# &amp; WPF MVVM pattern – separation of concerns with ViewModel classes like <code>FileItemViewModel</code>.</li>
              <li>Utilizes .NET 7 (or later) and embraces modern async programming for I/O-bound work.</li>
              <li>Clean project structure with clearly organized Views, Models, and Services.</li>
              <li>Includes thorough documentation in markdown (ARCHITECTURE.md, DEVELOPMENT.md) demonstrating attention to maintainability.</li>
              <li>Tested components and thoughtful exception logging for reliability.</li>
            </ul>
            <h4>Why It Stands Out</h4>
            <p>
              DupFree isn’t just a utility; it’s a demonstration of your ability to design a desktop application from the ground up—with user experience, performance, and extensibility all in mind. It’s perfect for a portfolio to showcase real‑world problem solving, architectural discipline, and polished UI development.
            </p>
            <p>
              The app is published on the <a href="https://apps.microsoft.com/detail/9PCT8RNQCB23?hl=en-us&gl=PT&ocid=pdpshare" target="_blank" rel="noopener noreferrer">Microsoft Store</a> and the source code (with portable release builds) is available on <a href="https://github.com/multimccp00/DupFree" target="_blank" rel="noopener noreferrer">GitHub</a>.
            </p>
          </div>`
    },
    {
      id: 7,
      title: "MangaShelf",
      description: "Self-hosted manga & comic library manager and reader",
      image: "/images/mangashelf/home.png",
      details: `
        <div class="project-description">
          <h4>MangaShelf — Self-Hosted Manga & Comic Library</h4>
          <p>
            MangaShelf scans folders of manga and comics into a searchable, taggable library you can browse and read from any device on your home network — or, over <strong>Tailscale</strong>, from anywhere. I had thousands of comic folders on disk with no good way to browse them, track progress, or read on my phone, and existing tools didn't handle a library at this scale without a cloud service, so I built my own.
          </p>

          <h4>What I Built</h4>
          <ul>
            <li><strong>FastAPI web app on a SQLite core</strong> — a single <strong>FastAPI</strong> backend drives a SQLite database and disk scanner, keeping metadata and reading progress in sync across every device.</li>
            <li><strong>Faceted library</strong> — search and filter across genres, tags, authors, series, language and status; ratings, favorites, per-series metadata and custom cover uploads.</li>
            <li><strong>In-browser reader</strong> — vertical and right-to-left (manga) reading modes, per-page progress tracking, chapter navigation and split-chapter editing.</li>
            <li><strong>Disk scanner</strong> — treats folders of images as chapters, auto-resolves covers, supports PDFs, and runs background rescans; libraries detect when their drive is offline.</li>
            <li><strong>Read from anywhere on the LAN</strong> — React is vendored locally so the reader works on a phone with no internet; optional password gate with per-device "remember me" tokens.</li>
            <li><strong>Multi-library support</strong> — separate libraries with independent scan paths and a quick switcher.</li>
          </ul>

          <h4>Why It Stands Out</h4>
          <ul>
            <li><strong>Clean architecture</strong> — one SQLite DB and a dedicated scanner module cleanly separated from the API and frontend layers.</li>
            <li><strong>Real scale</strong> — manages a live library of <strong>3,400+ series</strong> with faceted search and background rescans that stay responsive.</li>
          </ul>

          <h4>Tech Stack</h4>
          <p>Python 3, FastAPI, Uvicorn, Pydantic, SQLite, React (JSX compiled in-browser via Babel), Pillow, PDF support. I designed the entire UI myself and built the whole thing — backend, reader and scanner — with coding agents assisting during implementation. Currently running for my own daily use (self-hosted, not publicly deployed).</p>

          <div class="project-images">
            <img src="%PUBLIC_URL%/images/mangashelf/home.png" alt="MangaShelf library home with Continue Reading shelf" />
            <img src="%PUBLIC_URL%/images/mangashelf/detail.png" alt="MangaShelf series detail and reading progress" />
            <img src="%PUBLIC_URL%/images/mangashelf/reader.png" alt="MangaShelf in-browser reader" />
          </div>
        </div>
      `,
    },
    {
      id: 6,
      title: "Referee Tracker",
      description: "Cross-platform earnings tracker & exam trainer for handball referees",
      image: "/images/referee-tracker/banner.svg",
      details: `
        <div class="project-description">
          <h4>Referee Tracker — Earnings Tracking & Exam Prep for Handball Referees</h4>
          <p>
            Handball referees juggle two separate needs — tracking their games, payments and travel costs, and studying a large official rulebook to pass certification exams. No single tool did both, and nothing let a referee manage that data on both a computer and a phone from one shared source of truth. Referee Tracker combines earnings tracking and exam prep in one app that stays in sync between a desktop app and a native Android app. It is being developed in collaboration with the <strong>Associação de Andebol de Aveiro (AAA)</strong>.
          </p>

          <h4>What I Built</h4>
          <ul>
            <li><strong>Game &amp; earnings tracking</strong> — add/edit/delete games with transportation, food and match-fee costs, paid/unpaid status, seasonal summaries and Excel import.</li>
            <li><strong>Exam prep engine</strong> — a 400-question quiz bank with timed test variants (30/15/5 questions), a post-test review that marks the correct answer green and your wrong pick red, and a daily "Question of the Day".</li>
            <li><strong>In-app rulebook</strong> — browse rule sections and open the official IHF rulebook PDF directly on the device.</li>
            <li><strong>Native Android app</strong> — a handball-themed, Material-style UI with hamburger navigation and full feature parity, packaged as an installable APK.</li>
            <li><strong>Shared live database</strong> — a MySQL backend so edits on the phone and the desktop sync to the same data, with graceful SQLite/JSON fallback when offline.</li>
            <li><strong>Desktop app</strong> — a full Tkinter build for managing everything on a computer.</li>
          </ul>

          <h4>Notable Problems Solved</h4>
          <ul>
            <li>Diagnosed a mobile crash down to the <em>emulator's</em> graphics layer (a BlueStacks OpenGL/EGL incompatibility) rather than the app itself, verified by running it cleanly on a standards-compliant emulator with GPU passthrough.</li>
            <li>Migrated the mobile UI from KivyMD to plain Kivy to fix an Android-only startup crash, then hand-built a themed Material-style interface (custom cards, drawer, buttons and a centered date-picker).</li>
            <li>Solved Android's FileProvider/manifest requirements to open a bundled PDF in the device's native viewer, patching the python-for-android manifest template so the <code>&lt;provider&gt;</code> landed inside <code>&lt;application&gt;</code>.</li>
            <li>Set up the full Android build pipeline from scratch on Windows via WSL2 (SDK/NDK, buildozer, signing) and produced a working installable APK.</li>
          </ul>

          <h4>Tech Stack</h4>
          <p>Python · Tkinter (desktop UI) · Kivy (Android UI) · MySQL via PyMySQL (with SQLite/JSON fallback) · PyMuPDF &amp; Pillow (PDF/image handling) · openpyxl (Excel import) · buildozer + python-for-android on WSL2/Ubuntu (Android build pipeline) · pyjnius + Android FileProvider (native PDF opening).</p>
          <p>
            Solo developer, built with AI pair-programming assistance — I owned the full scope (product design, desktop and mobile UIs, database architecture and the Android build/release pipeline), using AI to accelerate implementation and debugging. Working prototype in personal use; not yet published to an app store. Source on <a href="https://github.com/multimccp00/Accounting-Referee" target="_blank" rel="noopener noreferrer">GitHub</a>.
          </p>

          <div class="project-images">
            <img src="%PUBLIC_URL%/images/referee-tracker/01_dashboard.png" alt="Referee Tracker dashboard with earnings KPI cards" />
            <img src="%PUBLIC_URL%/images/referee-tracker/03_games.png" alt="Games list with color-coded paid/unpaid cards" />
            <img src="%PUBLIC_URL%/images/referee-tracker/07_test_question.png" alt="Live timed test question with countdown" />
            <img src="%PUBLIC_URL%/images/referee-tracker/08_review.png" alt="Post-test review with correct answer in green and wrong pick in red" />
            <img src="%PUBLIC_URL%/images/referee-tracker/10_rulebook_pdf.png" alt="Official IHF rulebook PDF rendered on the device" />
          </div>
        </div>
      `,
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
          <div
            className="details-content"
            dangerouslySetInnerHTML={{
              __html: selectedProject.details.replaceAll(
                "%PUBLIC_URL%",
                process.env.PUBLIC_URL
              ),
            }}
          />
        </div>
      )}
    </section>
  );
};

export default Projects;
