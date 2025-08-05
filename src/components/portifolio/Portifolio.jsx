import "./portifolio.scss";
import { useState } from "react";

export default function Portfolio() {
  const [selected, setSelected] = useState("Featured");

  const categories = [
    "Featured",
    "Web App",
    "Full Stack",
    "Front-End",
    "API / Backend",
    "Mini Tools",
  ];

  const projects = [
    {
      title: "Brain Bank",
      img: "assets/brainbanl.png",
      category: "Full Stack",
    },
    {
      title: "Focus Board",
      img: "assets/focusboard.png",
      category: "Front-End",
    },
    {
      title: "REST Countries API",
      img: "assets/kratos.png",
      category: "API / Backend",
    },
    {
      title: "Text Utils",
      img: "assets/viking.png",
      category: "Mini Tools",
    },
    {
      title: "Full CRUD Dashboard",
      img: "assets/brb.png",
      category: "Web App",
    },
    {
      title: "DevMatch – Portfolio Explorer",
      img: "assets/portfolio.png",
      category: "Front-End",
    },
  ];

  const filteredProjects =
    selected === "Featured"
      ? projects
      : projects.filter((p) => p.category === selected);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {categories.map((item) => (
          <li
            key={item}
            className={selected === item ? "active" : ""}
            onClick={() => setSelected(item)}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="container">
        {filteredProjects.map((project, index) => (
          <div className="item" key={index}>
            <img src={project.img} alt={project.title} />
            <div className="project-title">{project.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
