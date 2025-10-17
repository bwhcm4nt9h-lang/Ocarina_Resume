import {CSSProperties, useMemo, useState} from "react";
import {SectionHeading} from "./SectionHeading";
import styles from "./ExperienceTimeline.module.scss";

export interface Experience {
        id: string;
        role: string;
        company: string;
        timeframe: string;
        location: string;
        focus: string;
        achievements: string[];
        technologies: string[];
}

interface ExperienceTimelineProps {
        experiences: Experience[];
}

export function ExperienceTimeline({experiences}: ExperienceTimelineProps) {
        const [activeIndex, setActiveIndex] = useState(Math.max(0, experiences.length - 1));
        const activeExperience = experiences[activeIndex];

        const timelineMarks = useMemo(
                () =>
                        experiences.map((experience, index) => ({
                                id: experience.id,
                                label: experience.timeframe,
                                index,
                        })),
                [experiences]
        );

        return (
                <section id="experience" className={styles.timelineSection}>
                        <SectionHeading
                                eyebrow="Experience"
                                title="An interactive snapshot of my career"
                                description="Scrub through the timeline to explore how I've led teams, shipped products, and partnered with stakeholders to build meaningful experiences. Each stop reveals the skills I relied on most."
                        />

                        <div className={styles.timelineCard}>
                                <div className={styles.sliderRow}>
                                        <input
                                                className={styles.slider}
                                                type="range"
                                                min={0}
                                                max={Math.max(0, experiences.length - 1)}
                                                value={activeIndex}
                                                onChange={(event) => setActiveIndex(Number(event.target.value))}
                                                aria-label="Select a role"
                                        />
                                        <div className={styles.tickRow}>
                                                {timelineMarks.map((mark) => (
                                                        <button
                                                                key={mark.id}
                                                                type="button"
                                                                className={
                                                                        mark.index === activeIndex
                                                                                ? `${styles.tick} ${styles.tickActive}`
                                                                                : styles.tick
                                                                }
                                                                style={{
                                                                        "--offset": `${(mark.index / Math.max(1, experiences.length - 1)) * 100}%`,
                                                                } as CSSProperties & {"--offset": string}}
                                                                onClick={() => setActiveIndex(mark.index)}
                                                                aria-label={`View experience from ${mark.label}`}
                                                        >
                                                                <span>{mark.label}</span>
                                                        </button>
                                                ))}
                                        </div>
                                </div>

                                <article className={styles.experienceDetails}>
                                        <header className={styles.detailsHeader}>
                                                <p className={styles.role}>{activeExperience.role}</p>
                                                <h3 className={styles.company}>{activeExperience.company}</h3>
                                                <p className={styles.meta}>
                                                        {activeExperience.timeframe} · {activeExperience.location}
                                                </p>
                                        </header>

                                        <p className={styles.focus}>{activeExperience.focus}</p>

                                        <ul className={styles.achievementList}>
                                                {activeExperience.achievements.map((achievement) => (
                                                        <li key={achievement}>{achievement}</li>
                                                ))}
                                        </ul>

                                        <div className={styles.techList}>
                                                {activeExperience.technologies.map((technology) => (
                                                        <span key={technology}>{technology}</span>
                                                ))}
                                        </div>
                                </article>
                        </div>
                </section>
        );
}
