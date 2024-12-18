import styles from "./ProjectsStyles.module.css";
import designs from "../../assets/Designs.png";
import portfolio from "../../assets/profile.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={portfolio}
          link="https://github.com/rheamaerafol/My-Personal-CV"
          h3="Portfolio"
          p="Personal Portfolio"
        />
        <ProjectCard
          src={designs}
          link="https://github.com/rheamaerafol/UI_UX_Designs"
          h3="UI/UX Design"
          p="Website Interfaces"
        />
      </div>
    </section>
  );
}

export default Projects;
