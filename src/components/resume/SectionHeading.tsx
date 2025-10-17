import {ReactNode} from "react";
import styles from "./SectionHeading.module.scss";

interface SectionHeadingProps {
        eyebrow?: string;
        title: string;
        description?: string;
        actions?: ReactNode;
}

export function SectionHeading({eyebrow, title, description, actions}: SectionHeadingProps) {
        return (
                <header className={styles.heading}>
                        <div>
                                {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
                                <h2 className={styles.title}>{title}</h2>
                                {description && <p className={styles.description}>{description}</p>}
                        </div>
                        {actions && <div className={styles.actions}>{actions}</div>}
                </header>
        );
}
