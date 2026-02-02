import ExperienceItem from "@/components/career/ExperienceItem";
import styles from "@/components/career/career.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Career | Sean Wi",
    description: "Professional journey and experience of Sean Wi.",
};

const experiences = [
    {
        role: "Founder & Lead Developer",
        company: "Gourmevel / Drinkig",
        period: "2024 — Present",
        description: "Leading the development of premium lifestyle platforms. Architecting scalable solutions and driving product vision from concept to deployment.",
        tags: ["React Native", "Next.js", "System Design", "Product Management"]
    },
    {
        role: "Software Engineer",
        company: "Previous Company",
        period: "2022 — 2024",
        description: "Developed and maintained core features for high-traffic web applications. Collaborated with cross-functional teams to deliver high-quality code.",
        tags: ["TypeScript", "React", "Node.js", "AWS"]
    }
];

export default function Career() {
    return (
        <div className={`container section ${styles.careerContainer}`}>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '2rem' }}>
                Career
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'hsl(var(--muted-foreground))' }}>
                A timeline of my professional journey.
            </p>

            <div className={styles.timeline}>
                {experiences.map((exp, index) => (
                    <ExperienceItem key={index} {...exp} />
                ))}
            </div>
        </div>
    );
}
