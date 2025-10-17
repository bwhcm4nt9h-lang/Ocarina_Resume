import styles from "./App.module.scss";
import {ContactPanel} from "./components/resume/ContactPanel";
import {Experience, ExperienceTimeline} from "./components/resume/ExperienceTimeline";
import {HeroSection} from "./components/resume/HeroSection";
import {Project, ProjectShowcase} from "./components/resume/ProjectShowcase";
import {Skill, SkillShowcase} from "./components/resume/SkillShowcase";

const experiences: Experience[] = [
        {
                id: "hyruleforge",
                role: "Director of Frontend Engineering",
                company: "Hyrule Forge Studios",
                timeframe: "2022 — Present",
                location: "Remote",
                focus: "Scaled a design system and performance program that improved player retention while keeping a fast-moving team aligned.",
                achievements: [
                        "Led three cross-functional squads to ship a shared UI platform adopted by eight game teams in under six months.",
                        "Introduced progressive enhancement and accessibility budgets that reduced critical support tickets by 47%.",
                        "Co-created roadmap rituals with product and design leadership that increased on-time delivery by 28%.",
                ],
                technologies: ["React", "TypeScript", "Design Systems", "Web Performance", "Storybook"],
        },
        {
                id: "sheikah",
                role: "Staff Software Engineer",
                company: "Sheikah Labs",
                timeframe: "2018 — 2022",
                location: "Seattle, WA",
                focus: "Modernized a legacy MMO companion app while mentoring engineers through a major architectural shift.",
                achievements: [
                        "Led the migration from Backbone to a modular React + GraphQL stack without downtime for 1.4M monthly players.",
                        "Developed experimentation tooling that enabled product teams to run 20% more validated bets per quarter.",
                        "Facilitated engineering guilds and built growth plans that promoted five engineers into senior roles.",
                ],
                technologies: ["React", "GraphQL", "Node.js", "Jest", "Cypress"],
        },
        {
                id: "lonlon",
                role: "Senior Frontend Engineer",
                company: "Lon Lon Commerce",
                timeframe: "2015 — 2018",
                location: "Portland, OR",
                focus: "Rebuilt the marketplace experience with accessibility-first thinking and data-driven iteration.",
                achievements: [
                        "Redesigned the storefront with responsive design systems that lifted conversion by 18% within a quarter.",
                        "Implemented internationalization tooling and content workflows to launch in four new locales.",
                        "Partnered with analytics to define KPIs and dashboards that aligned product and engineering decisions.",
                ],
                technologies: ["Vue", "Sass", "Accessibility", "Webpack", "Analytics"],
        },
        {
                id: "kokiri",
                role: "Frontend Engineer",
                company: "Kokiri Creative",
                timeframe: "2012 — 2015",
                location: "Austin, TX",
                focus: "Launched bespoke marketing experiences with emphasis on storytelling and delightful interactions.",
                achievements: [
                        "Delivered interactive brand sites for six Fortune 500 campaigns with award-winning motion design.",
                        "Built reusable component libraries that cut project kickoff time by 35%.",
                        "Automated QA workflows and lighthouse audits that improved overall site stability by 22%.",
                ],
                technologies: ["HTML5", "CSS Animations", "GSAP", "Automation", "Lighthouse"],
        },
];

const skills: Skill[] = [
        {
                name: "Design systems",
                category: "Frontend",
                strength: 95,
                summary: "Architect reusable components, tokens, and governance models that keep brand and product aligned.",
                spotlight: "Rolled out the Triforce UI kit with accessibility baked in, unlocking simultaneous launches across eight teams.",
        },
        {
                name: "Web performance",
                category: "Experience",
                strength: 92,
                summary: "Profile apps, establish budgets, and coach teams to build experiences that feel immediate everywhere.",
                spotlight: "Shaved 1.2s from first input delay by introducing bundle visualization, island architecture, and automated alerts.",
        },
        {
                name: "Technical strategy",
                category: "Leadership",
                strength: 88,
                summary: "Translate ambiguous goals into measurable technical outcomes and incremental delivery plans.",
                spotlight: "Co-led quarterly planning that aligned engineering and product OKRs, boosting roadmap confidence by 30%.",
        },
        {
                name: "People development",
                category: "Leadership",
                strength: 86,
                summary: "Mentor engineers through personalized growth plans and inclusive rituals that unlock their best work.",
                spotlight: "Created a leveling rubric and pair-programming rotation that increased promotion readiness across the org.",
        },
        {
                name: "Full-stack architecture",
                category: "Backend",
                strength: 82,
                summary: "Design resilient APIs, caching strategies, and CI/CD pipelines that support rapid feature delivery.",
                spotlight: "Shipped a service mesh migration with zero downtime while adding automated canary analysis to the deploy stack.",
        },
        {
                name: "Product discovery",
                category: "Experience",
                strength: 80,
                summary: "Run design sprints, user interviews, and data deep-dives to uncover validated paths forward.",
                spotlight: "Guided a discovery sprint that reframed a retention problem and unlocked a new social feature set.",
        },
        {
                name: "Dev tooling",
                category: "Toolkit",
                strength: 84,
                summary: "Build CLI tools, lint rules, and dashboards that let engineers focus on outcomes, not busywork.",
                spotlight: "Built a feature flag dashboard with guardrails that cut rollback frequency in half.",
        },
        {
                name: "Animations & delight",
                category: "Frontend",
                strength: 78,
                summary: "Craft subtle motion and micro-interactions that reinforce usability and narrative without sacrificing performance.",
                spotlight: "Introduced a motion library that kept hover states under 16ms while boosting feature adoption.",
        },
];

const projects: Project[] = [
        {
                id: "hud",
                title: "Hyrule Forge Player HUD",
                subtitle: "Unified gameplay dashboard",
                description:
                        "Designed and implemented a modular HUD where squads could plug in live data, accessibility controls, and personalization without shipping debt.",
                impact: [
                        "Reduced cognitive load for players with context-aware layout shifts and adaptive color modes.",
                        "Cut duplicated engineering effort by 40% thanks to a shared widget SDK and dev playground.",
                        "Achieved a 25% lift in daily quests completed through timely surfacing of collaborative actions.",
                ],
                tags: ["Design systems", "React", "Observability"],
                link: "https://example.com/hud",
        },
        {
                id: "guilds",
                title: "Sheikah Guilds",
                subtitle: "Social systems for raiders",
                description:
                        "Reimagined the community hub with cohort-based goals, celebratory motion, and moderation tools that kept the space safe and fun.",
                impact: [
                        "Increased weekly active guilds by 32% through shared quests and recognition mechanics.",
                        "Integrated moderation workflows that decreased incident response time from hours to minutes.",
                        "Launched in three phases with data-informed tweaks each sprint, leading to our highest NPS to date.",
                ],
                tags: ["Community", "Node.js", "Design research"],
        },
        {
                id: "commerce",
                title: "Lon Lon Checkout",
                subtitle: "Frictionless purchasing",
                description:
                        "Rebuilt the checkout flow with guardrails for global payment methods, trust signals, and contextual upsells.",
                impact: [
                        "Boosted conversion rate by 18% within the first quarter after launch.",
                        "Implemented localized experiences that supported four new markets in under two months.",
                        "Established a testing strategy that combined analytics, session replays, and usability labs.",
                ],
                tags: ["E-commerce", "Optimization", "Accessibility"],
        },
];

function App() {
        return (
                <div className={styles.app}>
                        <main className={styles.wrapper}>
                                <HeroSection />
                                <hr className={styles.sectionDivider} />
                                <ExperienceTimeline experiences={experiences} />
                                <hr className={styles.sectionDivider} />
                                <SkillShowcase skills={skills} />
                                <hr className={styles.sectionDivider} />
                                <ProjectShowcase projects={projects} />
                                <hr className={styles.sectionDivider} />
                                <ContactPanel />
                        </main>
                        <footer className={styles.footer}>
                                Built with care for curious collaborators. Updated in 2024.
                        </footer>
                </div>
        );
}

export default App;
