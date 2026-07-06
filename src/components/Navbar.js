import "../App.css";

export default function Navbar({ active, onChange }) {
  const items = [
    { id: "about", label: "About" },
    { id: "resume", label: "Resume" },
    { id: "projects", label: "Projects" },
    { id: "portfolio", label: "Photography" },
  ];
  return (
    <nav className="navbar">
      {items.map(({ id, label }) => (
        <button
          key={id}
          className={active === id ? "nav-btn active" : "nav-btn"}
          onClick={() => onChange(id)}
        >
          {label}
        </button>
      ))}
    </nav>
  );
}

