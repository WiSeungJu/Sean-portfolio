import ProjectCard from "@/components/portfolio/ProjectCard";
import styles from "@/components/portfolio/portfolio.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio | Sean Wi",
    description: "Selected works and projects.",
};

const projects = [
    {
        title: "Gourmevel",
        description: "A premium travel and dining companion app helping users discover hidden gems.",
        tags: ["React Native", "Node.js", "PostgreSQL"],
        link: "https://gourmevel.com",
        github: "#"
    },
    {
        title: "Drinkig",
        description: "Social wine tasting and collection management platform.",
        tags: ["Next.js", "TypeScript", "TailwindCSS"], // Example tags
        link: "https://web.drinkig.com",
        github: "#"
    },
    {
        title: "Portfolio Website",
        description: "Personal portfolio website built with Next.js and Vanilla CSS.",
        tags: ["Next.js", "CSS Modules", "Vercel"],
        link: "/",
        github: "#"
    }
];

export default function Portfolio() {
    return (
        <div className={`container section ${styles.portfolioContainer}`}>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '2rem' }}>
                Selected Works
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'hsl(var(--muted-foreground))' }}>
                A collection of projects I&apos;ve worked on.
            </p>

            <div className={styles.grid}>
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
}
