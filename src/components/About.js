import React from "react";

const whatIDo = [
  {
    title: "Web Design",
    desc: "The most modern and high-quality design made at a high level.",
    emoji: "🎨",
  },
  {
    title: "Web Development",
    desc: "High-quality development of sites at a high level.",
    emoji: "💻",
  },
  {
    title: "Mobile Apps",
    desc: "Development of mobile applications for iOS and Android.",
    emoji: "📱",
  },
  {
    title: "Photography",
    desc: "I make high-quality photos of any category at a high level.",
    emoji: "📷",
  },
  {
    title: "Handball Refereeing",
    desc: "Certified handball referee with experience officiating matches at various levels.",
    emoji: "🏐",
  },
];

const testimonials = [
  {
    name: "Boris Teixeira",
    position: "ASIC Digital Design, Sr Engineer at Synopsys .inc",
    testimonial: "Miguel is an extremely dedicated and hardworking person. Committed to everything he does, he is the kind of professional you can fully trust. Working with him means precision, responsibility, and team spirit.",
  },
  {
    name: "Filipe Miranda",
    position: "Student in master's degree in electronic engineering at University of Aveiro",
    testimonial: "Worked with Miguel in multiple projects, he's earnest, has good communication and always with great ideas. Definitely a great professional",
  },
  {
    name: "Bernardo Silva",
    position: "Student in bachelor's degree in multimedia and communication technologies at University of Aveiro",
    testimonial: "Enthusiastic professional who prides himself of his work ethic. I've experienced first-handed his search for solutions and knowledge gain. He has a deep programming background with experience in lots of coding languages and platforms.",
  },
  {
    name: "Miguel Tavares",  
    position: "Student in bachelor's degree in multimedia and communication technologies at University of Aveiro",
    testimonial: "Miguel is a very dedicated worker who puts his heart and soul into creating the best possible project, with impeccable attention to detail. He is someone you can trust to see a job through from start to finish, never compromising on the quality and precision of the final product.",
  },
];

export default function About() {
  return (
    <section>
      <h2>About Me</h2>
      <p>
        I'm a Multimedia and Communication Technologies graduate from the University of Aveiro, Portugal, with a strong interest in web development. More than just building functional websites, I’m driven by the challenge of creating digital experiences that truly stand out — through design, interactivity, and the unique ways they express ideas.
      </p>
      <p>I believe the best way to learn is by doing. I work with complete focus: I don’t leave things unfinished, I like solving problems on my own, and I see every project as a real opportunity to grow. What drives me is innovation — creating technological solutions that are useful, expressive, and meaningful.</p>
      <p>My personal mantra: <b>"Build with purpose. Play with heart. Code for impact."</b></p>

      <h2 style={{ marginTop: "2rem" }}>What I’m Doing</h2>
      <div className="card-grid">
        {whatIDo.map(({ title, desc, emoji }) => (
          <div className="card" key={title}>
            <h3>{emoji} {title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: "2rem" }}>Testimonials</h2>
      <div className="card-grid">
        {testimonials.map(({ name, position, testimonial }) => (
          <div className="card" key={name}>
            <h3>{name}</h3>
            <p>{position}</p>
            <blockquote>{testimonial}</blockquote>
          </div>
        ))}
      </div>
    </section>
  );
}
