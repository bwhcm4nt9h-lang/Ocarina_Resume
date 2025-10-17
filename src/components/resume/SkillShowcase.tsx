import {useMemo, useState} from "react";
import {SectionHeading} from "./SectionHeading";
import styles from "./SkillShowcase.module.scss";

export interface Skill {
        name: string;
        category: "Frontend" | "Backend" | "Leadership" | "Experience" | "Toolkit";
        strength: number;
        summary: string;
        spotlight: string;
}

interface SkillShowcaseProps {
        skills: Skill[];
}

const filters: Array<Skill["category"] | "All"> = [
        "All",
        "Frontend",
        "Backend",
        "Leadership",
        "Experience",
        "Toolkit",
];

export function SkillShowcase({skills}: SkillShowcaseProps) {
        const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
        const [highlightedSkill, setHighlightedSkill] = useState<string | null>(null);

        const filteredSkills = useMemo(() => {
                if (activeFilter === "All") return skills;
                return skills.filter((skill) => skill.category === activeFilter);
        }, [activeFilter, skills]);

        const featuredSkill = useMemo(() => {
                if (highlightedSkill) return filteredSkills.find((skill) => skill.name === highlightedSkill);
                return filteredSkills[0];
        }, [filteredSkills, highlightedSkill]);

        return (
                <section id="skills" className={styles.skillSection}>
                        <SectionHeading
                                eyebrow="Skills"
                                title="What I'm great at"
                                description="Toggle between focus areas to see the depth of my skill set. Hover or tap any skill card to surface a highlight from real project work."
                                actions={
                                        <div className={styles.filterGroup}>
                                                {filters.map((filter) => (
                                                        <button
                                                                key={filter}
                                                                type="button"
                                                                className={
                                                                        filter === activeFilter
                                                                                ? `${styles.filterButton} ${styles.filterActive}`
                                                                                : styles.filterButton
                                                                }
                                                                onClick={() => setActiveFilter(filter)}
                                                        >
                                                                {filter}
                                                        </button>
                                                ))}
                                        </div>
                                }
                        />

                        <div className={styles.contentGrid}>
                                <article className={styles.featureCard}>
                                        {featuredSkill ? (
                                                <>
                                                        <p className={styles.featureEyebrow}>{featuredSkill.category}</p>
                                                        <h3>{featuredSkill.name}</h3>
                                                        <p className={styles.featureSummary}>{featuredSkill.summary}</p>
                                                        <p className={styles.featureSpotlight}>{featuredSkill.spotlight}</p>
                                                </>
                                        ) : (
                                                <p className={styles.featureSummary}>Select a filter to explore focused skill sets.</p>
                                        )}
                                </article>

                                <div className={styles.skillGrid}>
                                        {filteredSkills.map((skill) => (
                                                <button
                                                        key={skill.name}
                                                        type="button"
                                                        className={styles.skillCard}
                                                        onMouseEnter={() => setHighlightedSkill(skill.name)}
                                                        onFocus={() => setHighlightedSkill(skill.name)}
                                                        onBlur={() => setHighlightedSkill(null)}
                                                        onMouseLeave={() => setHighlightedSkill(null)}
                                                >
                                                        <div className={styles.skillHeader}>
                                                                <span className={styles.skillName}>{skill.name}</span>
                                                                <span className={styles.skillBadge}>{skill.category}</span>
                                                        </div>
                                                        <div className={styles.progressTrack}>
                                                                <span
                                                                        className={styles.progressValue}
                                                                        style={{width: `${skill.strength}%`}}
                                                                />
                                                        </div>
                                                        <p>{skill.summary}</p>
                                                </button>
                                        ))}
                                </div>
                        </div>
                </section>
        );
}
