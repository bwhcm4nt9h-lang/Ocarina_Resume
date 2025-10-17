import {useState} from "react";
import styles from "./HeroSection.module.scss";

const quickFacts = [
        {
                id: "collaboration",
                label: "Cross-functional",
                detail: "Partnered with design, research, and PM orgs to deliver experiences to 2M+ monthly users.",
        },
        {
                id: "delivery",
                label: "Delivery",
                detail: "Led multi-squad launches with phased rollouts, observability dashboards, and 24/7 playbooks.",
        },
        {
                id: "mentorship",
                label: "Mentorship",
                detail: "Created a growth framework adopted by 5 teams and mentored 12 engineers into senior roles.",
        },
];

export function HeroSection() {
        const [selectedFact, setSelectedFact] = useState(quickFacts[0]);

        return (
                <section className={styles.hero}>
                        <div className={styles.copyBlock}>
                                <p className={styles.eyebrow}>Interactive resume</p>
                                <h1>
                                        Hi, I'm <span>Link Rivers</span> — a product-minded engineering leader crafting thoughtful web experiences.
                                </h1>
                                <p className={styles.summary}>
                                        I blend design systems, accessible engineering, and outcome-driven leadership to help teams ship software that
                                        players love. Scroll to explore the highlights or jump straight into a conversation.
                                </p>
                                <div className={styles.actionRow}>
                                        <a className={styles.primaryAction} href="#contact">
                                                Start a conversation
                                        </a>
                                        <a className={styles.secondaryAction} href="#projects">
                                                View recent projects
                                        </a>
                                </div>
                        </div>

                        <aside className={styles.quickFacts}>
                                <p className={styles.factTitle}>Choose a focus area</p>
                                <div className={styles.factButtons}>
                                        {quickFacts.map((fact) => (
                                                <button
                                                        key={fact.id}
                                                        type="button"
                                                        className={
                                                                fact.id === selectedFact.id
                                                                        ? `${styles.factButton} ${styles.factButtonActive}`
                                                                        : styles.factButton
                                                        }
                                                        onClick={() => setSelectedFact(fact)}
                                                >
                                                        {fact.label}
                                                </button>
                                        ))}
                                </div>
                                <div className={styles.factDetail}>{selectedFact.detail}</div>
                                <div className={styles.metrics}>
                                        <div>
                                                <span>12+</span>
                                                <p>Years building web platforms</p>
                                        </div>
                                        <div>
                                                <span>8</span>
                                                <p>Products launched to market</p>
                                        </div>
                                        <div>
                                                <span>∞</span>
                                                <p>Curiosity for new adventures</p>
                                        </div>
                                </div>
                        </aside>
                </section>
        );
}
