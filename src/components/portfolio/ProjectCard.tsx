import Link from 'next/link';
import styles from './portfolio.module.css';

interface ProjectProps {
    title: string;
    description: string;
    tags: string[];
    link?: string;
    github?: string;
    // image?: string; // Add functionality for images later
}

const ProjectCard = ({ title, description, tags, link, github }: ProjectProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.imagePlaceholder}>
                {/* Real image would go here */}
            </div>
            <div className={styles.cardContent}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <div className={styles.tags}>
                    {tags.map((tag) => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                </div>
                <div className={styles.links}>
                    {link && <Link href={link} target="_blank" className={styles.link}>View Project</Link>}
                    {github && <Link href={github} target="_blank" className={styles.link}>GitHub</Link>}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
