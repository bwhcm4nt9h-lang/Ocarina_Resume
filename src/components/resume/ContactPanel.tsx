import {useState} from "react";
import {SectionHeading} from "./SectionHeading";
import styles from "./ContactPanel.module.scss";

export function ContactPanel() {
        const [copied, setCopied] = useState(false);
        const [availability, setAvailability] = useState<"immediate" | "in-30">("immediate");

        async function copyEmail() {
                try {
                        await navigator.clipboard.writeText("hello@zelda.dev");
                        setCopied(true);
                        setTimeout(() => setCopied(false), 1500);
                } catch (error) {
                        console.error("Clipboard access denied", error);
                }
        }

        return (
                <section id="contact" className={styles.contactSection}>
                        <SectionHeading
                                eyebrow="Contact"
                                title="Let's build something remarkable"
                                description="Select my availability and grab the email in a click. I'm always happy to talk about product direction, mentorship, or hands-on engineering leadership."
                        />

                        <div className={styles.contactGrid}>
                                <article className={styles.availabilityCard}>
                                        <h3>Availability</h3>
                                        <p>Choose how soon you'd like to collaborate and I'll tailor my response.</p>
                                        <div className={styles.toggleGroup}>
                                                <button
                                                        type="button"
                                                        className={
                                                                availability === "immediate"
                                                                        ? `${styles.toggle} ${styles.toggleActive}`
                                                                        : styles.toggle
                                                        }
                                                        onClick={() => setAvailability("immediate")}
                                                >
                                                        Ready to start now
                                                </button>
                                                <button
                                                        type="button"
                                                        className={
                                                                availability === "in-30"
                                                                        ? `${styles.toggle} ${styles.toggleActive}`
                                                                        : styles.toggle
                                                        }
                                                        onClick={() => setAvailability("in-30")}
                                                >
                                                        Exploring next month
                                                </button>
                                        </div>
                                        <p className={styles.availabilitySummary}>
                                                {availability === "immediate"
                                                        ? "I'll prioritize a same-week introduction and share case studies that match your roadmap."
                                                        : "I'll follow up with a curated update on ongoing work, so we're aligned when your window opens."}
                                        </p>
                                </article>

                                <article className={styles.contactCard}>
                                        <div className={styles.emailRow}>
                                                <span className={styles.label}>Email</span>
                                                <button type="button" onClick={copyEmail} className={styles.copyButton}>
                                                        {copied ? "Copied!" : "Copy"}
                                                </button>
                                        </div>
                                        <a className={styles.emailLink} href="mailto:hello@zelda.dev">
                                                hello@zelda.dev
                                        </a>
                                        <p>
                                                Prefer async collaboration? Drop a note with context, and I'll reply with next steps and a short async video walkthrough.
                                        </p>
                                        <div className={styles.socialRow}>
                                                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                                                        LinkedIn
                                                </a>
                                                <a href="https://github.com" target="_blank" rel="noreferrer">
                                                        GitHub
                                                </a>
                                                <a href="https://cal.com" target="_blank" rel="noreferrer">
                                                        Book time
                                                </a>
                                        </div>
                                </article>
                        </div>
                </section>
        );
}
