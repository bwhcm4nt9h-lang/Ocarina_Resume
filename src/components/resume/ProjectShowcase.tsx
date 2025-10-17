import {useMemo, useState} from "react";
import {SectionHeading} from "./SectionHeading";
import styles from "./ProjectShowcase.module.scss";

export interface Project {
        id: string;
        title: string;
        subtitle: string;
        description: string;
        impact: string[];
        tags: string[];
        link?: string;
}

interface ProjectShowcaseProps {
        projects: Project[];
}

export function ProjectShowcase({projects}: ProjectShowcaseProps) {
        const [selectedProjectId, setSelectedProjectId] = useState(projects[0]?.id ?? "");
        const selectedProject = useMemo(
                () => projects.find((project) => project.id === selectedProjectId) ?? projects[0],
                [projects, selectedProjectId]
        );

        return (
                <section id="projects" className={styles.projectSection}>
                        <SectionHeading
                                eyebrow="Projects"
                                title="Interactive project gallery"
                                description="Choose a project to reveal the story behind it—what problem we were solving, how we partnered across teams, and what measurable impact we achieved."
                        />

                        <div className={styles.projectLayout}>
                                <div className={styles.projectList}>
                                        {projects.map((project) => (
                                                <button
                                                        key={project.id}
                                                        type="button"
                                                        className={
                                                                project.id === selectedProject?.id
                                                                        ? `${styles.projectCard} ${styles.projectCardActive}`
                                                                        : styles.projectCard
                                                        }
                                                        onClick={() => setSelectedProjectId(project.id)}
                                                >
                                                        <span className={styles.projectTitle}>{project.title}</span>
                                                        <span className={styles.projectSubtitle}>{project.subtitle}</span>
                                                        <div className={styles.tagRow}>
                                                                {project.tags.map((tag) => (
                                                                        <span key={tag}>{tag}</span>
                                                                ))}
                                                        </div>
                                                </button>
                                        ))}
                                </div>

                                {selectedProject && (
                                        <article className={styles.projectDetail}>
                                                <header>
                                                        <h3>{selectedProject.title}</h3>
                                                        <p>{selectedProject.description}</p>
                                                </header>
                                                <ul>
                                                        {selectedProject.impact.map((item) => (
                                                                <li key={item}>{item}</li>
                                                        ))}
                                                </ul>
                                                {selectedProject.link && (
                                                        <a
                                                                className={styles.projectLink}
                                                                href={selectedProject.link}
                                                                target="_blank"
                                                                rel="noreferrer"
                                                        >
                                                                Visit project
                                                        </a>
                                                )}
                                        </article>
                                )}
                        </div>
                </section>
        );
}
